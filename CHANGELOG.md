
## [1.2.1] – 2025-12-22
### 🔧 PWA & Service Worker Optimization
- **Fixed** Service Worker registration to use the explicit `/mev/` scope.
- **Updated** fetch listener logic to support subfolder-based path matching for `index.html`.
- **Improved** caching reliability for offline use by transitioning to relative paths in the `FILES` array.
- **Refined** the automatic update trigger to ensure the "Visual Cortex" (UI) refreshes immediately upon Service Worker activation.


## [1.2.0] – 2025-12-21
### 🚀 Immersive Layer Deployment
- **Added** `/m/` subdirectory to house interactive Three.js modules.
- **Deployed** `m/index.html` (Map), `m/players.html` (Player), and `m/search.html` (Search).
- **Synchronized** root documentation to reflect the new hierarchical structure.
- **Hardened** search forensics with mandatory no-cache headers.
