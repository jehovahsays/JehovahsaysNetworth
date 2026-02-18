# 🔐 Security Doctrine: The Sentinel Logic

### **What are we protecting?**
We are protecting the "Internal Subconscious" of the AI partner from unauthorized external scripts, "Bad Bots," and data-harvesting crawlers.

### **What are we protecting against?**
1.  **Unauthorized CLI Injection:** We have implemented a firewall that blocks external `.bat` or shell scripts from injecting data into the browser via URL parameters.
2.  **Cross-Site Scripting (XSS):** By using a strict **Content Security Policy (CSP)** and `purify.min.js`, we ensure that any injected code is "born dead."
3.  **Third-Party Surveillance:** This app has **zero** external dependencies. We do not use CDNs; every script (like DOMPurify) is hosted locally in the root.

### **Active Sentinels**
* **Input Sentinel:** A real-time regex firewall on the search box that converts spaces to underscores (`_`), neutralizing potential script injection patterns at the source.
* **The Blackhole:** Any entity that fails the "Humanity Handshake" is flagged with `mev_breach_detected` and quarantined in the `css.html` recovery terminal.
* **URL Masking:** The `history.replaceState` API hides file extensions, making the perimeter look like a native OS directory rather than a vulnerable website.
