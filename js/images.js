// js/images.js — Unsplash Source + Wikipedia fallback

function getUnsplashUrl(placeName, category) {
    const keywords = encodeURIComponent(placeName.replace(/\s+/g, '+') + '+Bangalore');
    return `https://source.unsplash.com/600x400/?${keywords}`;
}

async function fetchWikipediaImage(placeName) {
    try {
        const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(placeName + ' Bangalore')}&srlimit=1&format=json&origin=*`;
        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();
        
        if (searchData.query && searchData.query.search && searchData.query.search.length > 0) {
            const articleTitle = searchData.query.search[0].title;
            const imgUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(articleTitle)}&prop=pageimages&format=json&pithumbsize=600&origin=*`;
            const imgRes = await fetch(imgUrl);
            const imgData = await imgRes.json();
            const pages = imgData.query.pages;
            const page = Object.values(pages)[0];
            if (page && page.thumbnail && page.thumbnail.source) {
                return page.thumbnail.source;
            }
        }
        return null;
    } catch(e) {
        return null;
    }
}

async function loadAllPlaceImages() {
    const cards = document.querySelectorAll('.place-card');
    
    for (let card of cards) {
        const placeName = card.getAttribute('data-name');
        const img = card.querySelector('.card-img');
        const placeholder = card.querySelector('.img-placeholder');
        
        if (placeName && img) {
            // Try Unsplash Source first (instant, no API key needed)
            const unsplashUrl = getUnsplashUrl(placeName);
            
            img.onload = function() {
                this.style.display = 'block';
                if (placeholder) placeholder.style.display = 'none';
            };
            img.onerror = function() {
                // Fallback: try Wikipedia
                fetchWikipediaImage(placeName).then(function(wikiUrl) {
                    if (wikiUrl) {
                        img.onerror = function() {
                            // Final fallback: show gradient placeholder
                            this.style.display = 'none';
                        };
                        img.src = wikiUrl;
                    }
                });
            };
            img.src = unsplashUrl;
        }
    }
}

window.loadAllPlaceImages = loadAllPlaceImages;
window.fetchWikipediaImage = fetchWikipediaImage;
window.getUnsplashUrl = getUnsplashUrl;
