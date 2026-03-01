# 🔐 Security Doctrine: The Sentinel Logic

### **The Active Perimeter**
* **Real-Time Input Scrubbing:** Every character entered into the system is passed through `DOMPurify` before it reaches the internal logic.
* **The Blackhole Redirect:** Unauthorized or suspicious traffic is diverted to `css.html`. Access to the "Conscious" state is only possible after a successful "Humanity Handshake" (`RESTORE` prompt).
* **Content Security Policy (CSP):** We enforce `default-src 'self'` to ensure no external scripts can ever execute within the root.

### **Zero-Dependency Mandate**
* This repository contains zero third-party links or CDNs. Every line of code, including the minified `DOMPurify` library, is hosted locally to prevent supply-chain attacks.
