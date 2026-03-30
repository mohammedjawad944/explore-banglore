const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

const imgDir = path.join(__dirname, 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir);
}

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
  return new Promise((resolve, reject) => {
    if(!url || !url.startsWith('http')) return resolve(false);
    
    // Some urls might be http
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'image/jpeg,image/png,image/webp,*/*'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // handle redirect
        resolve(downloadImage(res.headers.location, dest));
        return;
      }
      
      if (res.statusCode !== 200) {
        return resolve(false); // ignore errors to not crash
      }

      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(true);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      resolve(false);
    });
    
    req.setTimeout(5000, () => {
        req.abort();
        resolve(false);
    });
  });
}

async function run() {
  let successCount = 0;
  // create a dummy image locally to use as fallback
  const dummySvg = `<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#cccccc"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24">Image Not Available</text></svg>`;
  fs.writeFileSync(path.join(imgDir, 'fallback.svg'), dummySvg);

  for (let i = 0; i < places.length; i++) {
    const p = places[i];
    console.log(`Downloading image for ${p.name}...`);
    
    // Try primary image first
    let success = false;
    let ext = p.image.includes('.png') ? '.png' : '.jpg';
    let destPath = path.join(imgDir, `place_${p.id}${ext}`);
    
    success = await downloadImage(p.image, destPath);
    
    // If failed, try other images in the array
    if (!success && p.images && p.images.length > 0) {
      for (let imgUrl of p.images) {
        ext = imgUrl.includes('.png') ? '.png' : '.jpg';
        destPath = path.join(imgDir, `place_${p.id}${ext}`);
        success = await downloadImage(imgUrl, destPath);
        if (success) break;
      }
    }
    
    if (success) {
      p.image = `images/place_${p.id}${ext}`;
      // also replace the first image in gallery
      if(p.images) {
          p.images = [p.image]; // just keep local image to be safe for now
      }
      successCount++;
    } else {
      console.log(`Failed all downloads for ${p.name}`);
      p.image = `images/fallback.svg`;
      if(p.images) p.images = [p.image];
    }
  }

  const newPlacesStr = 'const places = ' + JSON.stringify(places, null, 2).replace(/"([^"]+)":/g, '$1:') + ';';
  code = code.replace(code.substring(arrayStartIndex - 'const places = '.length, arrayEndIndex + 1), newPlacesStr);
  
  // Also clean up any onerror fallbacks in the code just in case
  code = code.replace(/onerror="[^"]+"/g, '');

  fs.writeFileSync('app.js', code);
  console.log(`Done! Downloaded ${successCount} out of ${places.length} images.`);
}

run();
