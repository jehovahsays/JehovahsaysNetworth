// --- Service Worker Content (Subconscious) ---
const CACHE = "localhost-wiki-v1.2.3";

const FILES = [
  "./",
  "./index.html",
  "./css.html",
  "./a.js",      
  "./styles.css", 
  "./manifest.json",
  "./icon-192.png",
  "./favicon.ico"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => key !== CACHE ? caches.delete(key) : null)
    )).then(() => self.clients.claim())
  );
});

// --- Enhanced Fetch Listener ---
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  // Matches root, index.html, or css.html regardless of fragments like #search
  const isCoreShell = url.pathname.endsWith('/') || 
                      url.pathname.includes('index.html') || 
                      url.pathname.includes('css.html');
  
  if (isCoreShell) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request) || caches.match('./index.html'))
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(res => res || fetch(event.request))
    );
  }
});
