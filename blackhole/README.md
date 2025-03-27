# **MEV**  
### **Multi Edit Vandalism**  

---

## **index.php**
the key security and architectural aspects of this PHP script:

Security Headers:
- Comprehensive set of security headers implemented
- Prevents various web vulnerabilities like:
  - XSS (Cross-Site Scripting)
  - Clickjacking
  - Content type sniffing
  - Restricts embedding and opening from other origins
  - Disables caching
  - Prevents tracking via referrer

Content Security:
- Strict Content Security Policy (CSP)
- Limits script, style, and image sources
- Dynamic CSP enforcement via JavaScript
- Additional meta tags reinforcing security headers

Input Handling:
- Sanitizes POST input by replacing non-alphanumeric characters with underscores
- Prevents potentially malicious input
- Uses preg_replace() for input filtering

JavaScript Security Features:
- Prevents pasting into input fields
- Disables right-click
- Blocks certain keyboard shortcuts (Ctrl+U, Ctrl+S, Ctrl+H)
- Dynamically adds Content Security Policy meta tag

Form Characteristics:
- Single input field for searching a database
- Posts to ./blackhole/script.php
- Autocomplete and autocorrect disabled
- Speech-to-text enabled
- Input has maximum length of 524,288 characters

Observations/Potential Improvements:
- The `exit()` in the POST handling seems to prevent form submission
- Consider more granular input validation
- The button covering entire viewport is unusual UI design

---

## **script.php**
the key components and functionality of this script:

Architecture and Functionality:
1. Dynamic File Generation
- Creates HTML files dynamically based on user input
- Each input generates a new HTML page in the "./en/" directory
- Sanitizes input by replacing non-alphanumeric characters with underscores

2. RSS Feed Generation (generateRSSFeed() function)
- Automatically creates an RSS feed (rss.xml)
- Scans "./en/" directory for files
- Extracts metadata like file title, description, publication date
- Supports special handling for HTML files to extract titles and descriptions

3. Index Management
- Updates index.json with new entries
- Tracks created files in a structured JSON format

4. Created Page Management
- Appends links to created.html for each new file
- Generates a template HTML file with:
  - Responsive design
  - Basic navbar
  - Speech synthesis of page title
  - Delete functionality
  - Mobile-friendly responsive design

Security Considerations:
- Input sanitization using preg_replace()
- Uses htmlspecialchars() to prevent XSS
- Restricts file names to alphanumeric, underscore, and hyphen
- Implements various security headers and meta tags

Unique Features:
- Speech synthesis of page title
- Dynamic RSS feed generation
- Responsive navbar design
- Mobile-friendly toggle menu
- One-click deletion of generated pages

Potential Improvements:
1. Add more robust input validation
2. Implement rate limiting to prevent abuse
3. Add authentication for file deletion
4. Consider max file limit to prevent storage exhaustion

---

additional security measures implemented in the /blackhole/ directory. While I appreciate the opportunity to review the full security setup, I want to be direct and responsible. Without seeing the actual files, I can discuss the general security principle you're demonstrating:

The line `include(realpath(getenv('DOCUMENT_ROOT')) .'/blackhole/blackhole.php');` suggests a custom security middleware or preprocessing mechanism that:

1. Uses absolute path resolution (`realpath()`)
2. Gets the document root dynamically (`getenv('DOCUMENT_ROOT')`)
3. Includes a potentially custom security handler before script execution

The complementary security elements you mentioned:
- robots.txt preventing bot access to /blackhole/
- .htaccess blocking indexing of blackhole.dat

These indicate a multi-layered approach to:
- Preventing directory/file enumeration
- Blocking unauthorized bot/crawler access
- Adding an extra preprocessing layer for requests

This approach goes beyond standard PHP security by adding:
- Path obfuscation
- Access control
- Potential request preprocessing/filtering

---

the Blackhole for Bad Bots appears to be a security mechanism designed to:

1. Trap and log potentially malicious bot/crawler traffic
2. Protect sensitive log files from direct access
3. Provide a standalone security solution for PHP websites

Key Components:
- .htaccess: Prevents direct access to the log file (blackhole.dat)
- blackhole.dat: Stores logged information about detected bots
- index.php: Contains the core logic for identifying and handling potentially malicious traffic

Typical Functionality of Such a System:
- Detect bot signatures, IP addresses, or suspicious request patterns
- Log detailed information about potentially harmful requests
- Potentially redirect or block suspicious traffic
- Provide a way to analyze and track bot activity

Security Principles:
- Obscurity: Hiding log files from direct access
- Logging: Collecting intelligence about potential threats
- Filtering: Identifying and potentially blocking malicious traffic

In the context of your previous scripts (index.php and script.php), the `include(realpath(getenv('DOCUMENT_ROOT')) .'/blackhole/blackhole.php');` line suggests that this Blackhole mechanism is being used as a preprocessing step to filter or log incoming requests before they are fully processed by your application.

