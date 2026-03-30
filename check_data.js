const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');

// Extract the places array string
const match = content.match(/const places = \[([\s\S]*?)\];/);
if (!match) {
  console.log('Could not find places array');
  process.exit();
}

let placesStr = match[0];
// Evil eval to get the object, since it's just JS
eval(placesStr); // Now `places` is defined in global scope or script scope

let duplicates = [];
let names = new Set();
let copiedPlacesIndices = [];

for(let i=0; i<places.length; i++) {
  const p = places[i];
  if (names.has(p.name)) {
    duplicates.push(p.name);
    copiedPlacesIndices.push(i);
  } else {
    names.add(p.name);
  }
}

console.log('Duplicates found:', duplicates.length, duplicates);

let missingImages = [];
places.forEach(p => {
  if (!p.image || p.image.includes('default') || p.images.some(img => !img || img.includes('default'))) {
    missingImages.push(p.name);
  }
});
console.log('Missing/Bad Images:', missingImages);
