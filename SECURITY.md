# 🔐 Security Policy — MEV

## 🛡️ Directory Hardening
The `m/` directory is protected by the root-level firewall. 

- **Cross-Origin Security**: The `m/search.html` page implements `X-Frame-Options: DENY` and `Clear-Site-Data` headers to prevent forensic data leakage.
- **Cache Control**: All interactive pages in `/m/` are configured to prevent local caching of sensitive session data.
- **Access Control**: Unauthorized users redirected to `banned.html` are blocked from accessing the `/m/` subdirectory through persistent `localStorage` flags.

## 💉 Immune System (Service Worker)
- **Scoping**: The Service Worker is strictly bound to the `/mev/` scope to prevent cross-contamination with other projects on the same domain.
- **Blob Integrity**: The worker is inlined via Blob URL to ensure the "subconscious" logic cannot be easily modified or blocked by external script injections.

