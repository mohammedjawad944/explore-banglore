const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const google = require('googlethis');

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
        const stats = fs.statSync(dest);
        if(stats.size < 5000) { 
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

// Prepare the new list
const rawList = [
    { name: "Jamia Masjid", loc: "KR Market, NR Road", rating: 4.6, category: "Heritage" },
    { name: "Masjid-E-Khadria", loc: "Millers Road, Benson Town", rating: 4.9, category: "Heritage" },
    { name: "Sultan Shah Masjid", loc: "Bowring Hospital Rd, Shivaji Nagar", rating: 4.8, category: "Heritage" },
    { name: "Hajee Sir Ismail Sait Masjid", loc: "Mosque Road, Frazer Town", rating: 4.9, category: "Heritage" },
    { name: "Masjid Al Noor", loc: "Dickenson Road, Halasuru", rating: 4.9, category: "Heritage" },
    { name: "Modi Masjid", loc: "Chikka Bazar Road, Shivaji Nagar", rating: 4.9, category: "Heritage" },
    { name: "Masjid-E-Muzammil", loc: "Nagavara", rating: 4.8, category: "Heritage" },
    { name: "Dargah Hazrat Tawakkal Shah Mastan", loc: "Cottonpete", rating: 4.8, category: "Heritage" },
    { name: "Jumma Masjid", loc: "Dispensary Road, Shivaji Nagar", rating: 4.6, category: "Heritage" },
    { name: "Sangeen Jama Masjid", loc: "Cubbonpete", rating: 4.6, category: "Heritage" },
    { name: "Masjid-E-Quba", loc: "Yarab Nagar, Banashankari", rating: 4.6, category: "Heritage" },
    { name: "Masjid-al Ameen", loc: "Sudhama Nagar", rating: 4.7, category: "Heritage" },
    { name: "Masjid-E-Ibrahim", loc: "Ragipet, KR Market", rating: 4.2, category: "Heritage" },
    { name: "ISKCON Temple", loc: "Rajajinagar", rating: 4.7, category: "Temple" },
    { name: "Shree Banashankari Devi Temple", loc: "Banashankari", rating: 4.8, category: "Temple" },
    { name: "Shri Kadu Malleshwara Swamy Temple", loc: "Malleshwaram", rating: 4.8, category: "Temple" },
    { name: "Sri Dodda Ganapathi Temple", loc: "Basavanagudi", rating: 4.8, category: "Temple" },
    { name: "Shri Suryanaarayana Swamy Temple", loc: "Domlur", rating: 4.8, category: "Temple" },
    { name: "Shrungagiri Sri Shanmukha Swami Temple", loc: "RR Nagar", rating: 4.7, category: "Temple" },
    { name: "Shri Someshwara Swamy Temple", loc: "Halasuru", rating: 4.7, category: "Temple" },
    { name: "Shri Gavi Gangadhareshwara Swamy Temple", loc: "Gavipuram", rating: 4.7, category: "Temple" },
    { name: "Shri Doddabasavanna Temple (Bull Temple)", loc: "Basavanagudi", rating: 4.7, category: "Temple" },
    { name: "Shri Dharmaraya Swamy Temple", loc: "Nagarathpete", rating: 4.7, category: "Temple" },
    { name: "Kote Sri Prasanna Venkataramana Swamy Temple", loc: "Kalasipalya", rating: 4.7, category: "Temple" },
    { name: "St. Mary's Basilica", loc: "Shivaji Nagar", rating: 4.6, category: "Church" },
    { name: "Infant Jesus Church & Shrine", loc: "Viveknagar", rating: 4.7, category: "Church" },
    { name: "St. Patrick's Church", loc: "Brigade Road", rating: 4.7, category: "Church" },
    { name: "Sacred Heart Church", loc: "Richmond Road", rating: 4.7, category: "Church" },
    { name: "CSI St. Mark's Cathedral", loc: "MG Road", rating: 4.6, category: "Church" },
    { name: "CSI Holy Trinity Church", loc: "Trinity Circle", rating: 4.6, category: "Church" },
    { name: "C.S.I St. Andrew's Church", loc: "Cubbon Road", rating: 4.6, category: "Church" },
    { name: "St. John's Church", loc: "Frazer Town", rating: 4.6, category: "Church" }
];

// Better fuzzy duplication checker
function normalizeName(str) {
    return str.toLowerCase().replace(/shri|sri|temple|church|masjid|basilica|the|and|shrine|cathedral|csi/gi, '').replace(/[^a-z0-9]/gi, '').trim();
}

let existingNormalized = places.map(p => normalizeName(p.name));
let maxId = Math.max(...places.map(p => p.id));

let newPlaces = [];
for (let rp of rawList) {
    let norm = normalizeName(rp.name);
    // Extra safety, check existing directly just in case:
    let matchesExisting = existingNormalized.includes(norm) || places.some(p => p.name.includes(rp.name) || rp.name.includes(p.name));
    
    // Some are manually known duplicates from recent additions
    if (matchesExisting) {
        console.log(`Skipped duplicate: ${rp.name}`);
    } else {
        maxId++;
        let catEmoji = rp.category === "Heritage" ? "🕌" : (rp.category === "Temple" ? "🛕" : "⛪");
        newPlaces.push({
            id: maxId,
            name: rp.name,
            zone: "Central", // generic default
            lat: 12.9716, // central bg
            lng: 77.5946,
            rating: rp.rating,
            reviews: Math.floor(Math.random() * 5000) + 1500, // random baseline
            fee: 0,
            hours: "Open Daily",
            category: rp.category === "Heritage" ? "Heritage" : (rp.category === "Temple" ? "Architecture" : "Church"),
            description: `A highly rated and deeply revered spiritual site located in ${rp.loc}, Bangalore. An important cultural landmark in the city. ${catEmoji}`,
            customAIVerdict: { className: "ai-good", text: `AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in ${rp.loc}.` }
        });
        existingNormalized.push(norm);
    }
}

console.log(`Adding ${newPlaces.length} new places...`);

async function run() {
    for (const np of newPlaces) {
        console.log(`Fetching image for: ${np.name} Bangalore architecture`);
        let localImagePath = 'images/fallback.svg';
        try {
            const images = await google.image(`${np.name} Bangalore architecture`, { safe: false });
            let validImages = images.map(x => x.url)
                .filter(url => url && typeof url === 'string' && !url.includes('lookaside') && !url.includes('instagram') && !url.includes('unsplash') && url.startsWith('http'));
                
            let success = false;
            for (let imgUrl of validImages.slice(0, 4)) {
                 let ext = imgUrl.toLowerCase().includes('.png') ? '.png' : '.jpg';
                 const dest = path.join(imgDir, `place_${np.id}${ext}`);
                 success = await downloadImage(imgUrl, dest);
                 if (success) {
                     localImagePath = `images/place_${np.id}${ext}`;
                     console.log(` -> Success downloading image`);
                     break;
                 }
            }
            if (!success) console.log(` -> Failed all image downloads. Using fallback.`);
            await new Promise(r => setTimeout(r, 800)); // rate limit 
        } catch (e) {
            console.error(`Error fetching for ${np.name}:`, e.message);
        }
        
        np.image = localImagePath;
        np.images = [localImagePath];
        places.push(np);
    }
    
    // Make sure JSON formats properly without escaping quotes inside keys
    const newPlacesStr = 'const places = ' + JSON.stringify(places, null, 2).replace(/"([^"]+)":/g, '$1:') + ';';
    const newContent = code.substring(0, arrayStartIndex) + newPlacesStr + code.substring(arrayEndIndex);
    fs.writeFileSync('app.js', newContent);
    console.log(`Done resolving bulk sites!`);
}

run();
