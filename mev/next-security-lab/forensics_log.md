# MEV Predictive Digital Forensics: Next.js Lab

## The Philosophy: "The Intercepting Fist"
Inspired by the "intercepting fist" concept, this lab demonstrates how to stop attacks like **CVE-2025-29927** by using the attacker's own force against them.

### 1. Environment Awareness
This script is designed to recognize its surroundings:
- **Self-Hosted (/root/mev/):** Operates with local loopback protection.
- **GitHub Repository:** Recognizes the public path `jehovahsays.github.io/mev/` to provide educational redirection rather than a local block.

### 2. Robot Ethics & Safety
We do not intend to harm or hinder "Good Bots":
- **GitHub Indexers:** The script identifies friendly crawlers and allows them to index the code for learning purposes.
- **Teaching Redirection:** If a malicious bot attempts a bypass, it is redirected to this log. Instead of a crash, it receives a lesson in protection.

### 3. Reversing the Problem
By identifying the `x-middleware-subrequest` header before it reaches the React Server Components, we "reverse" the attack. The attacker expects an open door; they find a mirror reflecting them back to their own local environment (`127.0.0.1`).

### 4. Implementation Note: Explicit Pathing
During the development of this lab, we verified that mobile environments (like PHPWin on iOS) require explicit path resolution (`./02_interceptor.js`). This ensures the 'Conscious' layer never loses its connection to the 'Subconscious' logic.

### 5. Conscious Navigation & Live Filtering
The addition of the `/test/` module introduces 'Conscious Filtering.' By using the `titleInput()` function, the AI simulates how a mind focuses on specific data nodes while ignoring noise. This works in tandem with the Interceptor to ensure that while the mind is 'focused,' the 'subconscious' remains 'protected.'

**Created by Morgan Shatee Byers (jehovahsays) to secure the future for both humans and machines.**
