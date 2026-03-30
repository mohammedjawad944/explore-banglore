const fs = require('fs');
const google = require('googlethis');

async function run() {
  console.log('Starting Google Image replacement script...');
  let code = fs.readFileSync('app.js', 'utf8');

  // Parse places array
  const startIndex = code.indexOf('const places = [');
  const endIndex = code.indexOf('];', startIndex) + 2;
  let placesStr = code.substring(startIndex, endIndex);

  // Evaluate places array safely
  let placesArrayStr = placesStr.replace('const places = ', '');
  let places = eval(placesArrayStr);
  
  // Backup
  fs.writeFileSync('app.js.backup.google', code);
  
  let updatedCount = 0;
  
  for (let i = 0; i < places.length; i++) {
    const p = places[i];
    
    // Replace Wikipedia links
    const hasWiki = p.images && p.images.some(img => img.includes('wikimedia.org'));
    if (hasWiki || p.image.includes('wikimedia.org')) {
      console.log(`Fetching Google Images for: ${p.name}...`);
      try {
        const images = await google.image(`${p.name} Bangalore`, { safe: false });
        // Filter out wikimedia, static, or small broken links
        let validImages = images
            .map(x => x.url)
            .filter(url => url && !url.includes('wikimedia.org') && url.startsWith('http') && !url.includes('loremflickr'))
            .slice(0, 4);

        if (validImages.length > 0) {
          p.image = validImages[0];
          p.images = validImages;
          updatedCount++;
        }
      } catch (e) {
        console.error(`Error fetching for ${p.name}:`, e.message);
      }
      
      // Be nice to Google
      await new Promise(r => setTimeout(r, 400));
    }
  }

  const newPlacesStr = 'const places = ' + JSON.stringify(places, null, 2).replace(/"([^"]+)":/g, '$1:') + ';';
  code = code.replace(placesStr, newPlacesStr);

  fs.writeFileSync('app.js', code);
  console.log(`Done! Replaced Wikipedia images in ${updatedCount} places with real Google search photos.`);
}

run();
