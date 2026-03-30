const fs = require('fs');

let content = fs.readFileSync('app.js', 'utf8');

// The file has a top-level `const places = [ ... ];`
// We can parse the array by isolating it.
const arrayStartIndex = content.indexOf('const places = [') + 'const places = '.length;
let arrayEndIndex = -1;
let openBrackets = 0;
let inString = false;
let stringChar = '';

for (let i = arrayStartIndex; i < content.length; i++) {
  const char = content[i];
  if (inString) {
    if (char === stringChar && content[i - 1] !== '\\') {
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

if (arrayEndIndex === -1) {
  console.log("Could not parse places array.");
  process.exit(1);
}

const placesString = content.substring(arrayStartIndex, arrayEndIndex);
let places;
try {
  places = eval('(' + placesString + ')');
} catch (e) {
  console.log("Failed to eval places:", e);
  process.exit(1);
}

// 1. Remove duplicates by name
const uniquePlaces = [];
const seenNames = new Set();
for (const p of places) {
  if (!seenNames.has(p.name)) {
    uniquePlaces.push(p);
    seenNames.add(p.name);
  } else {
    console.log("Removed duplicate:", p.name);
  }
}

// 2. Identify missing/bad images
// Some images might fallback to loremflickr.com in the HTML.
// The user says "cat is not gone". loremflickr without 'cat' keyword still shows cats sometimes?
// The actual frontend code has: onerror="this.src='https://loremflickr.com/1024/768/...'"
// We will modify index.html to avoid loremflickr.
// For now, let's fix any "default" or missing images in app.js
let changed = false;
const fallbackImages = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Bangalore_Fort_Delhi_Gate.jpg/1024px-Bangalore_Fort_Delhi_Gate.jpg', // generic fallback
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Vidhan_Soudha%2C_Bangalore.jpg/1024px-Vidhan_Soudha%2C_Bangalore.jpg'
];

uniquePlaces.forEach((p, idx) => {
  if (!p.image || p.image.includes('default') || p.image.includes('loremflickr')) {
    p.image = fallbackImages[idx % fallbackImages.length];
    changed = true;
  }
  if (!p.images || p.images.length === 0 || p.images.some(img => !img || img.includes('default') || img.includes('loremflickr'))) {
    p.images = [
      p.image,
      fallbackImages[(idx+1) % fallbackImages.length]
    ];
    changed = true;
  }
});

// Write the updated array back to app.js
const updatedPlacesString = JSON.stringify(uniquePlaces, null, 2);

// Reconstruct app.js content
const newContent = content.substring(0, arrayStartIndex) + updatedPlacesString + content.substring(arrayEndIndex);
fs.writeFileSync('app.js', newContent);
console.log("Successfully rebuilt app.js places with", uniquePlaces.length, "unique locations.");
