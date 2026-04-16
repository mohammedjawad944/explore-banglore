// js/map.js
let map;
let markers = [];
const markersLayer = L.layerGroup();
window.placeMarkers = {};
let userLat = null;
let userLng = null;

document.addEventListener('DOMContentLoaded', initMap);

function initMap() {
    const mapEl = document.getElementById('map');
    if (!mapEl) return;
    
    map = L.map('map').setView([12.9716, 77.5946], 12);
    window.currentMap = map;
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    
    markersLayer.addTo(map);

    setTimeout(() => {
        map.invalidateSize();
    }, 100);

    const locBtn = document.getElementById('my-location-btn');
    if (locBtn) {
        locBtn.addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    userLat = position.coords.latitude;
                    userLng = position.coords.longitude;
                    
                    map.setView([userLat, userLng], 14);
                    
                    L.marker([userLat, userLng], {
                        icon: L.divIcon({
                            className: 'user-marker',
                            html: '<div style="background:#f0a500;width:15px;height:15px;border-radius:50%;border:2px solid #fff;"></div>'
                        })
                    }).addTo(map);

                    // Re-render to update distances and nearest pulse
                    if (typeof renderCards === 'function') {
                        document.getElementById('search-input').dispatchEvent(new Event('keyup'));
                    }
                }, () => {
                    alert('Location access denied or unavailable.');
                });
            } else {
                alert('Geolocation is not supported by your browser.');
            }
        });
    }
}

window.addMarkers = function(places) {
    if(!markersLayer) return;
    markersLayer.clearLayers();
    markers = [];
    window.placeMarkers = {};

    places.forEach(place => {
        const marker = L.marker([place.lat, place.lng]).bindPopup(`<b>${place.name}</b><br>${place.category}`);
        markersLayer.addLayer(marker);
        markers.push({ placeId: place.id, marker: marker });
        window.placeMarkers[place.id] = marker;
    });
};

window.calculateDistance = function(lat1, lon1, lat2, lon2) {
    if(!lat1 || !lon1) return Infinity;
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
};

window.mapCenterTo = function(lat, lng) {
    if(map) map.setView([lat, lng], 15);
};
