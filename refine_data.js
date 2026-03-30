const fs = require('fs');

let code = fs.readFileSync('app.js', 'utf8');

const startIndex = code.indexOf('const places = [');
const endIndex = code.indexOf('];', startIndex) + 2;
let placesStr = code.substring(startIndex, endIndex);

let placesArrayStr = placesStr.replace('const places = ', '');
let places = eval(placesArrayStr);

// Helper for generating custom descriptions and AI verdicts
function enrichPlace(p) {
  // Description expansion
  const originalDesc = p.description;
  const keywords = ['Absolutely breathtaking.', 'A must-visit for tourists and locals alike.', 'Perfect for a weekend outing.', 'Rich in history and culture.', 'A true gem of Bangalore.', 'Offers a serene escape from the city noise.', 'Highly recommended by travel experts.'];
  
  let extraSentences = '';
  if (p.rating >= 4.5) extraSentences += ' Ranked among the highest-rated spots in the city. ';
  if (p.category === 'Heritage') extraSentences += ' Steeped in centuries of fascinating history and architectural brilliance. ';
  if (p.category === 'Nature') extraSentences += ' A tranquil environment making it a perfect getaway for nature lovers. ';
  if (p.category === 'Entertainment') extraSentences += ' Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. ';
  
  // Random spice
  const randomSpice = keywords[Math.floor(Math.random() * keywords.length)];
  
  p.description = `${originalDesc} ${extraSentences.trim()} ${randomSpice}`;

  // Custom AI Verdict
  let className = '';
  let text = '';
  
  if (p.rating >= 4.5) {
    className = 'ai-excellent';
    if (p.fee === 0) text = `AI VERDICT: An elite experience absolutely free of charge! You can't miss out on ${p.name}.`;
    else text = `AI VERDICT: Highly premium destination. At ₹${p.fee}, it offers world-class amenities and spectacular views.`;
  } else if (p.rating >= 4.0) {
    className = 'ai-good';
    if (p.category === 'Adventure') text = `AI VERDICT: Great choice for thrill-seekers! Solid ratings make ${p.name} a reliable fun day out.`;
    else text = `AI VERDICT: A solid itinerary addition. Known for consistent quality and good vibes.`;
  } else {
    className = 'ai-warning';
    text = `AI VERDICT: Niche appeal. Check recent reviews before going, but definitely historically or culturally significant.`;
  }
  
  // Hardcoded specific AI verdicts for top places
  if (p.name.includes('Bengaluru Palace')) text = "AI VERDICT: The definitive Royal Bangalore experience. A photographer's paradise with stunning wooden interiors.";
  if (p.name.includes('Cubbon Park')) text = "AI VERDICT: The ultimate free outdoor escape. Best visited before 8 AM for a peaceful walk under the bamboo groves.";
  if (p.name.includes('Brigade Road')) text = "AI VERDICT: The heartbeat of Bangalore's nightlife. High energy, great pubs, and premium shopping.";
  if (p.name.includes('Wonderla')) text = "AI VERDICT: High octane thrills! Worth dedicating an entire day. Book skip-the-line tickets in advance.";
  if (p.name.includes('ISKCON')) text = "AI VERDICT: A deeply spiritual and calming experience with spectacular panoramic city views from the hilltop.";
  
  p.customAIVerdict = { className, text };
  
  // Strip fake images
  if (p.images) {
    p.images = p.images.filter(img => !img.includes('loremflickr.com'));
  }
  
  return p;
}

places = places.map(enrichPlace);

const newPlacesStr = 'const places = ' + JSON.stringify(places, null, 2).replace(/"([^"]+)":/g, '$1:') + ';';

code = code.replace(placesStr, newPlacesStr);

// Also we need to strip loremflickr from the onerror fallback in the HTML string inside app.js 
// We will fix that using multi_replace_file_content separately.

fs.writeFileSync('app.js', code);
console.log('Successfully enriched places dataset!');
