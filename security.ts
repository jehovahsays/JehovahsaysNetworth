// Set security headers in the browser using TypeScript
document.addEventListener("DOMContentLoaded", () => {
  const metaTags = [
    { name: "Content-Security-Policy", content: "default-src 'self'; script-src 'self'; object-src 'none'" },
    { name: "X-Content-Type-Options", content: "nosniff" },
    { name: "X-Frame-Options", content: "DENY" },
    { name: "X-XSS-Protection", content: "1; mode=block" },
    { name: "Referrer-Policy", content: "strict-origin-when-cross-origin" },
    { name: "Permissions-Policy", content: "geolocation=(), microphone=(), camera=()" },
    { name: "Strict-Transport-Security", content: "max-age=31536000; includeSubDomains; preload" }
  ];

  metaTags.forEach(tag => {
    const meta = document.createElement("meta");
    meta.httpEquiv = tag.name;
    meta.content = tag.content;
    document.head.appendChild(meta);
  });

  console.log("Security headers applied.");
});

// Additional security features

// Prevent right-click context menu to deter basic script copying
document.addEventListener("contextmenu", event => event.preventDefault());

// Prevent clipboard copying
document.addEventListener("copy", (event) => {
  event.preventDefault();
  alert("Copying is disabled on this page.");
});

// Prevent drag and drop of elements
document.addEventListener("dragstart", (event) => event.preventDefault());

// Prevent pasting of potentially harmful content
document.addEventListener("paste", (event) => {
  event.preventDefault();
  alert("Pasting is disabled on this page.");
});

// Enable SameSite cookies (This needs to be configured on the server, but can be hinted here)
document.cookie = "SecureCookie=1; Secure; HttpOnly; SameSite=Strict";