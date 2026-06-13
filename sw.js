// --- Service Worker Content (Subconscious) ---
const CACHE = "localhost-wiki-v1.4.9";





const FILES = [
  "./",
  "./index.html",
  "./css.html",
  "./dompurify.js", // Cached independently as an external asset
  "./a.js",      
  "./styles.css", 
  "./manifest.json",
  "./icon-192.png",
  "./favicon.ico"
];

// Installation: Cache core perimeter assets safely
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => {
        console.log("🌀 Perimeter cache initializing...");
        return cache.addAll(FILES);
      })
      .then(() => self.skipWaiting())
  );
});

// Activation: Flush outdated subconscious caches instantly
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE) {
          console.log(`🧹 Clearing legacy state cache: ${key}`);
          return caches.delete(key);
        }
      })
    )).then(() => self.clients.claim())
  );
});

// --- Hardened Fetch Listener ---
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  
  const isCoreShell = url.pathname.endsWith('/') || 
                      url.pathname.includes('index.html') || 
                      url.pathname.includes('css.html') ||
                      url.pathname.includes('dompurify.js') ||
                      url.pathname.includes('a.js');
  
  if (isCoreShell) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE).then(cache => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request).then(cachedResponse => {
            return cachedResponse || caches.match("./index.html");
          });
        })
    );
  }
});
