const CACHE_NAME = "mev-offline-wiki-v3";
const OFFLINE_FILES = [
  "./",
  "./index.html",
  "./auth.js",
  "./main.js",
  "./style.css",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

// ✅ Install: Pre-cache essential offline files
self.addEventListener("install", event => {
  self.skipWaiting(); // Force activation immediately
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      try {
        await cache.addAll(OFFLINE_FILES);
        console.log("✅ Service Worker: Files cached successfully");
      } catch (err) {
        console.error("❌ Service Worker install failed to cache:", err);
      }
    })
  );
});

// ✅ Activate: Clear old versions of caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim(); // Take control immediately
});

// ✅ Fetch: Offline-first strategy with fallback to network or minimal fallback
self.addEventListener("fetch", event => {
  const { request } = event;

  // Limit to same-origin GET requests only
  if (request.method !== 'GET' || !request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request)
        .then(networkResponse => {
          // Optional: could cache new content here (dynamic caching)
          return networkResponse;
        })
        .catch(() => {
          // Fallback for navigation (e.g. address bar or reload)
          if (request.mode === 'navigate') {
            return caches.match('./index.html');
          }

          // Fallback for other asset types (e.g. images/fonts)
          const accept = request.headers.get('accept') || '';
          if (accept.includes('text/html')) {
            return caches.match('./index.html');
          } else if (accept.includes('image')) {
            return new Response('', { status: 404 });
          } else {
            return new Response('Offline and no fallback available.', {
              status: 503,
              headers: { 'Content-Type': 'text/plain' }
            });
          }
        });
    })
  );
});