# 📘 Usage Guide — MEV

This guide explains how to use the MEV (Multi Edit Vandalism) project, including offline and online modes, editing features, and user interaction via the `/mev/#main` interface.

---

## 🔑 Accessing the App

Most users will start by opening:

- `index.html` → Static offline-friendly homepage
- `index.php` → Optional PHP-based homepage if hosted on a server
- `/mev/index.html` → Wiki-style internal editor

---

## 🧠 /mev/#main — In-Browser Editor

The `/mev/#main` page provides a **client-side editor** with account-like features:

### 🆕 Create Account

- Opens a local setup screen
- Data is stored in localStorage or an optional backend
- No registration is sent to a server

### 🔐 Log In / Log Out

- Simulates a user login state
- Useful for enabling edit/save UI features
- Works entirely in the browser

### ✍️ Edit / Save / Cancel

- **Edit**: Opens current page section in editable form
- **Save**: Commits changes to localStorage or (if configured) a server via PHP
- **Cancel**: Discards unsaved edits

---

## 🔌 With JavaScript OFF

- Navigation: Basic links work
- Editor: Not functional
- Offline: Limited

**Use with JavaScript ON for full functionality**

---

## 🚫 What Not To Do

Do NOT visit `/blackhole/` directly.

If you ban yourself:
1. Open `/blackhole/blackhole.dat`
2. Remove your IP address
3. Save and reload

You’ll be unbanned instantly.