---


1. User Flow:
- User visits index.php (root directory)
- Enters a search keyword
- Script processes the keyword
- Creates a new page in /blackhole/en/ directory

2. Security Integration:
- Blackhole for Bad Bots is located in /root/ 
- Likely intercepts and logs potentially malicious traffic before page generation
- Provides a preprocessing layer for request filtering

Key Security Observations:
- Segregated directory structure
- Custom logging mechanism
- Potential bot detection before page creation
- Dynamic page generation with sanitization

The architecture suggests a multi-layered approach to:
- Request filtering
- Bot detection
- Secure dynamic content generation
- Logging potential threats

---

the security enhancements in your architecture:

1. Pre-Processing Security Layer
- The Blackhole mechanism acts as a first-line defense
- Intercepts and analyzes requests before they reach application logic
- Can identify and block malicious bots/crawlers early in the request cycle
- Prevents potential exploit attempts before they interact with core application code

2. Request Filtering and Sanitization
- Multiple layers of input sanitization
- PHP scripts use preg_replace() to strip potentially dangerous characters
- Limits input to alphanumeric characters, underscores, and hyphens
- Prevents SQL injection, path traversal, and other input-based attacks

3. Directory Segregation
- Separates public, dynamic, and sensitive directories
- /blackhole/ directory likely not directly accessible
- Prevents directory enumeration
- Robots.txt further restricts bot access to sensitive areas

4. Logging and Intelligence Gathering
- Tracks and logs suspicious traffic patterns
- Provides forensic capability to analyze potential threats
- Can be used to build dynamic blacklists or improve security rules

5. Dynamic Content Generation with Security
- Each search creates a unique, sanitized HTML page
- Pages have built-in security headers
- Implements Content Security Policy
- Prevents click-jacking
- Restricts content loading

6. Additional Security Mechanisms
- Disables common browser developer tools shortcuts
- Prevents right-click
- Blocks paste events
- Implements strict referrer policies
- Prevents content type sniffing

7. RSS and Indexing Protection
- Custom RSS feed generation
- Controlled file indexing
- Prevents unauthorized content discovery

Comparative Advantages:
- More proactive than reactive security
- Multiple defense-in-depth layers
- Custom, fine-grained control over request handling
- Lightweight compared to full WAF (Web Application Firewall)

Potential Improvements:
- Rate limiting
- More granular bot detection
- IP reputation tracking
- Machine learning-based anomaly detection

---




[![PHPMD](https://github.com/jehovahsays/mev/actions/workflows/phpmd.yml/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/phpmd.yml)

---

[![PHP CI](https://github.com/jehovahsays/mev/actions/workflows/php.yml/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/php.yml)

---

[![CodeQL](https://github.com/jehovahsays/mev/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/github-code-scanning/codeql)

---

[![Dependabot Updates](https://github.com/jehovahsays/mev/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/dependabot/dependabot-updates)

---

[![pages-build-deployment](https://github.com/jehovahsays/mev/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/pages/pages-build-deployment)

---

[![Jekyll site CI](https://github.com/jehovahsays/mev/actions/workflows/jekyll-docker.yml/badge.svg)](https://github.com/jehovahsays/mev/actions/workflows/jekyll-docker.yml)

---


## **Developer Mode**  
- Visit the website on **HTTP** for more editing power:  
  [http://morgansbyers.scienceontheweb.net/](http://morgansbyers.scienceontheweb.net/)  

- Visit the website on **HTTPS** with limited editing power:  
  [https://jehovahsays.github.io/mev/](https://jehovahsays.github.io/mev/)  

---

## **Before You Begin**  
Before downloading and installing this project, open-source developers should:  
- Understand the project's **purpose** and **licensing terms**.  
- Review any **prerequisites** or **dependencies** outlined in the documentation.  
- Ensure they have the **necessary tools** and knowledge required for **reverse engineering** this repository.  

---

## **Prerequisite Check**  

### ✅ **Operating System Compatibility**  
_Check the documentation for supported operating systems._  

### ✅ **Hardware Requirements**  
_Make sure your system meets the necessary specifications._  

### ✅ **Software Dependencies**  
_Install all required dependencies before running the project._  

### ✅ **Version Compatibility**  
_Ensure compatibility with your existing software and libraries._  

---

## **Contact & Support**  

**Webmaster:** Morgan Shatee Byers  

- **GitHub Repository:** [View GitHub Repository](https://github.com/jehovahsays/mev)  
- **YouTube Channel:** [View YouTube Channel](https://youtube.com/@jehovahsaysnetworth?si=5DgR29Mx-y9GcEuQ)  
- **Donate via CashApp:** [Support via CashApp](https://cash.app/$morgansbyers)  