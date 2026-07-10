# 🔐 Security Doctrine: The Sentinel Logic

### **The Active Perimeter**
* **Input Scrubbing:** All system inputs are processed through a local `DOMPurify` instance before rendering to prevent cross-site scripting.
* **Redirection-to-Recovery:** Suspicious or hostile automated interactions are caught by the dynamic perimeter logic and diverted to the recovery environment (`css.html#search`). Returning to a verified state requires an authentic handshake (`RESTORE` prompt sequence).
* **Content Security Policy (CSP):** We mandate strict local rules to entirely block execution of injected outside assets.

### **Zero-Dependency Mandate**
* This repository contains **zero** third-party links, remote servers, or external CDNs. Every script, stylesheet, or logic module is completely localized within the directory structure to neutralize supply-chain risks and secure local sovereignty.
