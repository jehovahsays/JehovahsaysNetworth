# 📘 MEV Usage & Recovery Guide

## 🔑 Accessing the Brain
1. Start at the root directory (`index.html`).
2. Accept the Privacy Policy via the banner.
3. Click **ENTER SOVEREIGN BRAIN**.

## 💬 Using Sovereign Chat
1. Once inside the `/mev/` core, navigate to the Chat module.
2. **Offer/Answer**: Use the WebRTC handshake to connect directly to a peer. 
3. No data hits a server. Closing the tab wipes the ephemeral memory.

## 🔁 Reversing a Perimeter Breach
If you trigger the tripwire during testing, use the browser console (F12) to reset:
```javascript
localStorage.removeItem('mev_breach_detected');
localStorage.setItem('mev_privacy_consent', 'true');
localStorage.setItem('mev_human_verified', 'true');
location.href = '/';
