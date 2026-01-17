🔐 Security Policy: The Immune System
🛡️ The Blackhole Tripwire
Located at /mev/blackhole/, this sentinel acts as a "Bad Bot" trap. Any unauthorized access attempts log a persistent mev_breach_detected flag in localStorage, revoking access to the Subconscious until a manual reset occurs.
💉 Service Worker Hardening
• Scoping: The v1.2.1 Service Worker is strictly bound to the /mev/ scope.
• Integrity: Uses a "Cache First" strategy to ensure the "Subconscious" logic cannot be tampered with by external network injections.
• CSP: A strict Content Security Policy allows only self and blob: sources, preventing XSS and unauthorized script execution.
☣️ CVE Mitigation
MEV includes labs (like the next-security-lab) designed to teach protection against Next.js Server Action bypasses (CVE-2025-29927) by using an attacker's own force to trigger a local redirect (127.0.0.1).
