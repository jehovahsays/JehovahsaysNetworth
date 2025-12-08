# MEV Wiki – Offline, Secure Encyclopedia

MEV is a secure, private, offline-first web application that functions as an encyclopedia. It is optimized for:

![Website](https://img.shields.io/website?url=https%3A%2F%2Fjehovahsays.github.io%2Fmev%2F)
![Last Commit](https://img.shields.io/github/last-commit/jehovahsays/mev)
![Repo Size](https://img.shields.io/github/repo-size/jehovahsays/mev)
![License](https://img.shields.io/github/license/jehovahsays/mev)
![Version](https://img.shields.io/badge/Version-1.2.1--CSP--Hardened-blue)

- 🛡️ Complete user privacy (no remote APIs, no telemetry)
- 🔐 Secure-by-default practices (CSP, encryption, no tracking)
- 📶 Full offline support with Service Worker and manifest
- ♿ Accessibility enhancements
- 🌐 Deployable via GitHub Pages

---

## ✨ Features

- Encrypted local-only account system
- Fully CSP-compatible (no inline scripts/styles)
- No external requests, no analytics
- PWA-ready (installable, offline access)
- Screen reader support via `aria-live`, focus traps, keyboard controls
- No cookies, no external storage, no social embeds

---

## 📂 Project Structure

```
/
├── en/
│   ├── index.html        # Main app
│   ├── 404.html          # Offline error page
│   ├── css.html          # Fallback for no-JS users
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── icons/
│   ├── sw.js             # Service Worker
│   └── manifest.json     # PWA manifest
├── index.html            # Root launcher page
├── favicon.ico
├── robots.txt
```

---

## ♿ Accessibility

- `aria-live="polite"` added to real-time updates
- `role="dialog"` and `aria-modal="true"` used in modal
- Keyboard ESC key closes modal
- No auto-play media or motion

---

## 🌐 Hosting on GitHub Pages

1. Go to **Settings > Pages**
2. Select source branch (`main`) and root or `/docs`
3. Save and deploy

Live site: `https://yourusername.github.io/yourrepo`

---

## 🔒 Security Overview

This app implements:

- `Content-Security-Policy`: blocks all but local scripts/styles
- `Referrer-Policy: no-referrer`
- `Permissions-Policy`: disables camera/mic/geolocation
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- No trackers, cookies, or third-party scripts

See [`SECURITY.md`](SECURITY.md) for full details.

---

## 🧑‍💻 Contributing

- No third-party scripts or CDNs allowed
- All PRs must pass accessibility and security checks
- See [`CONTRIBUTING.md`](CONTRIBUTING.md)

---

## 📄 License

MIT © 2025 jehovahsays