const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// 1. Update categoryIcons
code = code.replace(
  /'Spiritual': '🕉️',/,
  "'Mosque': '🕌',\n  'Temple': '🕉️',\n  'Church': '⛪',"
);

// 2. Extract places array
const startIndex = code.indexOf('const places = [');
const endIndex = code.indexOf('];', startIndex) + 2;
let placesStr = code.substring(startIndex, endIndex);

// Evaluate places array safely by stripping "const places = "
let placesArrayStr = placesStr.replace('const places = ', '');
let places = eval(placesArrayStr);

// 3. Process existing places
places = places.map(p => {
  if (p.category === 'Spiritual') {
    if (p.name.includes('Church') || p.name.includes('Basilica') || p.name.includes('Shrine')) {
      p.category = 'Church';
    } else if (p.name.includes('Masjid') || p.name.includes('Mosque')) {
      p.category = 'Mosque';
    } else {
      p.category = 'Temple';
    }
  }
  
  let kw = encodeURIComponent(p.name.replace(/[^a-zA-Z]/g, ''));
  p.images = [
    p.image,
    `https://loremflickr.com/1024/768/${kw},bangalore`,
    `https://loremflickr.com/1024/768/${kw},architecture`,
    `https://loremflickr.com/1024/768/${kw},detail`
  ];
  return p;
});

// Add new religious places
const highestId = Math.max(...places.map(p => p.id));
const newPlaces = [
  { id: highestId + 1, name: 'Jamia Masjid', zone: 'Central', lat: 12.9644, lng: 77.5750, rating: 4.6, reviews: 8500, fee: 0, hours: '5AM–9PM', category: 'Mosque', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Jamia_Masjid_Bangalore.jpg/1024px-Jamia_Masjid_Bangalore.jpg', description: 'The largest mosque in Bangalore, built in the 1940s, known for its stunning white marble facade and capacity to hold 10,000 worshippers.', images: [] },
  { id: highestId + 2, name: 'Holy Trinity Church', zone: 'East', lat: 12.9733, lng: 77.6166, rating: 4.5, reviews: 6200, fee: 0, hours: '9AM–6PM', category: 'Church', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Holy_Trinity_Church_Bangalore.jpg/1024px-Holy_Trinity_Church_Bangalore.jpg', description: 'A major landmark built in 1851 in English Renaissance style, featuring magnificent stained glass from London.', images: [] },
  { id: highestId + 3, name: 'Shri Someshwara Swamy Temple', zone: 'East', lat: 12.9738, lng: 77.6254, rating: 4.6, reviews: 9000, fee: 0, hours: '6AM–12PM, 5PM–9PM', category: 'Temple', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Someshwara_Temple_Ulsoor.jpg/1024px-Someshwara_Temple_Ulsoor.jpg', description: 'One of the oldest temples in the city, dating back to the Chola period, dedicated to Lord Shiva.', images: [] },
  { id: highestId + 4, name: 'Mecca Masjid', zone: 'South', lat: 12.9200, lng: 77.5900, rating: 4.4, reviews: 4000, fee: 0, hours: 'Open 24 hours', category: 'Mosque', image: 'https://loremflickr.com/1024/768/mosque,india', description: 'A beautifully architectured mosque located in the heart of the city providing a peaceful environment for prayers.', images: [] }
];

newPlaces.forEach(p => {
  let kw = encodeURIComponent(p.name.replace(/[^a-zA-Z]/g, ''));
  p.images = [
    p.image,
    `https://loremflickr.com/1024/768/${kw},view`,
    `https://loremflickr.com/1024/768/${kw},detail`,
    `https://loremflickr.com/1024/768/${kw},architecture`
  ];
  places.push(p);
});

const newPlacesStr = 'const places = ' + JSON.stringify(places, null, 2).replace(/"([^"]+)":/g, '$1:') + ';';

code = code.replace(placesStr, newPlacesStr);
fs.writeFileSync('app.js', code);
console.log('Done!');
