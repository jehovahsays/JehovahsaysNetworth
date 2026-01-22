# 📜 Changelog

## [1.2.1-standalone] - 2026-01-22
### 🔧 Synchronization & Hardening
- **Strict Scoping**: Encapsulated all internal logic in IIFEs to block remote CLI interference.
- **Sovereign Chat**: Implemented ephemeral P2P WebRTC chat with zero-data-retention.
- **Gatekeeper Update**: Added `safeRender` and `textContent` shields for all user/peer content.
- **Manifest v2**: Updated `manifest.json` to include Chat as a standalone PWA feature.
- **Path Correction**: Synchronized Service Worker to root-relative paths for `purify.min.js`.
