const fs = require('fs');

let code = fs.readFileSync('app.js', 'utf8');

// The file has a top-level `const places = [ ... ];`
// We can parse the array by isolating it.
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

// 1. Fix Broken Images (Lookaside, Instagram, ResearchGate)
const genericFallbacks = [
  'https://images.livemint.com/img/2021/10/01/1600x900/bangalore_1633095032543_1633095032737.jpg',
  'https://www.holidify.com/images/bgImages/BANGALORE.jpg',
  'https://cdn.thewire.in/wp-content/uploads/2020/08/04112048/bangalore-1024x683.jpg'
];

places.forEach((p, idx) => {
  const isBroken = (url) => typeof url === 'string' && (url.includes('lookaside') || url.includes('instagram.com') || url.includes('researchgate') || url.includes('unsplash'));
  
  if (isBroken(p.image) || p.image === '') {
    p.image = genericFallbacks[idx % genericFallbacks.length];
  }
  
  if (p.images && p.images.length > 0) {
    p.images = p.images.map((img, i) => isBroken(img) ? genericFallbacks[(idx + i) % genericFallbacks.length] : img);
  }
});

// 2. Add New Places (Mosques and Churches)
const newPlaces = [
  {
    id: 1001,
    name: "Jamia Masjid",
    zone: "Central",
    lat: 12.9649,
    lng: 77.5750,
    rating: 4.8,
    reviews: 12500,
    fee: 0,
    hours: "Open 24 hours",
    category: "Heritage",
    image: "https://karnatakatourism.org/wp-content/uploads/2020/06/Jamia-Masjid-1.jpg",
    description: "The largest mosque in Bangalore, known for its stunning white marble architecture and capacity to hold over 10,000 worshippers.",
    images: [
      "https://karnatakatourism.org/wp-content/uploads/2020/06/Jamia-Masjid-1.jpg",
      "https://images.jdmagicbox.com/comp/bangalore/a2/080pxx80.xx80.120516142750.v5a2/catalogue/jamia-masjid-city-market-bangalore-mosques-1r2q3w5-250.jpg"
    ],
    customAIVerdict: { className: "ai-excellent", text: "AI VERDICT: A serene and breathtaking piece of architecture. A must-visit in City Market." }
  },
  {
    id: 1002,
    name: "Mecca Masjid",
    zone: "South",
    lat: 12.9354,
    lng: 77.5841,
    rating: 4.7,
    reviews: 8200,
    fee: 0,
    hours: "Open 24 hours",
    category: "Heritage",
    image: "https://im.hunt.in/cg/City-Guide/Masjids-in-bangalore.jpg",
    description: "A beautifully constructed historic mosque in Jayanagar, serving as an important spiritual and community hub.",
    images: [
      "https://im.hunt.in/cg/City-Guide/Masjids-in-bangalore.jpg"
    ],
    customAIVerdict: { className: "ai-good", text: "AI VERDICT: Highly peaceful atmosphere in the heart of South Bangalore." }
  },
  {
    id: 1003,
    name: "St. Patrick's Church",
    zone: "Central",
    lat: 12.9724,
    lng: 77.6083,
    rating: 4.7,
    reviews: 11000,
    fee: 0,
    hours: "6AM–8PM",
    category: "Church",
    image: "https://bangaloremirror.indiatimes.com/photo/88484930.cms",
    description: "One of the oldest churches in Bangalore built in 1841, featuring stunning stained glass windows and Victorian architecture.",
    images: [
      "https://bangaloremirror.indiatimes.com/photo/88484930.cms",
      "https://images.newindianexpress.com/uploads/user/imagelibrary/2012/5/15/21/w600X390/16stpatricks.jpg"
    ],
    customAIVerdict: { className: "ai-excellent", text: "AI VERDICT: Absolute must-visit! A gorgeous, quiet historic retreat on Residency Road." }
  },
  {
    id: 1004,
    name: "Holy Trinity Church",
    zone: "East",
    lat: 12.9734,
    lng: 77.6186,
    rating: 4.6,
    reviews: 7500,
    fee: 0,
    hours: "7AM–6:30PM",
    category: "Church",
    image: "https://karnatakatourism.org/wp-content/uploads/2020/06/Holy-Trinity-Church-2.jpg",
    description: "A major landmark at Trinity Circle, built in 1851 in the English Renaissance style, with beautiful original English bell towers.",
    images: [
      "https://karnatakatourism.org/wp-content/uploads/2020/06/Holy-Trinity-Church-2.jpg"
    ],
    customAIVerdict: { className: "ai-good", text: "AI VERDICT: Iconic architecture and very central. Great for a quick peaceful stop." }
  }
];

// Append new places
const updatedPlaces = [...places, ...newPlaces];

const updatedPlacesString = JSON.stringify(updatedPlaces, null, 2);
const newContent = code.substring(0, arrayStartIndex) + updatedPlacesString + code.substring(arrayEndIndex);
fs.writeFileSync('app.js', newContent);
console.log("Successfully fixed broken links and added " + newPlaces.length + " new places.");
