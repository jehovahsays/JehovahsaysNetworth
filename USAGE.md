# 📘 MEV USAGE GUIDE

Welcome to MEV (Multi Edit Vandalism) — a secure, offline-first, AI-aware, interactive wiki designed to give you total control over your knowledge.

---

## 🧭 Getting Started

1. **Visit the Website**  
   ➜ [https://jehovahsays.github.io/mev/](https://jehovahsays.github.io/mev/)

2. **Pass the Human Verification Splash**  
   - On first load, you'll see a black splash screen.  
   - Use the search box to prove you're human.  
   - This sets the local flag:
     ```js
     localStorage.setItem('mev_human_verified', 'true');
     ```
   - Skipping this step will redirect you to `/mev/banned.html`.

3. **Explore Wiki Pages**  
   - Verified users can search, read, and interact with the page list.  
   - Use the dynamic search to find or filter entries.

4. **Create New Pages**  
   - Enter a new title that doesn’t exist.  
   - You’ll see a prompt to “Create Page.”  
   - Page creation is only available after human verification.

---

## 👤 Account & Encryption System (Optional)

- MEV includes a **username + PIN system** to create secure editing sessions.
- Your PIN is used to generate a strong key using `PBKDF2`.
- All content saved in your session is encrypted with **AES-GCM**.
- When you log out, your key is wiped from browser memory.

🔐 **Important**: If you forget your PIN, your data becomes unreadable — MEV never stores your key.

---

## ✍️ Page Editing

- Click **Edit** to open a page.
- Make changes using standard text — MEV supports basic markup.
- Click **Save** to write the updated content.

🧼 All input is **sanitized** using DOMPurify to prevent script injection or HTML corruption.

---

## 📤 Export / 📥 Import

You can export your session as a file and import it elsewhere.

- **Export**: Saves your pages, including encrypted content (if using a session).
- **Import**: Loads another session into your browser's `localStorage`.

🚨 Safety Measures:
- MEV strips embedded keys from imports.
- Imports are sandboxed and only activated after verification.
- Bad files are ignored or redirected for safety.

---

## 🔁 Reset or Remove a Ban

If you are redirected to `/banned.html`:

1. Open Developer Tools (or browser console)  
2. Run the following:
   ```js
   localStorage.removeItem('mev_breach_detected');
   localStorage.removeItem('mev_human_verified');
   
   	3.	Refresh the homepage
	4.	Interact with the splash screen again

This lets both humans and AI reflect, then resume.

⸻

🧠 Offline Use

MEV works without internet once loaded.

To run it locally:

git clone https://github.com/jehovahsays/mev.git
cd mev
python -m http.server 8080

Open http://localhost:8080 in your browser.

📦 Ensure blackhole/blackhole.dat is reachable from the correct scope to simulate verification locally.

⸻

📎 Helpful Files
	•	USAGE.md — This guide
	•	MOTIVATION.md — Philosophy & vision
	•	AI-REVIEWS.md — Human + AI reviews
	•	SECURITY.md — System perimeter and design ethics