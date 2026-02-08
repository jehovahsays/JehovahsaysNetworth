# 🔐 Security Policy

In the Localhost architecture, security is not a "wall" you build; it is an **Immune System** integrated into the code.

## 🛡️ Active Logic Sentinels
By removing the `/blackhole/` directory, we have moved from "Passive Traps" to "Active Sentinels." Logic within `a.js` monitors behavior:
1.  **Handshake Requirement:** Users must pass the "Humanity Handshake" on the splash page.
2.  **Breach Detection:** If an automated agent attempts to bypass the gateway or trigger "write" functions without verification, the system revokes access and ejects the session.
3.  **Self-XSS Shield:** The browser console issues a hard **"STOP!"** warning to prevent users from being tricked into pasting malicious code.

## 💉 Content Integrity
* **Sanitization:** Every piece of data rendered is scrubbed by the root-level `purify.min.js`.
* **Code-Blindness:** We use a strict Content Security Policy (CSP) that blocks `unsafe-eval`, ensuring that even if a script is injected, it cannot execute.
