/**
 * MEV INTERCEPTOR - Client-Side "Conscious" Layer
 * This script runs in the browser to catch bots and guide humans.
 */

const MEV_Interceptor = {
    // The "Reflective" Protection
    reflect: function() {
        console.warn("INTERCEPTED: Bot-like behavior detected. Reflecting force.");
        // This is the Blackhole redirection
        window.location.href = "http://127.0.0.1";
    },

    // Check for the "Human" signature in the browser's subconscious (localStorage)
    checkIdentity: function() {
        const isVerified = localStorage.getItem('mev_human_verified');
        const userAgent = navigator.userAgent.toLowerCase();
        
        // Safety check: Is it a bot?
        const isBot = /bot|headless|crawler|spider/i.test(userAgent);

        if (isBot) {
            this.reflect();
            return false;
        }

        return isVerified === 'true';
    },

    // The logic to "Open the Gate"
    openGate: function(answer) {
        if (answer === "MEV_PROTECTION_2026") {
            localStorage.setItem('mev_human_verified', 'true');
            return true;
        }
        return false;
    }
};
