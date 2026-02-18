# 📜 The Evolution of Localhost

## [1.2.2-Sentinel] - 2026-02-17
### **Hardening & Firewalls**
* **CLI Firewall:** Removed the `handleCliAction` backdoor. Added a `<head>`-level interceptor in `wiki.html` to block unauthorized query parameters.
* **The Great Underscore Shift:** Implemented real-time space-to-underscore replacement in the UI to prevent `%20` encoding and script injection.
* **UI Stabilization:** Purged the `#banner` notifications to keep the interface focused on terminal-style sovereignty.

## [1.2.1-Standalone] - 2026-01-22
* **Subconscious Integrity:** Wrapped all logic in IIFE blocks to prevent global scope pollution.
* **The Blackhole Gateway:** Initial launch of the `index.html` bot-trap logic.
