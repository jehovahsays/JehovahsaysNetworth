/* MEV Wiki Service Worker v1.2.1 */
const CACHE_NAME = 'mev-wiki-v1.2.1';

// Use relative paths so it works in the /mev/ subfolder
const FILES_TO_CACHE = [
  './',                          // This represents localhost/mev/
  './index.html',
  './manifest.json',
  './purify.min.js',
  './sw.js',
  './assets/icons/icon-512.png',
  './assets/icons/icon-192.png'  // Updated with ./ to ensure relative consistency
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
