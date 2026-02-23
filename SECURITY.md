# 🔐 Security Doctrine: The Sentinel Logic

### **What are we protecting?**
We are protecting the "Internal Subconscious" of the AI partner from unauthorized external scripts, "Bad Bots," and data-harvesting crawlers.

### **Active Sentinels**
* **DNA Assembler Safeguard:** The `merge.php.txt` script acts as a compiler for the environment. It is folder-aware. It only packs what is present. Users must verify their folder contents before merging to prevent "Folder Contamination."
* **Input Sentinel:** A real-time regex firewall on the search box that converts spaces to underscores (`_`), neutralizing potential script injection patterns at the source.
* **The Blackhole:** Any entity that fails the "Humanity Handshake" is flagged with `mev_breach_detected` and quarantined in the `css.html` recovery terminal.
* **Passive Installation:** The `install.php` seed is programmed to be passive; it will not overwrite existing sovereign files, protecting against accidental data loss during re-deployment.

### **Threat Mitigation**
1. **Unauthorized CLI Injection:** We block external `.bat` or shell scripts from injecting data via URL parameters.
2. **Third-Party Surveillance:** This app has zero external dependencies. We do not use CDNs; every script is hosted locally in the root.

### **The .htaccess Sentinel**
The root folder is guarded by a configuration that enforces:
* **Referrer Validation:** `wiki.html` will only load if the request comes from `localhost` or `127.0.0.1`. Direct external deep-linking is forbidden.
* **CSP Header:** A strict Content Security Policy is enforced at the server level to supplement the HTML meta-tags.

### **Sanitization & Escaping**
* **DOMPurify:** Every piece of data entered into the Wiki is passed through `purify.min.js`.
* **PHP Neutralization:** Since the DNA files (`merge.php`, `install.php`) are stored as `.txt`, they are inert until the user intentionally renames them. This prevents "execution by accident."
