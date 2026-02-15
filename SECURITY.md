# 🔐 The Immune System (Sentinel Logic)

Security here is not a wall; it is a biological response.

### **Active Sentinels**
* **The Blackhole:** Malicious actors or scripts that attempt unauthorized access are redirected to the `/blackhole/` perimeter, where their session is flagged and quarantined.
* **Input Sentinel:** A regex-based firewall monitors the search box for new scripts or injection attempts in real-time.
* **CSP Shield:** A strict Content Security Policy blocks `unsafe-eval`, ensuring that even if a script is injected, it is "born dead" and cannot execute.

### **Privacy Boundary**
No third-party links are permitted. If a library is needed (like `purify.min.js`), it must be hosted locally in the root.
