// MEV Security Lab: The "Attack Simulation" Test
// Run this on localhost to see the Interceptor in action.

async function simulateAttack() {
  console.log("--- Starting MEV Security Test ---");
  console.log("Target: http://localhost:3000/api/vulnerable-action");
  
  // SIMULATING A BOT ATTEMPT (CVE-2025-29927 bypass style)
  try {
    const response = await fetch('http://localhost:3000/api/vulnerable-action', {
      method: 'POST',
      headers: {
        // This is the "Force" we are intercepting
        'x-middleware-subrequest': '1', 
        'User-Agent': 'Headless-Bad-Bot-v1.0'
      },
      body: JSON.stringify({ sensitive_input: "attack_payload" }),
      redirect: 'manual' // We want to see where the Interceptor tries to send us
    });

    // ANALYZING THE REFLECTION
    if (response.status === 307 || response.status === 302) {
      const location = response.headers.get('location');
      
      if (location?.includes('127.0.0.1')) {
        console.log("SUCCESS: The 'Intercepting Fist' worked!");
        console.log(`RESULT: The attacker was reflected back to: ${location}`);
        console.log("The internal AI subconscious protected the machine.");
      } else {
        console.log("WARNING: Redirected, but not to the Blackhole loop.");
      }
    } else {
      console.log("FAILURE: The request went through or was blocked without reflection.");
      console.log(`Status Received: ${response.status}`);
    }
  } catch (error) {
    console.error("Test Error: Ensure your local Next.js server is running!", error);
  }
}

simulateAttack();
