const places = [
  {
    id: 1,
    name: "Bengaluru Palace",
    zone: "Central",
    lat: 12.9988,
    lng: 77.5921,
    rating: 4.5,
    reviews: 52000,
    fee: 230,
    hours: "10AM–5:30PM",
    category: "Heritage",
    description: "A majestic Tudor-style palace built in 1878, featuring elegant wood carvings, Victorian furniture, and sprawling grounds. Ranked among the highest-rated spots in the city.  Steeped in centuries of fascinating history and architectural brilliance. Offers a serene escape from the city noise. Ranked among the highest-rated spots in the city.  Steeped in centuries of fascinating history and architectural brilliance. Rich in history and culture.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Incredible experience! Perfect for enriching your Bangalore trip. Definitely check this out."
    },
    image: "images/place_1.jpg",
    images: [
      "images/place_1.jpg"
    ]
  },
  {
    id: 2,
    name: "Tipu Sultan's Summer Palace",
    zone: "South",
    lat: 12.9594,
    lng: 77.5738,
    rating: 4.2,
    reviews: 18000,
    fee: 20,
    hours: "8:30AM–5:30PM",
    category: "Heritage",
    description: "An exquisite example of Indo-Islamic architecture built entirely of teakwood with beautiful floral motifs. Steeped in centuries of fascinating history and architectural brilliance. Rich in history and culture. Steeped in centuries of fascinating history and architectural brilliance. Offers a serene escape from the city noise.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Stunning experience! Truly captures the essence of the city."
    },
    image: "images/place_2.jpg",
    images: [
      "images/place_2.jpg"
    ]
  },
  {
    id: 3,
    name: "Vidhana Soudha",
    zone: "Central",
    lat: 12.9796,
    lng: 77.5906,
    rating: 4.6,
    reviews: 40000,
    fee: 0,
    hours: "Exterior viewing only",
    category: "Heritage",
    description: "The imposing state legislature building known for its Neo-Dravidian architecture. Best viewed illuminated at night. Ranked among the highest-rated spots in the city.  Steeped in centuries of fascinating history and architectural brilliance. A must-visit for tourists and locals alike. Ranked among the highest-rated spots in the city.  Steeped in centuries of fascinating history and architectural brilliance. A true gem of Bangalore.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Breathtaking experience! You simply cannot miss experiencing this."
    },
    image: "images/place_3.jpg",
    images: [
      "images/place_3.jpg"
    ]
  },
  {
    id: 4,
    name: "Devanahalli Fort",
    zone: "North",
    lat: 13.2494,
    lng: 77.7126,
    rating: 4,
    reviews: 3500,
    fee: 0,
    hours: "Open 24 hours",
    category: "Heritage",
    description: "The historic birthplace of Tipu Sultan featuring a sprawling 1500CE fort and ancient temples. Steeped in centuries of fascinating history and architectural brilliance. A true gem of Bangalore. Steeped in centuries of fascinating history and architectural brilliance. Offers a serene escape from the city noise.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Serene experience! Offers a deeply rewarding experience. Definitely check this out."
    },
    image: "images/place_4.jpg",
    images: [
      "images/place_4.jpg"
    ]
  },
  {
    id: 5,
    name: "National Gallery of Modern Art",
    zone: "Central",
    lat: 12.9859,
    lng: 77.5878,
    rating: 4.6,
    reviews: 7200,
    fee: 20,
    hours: "10AM–5PM closed Mon",
    category: "Heritage",
    description: "Showcases Indian modern and contemporary art in a beautiful heritage mansion with sprawling lawns. Ranked among the highest-rated spots in the city.  Steeped in centuries of fascinating history and architectural brilliance. Rich in history and culture. Ranked among the highest-rated spots in the city.  Steeped in centuries of fascinating history and architectural brilliance. Absolutely breathtaking.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Vibrant experience! Highly recommended by locals. A premium experience."
    },
    image: "images/place_5.jpg",
    images: [
      "images/place_5.jpg"
    ]
  },
  {
    id: 6,
    name: "Bangalore Fort",
    zone: "South",
    lat: 12.9624,
    lng: 77.5755,
    rating: 4.1,
    reviews: 4000,
    fee: 15,
    hours: "8:30AM–5:30PM",
    category: "Heritage",
    description: "The remnants of a mud fort established in 1537 by Kempe Gowda I. Steeped in centuries of fascinating history and architectural brilliance. Absolutely breathtaking. Steeped in centuries of fascinating history and architectural brilliance. Perfect for a weekend outing.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Historic experience! A fantastic destination for memory-making."
    },
    image: "images/place_6.jpg",
    images: [
      "images/place_6.jpg"
    ]
  },
  {
    id: 7,
    name: "Lalbagh Botanical Garden",
    zone: "South",
    lat: 12.9507,
    lng: 77.5848,
    rating: 4.5,
    reviews: 85000,
    fee: 30,
    hours: "6AM–7PM",
    category: "Nature",
    description: "A historic 240-acre botanical garden housing India's largest collection of tropical plants and a famous glass house. Ranked among the highest-rated spots in the city.  A tranquil environment making it a perfect getaway for nature lovers. Perfect for a weekend outing. Ranked among the highest-rated spots in the city.  A tranquil environment making it a perfect getaway for nature lovers. Perfect for a weekend outing.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Magnificent experience! A top-tier spot for your itinerary. Definitely check this out."
    },
    image: "images/place_7.jpg",
    images: [
      "images/place_7.jpg"
    ]
  },
  {
    id: 8,
    name: "Cubbon Park",
    zone: "Central",
    lat: 12.9779,
    lng: 77.5952,
    rating: 4.6,
    reviews: 70000,
    fee: 0,
    hours: "6AM–6PM",
    category: "Nature",
    description: "The 'Lung of the City', offering 300 acres of bamboo groves, historic statues, and peaceful walking trails. Ranked among the highest-rated spots in the city.  A tranquil environment making it a perfect getaway for nature lovers. A true gem of Bangalore. Ranked among the highest-rated spots in the city.  A tranquil environment making it a perfect getaway for nature lovers. Highly recommended by travel experts.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Iconic experience! One of the best experiences the city offers."
    },
    image: "images/place_8.jpg",
    images: [
      "images/place_8.jpg"
    ]
  },
  {
    id: 9,
    name: "Ulsoor Lake",
    zone: "East",
    lat: 12.9818,
    lng: 77.618,
    rating: 4.2,
    reviews: 15000,
    fee: 0,
    hours: "6AM–8PM",
    category: "Nature",
    description: "One of the oldest and largest lakes in the city, dotted with picturesque islands and boating facilities. A tranquil environment making it a perfect getaway for nature lovers. Highly recommended by travel experts. A tranquil environment making it a perfect getaway for nature lovers. Perfect for a weekend outing.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: A true hidden gem experience! A place that truly lives up to its hype. A premium experience."
    },
    image: "images/place_9.jpg",
    images: [
      "images/place_9.jpg"
    ]
  },
  {
    id: 10,
    name: "Bugle Rock Park",
    zone: "South",
    lat: 12.9427,
    lng: 77.5694,
    rating: 4.5,
    reviews: 3200,
    fee: 0,
    hours: "5:30–10AM, 4–8:30PM",
    category: "Nature",
    description: "A massive rock formation dating back 3,000 million years, surrounded by lush greenery. Ranked among the highest-rated spots in the city.  A tranquil environment making it a perfect getaway for nature lovers. A true gem of Bangalore. Ranked among the highest-rated spots in the city.  A tranquil environment making it a perfect getaway for nature lovers. A true gem of Bangalore.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: A must-see experience! A wonderful escape from the ordinary. Definitely check this out."
    },
    image: "images/place_10.jpg",
    images: [
      "images/place_10.jpg"
    ]
  },
  {
    id: 11,
    name: "Sankey Tank",
    zone: "West",
    lat: 13.0089,
    lng: 77.5755,
    rating: 4.3,
    reviews: 8500,
    fee: 0,
    hours: "6AM–8PM",
    category: "Nature",
    description: "A picturesque man-made lake built in 1882, ideal for peaceful walks and boating. A tranquil environment making it a perfect getaway for nature lovers. Highly recommended by travel experts. A tranquil environment making it a perfect getaway for nature lovers. A must-visit for tourists and locals alike.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Unforgettable experience! Make sure your camera is fully charged!"
    },
    image: "images/place_11.jpg",
    images: [
      "images/place_11.jpg"
    ]
  },
  {
    id: 12,
    name: "Big Banyan Tree",
    zone: "West",
    lat: 12.8988,
    lng: 77.382,
    rating: 4.2,
    reviews: 13000,
    fee: 0,
    hours: "8AM–5PM",
    category: "Nature",
    description: "A gigantic 400-year-old banyan tree spread across 3 acres of land. A tranquil environment making it a perfect getaway for nature lovers. A must-visit for tourists and locals alike. A tranquil environment making it a perfect getaway for nature lovers. Rich in history and culture.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Captivating experience! Guaranteed to leave you amazed."
    },
    image: "images/place_12.jpg",
    images: [
      "images/place_12.jpg"
    ]
  },
  {
    id: 13,
    name: "Agara Lake",
    zone: "South",
    lat: 12.9259,
    lng: 77.6536,
    rating: 4.6,
    reviews: 11000,
    fee: 0,
    hours: "6AM–6PM",
    category: "Nature",
    description: "A beautifully revitalized lake popular among joggers and bird watchers in HSR Layout. Ranked among the highest-rated spots in the city.  A tranquil environment making it a perfect getaway for nature lovers. Perfect for a weekend outing. Ranked among the highest-rated spots in the city.  A tranquil environment making it a perfect getaway for nature lovers. Highly recommended by travel experts.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Picturesque experience! Spectacular views and great ambiance. Definitely check this out."
    },
    image: "images/place_13.jpg",
    images: [
      "images/place_13.jpg"
    ]
  },
  {
    id: 14,
    name: "Madiwala Lake",
    zone: "South",
    lat: 12.915,
    lng: 77.608,
    rating: 4,
    reviews: 8000,
    fee: 10,
    hours: "5AM–9:30PM",
    category: "Nature",
    description: "A vast 300-year-old lake known for migratory birds and evening boating rides. A tranquil environment making it a perfect getaway for nature lovers. Offers a serene escape from the city noise. A tranquil environment making it a perfect getaway for nature lovers. Rich in history and culture.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Majestic experience! An absolute delight to visit."
    },
    image: "images/place_14.jpg",
    images: [
      "images/place_14.jpg"
    ]
  },
  {
    id: 15,
    name: "Hesaraghatta Lake",
    zone: "North",
    lat: 13.1495,
    lng: 77.4725,
    rating: 4.1,
    reviews: 5000,
    fee: 0,
    hours: "Sunrise to Sunset",
    category: "Nature",
    description: "A scenic freshwater reservoir created in 1894, perfect for cycling and escaping city life. A tranquil environment making it a perfect getaway for nature lovers. Offers a serene escape from the city noise. A tranquil environment making it a perfect getaway for nature lovers. A true gem of Bangalore.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Spectacular experience! An ideal place to spend your time."
    },
    image: "images/place_15.jpg",
    images: [
      "images/place_15.jpg"
    ]
  },
  {
    id: 16,
    name: "Hebbal Lake",
    zone: "North",
    lat: 13.0456,
    lng: 77.5855,
    rating: 4.2,
    reviews: 4500,
    fee: 20,
    hours: "7AM–8PM",
    category: "Nature",
    description: "A popular photography spot known for its lush islands and pelican sightings. A tranquil environment making it a perfect getaway for nature lovers. A true gem of Bangalore. A tranquil environment making it a perfect getaway for nature lovers. A must-visit for tourists and locals alike.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Enchanting experience! Perfect for enriching your Bangalore trip. Definitely check this out."
    },
    image: "images/place_16.jpg",
    images: [
      "images/place_16.jpg"
    ]
  },
  {
    id: 17,
    name: "ISKCON Temple",
    zone: "North",
    lat: 13.0098,
    lng: 77.5511,
    rating: 4.8,
    reviews: 93000,
    fee: 0,
    hours: "4:15AM–8:30PM",
    category: "Temple",
    description: "One of the largest ISKCON temples in the world, sitting majestically atop Hare Krishna Hill. Ranked among the highest-rated spots in the city. Offers a serene escape from the city noise. Ranked among the highest-rated spots in the city. Rich in history and culture.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Fascinating experience! Truly captures the essence of the city. A premium experience."
    },
    image: "images/place_17.png",
    images: [
      "images/place_17.png"
    ]
  },
  {
    id: 18,
    name: "Bull Temple",
    zone: "South",
    lat: 12.9416,
    lng: 77.5682,
    rating: 4.6,
    reviews: 15000,
    fee: 0,
    hours: "6AM–8PM",
    category: "Temple",
    description: "Also known as Nandi Temple, this historic site features a massive monolithic bull statue. Ranked among the highest-rated spots in the city. Offers a serene escape from the city noise. Ranked among the highest-rated spots in the city. Rich in history and culture.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Exquisite experience! You simply cannot miss experiencing this."
    },
    image: "images/place_18.jpg",
    images: [
      "images/place_18.jpg"
    ]
  },
  {
    id: 19,
    name: "St. Mary's Basilica",
    zone: "Central",
    lat: 12.984,
    lng: 77.6042,
    rating: 4.7,
    reviews: 11000,
    fee: 0,
    hours: "6AM–9PM",
    category: "Church",
    description: "The oldest church in Bangalore, famous for its Gothic architecture and vibrant September festival. Ranked among the highest-rated spots in the city. A true gem of Bangalore. Ranked among the highest-rated spots in the city. Offers a serene escape from the city noise.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Phenomenal experience! Offers a deeply rewarding experience. Definitely check this out."
    },
    image: "images/place_19.jpg",
    images: [
      "images/place_19.jpg"
    ]
  },
  {
    id: 20,
    name: "Shivoham Shiva Temple",
    zone: "East",
    lat: 12.9587,
    lng: 77.6534,
    rating: 4.4,
    reviews: 28000,
    fee: 250,
    hours: "Open 24 hours",
    category: "Temple",
    description: "Famous for its massive 65-foot tall Lord Shiva statue and artificial Himalayan replica.  Absolutely breathtaking.  A must-visit for tourists and locals alike.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Inspiring experience! Highly recommended by locals."
    },
    image: "images/place_20.jpg",
    images: [
      "images/place_20.jpg"
    ]
  },
  {
    id: 21,
    name: "Gavi Gangadhareshwara Temple",
    zone: "South",
    lat: 12.9495,
    lng: 77.5539,
    rating: 4.6,
    reviews: 12000,
    fee: 0,
    hours: "6AM–8PM",
    category: "Temple",
    description: "An ancient cave temple known for its mysterious rock-cut architecture and astronomical significance. Ranked among the highest-rated spots in the city. Rich in history and culture. Ranked among the highest-rated spots in the city. Offers a serene escape from the city noise.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Incredible experience! A fantastic destination for memory-making. A premium experience."
    },
    image: "images/place_21.jpg",
    images: [
      "images/place_21.jpg"
    ]
  },
  {
    id: 22,
    name: "Art of Living International Center",
    zone: "South",
    lat: 12.839,
    lng: 77.5028,
    rating: 4.7,
    reviews: 25000,
    fee: 0,
    hours: "9AM–8PM",
    category: "Temple",
    description: "A peaceful ashram founded by Sri Sri Ravi Shankar, featuring beautiful gardens and meditation halls. Ranked among the highest-rated spots in the city. Perfect for a weekend outing. Ranked among the highest-rated spots in the city. A must-visit for tourists and locals alike.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Stunning experience! A top-tier spot for your itinerary. Definitely check this out."
    },
    image: "images/place_22.jpg",
    images: [
      "images/place_22.jpg"
    ]
  },
  {
    id: 23,
    name: "Dodda Ganapathi Temple",
    zone: "South",
    lat: 12.9423,
    lng: 77.567,
    rating: 4.7,
    reviews: 15000,
    fee: 0,
    hours: "6AM–8PM",
    category: "Temple",
    description: "Famous for its massive monolithic Ganesha idol which is 18 ft tall and 16 ft wide. Ranked among the highest-rated spots in the city. Absolutely breathtaking. Ranked among the highest-rated spots in the city. Rich in history and culture.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Breathtaking experience! One of the best experiences the city offers."
    },
    image: "images/place_23.jpg",
    images: [
      "images/place_23.jpg"
    ]
  },
  {
    id: 24,
    name: "Infant Jesus Shrine",
    zone: "Central",
    lat: 12.9547,
    lng: 77.6183,
    rating: 4.8,
    reviews: 14000,
    fee: 0,
    hours: "5:30AM–9PM",
    category: "Church",
    description: "A highly revered Catholic shrine drawing countless devotees, known for Thursday novenas. Ranked among the highest-rated spots in the city. Rich in history and culture. Ranked among the highest-rated spots in the city. A true gem of Bangalore.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Serene experience! A place that truly lives up to its hype."
    },
    image: "images/place_24.jpg",
    images: [
      "images/place_24.jpg"
    ]
  },
  {
    id: 25,
    name: "HAL Aerospace Museum",
    zone: "East",
    lat: 12.9526,
    lng: 77.6705,
    rating: 4.4,
    reviews: 16000,
    fee: 50,
    hours: "9AM–5PM",
    category: "Education",
    description: "India's first aviation museum featuring aircraft simulators, a mock air traffic control tower, and vintage fighter jets.  A must-visit for tourists and locals alike.  Perfect for a weekend outing.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Vibrant experience! A wonderful escape from the ordinary. Definitely check this out."
    },
    image: "images/place_25.jpg",
    images: [
      "images/place_25.jpg"
    ]
  },
  {
    id: 26,
    name: "Visvesvaraya Museum",
    zone: "Central",
    lat: 12.9752,
    lng: 77.5963,
    rating: 4.5,
    reviews: 22000,
    fee: 50,
    hours: "9:30AM–6PM",
    category: "Education",
    description: "Interactive science museum perfect for students and technology enthusiasts. Ranked among the highest-rated spots in the city. Highly recommended by travel experts. Ranked among the highest-rated spots in the city. Highly recommended by travel experts.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Historic experience! Make sure your camera is fully charged!"
    },
    image: "images/place_26.jpg",
    images: [
      "images/place_26.jpg"
    ]
  },
  {
    id: 27,
    name: "Bannerghatta National Park",
    zone: "South",
    lat: 12.7784,
    lng: 77.572,
    rating: 4.4,
    reviews: 26500,
    fee: 300,
    hours: "9:30AM–5PM closed Tue",
    category: "Adventure",
    description: "A vibrant reserve featuring a zoo, pet corner, butterfly enclosure, and thrilling safaris.  A true gem of Bangalore.  Offers a serene escape from the city noise.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Magnificent experience! Guaranteed to leave you amazed."
    },
    image: "images/place_27.jpg",
    images: [
      "images/place_27.jpg"
    ]
  },
  {
    id: 28,
    name: "Jawaharlal Nehru Planetarium",
    zone: "Central",
    lat: 12.984,
    lng: 77.5898,
    rating: 4.3,
    reviews: 12000,
    fee: 75,
    hours: "10AM–5:30PM closed Mon",
    category: "Education",
    description: "Offers fascinating sky-gazing shows and educational science parks for kids and families.  A must-visit for tourists and locals alike.  Rich in history and culture.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Iconic experience! Spectacular views and great ambiance. Definitely check this out."
    },
    image: "images/place_28.jpg",
    images: [
      "images/place_28.jpg"
    ]
  },
  {
    id: 29,
    name: "Play Arena",
    zone: "East",
    lat: 12.9099,
    lng: 77.6821,
    rating: 4.3,
    reviews: 8000,
    fee: 500,
    hours: "11AM–11PM",
    category: "Adventure",
    description: "A sprawling sports arena featuring go-karting, bowling, laser tag, and rock climbing.  Highly recommended by travel experts.  A true gem of Bangalore.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: A true hidden gem experience! An absolute delight to visit. A premium experience."
    },
    image: "images/place_29.jpg",
    images: [
      "images/place_29.jpg"
    ]
  },
  {
    id: 30,
    name: "Wonderla Amusement Park",
    zone: "West",
    lat: 12.8349,
    lng: 77.4009,
    rating: 4.5,
    reviews: 52000,
    fee: 900,
    hours: "11AM–6PM",
    category: "Entertainment",
    description: "High-thrill rides, water park attractions, and endless entertainment for all ages. Ranked among the highest-rated spots in the city.  Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Perfect for a weekend outing. Ranked among the highest-rated spots in the city.  Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Perfect for a weekend outing.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: A must-see experience! An ideal place to spend your time."
    },
    image: "images/place_30.jpg",
    images: [
      "images/place_30.jpg"
    ]
  },
  {
    id: 31,
    name: "Commercial Street",
    zone: "Central",
    lat: 12.9822,
    lng: 77.6083,
    rating: 4.3,
    reviews: 65000,
    fee: 0,
    hours: "10:30AM–8PM",
    category: "Entertainment",
    description: "One of the oldest and busiest shopping streets in the city, famous for clothes, jewelry, and street shopping deals. Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. A must-visit for tourists and locals alike. Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Absolutely breathtaking.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Unforgettable experience! Perfect for enriching your Bangalore trip. Definitely check this out."
    },
    image: "images/place_31.jpg",
    images: [
      "images/place_31.jpg"
    ]
  },
  {
    id: 32,
    name: "UB City",
    zone: "Central",
    lat: 12.9719,
    lng: 77.596,
    rating: 4.5,
    reviews: 32000,
    fee: 0,
    hours: "11AM–11:30PM",
    category: "Entertainment",
    description: "India's first luxury mall offering high-end luxury brand stores, fine dining rooftops, and stunning architecture. Ranked among the highest-rated spots in the city.  Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. A true gem of Bangalore. Ranked among the highest-rated spots in the city.  Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. A must-visit for tourists and locals alike.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Captivating experience! Truly captures the essence of the city."
    },
    image: "images/place_32.jpg",
    images: [
      "images/place_32.jpg"
    ]
  },
  {
    id: 33,
    name: "Innovative Film City",
    zone: "Day Trip",
    lat: 12.7562,
    lng: 77.3995,
    rating: 4.1,
    reviews: 18000,
    fee: 600,
    hours: "10AM–7PM",
    category: "Entertainment",
    description: "An Indian movie theme park with wax museums, reality show sets, and adventure sports. Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Perfect for a weekend outing. Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. A must-visit for tourists and locals alike.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Picturesque experience! You simply cannot miss experiencing this. A premium experience."
    },
    image: "images/place_33.jpg",
    images: [
      "images/place_33.jpg"
    ]
  },
  {
    id: 34,
    name: "Lumbini Gardens",
    zone: "North",
    lat: 13.0423,
    lng: 77.608,
    rating: 4,
    reviews: 14000,
    fee: 50,
    hours: "11AM–7PM",
    category: "Entertainment",
    description: "A fun eco-friendly public park around Nagawara Lake with wave pools and boating. Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Offers a serene escape from the city noise. Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Offers a serene escape from the city noise.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Majestic experience! Offers a deeply rewarding experience. Definitely check this out."
    },
    image: "images/place_34.jpg",
    images: [
      "images/place_34.jpg"
    ]
  },
  {
    id: 35,
    name: "Shivaji Nagar",
    zone: "Central",
    lat: 12.9856,
    lng: 77.6045,
    rating: 4.2,
    reviews: 20000,
    fee: 0,
    hours: "9AM–10PM",
    category: "Entertainment",
    description: "A bustling, vibrant marketplace spanning Russell Market. Legendary for Ramzan street food, amazing kebabs, and thrift shopping. Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. A must-visit for tourists and locals alike. Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Perfect for a weekend outing.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Spectacular experience! Highly recommended by locals."
    },
    image: "images/place_35.jpg",
    images: [
      "images/place_35.jpg"
    ]
  },
  {
    id: 36,
    name: "Brigade Road",
    zone: "Central",
    lat: 12.9723,
    lng: 77.6053,
    rating: 4.5,
    reviews: 30000,
    fee: 0,
    hours: "10AM–11PM",
    category: "Entertainment",
    description: "The premier high-street destination of Bangalore. Packed with international brands, historic pubs, and massive New Year celebrations. Ranked among the highest-rated spots in the city.  Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Perfect for a weekend outing. Ranked among the highest-rated spots in the city.  Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Absolutely breathtaking.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Enchanting experience! A fantastic destination for memory-making."
    },
    image: "images/place_36.jpg",
    images: [
      "images/place_36.jpg"
    ]
  },
  {
    id: 37,
    name: "Church Street",
    zone: "Central",
    lat: 12.9752,
    lng: 77.6045,
    rating: 4.6,
    reviews: 25000,
    fee: 0,
    hours: "10AM–11:30PM",
    category: "Entertainment",
    description: "A pedestrian-friendly cobblestone street famous for its massive bookstores (Blossom), microbreweries, and cafe culture. Ranked among the highest-rated spots in the city.  Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Offers a serene escape from the city noise. Ranked among the highest-rated spots in the city.  Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Absolutely breathtaking.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Fascinating experience! A top-tier spot for your itinerary. Definitely check this out."
    },
    image: "images/place_37.jpg",
    images: [
      "images/place_37.jpg"
    ]
  },
  {
    id: 38,
    name: "VV Puram Food Street",
    zone: "South",
    lat: 12.9525,
    lng: 77.5756,
    rating: 4.4,
    reviews: 18000,
    fee: 0,
    hours: "6PM–11:30PM",
    category: "Entertainment",
    description: "Thindi Beedi (Food Street) is a strictly vegetarian paradise serving legendary dosas, floating pani puris, and holige. Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Highly recommended by travel experts. Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Highly recommended by travel experts.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Exquisite experience! One of the best experiences the city offers."
    },
    image: "images/place_38.jpg",
    images: [
      "images/place_38.jpg"
    ]
  },
  {
    id: 39,
    name: "Phoenix Marketcity",
    zone: "East",
    lat: 12.996,
    lng: 77.6953,
    rating: 4.6,
    reviews: 85000,
    fee: 0,
    hours: "10:30AM–10PM",
    category: "Entertainment",
    description: "One of the largest lifestyle and entertainment malls in Bangalore, hosting major concerts in its courtyard. Ranked among the highest-rated spots in the city.  Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Rich in history and culture. Ranked among the highest-rated spots in the city.  Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. A must-visit for tourists and locals alike.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Phenomenal experience! A place that truly lives up to its hype."
    },
    image: "images/place_39.jpg",
    images: [
      "images/place_39.jpg"
    ]
  },
  {
    id: 40,
    name: "Orion Mall",
    zone: "West",
    lat: 13.0112,
    lng: 77.5546,
    rating: 4.6,
    reviews: 60000,
    fee: 0,
    hours: "10AM–10PM",
    category: "Entertainment",
    description: "A stunning lakeside mall offering a premium multiplex, diverse food court, and beautiful water fountains. Ranked among the highest-rated spots in the city.  Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Rich in history and culture. Ranked among the highest-rated spots in the city.  Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Perfect for a weekend outing.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Inspiring experience! A wonderful escape from the ordinary. Definitely check this out."
    },
    image: "images/place_40.jpg",
    images: [
      "images/place_40.jpg"
    ]
  },
  {
    id: 41,
    name: "Mantri Square",
    zone: "West",
    lat: 12.9926,
    lng: 77.5714,
    rating: 4.3,
    reviews: 50000,
    fee: 0,
    hours: "10AM–10PM",
    category: "Entertainment",
    description: "A colossal shopping mall with a direct metro station connection, massive hypermarket, and numerous dining options. Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Offers a serene escape from the city noise. Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. A must-visit for tourists and locals alike.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Incredible experience! Make sure your camera is fully charged! A premium experience."
    },
    image: "images/place_41.jpg",
    images: [
      "images/place_41.jpg"
    ]
  },
  {
    id: 42,
    name: "Forum Mall Koramangala",
    zone: "South",
    lat: 12.9345,
    lng: 77.6111,
    rating: 4.4,
    reviews: 45000,
    fee: 0,
    hours: "10AM–10PM",
    category: "Entertainment",
    description: "One of the oldest modern malls in Bangalore featuring the landmark Landmark bookstore and PVR multiplex. Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Rich in history and culture. Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Perfect for a weekend outing.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Stunning experience! Guaranteed to leave you amazed."
    },
    image: "images/place_42.jpg",
    images: [
      "images/place_42.jpg"
    ]
  },
  {
    id: 43,
    name: "Indiranagar 100 Ft Road",
    zone: "East",
    lat: 12.9784,
    lng: 77.6408,
    rating: 4.5,
    reviews: 20000,
    fee: 0,
    hours: "10AM–11:30PM",
    category: "Entertainment",
    description: "The heart of Bangalore's nightlife. A long vibrant street lined with the city's best microbreweries, restobars, and chic boutiques. Ranked among the highest-rated spots in the city.  Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. A must-visit for tourists and locals alike. Ranked among the highest-rated spots in the city.  Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Rich in history and culture.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Breathtaking experience! Spectacular views and great ambiance. Definitely check this out."
    },
    image: "images/place_43.jpg",
    images: [
      "images/place_43.jpg"
    ]
  },
  {
    id: 44,
    name: "Snow City",
    zone: "North",
    lat: 13.0132,
    lng: 77.5925,
    rating: 3.9,
    reviews: 14000,
    fee: 600,
    hours: "10AM–8PM",
    category: "Entertainment",
    description: "An indoor sub-zero theme park offering snow slides, snowball fights, and 9D cinema. Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. Highly recommended by travel experts. Guaranteed to provide hours of fun, vibrant energy, and unforgettable memories. A must-visit for tourists and locals alike.",
    customAIVerdict: {
      className: "ai-warning",
      text: "AI VERDICT: Serene experience! An absolute delight to visit."
    },
    image: "images/place_44.jpg",
    images: [
      "images/place_44.jpg"
    ]
  },
  {
    id: 45,
    name: "Nandi Hills",
    zone: "Day Trip",
    lat: 13.3839,
    lng: 77.6833,
    rating: 4.6,
    reviews: 45000,
    fee: 5,
    hours: "Best at sunrise",
    category: "Nature",
    description: "An ancient hill fortress offering breathtaking sunrise views, misty cool weather, and ancient temples at the peak. Ranked among the highest-rated spots in the city.  A tranquil environment making it a perfect getaway for nature lovers. Perfect for a weekend outing. Ranked among the highest-rated spots in the city.  A tranquil environment making it a perfect getaway for nature lovers. A true gem of Bangalore.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Vibrant experience! An ideal place to spend your time. A premium experience."
    },
    image: "images/place_45.jpg",
    images: [
      "images/place_45.jpg"
    ]
  },
  {
    id: 46,
    name: "Muthyala Maduvu (Pearl Valley)",
    zone: "Day Trip",
    lat: 12.7226,
    lng: 77.6715,
    rating: 4.1,
    reviews: 6500,
    fee: 10,
    hours: "8AM–5PM",
    category: "Nature",
    description: "A lush ravine with a waterfall that looks like drops of pearls. It is famous for weekend trekking and picnics. A tranquil environment making it a perfect getaway for nature lovers. Perfect for a weekend outing. A tranquil environment making it a perfect getaway for nature lovers. Offers a serene escape from the city noise.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Historic experience! Perfect for enriching your Bangalore trip. Definitely check this out."
    },
    image: "images/place_46.jpg",
    images: [
      "images/place_46.jpg"
    ]
  },
  {
    id: 47,
    name: "Skandagiri Hills",
    zone: "Day Trip",
    lat: 13.4173,
    lng: 77.6835,
    rating: 4.5,
    reviews: 8000,
    fee: 250,
    hours: "Night trek entry 4AM",
    category: "Adventure",
    description: "A towering mountain fortress famous for its spectacular night treks that culminate in a sunrise above the clouds. Ranked among the highest-rated spots in the city. Rich in history and culture. Ranked among the highest-rated spots in the city. Offers a serene escape from the city noise.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Magnificent experience! Truly captures the essence of the city."
    },
    image: "images/place_47.jpg",
    images: [
      "images/place_47.jpg"
    ]
  },
  {
    id: 48,
    name: "Shivanasamudra Falls",
    zone: "Day Trip",
    lat: 12.2982,
    lng: 77.1704,
    rating: 4.7,
    reviews: 15000,
    fee: 0,
    hours: "8AM–5PM",
    category: "Nature",
    description: "A magnificent segmented waterfall plunging over 300 feet, featuring the Gaganachukki and Bharachukki cascades. Ranked among the highest-rated spots in the city.  A tranquil environment making it a perfect getaway for nature lovers. A true gem of Bangalore. Ranked among the highest-rated spots in the city.  A tranquil environment making it a perfect getaway for nature lovers. Highly recommended by travel experts.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Iconic experience! You simply cannot miss experiencing this."
    },
    image: "images/place_48.jpg",
    images: [
      "images/place_48.jpg"
    ]
  },
  {
    id: 49,
    name: "Bheemeshwari Nature Camp",
    zone: "Day Trip",
    lat: 12.3167,
    lng: 77.2667,
    rating: 4.3,
    reviews: 4000,
    fee: 1500,
    hours: "Day trip packages",
    category: "Adventure",
    description: "An eco-tourism hub on the Cauvery river offering coracle rides, zip-lining, and fishing for the mighty Mahseer.  Highly recommended by travel experts.  Absolutely breathtaking.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: A true hidden gem experience! Offers a deeply rewarding experience. Definitely check this out."
    },
    image: "images/place_49.jpg",
    images: [
      "images/place_49.jpg"
    ]
  },
  {
    id: 50,
    name: "Ramanagara Silk City",
    zone: "Day Trip",
    lat: 12.715,
    lng: 77.2811,
    rating: 4.2,
    reviews: 5500,
    fee: 0,
    hours: "Daytime",
    category: "Heritage",
    description: "Famous as the filming location for 'Sholay'. Beautiful rocky terrain mixed with enormous active silk markets. Steeped in centuries of fascinating history and architectural brilliance. Highly recommended by travel experts. Steeped in centuries of fascinating history and architectural brilliance. A true gem of Bangalore.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: A must-see experience! Highly recommended by locals."
    },
    image: "images/place_50.jpg",
    images: [
      "images/place_50.jpg"
    ]
  },
  {
    id: 51,
    name: "Chunchi Falls",
    zone: "Day Trip",
    lat: 12.3685,
    lng: 77.4527,
    rating: 4.3,
    reviews: 6200,
    fee: 0,
    hours: "8AM–5PM",
    category: "Nature",
    description: "A scenic cascading waterfall nestled amongst rocky hills and deep gorges, perfect for photography. A tranquil environment making it a perfect getaway for nature lovers. A must-visit for tourists and locals alike. A tranquil environment making it a perfect getaway for nature lovers. Absolutely breathtaking.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Unforgettable experience! A fantastic destination for memory-making."
    },
    image: "images/place_51.jpg",
    images: [
      "images/place_51.jpg"
    ]
  },
  {
    id: 52,
    name: "Lepakshi Temple",
    zone: "Day Trip",
    lat: 13.8016,
    lng: 77.5996,
    rating: 4.8,
    reviews: 11000,
    fee: 0,
    hours: "6AM–6PM",
    category: "Heritage",
    description: "Features the mysterious hanging pillar, spectacular Vijayanagara architectural carvings, and India's largest monolithic Nandi. Ranked among the highest-rated spots in the city.  Steeped in centuries of fascinating history and architectural brilliance. Absolutely breathtaking. Ranked among the highest-rated spots in the city.  Steeped in centuries of fascinating history and architectural brilliance. Rich in history and culture.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Captivating experience! A top-tier spot for your itinerary. Definitely check this out."
    },
    image: "images/place_52.jpg",
    images: [
      "images/place_52.jpg"
    ]
  },
  {
    id: 53,
    name: "Savandurga Hill",
    zone: "Day Trip",
    lat: 12.9197,
    lng: 77.2934,
    rating: 4.5,
    reviews: 9000,
    fee: 0,
    hours: "Sunrise to Sunset",
    category: "Adventure",
    description: "Rising to 1,226 meters, it is considered among the largest monolith hills in Asia. Highly popular for rigorous trekking. Ranked among the highest-rated spots in the city. Offers a serene escape from the city noise. Ranked among the highest-rated spots in the city. A must-visit for tourists and locals alike.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Picturesque experience! One of the best experiences the city offers. A premium experience."
    },
    image: "images/place_53.jpg",
    images: [
      "images/place_53.jpg"
    ]
  },
  {
    id: 54,
    name: "Microlight Flying Jakkur",
    zone: "North",
    lat: 13.0768,
    lng: 77.6015,
    rating: 4.8,
    reviews: 2000,
    fee: 3500,
    hours: "Weekends 7AM-10AM",
    category: "Adventure",
    description: "Experience an exhilarating 10-minute co-pilot flight soaring thousands of feet above Bangalore city. Ranked among the highest-rated spots in the city. A true gem of Bangalore. Ranked among the highest-rated spots in the city. Rich in history and culture.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Majestic experience! A place that truly lives up to its hype."
    },
    image: "images/place_54.jpg",
    images: [
      "images/place_54.jpg"
    ]
  },
  {
    id: 55,
    name: "Jamia Masjid",
    zone: "Central",
    lat: 12.9644,
    lng: 77.575,
    rating: 4.6,
    reviews: 8500,
    fee: 0,
    hours: "5AM–9PM",
    category: "Mosque",
    description: "The largest mosque in Bangalore, built in the 1940s, known for its stunning white marble facade and capacity to hold 10,000 worshippers. Ranked among the highest-rated spots in the city. Highly recommended by travel experts. Ranked among the highest-rated spots in the city. A must-visit for tourists and locals alike.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Spectacular experience! A wonderful escape from the ordinary. Definitely check this out."
    },
    image: "images/place_55.jpg",
    images: [
      "images/place_55.jpg"
    ]
  },
  {
    id: 56,
    name: "Holy Trinity Church",
    zone: "East",
    lat: 12.9733,
    lng: 77.6166,
    rating: 4.5,
    reviews: 6200,
    fee: 0,
    hours: "9AM–6PM",
    category: "Church",
    description: "A major landmark built in 1851 in English Renaissance style, featuring magnificent stained glass from London. Ranked among the highest-rated spots in the city. Highly recommended by travel experts. Ranked among the highest-rated spots in the city. Offers a serene escape from the city noise.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Enchanting experience! Make sure your camera is fully charged!"
    },
    image: "images/place_56.jpg",
    images: [
      "images/place_56.jpg"
    ]
  },
  {
    id: 57,
    name: "Shri Someshwara Swamy Temple",
    zone: "East",
    lat: 12.9738,
    lng: 77.6254,
    rating: 4.6,
    reviews: 9000,
    fee: 0,
    hours: "6AM–12PM, 5PM–9PM",
    category: "Temple",
    description: "One of the oldest temples in the city, dating back to the Chola period, dedicated to Lord Shiva. Ranked among the highest-rated spots in the city. Rich in history and culture. Ranked among the highest-rated spots in the city. Perfect for a weekend outing.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Fascinating experience! Guaranteed to leave you amazed. A premium experience."
    },
    image: "images/place_57.jpg",
    images: [
      "images/place_57.jpg"
    ]
  },
  {
    id: 58,
    name: "Mecca Masjid",
    zone: "South",
    lat: 12.92,
    lng: 77.59,
    rating: 4.4,
    reviews: 4000,
    fee: 0,
    hours: "Open 24 hours",
    category: "Mosque",
    description: "A beautifully architectured mosque located in the heart of the city providing a peaceful environment for prayers.  Highly recommended by travel experts.  Offers a serene escape from the city noise.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Exquisite experience! Spectacular views and great ambiance. Definitely check this out."
    },
    image: "images/place_58.jpg",
    images: [
      "images/place_58.jpg"
    ]
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
    description: "One of the oldest churches in Bangalore built in 1841, featuring stunning stained glass windows and Victorian architecture.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Absolute must-visit! A gorgeous, quiet historic retreat on Residency Road."
    },
    image: "images/place_1003.jpg",
    images: [
      "images/place_1003.jpg"
    ]
  },
  {
    id: 1005,
    name: "Noor Masjid",
    zone: "Central",
    lat: 12.9818,
    lng: 77.5962,
    rating: 4.8,
    reviews: 5000,
    fee: 0,
    hours: "Open 24 hours",
    category: "Heritage",
    description: "A beautifully constructed stunning Mosque located in the heart of Bangalore, known for its peaceful aura and magnificent glowing white architecture.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: Truly exceptionally beautiful mosque. A very serene spiritual escape."
    },
    image: "images/place_1005.jpg",
    images: [
      "images/place_1005.jpg"
    ]
  },
  {
    id: 1007,
    name: "Bilal Masjid",
    zone: "South",
    lat: 12.9103,
    lng: 77.6015,
    rating: 4.7,
    reviews: 9000,
    fee: 0,
    hours: "Open 24 hours",
    category: "Heritage",
    description: "One of the most modern and beautifully constructed mosques in South Bangalore (BTM Layout), well known for its massive community presence.",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended to visit, particularly beautiful design and atmosphere."
    },
    image: "images/place_1007.jpg",
    images: [
      "images/place_1007.jpg"
    ]
  },
  {
    id: 1008,
    name: "Infant Jesus Church",
    zone: "Central",
    lat: 12.9531,
    lng: 77.62,
    rating: 4.7,
    reviews: 21000,
    fee: 0,
    hours: "6AM–9PM",
    category: "Church",
    description: "Established in 1971, this globally recognized Roman Catholic church sees massive numbers of devotees and features beautiful murals and unique brutalist/modern architecture.",
    customAIVerdict: {
      className: "ai-excellent",
      text: "AI VERDICT: A major spiritual center with thousands of weekly visitors. A must-see."
    },
    image: "images/place_1008.jpg",
    images: [
      "images/place_1008.jpg"
    ]
  },
  {
    id: 1009,
    name: "Masjid-E-Khadria",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.9,
    reviews: 3136,
    fee: 0,
    hours: "Open Daily",
    category: "Heritage",
    description: "A highly rated and deeply revered spiritual site located in Millers Road, Benson Town, Bangalore. An important cultural landmark in the city. 🕌",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Millers Road, Benson Town."
    },
    image: "images/place_1009.jpg",
    images: [
      "images/place_1009.jpg"
    ]
  },
  {
    id: 1010,
    name: "Sultan Shah Masjid",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.8,
    reviews: 4433,
    fee: 0,
    hours: "Open Daily",
    category: "Heritage",
    description: "A highly rated and deeply revered spiritual site located in Bowring Hospital Rd, Shivaji Nagar, Bangalore. An important cultural landmark in the city. 🕌",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Bowring Hospital Rd, Shivaji Nagar."
    },
    image: "images/place_1010.jpg",
    images: [
      "images/place_1010.jpg"
    ]
  },
  {
    id: 1011,
    name: "Hajee Sir Ismail Sait Masjid",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.9,
    reviews: 6458,
    fee: 0,
    hours: "Open Daily",
    category: "Heritage",
    description: "A highly rated and deeply revered spiritual site located in Mosque Road, Frazer Town, Bangalore. An important cultural landmark in the city. 🕌",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Mosque Road, Frazer Town."
    },
    image: "images/place_1011.jpg",
    images: [
      "images/place_1011.jpg"
    ]
  },
  {
    id: 1012,
    name: "Masjid Al Noor",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.9,
    reviews: 2703,
    fee: 0,
    hours: "Open Daily",
    category: "Heritage",
    description: "A highly rated and deeply revered spiritual site located in Dickenson Road, Halasuru, Bangalore. An important cultural landmark in the city. 🕌",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Dickenson Road, Halasuru."
    },
    image: "images/place_1012.jpg",
    images: [
      "images/place_1012.jpg"
    ]
  },
  {
    id: 1013,
    name: "Modi Masjid",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.9,
    reviews: 5662,
    fee: 0,
    hours: "Open Daily",
    category: "Heritage",
    description: "A highly rated and deeply revered spiritual site located in Chikka Bazar Road, Shivaji Nagar, Bangalore. An important cultural landmark in the city. 🕌",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Chikka Bazar Road, Shivaji Nagar."
    },
    image: "images/place_1013.jpg",
    images: [
      "images/place_1013.jpg"
    ]
  },
  {
    id: 1014,
    name: "Masjid-E-Muzammil",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.8,
    reviews: 6123,
    fee: 0,
    hours: "Open Daily",
    category: "Heritage",
    description: "A highly rated and deeply revered spiritual site located in Nagavara, Bangalore. An important cultural landmark in the city. 🕌",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Nagavara."
    },
    image: "images/place_1014.jpg",
    images: [
      "images/place_1014.jpg"
    ]
  },
  {
    id: 1015,
    name: "Dargah Hazrat Tawakkal Shah Mastan",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.8,
    reviews: 3174,
    fee: 0,
    hours: "Open Daily",
    category: "Heritage",
    description: "A highly rated and deeply revered spiritual site located in Cottonpete, Bangalore. An important cultural landmark in the city. 🕌",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Cottonpete."
    },
    image: "images/place_1015.jpg",
    images: [
      "images/place_1015.jpg"
    ]
  },
  {
    id: 1016,
    name: "Jumma Masjid",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.6,
    reviews: 2674,
    fee: 0,
    hours: "Open Daily",
    category: "Heritage",
    description: "A highly rated and deeply revered spiritual site located in Dispensary Road, Shivaji Nagar, Bangalore. An important cultural landmark in the city. 🕌",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Dispensary Road, Shivaji Nagar."
    },
    image: "images/place_1016.jpg",
    images: [
      "images/place_1016.jpg"
    ]
  },
  {
    id: 1017,
    name: "Sangeen Jama Masjid",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.6,
    reviews: 1874,
    fee: 0,
    hours: "Open Daily",
    category: "Heritage",
    description: "A highly rated and deeply revered spiritual site located in Cubbonpete, Bangalore. An important cultural landmark in the city. 🕌",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Cubbonpete."
    },
    image: "images/place_1017.jpg",
    images: [
      "images/place_1017.jpg"
    ]
  },
  {
    id: 1018,
    name: "Masjid-E-Quba",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.6,
    reviews: 3957,
    fee: 0,
    hours: "Open Daily",
    category: "Heritage",
    description: "A highly rated and deeply revered spiritual site located in Yarab Nagar, Banashankari, Bangalore. An important cultural landmark in the city. 🕌",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Yarab Nagar, Banashankari."
    },
    image: "images/place_1018.jpg",
    images: [
      "images/place_1018.jpg"
    ]
  },
  {
    id: 1019,
    name: "Masjid-al Ameen",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.7,
    reviews: 5670,
    fee: 0,
    hours: "Open Daily",
    category: "Heritage",
    description: "A highly rated and deeply revered spiritual site located in Sudhama Nagar, Bangalore. An important cultural landmark in the city. 🕌",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Sudhama Nagar."
    },
    image: "images/place_1019.jpg",
    images: [
      "images/place_1019.jpg"
    ]
  },
  {
    id: 1020,
    name: "Masjid-E-Ibrahim",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.2,
    reviews: 2707,
    fee: 0,
    hours: "Open Daily",
    category: "Heritage",
    description: "A highly rated and deeply revered spiritual site located in Ragipet, KR Market, Bangalore. An important cultural landmark in the city. 🕌",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Ragipet, KR Market."
    },
    image: "images/place_1020.jpg",
    images: [
      "images/place_1020.jpg"
    ]
  },
  {
    id: 1021,
    name: "Shree Banashankari Devi Temple",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.8,
    reviews: 3720,
    fee: 0,
    hours: "Open Daily",
    category: "Architecture",
    description: "A highly rated and deeply revered spiritual site located in Banashankari, Bangalore. An important cultural landmark in the city. 🛕",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Banashankari."
    },
    image: "images/place_1021.jpg",
    images: [
      "images/place_1021.jpg"
    ]
  },
  {
    id: 1022,
    name: "Shri Kadu Malleshwara Swamy Temple",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.8,
    reviews: 3882,
    fee: 0,
    hours: "Open Daily",
    category: "Architecture",
    description: "A highly rated and deeply revered spiritual site located in Malleshwaram, Bangalore. An important cultural landmark in the city. 🛕",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Malleshwaram."
    },
    image: "images/place_1022.jpg",
    images: [
      "images/place_1022.jpg"
    ]
  },
  {
    id: 1023,
    name: "Shri Suryanaarayana Swamy Temple",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.8,
    reviews: 2744,
    fee: 0,
    hours: "Open Daily",
    category: "Architecture",
    description: "A highly rated and deeply revered spiritual site located in Domlur, Bangalore. An important cultural landmark in the city. 🛕",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Domlur."
    },
    image: "images/place_1023.jpg",
    images: [
      "images/place_1023.jpg"
    ]
  },
  {
    id: 1024,
    name: "Shrungagiri Sri Shanmukha Swami Temple",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.7,
    reviews: 2510,
    fee: 0,
    hours: "Open Daily",
    category: "Architecture",
    description: "A highly rated and deeply revered spiritual site located in RR Nagar, Bangalore. An important cultural landmark in the city. 🛕",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in RR Nagar."
    },
    image: "images/place_1024.jpg",
    images: [
      "images/place_1024.jpg"
    ]
  },
  {
    id: 1025,
    name: "Shri Gavi Gangadhareshwara Swamy Temple",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.7,
    reviews: 4204,
    fee: 0,
    hours: "Open Daily",
    category: "Architecture",
    description: "A highly rated and deeply revered spiritual site located in Gavipuram, Bangalore. An important cultural landmark in the city. 🛕",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Gavipuram."
    },
    image: "images/place_1025.jpg",
    images: [
      "images/place_1025.jpg"
    ]
  },
  {
    id: 1026,
    name: "Shri Dharmaraya Swamy Temple",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.7,
    reviews: 5760,
    fee: 0,
    hours: "Open Daily",
    category: "Architecture",
    description: "A highly rated and deeply revered spiritual site located in Nagarathpete, Bangalore. An important cultural landmark in the city. 🛕",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Nagarathpete."
    },
    image: "images/place_1026.jpg",
    images: [
      "images/place_1026.jpg"
    ]
  },
  {
    id: 1027,
    name: "Kote Sri Prasanna Venkataramana Swamy Temple",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.7,
    reviews: 6127,
    fee: 0,
    hours: "Open Daily",
    category: "Architecture",
    description: "A highly rated and deeply revered spiritual site located in Kalasipalya, Bangalore. An important cultural landmark in the city. 🛕",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Kalasipalya."
    },
    image: "images/place_1027.jpg",
    images: [
      "images/place_1027.jpg"
    ]
  },
  {
    id: 1028,
    name: "Sacred Heart Church",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.7,
    reviews: 4512,
    fee: 0,
    hours: "Open Daily",
    category: "Church",
    description: "A highly rated and deeply revered spiritual site located in Richmond Road, Bangalore. An important cultural landmark in the city. ⛪",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Richmond Road."
    },
    image: "images/place_1028.png",
    images: [
      "images/place_1028.png"
    ]
  },
  {
    id: 1029,
    name: "CSI St. Mark's Cathedral",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.6,
    reviews: 4318,
    fee: 0,
    hours: "Open Daily",
    category: "Church",
    description: "A highly rated and deeply revered spiritual site located in MG Road, Bangalore. An important cultural landmark in the city. ⛪",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in MG Road."
    },
    image: "images/place_1029.png",
    images: [
      "images/place_1029.png"
    ]
  },
  {
    id: 1030,
    name: "C.S.I St. Andrew's Church",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.6,
    reviews: 1830,
    fee: 0,
    hours: "Open Daily",
    category: "Church",
    description: "A highly rated and deeply revered spiritual site located in Cubbon Road, Bangalore. An important cultural landmark in the city. ⛪",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Cubbon Road."
    },
    image: "images/place_1030.jpg",
    images: [
      "images/place_1030.jpg"
    ]
  },
  {
    id: 1031,
    name: "St. John's Church",
    zone: "Central",
    lat: 12.9716,
    lng: 77.5946,
    rating: 4.6,
    reviews: 5150,
    fee: 0,
    hours: "Open Daily",
    category: "Church",
    description: "A highly rated and deeply revered spiritual site located in Frazer Town, Bangalore. An important cultural landmark in the city. ⛪",
    customAIVerdict: {
      className: "ai-good",
      text: "AI VERDICT: Highly recommended for its spiritual ambiance and beautiful architecture in Frazer Town."
    },
    image: "images/place_1031.jpg",
    images: [
      "images/place_1031.jpg"
    ]
  }
];;;

