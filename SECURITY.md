# 🔐 Security Policy: The Immune System

## 🛡️ The Conscious Membrane (Root)
Access is guarded by a Humanity Handshake. Session tokens (`mev_human_verified`) are stored locally and are strictly required to enter the subconscious core. Users must also explicitly consent to the local storage of security flags.

## 🕳️ The Blackhole Sentinel
Unauthorized attempts to bypass the gateway or direct navigation to `/blackhole/` trigger an immediate lockout:
1. `mev_breach_detected` flag is raised in storage.
2. `mev_human_verified` status is revoked.
3. The entity is ejected back to the root gateway with a breach penalty.

## 💉 Input Sanitization
* **Wiki Content**: Sanitized via self-hosted `DOMPurify`.
* **P2P Chat**: Uses the `textContent` shield to ensure peer data is never executed as code.
