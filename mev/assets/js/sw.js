/* MEV Wiki Service Worker v1.2.1 */
const CACHE_NAME = 'mev-subconscious-v15';

// Use relative paths so it works in any subfolder
const FILES_TO_CACHE = [
  './',
  'index.html',
  'manifest.json',
  'assets/js/purify.min.js',
    'assets/js/sw.js',
	'assets/js/chat.js',
	  'assets/js/script.js',
  'assets/icons/icon-192.png'
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
