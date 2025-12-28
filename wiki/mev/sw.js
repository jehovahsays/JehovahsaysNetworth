/* MEV Wiki Service Worker v1.2.1 */
const CACHE_NAME = 'mev-subconscious-v15';

self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('SW: Installing and Preparing Cache...');
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
  console.log('SW: Subconscious Active.');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
