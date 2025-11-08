# Security Policy

## Reporting a Vulnerability

If you discover a security issue in this project, please report it by opening an issue or emailing [youremail@example.com].

## Security Design Principles

- No server communication — all data is local (offline-first)
- Uses `localStorage` for user/session/page data
- Enforced `Content-Security-Policy` blocks inline scripts
- All pages sandboxed from third-party scripts