// js/ai.js
document.addEventListener('DOMContentLoaded', () => {
    const aiToggle = document.getElementById('ai-toggle');
    if (!aiToggle) return;

    aiToggle.addEventListener('change', () => {
        const searchInput = document.getElementById('search-input');
        if(searchInput) searchInput.dispatchEvent(new Event('keyup'));
    });
});

window.getAIScore = function(place) {
    const dist = window.calculateDistance ? calculateDistance(window.userLat, window.userLng, place.lat, place.lng) : Infinity;
    const effectiveDist = dist === Infinity ? 10 : dist; // Default distance penalty
    return (place.rating * 40) - (place.entryFee * 0.5) - (effectiveDist * 2);
};

window.getAIBadgeHTML = function(place, isAIAssistActive) {
    if (!isAIAssistActive) return '';
    
    const score = window.getAIScore(place);
    let cls = '';
    let text = '';
    let icon = '';

    if (score > 150) {
        cls = 'ai-excellent';
        text = 'Excellent Choice';
        icon = 'fa-star';
    } else if (score > 100) {
        cls = 'ai-good';
        text = 'Good Option';
        icon = 'fa-thumbs-up';
    } else {
        cls = 'ai-consider';
        text = 'Consider';
        icon = 'fa-info-circle';
    }

    return `<div class="badge-ai ${cls}"><i class="fas ${icon}"></i> ${text}</div>`;
};
