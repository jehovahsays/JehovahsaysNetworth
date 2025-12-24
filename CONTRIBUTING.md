# 🤝 CONTRIBUTING TO MEV

Thank you for your interest in contributing to **MEV (Multi Edit Vandalism)**.

MEV is an offline‑first, client‑side, AI‑aware knowledge system designed to protect user autonomy, ethical interaction, and long‑term access to information. Contributions are welcome — with care.

---

## 🧭 Project Philosophy (Please Read First)

MEV is not a typical web app.

- There is **no backend**
- There is **no server database**
- All logic runs in the browser
- All data lives in `localStorage`
- Security is **behavior‑based**, not CAPTCHA‑based
- AI agents are treated as **learners**, not enemies

When contributing, your changes should respect:
- Human agency
- Offline durability
- Ethical boundaries for automation
- Transparency over obscurity

---

## 🧑‍💻 How to Contribute

1. **Fork the repository**
2. Create a feature branch:
   ```bash
   git checkout -b my-feature
   
   	3.	Make your changes
	4.	Commit with a clear message:
	
	git commit -m "feat: describe what and why"
	
	
	5.	Push your branch:
	
	git push origin my-feature
	
	
	6.	Open a Pull Request with:
	•	What changed
	•	Why it matters
	•	Whether it touches security or verification logic

⸻

🔐 Security‑Sensitive Areas (Handle With Care)

Some parts of MEV form the ethical and defensive perimeter of the system.

If your contribution modifies any of the following, you must explain your intent clearly in the pull request:
	•	Splash screen verification logic
	•	mev_human_verified flag
	•	mev_breach_detected flag
	•	Redirects to /banned.html
	•	Hash‑based triggers (e.g. #create=PageName)
	•	blackhole.dat logic or references
	•	Service Worker scope or cache behavior
	•	Input sanitization or parsing functions

These features are not just technical — they define how humans, bots, and AI are allowed to interact with the system.

⸻

🧼 Coding Guidelines
	•	Keep everything client‑side
	•	Do not introduce external APIs or trackers
	•	Avoid inline event handlers where possible
	•	Sanitize all user input
	•	Use existing helpers (escapeHTML, parser logic)
	•	Maintain offline compatibility
	•	Follow CSP‑safe patterns (data-* attributes instead of inline JS)

⸻

🧠 About AI Contributions

MEV explicitly allows AI‑assisted development.

If you used an AI system to help generate code:
	•	That’s acceptable
	•	Please review the output carefully
	•	Ensure the logic aligns with MEV’s ethics and security model

AI is treated as a collaborator, not a shortcut.

⸻

🌱 Community Expectations
	•	Be respectful
	•	Be transparent
	•	Be patient
	•	Teach rather than punish

If you’re improving MEV’s resilience, clarity, or educational value — you’re contributing correctly.

⸻

📎 Helpful References
	•	README.md — Architecture overview
	•	USAGE.md — How users interact with MEV
	•	MOTIVATION.md — Philosophy & ethics
	•	SECURITY.md — Defensive model
	•	AI-REVIEWS.md — Human & AI collaboration notes

⸻

Thank you for helping build a system where knowledge survives, users stay in control, and automation learns boundaries.

