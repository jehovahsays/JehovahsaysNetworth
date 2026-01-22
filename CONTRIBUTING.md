# 🤝 Contributing to MEV

## 📏 Coding Standards
1.  **Strict Local Scoping**: All new logic must be encapsulated in an IIFE `(function() { "use strict"; ... })();` to prevent external variable hijacking.
2.  **Relative Paths Only**: Use `./` for all internal links to maintain "folder-blind" mobility.
3.  **The textContent Rule**: Never use `.innerHTML` for user-generated or peer-received data. Use `textContent` or `DOMPurify.sanitize()`.
4.  **No 3rd Party Links**: All libraries must be self-hosted in the root of the `/mev/` folder.

## 💰 The Donation Model
If you use MEV to help others, do not charge them money. Offer creative solutions freely. If users wish to support the architecture, they may donate to the maintainer:
**Cash App: $morgansbyers**
