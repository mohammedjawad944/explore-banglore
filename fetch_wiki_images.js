const fs = require('fs');
const https = require('https');

// Helper to wait
const delay = ms => new Promise(res => setTimeout(res, ms));

const fetchWikiImages = (searchQuery) => {
  return new Promise((resolve, reject) => {
    // encode query and format URL
    const query = encodeURIComponent(searchQuery + ' Bangalore');
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=${query}&gsrlimit=4&prop=imageinfo&iiprop=url&iiurlwidth=1024&format=json`;

    https.get(url, { headers: { 'User-Agent': 'ExploreBangaloreBot/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          const urls = [];
          if (parsed.query && parsed.query.pages) {
            Object.values(parsed.query.pages).forEach(page => {
              if (page.imageinfo && page.imageinfo[0]) {
                urls.push(page.imageinfo[0].thumburl || page.imageinfo[0].url);
              }
            });
          }
          resolve(urls);
        } catch(e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
};

async function run() {
  console.log('Starting image replacement script...');
  let code = fs.readFileSync('app.js', 'utf8');

  // Extract places array
  const startIndex = code.indexOf('const places = [');
  const endIndex = code.indexOf('];', startIndex) + 2;
  let placesStr = code.substring(startIndex, endIndex);

  // Evaluate places array safely
  let placesArrayStr = placesStr.replace('const places = ', '');
  let places = eval(placesArrayStr);
  
  // Create a backup
  fs.writeFileSync('app.js.backup', code);
  
  let updatedCount = 0;
  
  for (let i = 0; i < places.length; i++) {
    const p = places[i];
    
    // Check if it currently relies heavily on loremflickr
    const hasPlaceholders = p.images && p.images.some(img => img.includes('loremflickr'));
    
    if (hasPlaceholders) {
      console.log(`Fetching images for: ${p.name}...`);
      const wikiImages = await fetchWikiImages(p.name);
      
      let newImages = [p.image]; // keep primary image from existing dataset as first
      
      if (wikiImages && wikiImages.length > 0) {
        // Add new images, avoiding duplicates
        wikiImages.forEach(wi => {
          if (!newImages.includes(wi)) {
            newImages.push(wi);
          }
        });
      }
      
      // If we didn't find enough images, try a broader search or fallback
      if (newImages.length < 2) {
         // fallback to a generic Bangalore search
         const generic = await fetchWikiImages(p.category || 'Bangalore');
         generic.forEach(wi => {
           if (!newImages.includes(wi) && newImages.length < 4) newImages.push(wi);
         });
      }
      
      // Slice to max 4 images to keep modal clean
      p.images = newImages.slice(0, 4);
      updatedCount++;
      
      // Be nice to Wikipedia
      await delay(200);
    }
  }

  const newPlacesStr = 'const places = ' + JSON.stringify(places, null, 2).replace(/"([^"]+)":/g, '$1:') + ';';
  code = code.replace(placesStr, newPlacesStr);

  fs.writeFileSync('app.js', code);
  console.log(`Done! Updated images for ${updatedCount} places.`);
}

run();
