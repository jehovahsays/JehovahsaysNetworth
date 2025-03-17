(() => {
    "use strict";

    // Prevent prototype pollution
    function secureObject(obj) {
        if (obj && typeof obj === "object") {
            Object.freeze(obj);
            Object.keys(obj).forEach(key => {
                if (typeof obj[key] === "object" && obj[key] !== null) {
                    secureObject(obj[key]);
                }
            });
        }
    }

    // Secure global objects (prevents modification)
    secureObject(Object.prototype);
    secureObject(Array.prototype);
    secureObject(Function.prototype);

    // Restrict global scope pollution
    if (typeof globalThis !== "undefined") {
        Object.freeze(globalThis);
    }

    // Sandbox execution (prevent eval and Function constructor abuse)
    const restrictedGlobals = ["eval", "Function"];
    restrictedGlobals.forEach(func => {
        try {
            Object.defineProperty(globalThis, func, {
                configurable: false,
                enumerable: false,
                writable: false,
                value: () => {
                    throw new Error(`${func} is restricted for security reasons.`);
                }
            });
        } catch (e) {
            console.warn(`Security restriction failed for ${func}`);
        }
    });

    // Disable dangerous browser functions
    if (typeof window !== "undefined") {
        const blockedFunctions = [
            "alert",
            "confirm",
            "prompt",
            "document.write",
            "fetch",
            "XMLHttpRequest"
        ];
        blockedFunctions.forEach(func => {
            if (window[func]) {
                window[func] = () => {
                    console.warn(`${func} is disabled for security reasons.`);
                };
            }
        });

        // Implement strict Content Security Policy (CSP) for browsers
        if (document && document.createElement) {
            const meta = document.createElement("meta");
            meta.httpEquiv = "Content-Security-Policy";
            meta.content = "default-src 'self'; script-src 'self'; object-src 'none'";
            document.head.appendChild(meta);
        }
    }

    // Secure event listeners to prevent injection attacks
    if (typeof EventTarget !== "undefined") {
        const originalAddEventListener = EventTarget.prototype.addEventListener;
        EventTarget.prototype.addEventListener = function (type, listener, options) {
            if (typeof listener === "function") {
                return originalAddEventListener.call(this, type, listener, options);
            } else {
                console.warn("Blocked non-function event listener to prevent security risks.");
            }
        };
    }

    console.log("JavaScript security module initialized successfully.");
})();