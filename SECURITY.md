# 🔐 Security Doctrine: The Sentinel Logic

### **The Active Perimeter**
* **Input Scrubbing:** All system inputs are passed through a local `DOMPurify` instance before processing.
* **The Blackhole Redirect:** Suspicious traffic is diverted to `css.html`. Access to the "Conscious" state requires a "Humanity Handshake" (`RESTORE` prompt).
* **Content Security Policy (CSP):** We enforce `default-src 'self'` to prevent external script execution.

### **Zero-Dependency Mandate**
* This repository contains **zero** third-party links or CDNs. Every line of code is hosted locally to prevent supply-chain attacks.
