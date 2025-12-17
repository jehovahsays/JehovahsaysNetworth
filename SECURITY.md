# Security Policy — MEV Offline Wiki

## 🔐 Overview

MEV is a fully client-side app with no server component. All content is local, and no data ever leaves your browser.

---

## 🛡 Hardened Security Features

- Strict **Content-Security-Policy (CSP)** blocking all remote assets.
- **Referrer Policy** and **Permissions Policy** enforced via meta tags.
- No use of `eval()` or `Function()` — explicitly blocked in code.
- All JavaScript and CSS are inline.
- Input sanitization via `escapeHTML()`.

---

## 🔑 Encryption

- Optional user PIN enables **AES-GCM** encryption.
- Uses **PBKDF2** with salt for key derivation.
- Encrypted data is stored in localStorage.

---

## 📦 Storage Model

- Fully offline via `localStorage`.
- Works even without network access.
- Typical capacity: ~5MB (browser-dependent).
- Periodic backups are encouraged.

---

## ❗ Limitations

- No server means no collaboration or real-time sync.
- Clearing browser cache = data loss unless backed up.
- One-user model; no user access controls.

---

## 🛠 Reporting Issues

Please open a GitHub issue for bugs or vulnerabilities.
