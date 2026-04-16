// js/modal.js — Final

function getCategoryEmojiModal(category) {
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
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');

    if (!modalOverlay || !modalClose) return;

    modalClose.addEventListener('click', () => {
        modalOverlay.classList.add('hidden');
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.add('hidden');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modalOverlay.classList.add('hidden');
        }
    });
});

window.openModal = function(placeId) {
    if(typeof placesData === 'undefined') return;

    const place = placesData.find(p => p.id === placeId);
    if (!place) return;

    window.currentModalPlace = place;

    const modalOverlay = document.getElementById('modal-overlay');
    const modalBody = document.getElementById('modal-body');

    let distCalc = window.userLat && window.userLng ? window.calculateDistance(window.userLat, window.userLng, place.lat, place.lng) : 10;
    let autoFare = Math.round(distCalc * 15);
    let cabFare = Math.round(distCalc * 25);
    const distText = window.userLat && window.userLng ? `${distCalc.toFixed(1)} km away` : 'Distance unknown';

    const localImageUrl = `images/place_${place.id}.jpg`;
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.name + ', Bangalore, Karnataka')}&destination_place_id=&travelmode=driving`;
    const uberUrl = `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=${encodeURIComponent(place.name + ', Bangalore')}&dropoff[latitude]=${place.lat}&dropoff[longitude]=${place.lng}`;

    modalBody.innerHTML = `
        <div style="position:relative;width:100%;height:250px;overflow:hidden;">
            <div id="modal-image-placeholder" style="width:100%;height:250px;background:linear-gradient(135deg,#0f1328,#1a1f3a);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;position:absolute;top:0;left:0;">
                <span style="font-size:4rem;">${getCategoryEmojiModal(place.category)}</span>
                <span style="color:#f0b429;font-size:0.85rem;opacity:0.7;">${place.category}</span>
            </div>
            <img id="modal-image" src="${localImageUrl}" alt="${place.name}" style="width:100%;height:250px;object-fit:cover;display:none;position:absolute;top:0;left:0;" onload="this.style.display='block'; document.getElementById('modal-image-placeholder').style.display='none';" onerror="this.style.display='none';">
        </div>
        <div class="modal-details">
            <h2 class="modal-title">${place.name}</h2>
            <div class="modal-category">${place.category} &bull; ${place.zone}</div>
            
            <div class="modal-grid">
                <div class="info-item">
                    <i class="fas fa-star"></i>
                    <span>${place.rating} / 5.0 Rating</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-ticket-alt"></i>
                    <span>${place.entryFee === 0 ? 'Free Entry' : '₹' + place.entryFee + ' Entry'}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${distText}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-clock"></i>
                    <span>${place.timings || 'Open 24/7'}</span>
                </div>
            </div>

            <div style="display:flex;gap:10px;margin:15px 0;">
                <button onclick="viewOnMap()" style="flex:1;padding:12px;background:rgba(240,180,41,0.1);color:#f0b429;border:1px solid rgba(240,180,41,0.3);border-radius:10px;font-size:0.9rem;font-weight:700;cursor:pointer;font-family:'DM Sans';transition:all 0.3s ease;">🗺️ View on Map</button>
                <a href="${googleMapsUrl}" target="_blank" style="flex:1;padding:12px;background:rgba(59,130,246,0.1);color:#60a5fa;border:1px solid rgba(59,130,246,0.3);border-radius:10px;font-size:0.9rem;font-weight:700;cursor:pointer;text-decoration:none;text-align:center;font-family:'DM Sans';transition:all 0.3s ease;">📍 Directions</a>
            </div>

            <p class="modal-desc">${place.description}</p>

            <div class="modal-grid" style="margin-bottom:0;">
                <div class="fare-box">
                    <div class="fare-item">
                        <span class="fare-title">Auto Fare Est.</span>
                        <span class="fare-price">₹${autoFare}</span>
                    </div>
                    <i class="fas fa-motorcycle" style="color:#555;font-size:1.3rem;"></i>
                </div>
                <div class="fare-box">
                    <div class="fare-item">
                        <span class="fare-title">Cab Fare Est.</span>
                        <span class="fare-price">₹${cabFare}</span>
                    </div>
                    <i class="fas fa-car" style="color:#555;font-size:1.3rem;"></i>
                </div>
            </div>
            
            <a href="${uberUrl}" target="_blank" style="display:flex;align-items:center;justify-content:center;gap:10px;width:100%;text-decoration:none;background:#000;color:#fff;border:1px solid #222;border-radius:10px;padding:14px;margin-top:15px;font-weight:700;font-family:'DM Sans';font-size:0.95rem;transition:all 0.3s ease;">
                <i class="fab fa-uber" style="font-size:1.2rem;"></i> Book Uber (est. ₹${cabFare})
            </a>
        </div>
    `;

    modalOverlay.classList.remove('hidden');

    // Set up Wikipedia fallback on error for the modal image
    const modalImg = document.getElementById('modal-image');
    if (modalImg && typeof fetchWikipediaImage === 'function') {
        modalImg.onerror = function() {
            this.style.display = 'none';
            fetchWikipediaImage(place.name).then(function(wikiUrl) {
                if (wikiUrl) {
                    modalImg.onerror = function() {
                        this.style.display = 'none';
                        const p = document.getElementById('modal-image-placeholder');
                        if (p) p.style.display = 'flex';
                    };
                    modalImg.onload = function() {
                        this.style.display = 'block';
                        const p = document.getElementById('modal-image-placeholder');
                        if (p) p.style.display = 'none';
                    };
                    modalImg.src = wikiUrl;
                }
            });
        };
        // If image already failed before we attached onerror, manually trigger it
        if (modalImg.complete && modalImg.naturalHeight === 0) {
            modalImg.onerror();
        }
    }
};

// Global viewOnMap function
window.viewOnMap = function() {
    const place = window.currentModalPlace;
    if (!place) return;

    const overlay = document.getElementById('modal-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
        overlay.style.display = '';
    }
    document.body.style.overflow = 'auto';

    const mapEl = document.getElementById('map');
    if (mapEl) {
        mapEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    setTimeout(() => {
        if (window.currentMap) {
            window.currentMap.setView([place.lat, place.lng], 16);
            window.currentMap.invalidateSize();

            if (window.placeMarkers && window.placeMarkers[place.id]) {
                const marker = window.placeMarkers[place.id];
                marker.openPopup();

                const markerEl = marker.getElement && marker.getElement();
                if (markerEl) {
                    markerEl.style.transition = 'transform 0.3s ease';
                    markerEl.style.transform = 'scale(1.4)';
                    setTimeout(() => { markerEl.style.transform = 'scale(1)'; }, 400);
                    setTimeout(() => { markerEl.style.transform = 'scale(1.2)'; }, 600);
                    setTimeout(() => { markerEl.style.transform = 'scale(1)'; }, 800);
                }
            }
        }
    }, 700);
};
