const fs = require('fs');
const google = require('googlethis');
const https = require('https');
const http = require('http');
const path = require('path');

const imgDir = path.join(__dirname, 'images');

// Read app.js
let code = fs.readFileSync('app.js', 'utf8');
const arrayStartIndex = code.indexOf('const places = [') + 'const places = '.length;
let arrayEndIndex = -1;
let openBrackets = 0;
let inString = false;
let stringChar = '';

for (let i = arrayStartIndex; i < code.length; i++) {
  const char = code[i];
  if (inString) {
    if (char === stringChar && code[i - 1] !== '\\') {
      inString = false;
    }
  } else {
    if (char === '"' || char === "'") {
      inString = true;
      stringChar = char;
    } else if (char === '[') {
      openBrackets++;
    } else if (char === ']') {
      openBrackets--;
      if (openBrackets === 0) {
        arrayEndIndex = i + 1;
        break;
      }
    }
  }
}

const placesString = code.substring(arrayStartIndex, arrayEndIndex);
let places = eval('(' + placesString + ')');

async function downloadImage(url, dest) {
  return new Promise((resolve) => {
    if(!url || !url.startsWith('http')) return resolve(false);
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'image/jpeg,image/png,image/webp,*/*'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        resolve(downloadImage(res.headers.location, dest));
        return;
      }
      if (res.statusCode !== 200) return resolve(false);
      
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        // check size
        const stats = fs.statSync(dest);
        if(stats.size < 5000) { // too small, probably dummy
            fs.unlinkSync(dest);
            resolve(false);
        } else {
            resolve(true);
        }
      });
    }).on('error', () => resolve(false));
    req.setTimeout(5000, () => { req.abort(); resolve(false); });
  });
}

const newPlacesToAdd = [
  {
    id: 1005,
    name: "Noor Masjid",
    zone: "Central",
    lat: 12.9818,
    lng: 77.5962,
    rating: 4.8,
    reviews: 5000,
    fee: 0,
    hours: "Open 24 hours",
    category: "Heritage",
    description: "A beautifully constructed stunning Mosque located in the heart of Bangalore, known for its peaceful aura and magnificent glowing white architecture.",
    customAIVerdict: { className: "ai-excellent", text: "AI VERDICT: Truly exceptionally beautiful mosque. A very serene spiritual escape." }
  },
  {
    id: 1006,
    name: "St. Mary's Basilica",
    zone: "Central",
    lat: 12.9841,
    lng: 77.6041,
    rating: 4.8,
    reviews: 18000,
    fee: 0,
    hours: "6AM–8PM",
    category: "Church",
    description: "The oldest church in Bangalore and the only church in the state that has been elevated to the status of a minor basilica. Features towering Gothic architecture.",
    customAIVerdict: { className: "ai-excellent", text: "AI VERDICT: Absolutely iconic landmark. The Gothic architecture is stunning." }
  },
  {
    id: 1007,
    name: "Bilal Masjid",
    zone: "South",
    lat: 12.9103,
    lng: 77.6015,
    rating: 4.7,
    reviews: 9000,
    fee: 0,
    hours: "Open 24 hours",
    category: "Heritage",
    description: "One of the most modern and beautifully constructed mosques in South Bangalore (BTM Layout), well known for its massive community presence.",
    customAIVerdict: { className: "ai-good", text: "AI VERDICT: Highly recommended to visit, particularly beautiful design and atmosphere." }
  },
  {
    id: 1008,
    name: "Infant Jesus Church",
    zone: "Central",
    lat: 12.9531,
    lng: 77.6200,
    rating: 4.7,
    reviews: 21000,
    fee: 0,
    hours: "6AM–9PM",
    category: "Church",
    description: "Established in 1971, this globally recognized Roman Catholic church sees massive numbers of devotees and features beautiful murals and unique brutalist/modern architecture.",
    customAIVerdict: { className: "ai-excellent", text: "AI VERDICT: A major spiritual center with thousands of weekly visitors. A must-see." }
  }
];

// Combine places
const allPlaces = [...places];

// Add new places if they don't exist
for (let np of newPlacesToAdd) {
  if (!allPlaces.find(p => p.id === np.id)) {
      allPlaces.push(np);
  }
}

async function run() {
  console.log('Fetching and downloading fresh Google Images for broken/new locations...');
  
  for (let i = 0; i < allPlaces.length; i++) {
    const p = allPlaces[i];
    
    // Check if image exists locally and is valid
    let localImagePath = null;
    let needsFetch = false;
    
    // All places >= 1001 are new religious sites
    if (p.id >= 1001) {
        let destJpg = path.join(imgDir, `place_${p.id}.jpg`);
        let destPng = path.join(imgDir, `place_${p.id}.png`);
        
        if (fs.existsSync(destJpg) && fs.statSync(destJpg).size > 5000) {
            localImagePath = `images/place_${p.id}.jpg`;
        } else if (fs.existsSync(destPng) && fs.statSync(destPng).size > 5000) {
            localImagePath = `images/place_${p.id}.png`;
        } else {
            needsFetch = true;
        }
    }
    
    // Check if it's currently hardcoded to fallback
    if (p.image && p.image.includes('fallback.svg')) {
        needsFetch = true;
    }
    
    if (needsFetch) {
      console.log(`Fetching Google Images for: ${p.name}...`);
      try {
        const images = await google.image(`${p.name} Bangalore`, { safe: false });
        let validImages = images.map(x => x.url)
            .filter(url => url && !url.includes('lookaside') && !url.includes('instagram') && !url.includes('unsplash') && url.startsWith('http'));
            
        let success = false;
        let ext = '.jpg';
        for (let imgUrl of validImages) {
             ext = imgUrl.toLowerCase().includes('.png') ? '.png' : '.jpg';
             const dest = path.join(imgDir, `place_${p.id}${ext}`);
             success = await downloadImage(imgUrl, dest);
             if (success) {
                 localImagePath = `images/place_${p.id}${ext}`;
                 console.log(` -> Success downloading image for ${p.name}`);
                 break;
             }
        }
        
        if (!success) {
            console.log(` -> Failed all image downloads for ${p.name}. Sticking to generic fallback.`);
            localImagePath = 'images/fallback.svg';
        }
        await new Promise(r => setTimeout(r, 600)); // be nice to google
      } catch (e) {
        console.error(`Error fetching for ${p.name}:`, e.message);
        localImagePath = 'images/fallback.svg';
      }
    }
    
    if (localImagePath) {
        p.image = localImagePath;
        p.images = [localImagePath]; // remove gallery for now to ensure consistency
    }
  }

  const newPlacesStr = 'const places = ' + JSON.stringify(allPlaces, null, 2).replace(/"([^"]+)":/g, '$1:') + ';';
  const newContent = code.substring(0, arrayStartIndex) + newPlacesStr + code.substring(arrayEndIndex);
  fs.writeFileSync('app.js', newContent);
  console.log(`Done resolving religious site images!`);
}

run();
