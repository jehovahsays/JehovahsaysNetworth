# 📜 The Evolution of Localhost

## [1.2.6-PerimeterFinal] - 2026-02-28
### **Added**
* **Persistent Theme Logic:** Integrated `localStorage` checks in `a.js` (Lines 1835-1855) to maintain "Less" mode state across sessions.
* **Static Fallback Perimeter:** Added a hardened `<noscript>` block in `index.html` (Lines 164-214) featuring a CSS-only dropdown menu and a static Privacy Doctrine.
* **Dual-Layer Firewall:** Added real-time sanitization to `a.js` that triggers on `input` events, complementing the existing search debounce.
* **UI Hardening:** Implemented global listeners to prevent context menus, dragging, and selection to block bot interactions.
* **Ghost Function Fix:** Defined `performWikiSearch` to handle sanitized data hand-off.

### **Changed**
* **Cache Synchronization:** Updated `sw.js` CACHE to `v1.2.3` to force a full refresh of the new security and theme logic.
* **Documentation Rewrite:** Updated README, SECURITY, and USAGE files to align with the v1.2.6 sovereignty standards.

## [1.2.5-GatewayFinal] - 2026-02-23
* **Protocol Sync:** Verified all language gateways correctly trigger the `index.html` handshake.
* **Root Guard:** Enforced `.htaccess` rules to block direct access to internal wiki pages.

## [1.2.4-SovereignDNA] - 2026-02-22
* **AI Handshake:** Introduced the standardized AI communication protocol in README.md.
