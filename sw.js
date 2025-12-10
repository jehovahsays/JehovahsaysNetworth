"use strict";
/*global self, caches, fetch, clients */

/**
 * sw.js - Service Worker for MEV Wiki PWA
 *
 * This Service Worker implements a Cache-First strategy for static assets
 * and a Network-First strategy for the main index page.
 */

// A unique name for your cache. Increment this version number every time
// you make changes to the files listed in the 'FILES' array.
const CACHE = "mev-wiki-v15"; 

// Full list of all static assets to cache during installation.
// All paths must be relative to the Service Worker's scope (which is the root '/').
const FILES = [
  "/",
  "/index.html",
  "/app.js",
  "/index.css",
  "/sw.js",
  "/manifest.json",
  "/favicon.ico",
  "/icon-192.png",
  "/icon-512.png",
  "/maskable-192.png",
  "/maskable-512.png",
  "/purify.min.js" // NEW: Added DOMPurify
];

// --- NEW: Integrity Hash Map (SHA-256 Hex) ---
// Note: You must update these hashes whenever you modify the corresponding file.
const FILES_WITH_INTEGRITY_HASHES = {
  "/purify.min.js": "478a07c34d3d2e1b35eab43f96024467094b0716b77207c452e806c9a7210620",
  // UNCOMMENT AND UPDATE THESE AFTER SAVING FILES LOCALLY:
  // "/index.html": "UPDATE_WITH_YOUR_HASH", 
  // "/app.js": "UPDATE_WITH_YOUR_HASH",
  // "/index.css": "UPDATE_WITH_YOUR_HASH",
};

// Utility function to calculate the hash (for use inside the SW)
async function calculateHash(response) {
  const buffer = await response.clone().arrayBuffer(); 
  const hashBuffer = await self.crypto.subtle.digest('SHA-256', buffer);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// --- Install Listener ---
self.addEventListener("install", event => {
  console.log('[Service Worker] Install Event - Caching App Shell:', CACHE);
  event.waitUntil(
    caches.open(CACHE)
      .then(async cache => {
        const fetchPromises = FILES.map(async url => {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Failed to fetch ${url}. Status: ${response.status}`);
            }

            // Perform Integrity Check if hash is defined for this file
            if (FILES_WITH_INTEGRITY_HASHES[url]) {
                const expectedHash = FILES_WITH_INTEGRITY_HASHES[url];
                const calculatedHash = await calculateHash(response);
                
                if (calculatedHash !== expectedHash) {
                    console.error(`[SW SRI Check] Integrity check failed for ${url}. Expected: ${expectedHash}, Got: ${calculatedHash}`);
                    throw new Error(`SRI check failed for ${url}`); 
                }
            }

            return cache.put(url, response.clone());
        });
        return Promise.all(fetchPromises);
      })
      .catch(err => {
        console.error('[Service Worker] Failed to cache critical assets:', err);
        // We do not reject here to allow partial installation if non-critical assets fail,
        // but for high security, you might want to return Promise.reject(err)
      })
  );
  self.skipWaiting(); 
});

// --- Activate Listener ---
self.addEventListener("activate", event => {
  console.log('[Service Worker] Activate Event - Cleaning old caches.');
  // Delete outdated caches to free up space.
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // If the current cache name is not in the whitelist (i.e., it's an old version), delete it.
          if (cacheName !== CACHE) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Claim clients immediately to take control of all open pages within the scope.
  return self.clients.claim();
});

// --- Fetch Listener ---
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  // Check if the request is for the main document (root or index.html)
  const isMainDocument = url.pathname === '/' || url.pathname === '/index.html';
  
  // Strategy 1: Network-First with Cache Fallback for index.html (and other non-static, critical URLs)
  if (isMainDocument) {
    event.respondWith(
      fetch(event.request)
        .then(networkRes => {
          // If the network response is good (200 OK), clone it, cache it (optional, for update freshness), 
          // and return the original response.
          if (networkRes.status === 200) {
            const resToCache = networkRes.clone();
            caches.open(CACHE).then(cache => cache.put(event.request, resToCache));
          }
          return networkRes;
        })
        .catch(() => {
          // FIX: Since the app is an SPA, on navigation failure, we must return the
          // cached app shell (/index.html) so the client-side JS can handle the 404 state.
          return caches.match('/index.html');
        })
    );
    return;
  }

  // Strategy 2: Cache-First for all other static assets (CSS, JS, Icons)
  // This is the fastest strategy for assets that rarely change.
  event.respondWith(
    caches.match(event.request).then(cacheRes => {
      // Return cached response if available
      return cacheRes || fetch(event.request)
        .catch(() => {
          // If both cache and network fail, check if this was a navigation request.
          if (event.request.mode === 'navigate') {
              // FIX: Return the cached index.html app shell for any failed navigation
              // to ensure the client-side router can handle the URL (e.g., show 404).
              return caches.match('/index.html');
          }
          // For sub-resources (images, scripts), failing silently is often better than serving HTML.
        });
    })
  );
});
