// THE HUMAN GATE: The "Input Box" Verification
// Based on the logic from jehovahsays/blackhole/action.php

import { cookies } from 'next/headers';

export async function verifyHumanInteraction(answer: string) {
  "use server";

  // YOUR LOGIC: The human knows the answer, the bot does not.
  const CORRECT_ANSWER = "MEV_PROTECTION_2026"; 

  if (answer === CORRECT_ANSWER) {
    const cookieStore = await cookies();
    
    // Create the 'Subconscious' permission
    cookieStore.set('mev_human_verified', 'true', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 3600 // 1 hour of protection
    });

    return { success: true, message: "Gate Opened: Human Identity Confirmed." };
  }

  // If the answer is wrong, we treat it as a probe
  return { success: false, message: "Access Denied: Answer incorrect." };
}
