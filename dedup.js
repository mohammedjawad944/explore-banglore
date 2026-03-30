const fs = require('fs');

const content = fs.readFileSync('app.js', 'utf-8');

// Find where places array starts and ends
const startIndex = content.indexOf('const places = [');
// Find the closing bracket that matches the const places = [
// For safety, we can just look for `\n];` or `\n];;;`.
// In app.js it was `];;;`.
const endIndexStr = '];;;';
let endIndex = content.indexOf(endIndexStr, startIndex);
if (endIndex === -1) {
    endIndex = content.indexOf('];', startIndex) + 2;
} else {
    endIndex += 1; // to include ']'
}

let placesStr = content.substring(startIndex + 'const places = '.length, endIndex);
placesStr = placesStr.trim();
// removing any trailing semicolons from the array end in case
if (placesStr.endsWith(';')) placesStr = placesStr.slice(0, -1);

let places;
try {
    // using eval to parse JS object string (since JSON.parse requires strict JSON)
    eval('places = ' + placesStr);
} catch (e) {
    console.error("Failed to parse places:", e);
    process.exit(1);
}

const seenNames = new Set();
const uniquePlaces = [];
let dupsFound = 0;

for (const p of places) {
    if (seenNames.has(p.name)) {
        console.log("Removing duplicate:", p.name, "ID:", p.id);
        dupsFound++;
    } else {
        seenNames.add(p.name);
        uniquePlaces.push(p);
    }
}

if (dupsFound > 0) {
    // Re-stringify the array
    const newPlacesStr = ' [\n' + uniquePlaces.map(p => {
        return `  {\n    id: ${p.id},\n    name: "${p.name}",\n    zone: "${p.zone}",\n    lat: ${p.lat},\n    lng: ${p.lng},\n    rating: ${p.rating},\n    reviews: ${p.reviews},\n    fee: ${p.fee},\n    hours: "${p.hours}",\n    category: "${p.category}",\n    ${p.description ? `description: ${JSON.stringify(p.description)},\n    ` : ''}${p.customAIVerdict ? `customAIVerdict: {\n      className: "${p.customAIVerdict.className}",\n      text: ${JSON.stringify(p.customAIVerdict.text)}\n    },\n    ` : ''}image: "${p.image}",\n    images: [\n      "${p.image}"\n    ]\n  }`;
    }).join(',\n') + '\n]';

    const newContent = content.substring(0, startIndex + 'const places ='.length) + newPlacesStr + content.substring(endIndex);
    fs.writeFileSync('app.js', newContent, 'utf-8');
    console.log(`Successfully removed ${dupsFound} duplicates and rewritten app.js!`);
} else {
    console.log("No duplicates found.");
}
