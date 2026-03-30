// Service Worker for Explore Bangalore PWA
const CACHE_NAME = 'explore-blr-v2';
const ASSETS_TO_CACHE = [
    './',
    './app.html',
    './index.html',
    './css/app.css',
    './css/auth.css',
    './css/modal.css',
    './js/places.js',
    './js/images.js',
    './js/filters.js',
    './js/map.js',
    './js/modal.js',
    './js/ai.js',
    './js/auth.js',
    './manifest.json'
];

// Install — cache core assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

// Fetch — network first, fallback to cache
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;

    // For API calls (Wikipedia, Unsplash), always try network
    if (event.request.url.includes('wikipedia.org') || 
        event.request.url.includes('unsplash.com') ||
        event.request.url.includes('googleapis.com') ||
        event.request.url.includes('leaflet') ||
        event.request.url.includes('fonts.googleapis') ||
        event.request.url.includes('cdnjs.cloudflare')) {
        event.respondWith(
            fetch(event.request).catch(() => caches.match(event.request))
        );
        return;
    }

    // For local assets — network first, cache fallback
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                const clone = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, clone);
                });
                return response;
            })
            .catch(() => caches.match(event.request))
    );
});
