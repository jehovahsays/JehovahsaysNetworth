# 📘 MEV Usage & Recovery Guide

## 💬 Using the Sovereign Chat
1. Navigate to `localhost/mev/#search`.
2. Click the **Chat** button.
3. **Step 1**: Create an Offer and share the code with your peer.
4. **Step 2**: Paste their Answer code to establish the link.
*Note: Chat is ephemeral. Closing the tab wipes the memory.*

## 🔁 Reversing a Perimeter Breach
If you trigger a tripwire, use the browser console (F12) to manually reset:
```javascript
localStorage.removeItem('mev_breach_detected');
localStorage.setItem('mev_human_verified', 'true');
location.reload();
