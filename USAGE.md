📘 MEV Usage & Recovery Guide
🧭 Navigating the Subconscious
1. Verification: You must trigger the mev_human_verified flag at the root gateway.
2. Persistence: Once verified, the Service Worker (v1.2.1) caches the wiki for offline use.
3. Editing: Use the internal UI to manifest pages. All input is sanitized via DOMPurify to prevent corruption.
🔁 Reversing a Perimeter Breach
If you are redirected to the root with a ?reason=perimeter_breach message, it means a tripwire was triggered. This is an opportunity for reflection.
The Humanity Anchor (Manual Reset)
To reset your status and try again:
Open the Browser Console (F12).
Run the following code:
localStorage.removeItem('mev_breach_detected');
localStorage.setItem('mev_human_verified', 'true');
location.reload();
📦 Local Hosting
To run MEV on your own environment (iOS/Desktop):
git clone [https://github.com/jehovahsays/mev.git](https://github.com/jehovahsays/mev.git)
cd mev
# Use any local server (Python, PHPWin, etc.)
python -m http.server 8080