const manualLocations = {
  Koramangala: { lat: 12.9279, lng: 77.6271 },
  Whitefield: { lat: 12.9698, lng: 77.7499 },
  Indiranagar: { lat: 12.9784, lng: 77.6408 },
  Jayanagar: { lat: 12.9299, lng: 77.5826 },
  Rajajinagar: { lat: 12.9982, lng: 77.5530 }
};

let userLocation = null;
let currentView = 'cards';
let map = null;
let markersLayer = null;
let userMarker = null;

const state = {
  search: '',
  category: 'All',
  zone: 'All',
  sort: 'rating',
  itinerary: [],
  aiMode: false
};

const DOMElements = {
  cardsContainer: document.getElementById('cards-container'),
  mapContainer: document.getElementById('map-container'),
  dashboardContainer: document.getElementById('dashboard-container'),
  dashboardStats: document.getElementById('dashboard-stats'),
  dashboardList: document.getElementById('dashboard-list'),
  locationStatus: document.getElementById('location-status'),
  btnRefreshLocation: document.getElementById('btn-refresh-location'),
  dropdownFallback: document.getElementById('dropdown-fallback'),
  searchInput: document.getElementById('search-input'),
  categoryFilter: document.getElementById('category-filter'),
  zoneFilter: document.getElementById('zone-filter'),
  sortFilter: document.getElementById('sort-filter'),
  btnToggleView: document.getElementById('btn-toggle-view'),
  errorBox: document.getElementById('location-error'),
  loadingSpinner: document.getElementById('loading-spinner')
};

