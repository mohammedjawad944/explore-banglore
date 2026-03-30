const fs = require('fs');

const data = fs.readFileSync('app.js', 'utf8');

const adjectives = [
  'Incredible', 'Stunning', 'Breathtaking', 'Serene', 'Vibrant', 
  'Historic', 'Magnificent', 'Iconic', 'A true hidden gem', 'A must-see', 
  'Unforgettable', 'Captivating', 'Picturesque', 'Majestic', 'Spectacular',
  'Enchanting', 'Fascinating', 'Exquisite', 'Phenomenal', 'Inspiring'
];

const phrases = [
  "A top-tier spot for your itinerary.",
  "Highly recommended by locals.",
  "You simply cannot miss experiencing this.",
  "Perfect for enriching your Bangalore trip.",
  "An absolute delight to visit.",
  "Guaranteed to leave you amazed.",
  "A wonderful escape from the ordinary.",
  "One of the best experiences the city offers.",
  "A fantastic destination for memory-making.",
  "Offers a deeply rewarding experience.",
  "Truly captures the essence of the city.",
  "An ideal place to spend your time.",
  "Spectacular views and great ambiance.",
  "Make sure your camera is fully charged!",
  "A place that truly lives up to its hype."
];

let counter = 0;
const updatedData = data.replace(/customAIVerdict:\s*\{\s*className:\s*"([^"]+)",\s*text:\s*"([^"]+)"\s*\}/g, (match, className, text) => {
  const adj = adjectives[counter % adjectives.length];
  const phrase = phrases[(counter * 7 + 3) % phrases.length];
  
  // Scramble the mix slightly
  const extra = (counter % 3 === 0) ? " Definitely check this out." : ((counter % 4 === 0) ? " A premium experience." : "");
  
  counter++;
  
  return `customAIVerdict: {
      className: "${className}",
      text: "AI VERDICT: ${adj} experience! ${phrase}${extra}"
    }`;
});

fs.writeFileSync('app.js', updatedData);
console.log('Fixed verdicts successfully! Updated ' + counter + ' places.');
