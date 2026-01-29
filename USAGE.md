# 📘 MEV Usage & Recovery Guide

The MEV environment is now flatter and more direct. All files and functions are located in the root directory for maximum portability.

## 🔑 Accessing the Brain
1.  **Entry**: Start at the root `index.html`.
2.  **Verification**: Accept the Privacy Policy banner to generate the `mev_privacy_consent` flag.
3.  **Unlock**: Click **ENTER SOVEREIGN BRAIN** to reveal the wiki and communication modules.

## 📂 File Functionality Map
* **`a.js`**: Controls security, state management, and the Humanity Handshake.
* **`sw.js`**: The Service Worker providing full offline availability for the PWA.
* **`visual.html`**: The 3D Thermal Grid rendering engine for visual data mapping.
* **`purify.min.js`**: The local sanitization engine for secure content rendering.

## 🔁 Reversing a Perimeter Breach
If a logic-based sentinel triggers a lockout during testing, use the browser console (F12) to reset your environment:
```javascript
localStorage.removeItem('mev_breach_detected');
localStorage.setItem('mev_privacy_consent', 'true');
localStorage.setItem('mev_human_verified', 'true');
location.href = './';
