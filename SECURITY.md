# 🔐 Security Policy: The Immune System

## 🛡️ The Subconscious Shield
The `/mev/` directory is protected by a strict Content Security Policy (CSP) and a Service Worker that enforces local cache integrity.

## 💉 Input Sanitization & Ephemeral Data
* **Conscious Input**: All URI echos (`#create=`) are sanitized via `DOMPurify`.
* **Live Streams**: P2P chat messages use the `textContent` shield to ensure incoming text is never executed as code.
* **Zero Retention**: Chat history is ephemeral and never written to disk, eliminating the risk of a persistent data breach.

## 🕳️ Blackhole Sentinel
Unauthorized access to `/mev/blackhole/` triggers a session-wide lockout:
1. `mev_breach_detected` is set to `true`.
2. `mev_human_verified` is revoked.
3. The user/bot is ejected to the root sentinel for reflection.

## ☣️ Maintenance Whitelist
GitHub and Google crawlers are whitelisted to allow repository indexing without triggering tripwires.
