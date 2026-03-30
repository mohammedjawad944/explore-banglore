// js/filters.js — Final

function getCategoryEmoji(category) {
    const emojis = {
        'Parks': '🌳', 'Temples': '🛕', 'Mosques': '🕌',
        'Lakes': '🌊', 'Malls': '🛍️', 'Museums': '🏛️',
        'Palaces': '🏰', 'Markets': '🏪', 'Restaurants': '🍽️',
        'Attractions': '🎡', 'Heritage': '🏯', 'Landmarks': '🗿',
        'Day Trip': '🏔️'
    };
    return emojis[category] || '📍';
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const zoneFilter = document.getElementById('zone-filter');
    const sortSelect = document.getElementById('sort-select');
    const clearFiltersBtn = document.getElementById('clear-filters-btn');
    const grid = document.getElementById('cards-grid');
    const countDisplay = document.getElementById('results-count');

    if (!grid) return;

    function renderCards(placesToRender) {
        grid.innerHTML = '';
        countDisplay.innerText = `Showing ${placesToRender.length} of ${placesData.length} places`;

        // Determine nearest if location enabled
        let nearestDist = Infinity;
        let nearestId = null;
        if (window.userLat && window.userLng) {
            placesToRender.forEach(p => {
                const d = window.calculateDistance(userLat, userLng, p.lat, p.lng);
                if (d < nearestDist) {
                    nearestDist = d;
                    nearestId = p.id;
                }
            });
        }

        const aiToggle = document.getElementById('ai-toggle');
        const isAIOn = aiToggle ? aiToggle.checked : false;

        placesToRender.forEach((place, index) => {
            const isNearest = (window.userLat && window.userLng && place.id === nearestId);
            const distCalc = window.calculateDistance ? window.calculateDistance(window.userLat, window.userLng, place.lat, place.lng) : Infinity;
            const distText = distCalc !== Infinity ? `${distCalc.toFixed(1)} km away` : '';

            const badgeNearest = isNearest ? `<div class="badge-nearest">📍 Nearest to you</div>` : '';
            const badgeAI = window.getAIBadgeHTML ? window.getAIBadgeHTML(place, isAIOn) : '';
            
            const formatZone = place.zone.replace(/\s+/g, '');
            const unsplashUrl = window.getUnsplashUrl ? window.getUnsplashUrl(place.name) : '';

            const card = document.createElement('div');
            card.className = 'place-card';
            card.setAttribute('data-name', place.name);
            card.setAttribute('data-id', place.id);
            card.innerHTML = `
                ${badgeNearest}
                ${badgeAI}
                <div class="card-image-container" style="position:relative;overflow:hidden;border-radius:14px 14px 0 0;">
                    <img class="card-img" src="${unsplashUrl}" alt="${place.name}" style="width:100%;height:200px;object-fit:cover;display:none;" onload="this.style.display='block'; var p=this.parentElement.querySelector('.img-placeholder'); if(p) p.style.display='none';" onerror="this.style.display='none';">
                    <div class="img-placeholder" style="width:100%;height:200px;background:linear-gradient(135deg,#0f1328,#1a1f3a);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;">
                        <span style="font-size:2.5rem;">${getCategoryEmoji(place.category)}</span>
                        <span style="color:#f0b429;font-size:0.75rem;opacity:0.7;">${place.category}</span>
                    </div>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${place.name}</h3>
                    <div class="card-meta">
                        <span class="zone-badge zone-${formatZone}">${place.zone}</span>
                        <span class="rating"><i class="fas fa-star"></i> ${place.rating}</span>
                    </div>
                    <p class="card-desc">${place.description}</p>
                    <div class="card-footer">
                        <span class="distance">${distText}</span>
                        <button class="btn-details" onclick="openModal(${place.id})">Details</button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        // Update Map Markers
        if (typeof window.addMarkers === 'function') {
            window.addMarkers(placesToRender);
        }

        // Fetch real images for cards
        if (typeof window.loadAllPlaceImages === 'function') {
            window.loadAllPlaceImages();
        }
    }

    function applyFilters() {
        if(typeof placesData === 'undefined') return;

        const query = searchInput.value.toLowerCase();
        const cat = categoryFilter.value;
        const zone = zoneFilter.value;
        const sortMode = sortSelect.value;

        let filtered = placesData.filter(p => {
            const matchSearch = p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query);
            const matchCat = cat === 'All' || p.category === cat;
            const matchZone = zone === 'All' || p.zone === zone;
            return matchSearch && matchCat && matchZone;
        });

        if (sortMode === 'rating') {
            filtered.sort((a,b) => b.rating - a.rating);
        } else if (sortMode === 'distance' && window.userLat && window.userLng) {
            filtered.sort((a,b) => {
                const dA = window.calculateDistance(userLat, userLng, a.lat, a.lng);
                const dB = window.calculateDistance(userLat, userLng, b.lat, b.lng);
                return dA - dB;
            });
        } else if (sortMode === 'name') {
            filtered.sort((a,b) => a.name.localeCompare(b.name));
        }

        renderCards(filtered);
    }

    searchInput.addEventListener('keyup', applyFilters);
    categoryFilter.addEventListener('change', applyFilters);
    zoneFilter.addEventListener('change', applyFilters);
    sortSelect.addEventListener('change', applyFilters);

    clearFiltersBtn.addEventListener('click', () => {
        searchInput.value = '';
        categoryFilter.value = 'All';
        zoneFilter.value = 'All';
        sortSelect.value = 'default';
        applyFilters();
    });

    window.renderCards = renderCards;

    if(typeof placesData !== 'undefined') {
        applyFilters();
    }
});
