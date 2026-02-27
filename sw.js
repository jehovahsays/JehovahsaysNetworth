// --- Service Worker Content (Subconscious) ---
const CACHE = "localhost-wiki-v1.2.2";

// Assets to cache for the 'Subconscious'
const FILES = [
  "./",
  "./index.html",
  "./a.js",      
  "./styles.css", 
  "./purify.min.js",
  "./manifest.json",
  "./icon-192.png"
];

// --- Install Listener ---
self.addEventListener("install", event => {
  console.log('[Service Worker] Install Event - Caching App Shell:', CACHE);
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(FILES))
      .then(() => self.skipWaiting())
      .catch(err => console.error('[Service Worker] Install Failed:', err))
  );
});

// --- Activate Listener ---
self.addEventListener("activate", event => {
  console.log('[Service Worker] Activate Event - Cleaning old caches.');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Claims clients immediately to fix "first click" issues
  );
});

// --- Fetch Listener ---
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  
  // FIXED LOGIC: Include index.html in the Network-First strategy
  const isAppShell = url.pathname.endsWith('/') ||       
                     url.pathname.endsWith('/index.html');
  
  if (isAppShell) {
    event.respondWith(
      fetch(event.request)
        .then(networkRes => {
          if (networkRes.status === 200) {
            const resToCache = networkRes.clone();
            caches.open(CACHE).then(cache => cache.put(event.request, resToCache));
          }
          return networkRes;
        })
        .catch(() => caches.match(event.request)) 
    );
    return;
  }

  // Fallback for icons/manifest/static assets
  event.respondWith(
    caches.match(event.request).then(cacheRes => cacheRes || fetch(event.request))
  );
});