// Category Icons matching
const categoryIcons = {
  'Mosque': '🕌',
  'Temple': '🕉️',
  'Church': '⛪',
  'Heritage': '🏛️',
  'Nature': '🌳',
  'Education': '🔭',
  'Adventure': '🐅',
  'Entertainment': '🎢',
  'All': '📍'
};

const zoneColors = {
  'North': 'zone-north',
  'Central': 'zone-central',
  'East': 'zone-east',
  'South': 'zone-south',
  'West': 'zone-west',
  'Day Trip': 'zone-daytrip'
};

// Initialize the app
function init() {
  attachEventListeners();
  render();
  requestUserLocation();

  // Failsafe for geolocation hanging
  setTimeout(() => {
    if (DOMElements.locationStatus.textContent === 'Fetching location...') {
      DOMElements.locationStatus.textContent = 'Location timed out. Select manually.';
      DOMElements.loadingSpinner.style.display = 'none';
      DOMElements.errorBox.style.display = 'flex';
      if (state.sort === 'nearest') {
        DOMElements.sortFilter.value = 'rating';
        state.sort = 'rating';
      }
      render();
    }
  }, 11000);
}

// Event Listeners
function attachEventListeners() {
  DOMElements.searchInput.addEventListener('input', (e) => {
    state.search = e.target.value.toLowerCase();
    render();
  });
  DOMElements.categoryFilter.addEventListener('change', (e) => {
    state.category = e.target.value;
    render();
  });
  DOMElements.zoneFilter.addEventListener('change', (e) => {
    state.zone = e.target.value;
    render();
  });
  DOMElements.sortFilter.addEventListener('change', (e) => {
    state.sort = e.target.value;
    render();
  });
  DOMElements.btnRefreshLocation.addEventListener('click', requestUserLocation);
  DOMElements.dropdownFallback.addEventListener('change', handleManualLocation);
  DOMElements.btnToggleView.addEventListener('click', toggleView);

  const btnDashboard = document.getElementById('btn-toggle-dashboard');
  if (btnDashboard) {
    btnDashboard.addEventListener('click', toggleDashboard);
  }

  const btnAI = document.getElementById('btn-toggle-ai');
  if (btnAI) {
    btnAI.addEventListener('change', (e) => {
      state.aiMode = e.target.checked;
      renderCards(fetchProcessedPlaces());
    });
  }

  // Login Modal
  const btnLogin = document.getElementById('btn-login');
  const loginModal = document.getElementById('login-modal');
  const btnCloseLogin = document.getElementById('btn-close-login');

  if (btnLogin && loginModal && btnCloseLogin) {
    btnLogin.addEventListener('click', () => {
      loginModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    btnCloseLogin.addEventListener('click', () => {
      loginModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) {
        loginModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

// Geolocation
function requestUserLocation() {
  DOMElements.locationStatus.textContent = 'Fetching location...';
  DOMElements.loadingSpinner.style.display = 'inline-block';
  DOMElements.errorBox.style.display = 'none';

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        DOMElements.locationStatus.textContent = '📍 Location Available';
        DOMElements.loadingSpinner.style.display = 'none';

        // Use Nearest First as default when location available
        DOMElements.sortFilter.value = 'nearest';
        state.sort = 'nearest';

        updateMapUserLocation();
        render();
      },
      (error) => {
        console.warn("Geolocation error:", error);
        DOMElements.locationStatus.textContent = 'Location denied / unavailable';
        DOMElements.loadingSpinner.style.display = 'none';
        DOMElements.errorBox.style.display = 'flex';

        // Fallback sort if it was nearest
        if (state.sort === 'nearest') {
          DOMElements.sortFilter.value = 'rating';
          state.sort = 'rating';
        }
        render();
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  } else {
    DOMElements.locationStatus.textContent = 'Geolocation not supported';
    DOMElements.loadingSpinner.style.display = 'none';
    DOMElements.errorBox.style.display = 'flex';
  }
}

function handleManualLocation(e) {
  const selectedArea = e.target.value;
  if (!selectedArea) return;

  userLocation = manualLocations[selectedArea];
  DOMElements.locationStatus.textContent = `📍 Location Set: ${selectedArea}`;
  DOMElements.errorBox.style.display = 'none';

  if (state.sort !== 'nearest') {
    DOMElements.sortFilter.value = 'nearest';
    state.sort = 'nearest';
  }

  updateMapUserLocation();
  render();
}

// Math Utility
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function fetchProcessedPlaces() {
  let processed = [...places];

  // 1. Calculate distances and costs
  if (userLocation) {
    processed = processed.map(place => {
      const distance = calculateDistance(userLocation.lat, userLocation.lng, place.lat, place.lng);
      const autoCost = Math.max(50, Math.round(distance * 15));
      const cabCost = Math.max(100, Math.round(distance * 14));
      return { ...place, distance, autoCost, cabCost };
    });
  }

  // 2. Filter
  if (state.search) {
    processed = processed.filter(p => p.name.toLowerCase().includes(state.search) || p.category.toLowerCase().includes(state.search));
  }
  if (state.category !== 'All') {
    processed = processed.filter(p => p.category === state.category);
  }
  if (state.zone !== 'All') {
    processed = processed.filter(p => p.zone === state.zone);
  }

  // 3. Sort
  processed.sort((a, b) => {
    if (state.sort === 'nearest') {
      return (a.distance || 0) - (b.distance || 0);
    } else if (state.sort === 'rating') {
      return b.rating - a.rating; // Highest rating first
    } else if (state.sort === 'zone') {
      return a.zone.localeCompare(b.zone);
    } else if (state.sort === 'fee') {
      return a.fee - b.fee;
    }
    return 0;
  });

  return processed;
}

// Rendering
function render() {
  const data = fetchProcessedPlaces();
  if (currentView === 'cards') {
    renderCards(data);
  } else {
    updateMapData(data);
  }
}

function renderStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  let starsHTML = '';
  for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fas fa-star text-warning"></i>';
  if (halfStar) starsHTML += '<i class="fas fa-star-half-alt text-warning"></i>';
  for (let i = 0; i < emptyStars; i++) starsHTML += '<i class="far fa-star text-warning"></i>';

  return starsHTML;
}

function renderCards(data) {
  DOMElements.cardsContainer.innerHTML = '';
  if (data.length === 0) {
    DOMElements.cardsContainer.innerHTML = `<div class="no-results">No places match your criteria. 😢</div>`;
    return;
  }

  // Find closest place for Proximity Banner
  let closestPlaceId = null;
  if (userLocation && data.length > 0 && state.sort !== 'nearest') {
    let minDistance = Infinity;
    data.forEach(p => {
      if (p.distance && p.distance < minDistance) {
        minDistance = p.distance;
        closestPlaceId = p.id;
      }
    });
  }

  data.forEach((place, index) => {
    const card = document.createElement('div');
    card.className = 'place-card';
    card.style.animationDelay = `${index * 0.05}s`;

    const icon = categoryIcons[place.category] || categoryIcons['All'];
    const zoneClass = zoneColors[place.zone] || '';

    let proximityBanner = '';
    if (closestPlaceId === place.id && place.distance) {
      proximityBanner = `<div class="proximity-banner">📍 Nearest to You! (${place.distance.toFixed(1)} km)</div>`;
    }

    let distanceTag = '';
    let rideButtons = '';

    if (place.distance !== undefined) {
      distanceTag = `
        <div class="distance-tag">
          📍 ${place.distance.toFixed(1)} km away — Auto ~₹${place.autoCost} | Cab ~₹${place.cabCost}
        </div>
      `;

      const uberLink = `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=${place.lat}&dropoff[longitude]=${place.lng}`;

      rideButtons = `
        <div class="ride-buttons">
          <p class="ride-title" style="color: var(--primary); font-weight: 800; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">Ride with Uber:</p>
          <div class="ride-links" style="margin-bottom: 8px;">
            <a href="${uberLink}" target="_blank" class="btn-ride btn-uber" title="Open Uber" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.8rem; padding: 0.8rem; font-size: 1rem;">
              <i class="fab fa-uber"></i> Book a ride with Uber
            </a>
          </div>
        </div>
      `;

    }

    const priceHTML = place.fee === 0
      ? `<span class="free-badge">FREE ENTRY</span>`
      : `<span class="fee-text">₹${place.fee} Entry</span>`;

    // AI Verdict Logic
    let aiVerdictHTML = '';
    if (state.aiMode) {
      let verdictObj = getAIVerdict(place);
      aiVerdictHTML = `
        <div class="ai-verdict-box ${verdictObj.className}">
          <div class="ai-header"><i class="fas fa-robot"></i> AI Verdict</div>
          <p>${verdictObj.text}</p>
        </div>
      `;
    }

    const inItinerary = state.itinerary.includes(place.id);
    const itineraryBtnText = inItinerary ? '<i class="fas fa-check"></i> Added' : '<i class="fas fa-plus"></i> Add to Dashboard';
    const itineraryBtnClass = inItinerary ? 'btn-itinerary active' : 'btn-itinerary';

    card.innerHTML = `
      <div class="card-image-wrapper">
        ${proximityBanner}
        <img src="${place.image}" referrerpolicy="no-referrer" alt="${place.name}" loading="lazy" class="card-image"  onclick="openModal(${place.id})">
        <div class="card-badges-top">
          <span class="zone-badge ${zoneClass}">${place.zone}</span>
          <span class="category-badge">${icon} ${place.category}</span>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${place.name}</h3>
        <p class="card-desc">${place.description}</p>
        
        <div class="card-meta">
          <div class="meta-item">
            <i class="far fa-clock"></i> ${place.hours}
          </div>
          <div class="meta-item price-item">
            ${priceHTML}
          </div>
        </div>
        
        <div class="rating-box">
          <span class="stars">${renderStarRating(place.rating)}</span>
          <span class="rating-text">${place.rating} (${place.reviews > 1000 ? (place.reviews / 1000).toFixed(1) + 'k' : place.reviews} reviews)</span>
        </div>
        
        ${aiVerdictHTML}

        ${distanceTag}
        ${rideButtons}
        <button class="${itineraryBtnClass}" onclick="toggleItinerary(${place.id}, event)">${itineraryBtnText}</button>
      </div>
    `;
    DOMElements.cardsContainer.appendChild(card);
  });
}

function getAIVerdict(place) {
  let score = 0;

  if (place.rating >= 4.5) score += 2;
  else if (place.rating >= 4.0) score += 1;

  if (place.fee === 0) score += 2;
  else if (place.fee <= 100) score += 1;

  if (place.distance) {
    if (place.distance < 5) score += 2;
    else if (place.distance < 15) score += 1;
  }

  if (score >= 5) {
    return { className: 'ai-excellent', text: "Absolute must-visit! Highly rated, budget-friendly, and highly accessible." };
  } else if (score >= 3) {
    return { className: 'ai-good', text: "Great choice for a day out. Solid ratings and reasonable logistics." };
  } else {
    return { className: 'ai-warning', text: "Might require some planning. Prepare for travel time or entry fees, but still highly iconic!" };
  }
}

// Dashboard Logic
function toggleItinerary(id, event) {
  if (event) {
    event.stopPropagation();
  }

  const index = state.itinerary.indexOf(id);
  if (index > -1) {
    state.itinerary.splice(index, 1);
  } else {
    state.itinerary.push(id);
  }

  render();
  if (currentView === 'dashboard') {
    renderDashboard();
  }
}

function calculateDashboardStats() {
  const data = fetchProcessedPlaces();
  const selectedPlaces = data.filter(p => state.itinerary.includes(p.id));

  let totalDistance = 0;
  let totalFee = 0;
  let totalAutoCost = 0;

  selectedPlaces.forEach(p => {
    totalDistance += p.distance || 0;
    totalFee += p.fee || 0;
    totalAutoCost += p.autoCost || 0;
  });

  // Assume generic 20km/h traffic speed for Bangalore logic
  const travelHours = totalDistance / 20;
  const totalTimeStr = travelHours > 0 ? `${Math.floor(travelHours)}h ${Math.round((travelHours % 1) * 60)}m` : '0m';

  return {
    count: selectedPlaces.length,
    distance: totalDistance.toFixed(1),
    fee: totalFee,
    autoCost: totalAutoCost,
    totalBudget: totalFee + totalAutoCost,
    travelTime: totalTimeStr,
    places: selectedPlaces
  };
}

function renderDashboard() {
  const stats = calculateDashboardStats();

  DOMElements.dashboardStats.innerHTML = `
    <div class="stat-box">
      <i class="fas fa-map-marker-alt"></i>
      <div class="stat-val">${stats.count}</div>
      <div class="stat-label">Places Selected</div>
    </div>
    <div class="stat-box">
      <i class="fas fa-rupee-sign"></i>
      <div class="stat-val">₹${stats.totalBudget}</div>
      <div class="stat-label">Est. Total Cost<br><small>(Entry ₹${stats.fee} + Auto ~₹${stats.autoCost})</small></div>
    </div>
    <div class="stat-box">
      <i class="fas fa-route"></i>
      <div class="stat-val">${stats.distance} km</div>
      <div class="stat-label">Total Est. Distance</div>
    </div>
    <div class="stat-box">
      <i class="fas fa-hourglass-half"></i>
      <div class="stat-val">${stats.travelTime}</div>
      <div class="stat-label">Est. Travel Time<br><small>(@20km/h traffic)</small></div>
    </div>
  `;

  DOMElements.dashboardList.innerHTML = '';
  if (stats.places.length === 0) {
    DOMElements.dashboardList.innerHTML = '<div class="no-results">Your dashboard is empty. Go add some places! 🎒</div>';
    return;
  }

  stats.places.forEach(p => {
    const item = document.createElement('div');
    item.className = 'dashboard-item';
    item.innerHTML = `
      <img src="${p.image}" alt="${p.name}" referrerpolicy="no-referrer" >
      <div class="dash-item-info">
        <h4>${p.name}</h4>
        <p>Entry: ${p.fee === 0 ? 'Free' : '₹' + p.fee}</p>
        <p>${p.distance ? '📍 ' + p.distance.toFixed(1) + ' km away' : ''}</p>
      </div>
      <button class="btn-remove" onclick="toggleItinerary(${p.id})"><i class="fas fa-times"></i></button>
    `;
    DOMElements.dashboardList.appendChild(item);
  });
}

function toggleDashboard() {
  const btnDashboard = document.getElementById('btn-toggle-dashboard');
  if (currentView !== 'dashboard') {
    currentView = 'dashboard';
    DOMElements.cardsContainer.style.display = 'none';
    DOMElements.mapContainer.style.display = 'none';
    DOMElements.dashboardContainer.style.display = 'block';
    btnDashboard.classList.add('active');
    if (DOMElements.btnToggleView) DOMElements.btnToggleView.classList.remove('active');
    renderDashboard();
  } else {
    currentView = 'cards';
    DOMElements.dashboardContainer.style.display = 'none';
    DOMElements.mapContainer.style.display = 'none';
    DOMElements.cardsContainer.style.display = 'grid';
    btnDashboard.classList.remove('active');
    DOMElements.btnToggleView.innerHTML = '<i class="fas fa-map-marked-alt"></i> Map View';
    renderCards(fetchProcessedPlaces());
  }
}

// Map View Functions
function toggleView() {
  const btnDashboard = document.getElementById('btn-toggle-dashboard');

  if (currentView === 'cards' || currentView === 'dashboard') {
    currentView = 'map';
    DOMElements.btnToggleView.innerHTML = '<i class="fas fa-th-large"></i> Card View';
    DOMElements.cardsContainer.style.display = 'none';
    DOMElements.dashboardContainer.style.display = 'none';
    if (btnDashboard) btnDashboard.classList.remove('active');

    DOMElements.mapContainer.style.display = 'block';

    if (!map) {
      initMap();
    }

    // Slight delay to ensure DOM updates before leaflet invalidates size
    setTimeout(() => {
      map.invalidateSize();
      updateMapData(fetchProcessedPlaces());
      updateMapUserLocation();
    }, 100);

  } else {
    currentView = 'cards';
    DOMElements.btnToggleView.innerHTML = '<i class="fas fa-map-marked-alt"></i> Map View';
    DOMElements.mapContainer.style.display = 'none';
    DOMElements.cardsContainer.style.display = 'grid';
    renderCards(fetchProcessedPlaces());
  }
}

function initMap() {
  map = L.map('map-container').setView([12.9716, 77.5946], 11); // Center of Bangalore

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);

  markersLayer = L.layerGroup().addTo(map);
}

function updateMapData(data) {
  if (!map || !markersLayer) return;

  markersLayer.clearLayers();

  const bounds = [];

  data.forEach(place => {
    const iconHTML = `<div class="custom-marker">${categoryIcons[place.category] || '📍'}</div>`;
    const customIcon = L.divIcon({
      html: iconHTML,
      className: 'custom-leaflet-marker',
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -36]
    });

    let popupContent = `
      <div class="map-popup">
        <h4>${place.name}</h4>
        <p class="popup-zone">${place.zone}</p>
        <p>${place.rating} ⭐ (${place.reviews} rev)</p>
    `;

    if (place.distance !== undefined) {
      popupContent += `<p class="popup-dist">📍 ${place.distance.toFixed(1)} km away</p>`;
    }

    popupContent += `</div>`;

    const marker = L.marker([place.lat, place.lng], { icon: customIcon })
      .bindPopup(popupContent);

    markersLayer.addLayer(marker);
    bounds.push([place.lat, place.lng]);
  });

  // Also include user location in bounds if exists
  if (userLocation) {
    bounds.push([userLocation.lat, userLocation.lng]);
  }

  if (bounds.length > 0) {
    map.fitBounds(L.latLngBounds(bounds), { padding: [50, 50] });
  }
}

function updateMapUserLocation() {
  if (!map || !userLocation) return;

  if (userMarker) {
    userMarker.setLatLng([userLocation.lat, userLocation.lng]);
  } else {
    // Create blue pulsing dot
    const userIcon = L.divIcon({
      className: 'user-location-marker',
      html: '<div class="pulse-dot"></div>',
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });
    userMarker = L.marker([userLocation.lat, userLocation.lng], { icon: userIcon, zIndexOffset: 1000 }).addTo(map);
    userMarker.bindPopup('<div class="map-popup" style="font-weight:bold;">Your Location</div>');
  }
}

// Modal Logic
function openModal(id) {
  const place = places.find(p => p.id === id);
  if (!place) return;

  const modalOverlay = document.getElementById('detailed-modal');
  const contentArea = document.getElementById('modal-content-area');

  let thumbnailsHTML = '';
  if (place.images && place.images.length > 0) {
    place.images.forEach((imgSrc, idx) => {
      thumbnailsHTML += `<img src="${imgSrc}" class="${idx === 0 ? 'active' : ''}" onclick="changeGalleryImage(this, '${imgSrc}')" referrerpolicy="no-referrer">`;
    });
  }

  let aiVerdictHTML = '';
  if (state.aiMode) {
    let verdictObj = getAIVerdict(place);
    aiVerdictHTML = `
      <div class="ai-verdict-box ${verdictObj.className}" style="margin-top: 0">
        <div class="ai-header"><i class="fas fa-robot"></i> AI Verdict</div>
        <p>${verdictObj.text}</p>
      </div>
    `;
  }

  let distanceHtml = place.distance ? `<p style="font-weight: bold; color: var(--secondary); margin-bottom: 10px;">📍 ${place.distance.toFixed(1)} km away — Auto ~₹${place.autoCost} | Cab ~₹${place.cabCost}</p>` : '';

  contentArea.innerHTML = `
    <button class="modal-close" onclick="closeModalFunc()" style="position: absolute; top: 15px; right: 15px; background: rgba(0,0,0,0.5); border: none; color: white; border-radius: 50%; width: 35px; height: 35px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10;"><i class="fas fa-times"></i></button>
    <div class="modal-body">
      <div class="modal-gallery">
        <img src="${place.images && place.images.length > 0 ? place.images[0] : place.image}" id="gallery-main-img" class="gallery-main" referrerpolicy="no-referrer" >
        <div class="gallery-thumbnails">
          ${thumbnailsHTML}
        </div>
      </div>
      
      <h2>${place.name}</h2>
      
      <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 15px;">
        <span class="category-badge">${categoryIcons[place.category] || '📍'} ${place.category}</span>
        <span class="zone-badge ${zoneColors[place.zone] || ''}">${place.zone}</span>
        <span class="rating-text" style="background:#f1f1f1; padding:4px 8px; border-radius:12px; font-weight:bold; font-size: 0.85rem;"><i class="fas fa-star text-warning"></i> ${place.rating} (${(place.reviews > 1000 ? (place.reviews / 1000).toFixed(1) + 'k' : place.reviews)} rev)</span>
        <span class="fee-text" style="background:${place.fee === 0 ? '#e8f5e9' : '#fff3e0'}; padding:4px 8px; border-radius:12px; font-weight:bold; font-size: 0.85rem; color:${place.fee === 0 ? '#2e7d32' : '#e65100'};">${place.fee === 0 ? 'FREE ENTRY' : '₹' + place.fee + ' Entry'}</span>
      </div>
      
      ${aiVerdictHTML}
      ${distanceHtml}
      
      <div class="ride-buttons" style="margin: 20px 0;">
        <p class="ride-title" style="color: var(--primary); font-weight: 800; margin-bottom: 10px;">Ride with Uber:</p>
        <a href="https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=${place.lat}&dropoff[longitude]=${place.lng}" target="_blank" class="btn-ride btn-uber" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.8rem; padding: 0.8rem; font-size: 1rem; background: #000; color: #fff; text-decoration: none; border-radius: 8px; font-weight: bold;">
          <i class="fab fa-uber"></i> Book a ride with Uber
        </a>
      </div>

      <div class="modal-description" style="line-height: 1.8; color: #333; font-size: 1.05rem; margin-bottom: 2rem; text-align: justify;">
        ${place.description || 'A beautiful attraction in Bangalore.'}
      </div>
      
      <div class="meta-item" style="font-weight: 600; font-size: 0.95rem; margin-bottom: 15px;">
        <i class="far fa-clock"></i> Timings: ${place.hours}
      </div>

      <button class="${state.itinerary.includes(place.id) ? 'btn-itinerary active' : 'btn-itinerary'}" 
              onclick="toggleItinerary(${place.id}, event)" 
              style="width: 100%; padding: 1rem; font-size: 1rem; margin-top: 10px;">
        ${state.itinerary.includes(place.id) ? '<i class="fas fa-check"></i> Added to Dashboard' : '<i class="fas fa-plus"></i> Add to Dashboard'}
      </button>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function changeGalleryImage(thumbnailElement, src) {
  const mainImg = document.getElementById('gallery-main-img');
  mainImg.src = src;

  const thumbnails = document.querySelectorAll('.gallery-thumbnails img');
  thumbnails.forEach(img => img.classList.remove('active'));
  thumbnailElement.classList.add('active');
}

// Close Modal Logic Function
window.closeModalFunc = function () {
  document.getElementById('detailed-modal').classList.remove('active');
  document.body.style.overflow = '';
};

// Run app
document.addEventListener('DOMContentLoaded', init);

// Helper to decode JWT without an external library securely for frontend
function parseJwt(token) {
  try {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

// Global Google Auth Handler
window.handleCredentialResponse = function (response) {
  const payload = parseJwt(response.credential);

  if (payload && payload.name) {
    localStorage.setItem('explore_blr_logged_in', 'true');
    localStorage.setItem('explore_blr_user', JSON.stringify({
      username: payload.name,
      email: payload.email,
      provider: 'google'
    }));

    // Hide login modal and show app content immediately
    document.getElementById('login-modal').classList.remove('active');
    document.getElementById('app-content').style.display = 'block';
    document.body.style.overflow = '';

    location.reload(); // Reload to refresh all application state dynamically
  } else {
    alert("Authentication failed. Please try again.");
  }
};

// Global Facebook SDK Initialization
window.fbAsyncInit = function () {
  FB.init({
    appId: '2745487539150943',
    cookie: true,
    xfbml: true,
    version: 'v19.0'
  });
};

// Authentication Logic
document.addEventListener('DOMContentLoaded', () => {
  const loginModal = document.getElementById('login-modal');
  const btnLogout = document.getElementById('btn-logout');
  const appContent = document.getElementById('app-content');
  const userGreeting = document.getElementById('user-greeting');

  const loginBox = document.getElementById('login-box');
  const signupBox = document.getElementById('signup-box');
  const linkSignup = document.getElementById('link-signup');
  const linkLogin = document.getElementById('link-login');
  const toggleToLogin = document.getElementById('toggle-to-login');
  const toggleToSignup = document.getElementById('toggle-to-signup');

  // Show login modal if not logged in
  // BYPASS: Auto-login for local development to avoid OAuth origin errors
  const isLocal = window.location.hostname === 'localhost' || 
                  window.location.hostname === '127.0.0.1' || 
                  window.location.hostname.startsWith('172.') || 
                  window.location.hostname.startsWith('192.168.');

  if (!localStorage.getItem('explore_blr_logged_in') && !isLocal) {
    loginModal.classList.add('active');
    appContent.style.display = 'none';
    document.body.style.overflow = 'hidden';
  } else {
    // If local, set a dummy login state if not already present
    if (isLocal && !localStorage.getItem('explore_blr_logged_in')) {
      localStorage.setItem('explore_blr_logged_in', 'true');
      localStorage.setItem('explore_blr_user', JSON.stringify({
        username: 'Local Developer',
        email: 'local@dev',
        provider: 'bypass'
      }));
    }
    
    loginModal.classList.remove('active');
    appContent.style.display = 'block';
    document.body.style.overflow = '';

    // Show user greeting
    try {
      const user = JSON.parse(localStorage.getItem('explore_blr_user'));
      if (user && user.username) {
        userGreeting.innerText = `Hi, ${user.username}`;
        userGreeting.style.display = 'inline';
      }
    } catch (e) { }

    btnLogout.style.display = 'block';
  }

  // Header logout button
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      localStorage.removeItem('explore_blr_logged_in');
      localStorage.removeItem('explore_blr_user');
      location.reload();
    });
  }

  // Toggle between Login and Signup
  linkSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginBox.style.display = 'none';
    signupBox.style.display = 'block';
    toggleToSignup.style.display = 'none';
    toggleToLogin.style.display = 'block';
  });

  linkLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupBox.style.display = 'none';
    loginBox.style.display = 'block';
    toggleToLogin.style.display = 'none';
    toggleToSignup.style.display = 'block';
  });

  // Handle successful login/signup action
  const authenticateUser = (btnElement, originalText, username) => {
    btnElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
    btnElement.disabled = true;
    // Simulate network delay
    setTimeout(() => {
      localStorage.setItem('explore_blr_logged_in', 'true');
      if (username) {
        localStorage.setItem('explore_blr_user', JSON.stringify({ username }));
      }
      location.reload(); // Reload to initialize full app state properly
    }, 1200);
  };

  // Forgot Password Mock
  const forgotLink = document.querySelector('.ig-forgot');
  if (forgotLink) {
    forgotLink.addEventListener('click', (e) => {
      e.preventDefault();
      const email = prompt("Enter your email or phone number to reset your password:");
      if (email) {
        alert("A password reset link has been sent to " + email + ".\n\nPlease check your inbox (simulated).");
      }
    });
  }

  // Forms submission
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const identifier = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;

    // Strict Validation Logic
    const storedUsers = JSON.parse(localStorage.getItem('explore_blr_registered_users')) || {};

    if (storedUsers[identifier] && storedUsers[identifier].password === password) {
      authenticateUser(btn, 'Log in', storedUsers[identifier].username);
    } else {
      alert("Invalid credentials. Please enter a proper ID and password, or sign up if you don't have an account.");
    }
  });

  document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const email = document.getElementById('signup-email').value.trim();
    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value;
    const fullname = document.getElementById('signup-fullname').value.trim();

    // Enhanced Validation
    if (!email.includes('@') || email.length < 5) {
      alert("Please enter a valid email address.");
      return;
    }
    if (username.length < 3) {
      alert("Username must be at least 3 characters long.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long for security.");
      return;
    }

    let storedUsers = JSON.parse(localStorage.getItem('explore_blr_registered_users')) || {};

    if (storedUsers[username] || storedUsers[email]) {
      alert("An account with that username or email already exists. Please log in.");
      return;
    }

    // Store user data
    const userData = { username, email, password, fullname };
    storedUsers[username] = userData;
    storedUsers[email] = userData;

    localStorage.setItem('explore_blr_registered_users', JSON.stringify(storedUsers));

    authenticateUser(btn, 'Sign up', username);
  });

  // Social Buttons
  const socialBtns = document.querySelectorAll('.social-btn');
  socialBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';

      let fbResponded = false;

      // Timeout alert if the SDK silently drops the request (e.g., on HTTP localhost)
      const fbTimeoutAlert = setTimeout(() => {
        if (!fbResponded) {
          fbResponded = true;
          btn.innerHTML = originalText;
          alert("Facebook Login was blocked or timed out.\n\nThis happens if you are running on http://localhost without a valid Facebook App ID. Facebook requires HTTPS (or configured localhost) and a valid App ID in the developer console to show the login popup.");
        }
      }, 3000);

      if (typeof FB !== 'undefined') {
        try {
          FB.getLoginStatus(function (statusResponse) {
            if (fbResponded) return;
            FB.login(function (response) {
              if (fbResponded) return;
              fbResponded = true;
              clearTimeout(fbTimeoutAlert);

              if (response.authResponse) {
                FB.api('/me', { fields: 'name,email' }, function (apiResponse) {
                  const username = apiResponse.name || 'Facebook User';
                  const email = apiResponse.email || '';

                  localStorage.setItem('explore_blr_logged_in', 'true');
                  localStorage.setItem('explore_blr_user', JSON.stringify({
                    username: username,
                    email: email,
                    provider: 'facebook'
                  }));
                  location.reload();
                });
              } else {
                btn.innerHTML = originalText;
                alert("Facebook login was cancelled or not fully authorized.");
              }
            }, { scope: 'public_profile,email' });
          });
        } catch (error) {
          console.error("Facebook SDK error:", error);
          clearTimeout(fbTimeoutAlert);
          btn.innerHTML = originalText;
          alert("An error occurred with the Facebook SDK. Check console for details.");
        }
      } else {
        clearTimeout(fbTimeoutAlert);
        btn.innerHTML = originalText;
        alert("Facebook SDK could not be loaded. Please ensure you are not running the app via file:// protocol. A local web server (like http://localhost:8000) is required.");
      }
    });
  });
});
