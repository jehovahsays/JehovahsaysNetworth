# Contributing to MEV

Thank you for contributing to MEV — a privacy-first, offline-only wiki.

---

## ✅ What You Can Contribute

- Bug fixes, UI improvements, offline-compatible features
- Security enhancements (CSP, input sanitization)
- Performance optimizations
- Accessibility improvements
- Docs updates

---

## 🧱 Architecture Notes

MEV is a **single-page, CSP-hardened** web app:
- No external assets (scripts, fonts, CDNs).
- All logic must be inside `index.html`.
- Do **not** add network calls, analytics, or cookies.

---

## 🔐 Security Requirements

- CSP must remain strict: `default-src 'self'`
- No external APIs or third-party resources
- Use `escapeHTML()` for all dynamic HTML

---

## 🧪 Testing

- Open `index.html` in any modern browser
- Disconnect internet to test offline
- Simulate storage usage in DevTools

---

## 📥 How to Contribute

1. Fork the repo
2. Create a feature branch
3. Make your changes (respecting CSP/offline rules)
4. Submit a Pull Request

---

## 🙏 Thank You

Your help improves a fully offline, user-respecting knowledge system.
