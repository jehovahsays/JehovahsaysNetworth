const CACHE_NAME = "mev-offline-wiki-v2";

const OFFLINE_FILES = [
  "./",
  "./index.html",
  "./wiki.html",
  "./auth.js",
  "./wiki.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./leaderboard.json"
];

// ✅ Install: Cache all files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(OFFLINE_FILES))
  );
  self.skipWaiting(); // Activate immediately
});

// ✅ Activate: Clean up old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim(); // Control pages immediately
});

// ✅ Fetch: Offline-first strategy
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(response => {
      return response || fetch(event.request).catch(() =>
        caches.match("./wiki.html") // fallback offline
      );
    })
  );
});