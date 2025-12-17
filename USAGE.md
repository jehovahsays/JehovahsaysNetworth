# MEV Wiki — Usage Guide

Welcome to **MEV**, the offline-first encrypted wiki.

---

## 🧰 Getting Started

1. Open `index.html` in your browser.
2. Click the “Install” button (PWA support).
3. You can now browse and edit offline — no server or internet needed.

---

## ✍️ Creating Pages

- Use the search bar to find/create pages.
- Content auto-saves using `localStorage`.
- Markdown-like formatting supported:
  - `# Heading`
  - `* Bullet`
  - `[[Page Name]]` → Internal link
  - `---` → Horizontal line

---

## 🔐 Local Encryption

- Set a PIN in **Settings** to enable encryption.
- Uses AES-GCM via Web Crypto API.
- Your PIN is never stored or transmitted.
- Without your PIN, encrypted data cannot be recovered.

---

## ⚙️ Settings

- Toggle dark/light mode.
- View storage usage.
- Backup/Import/Export wiki data.

---

## 🛑 Offline & Security Notes

- Everything is stored locally.
- **No cloud sync**.
- **No tracking or telemetry**.
- Works in any modern browser.

---

## 🧠 Pro Tip

- Voice support works even offline!
- Check `/log.html` and `/map.html` for advanced views.
