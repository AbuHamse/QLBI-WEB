import React from "react";
import MessagingHeroComponent from "@/components/features/messaging/MessagingHeroComponent";
import MessagingIntroComponent from "@/components/features/messaging/MessagingIntroComponent";
import MessagingFeaturesComponent from "@/components/features/messaging/MessagingFeaturesComponent";
import MessagingShowcaseComponent from "@/components/features/messaging/MessagingShowcaseComponent";
import MessagingCTAComponent from "@/components/features/messaging/MessagingCTAComponent";

export const metadata = {
  title: "Secure Messaging | QLBI",
  description: "Engage in meaningful conversations built around mutual respect, clear boundaries, and verified identity guidelines.",
};

export default function MessagingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Component 1: Hero Banner with msg1 background */}
      <MessagingHeroComponent />

      {/* Component 2: Intentional Dialogue Intro */}
      <MessagingIntroComponent />

      {/* Component 3: Interlocking Feature Split with msg2 and msg3 */}
      <MessagingFeaturesComponent />

      {/* Component 4: Centerpiece Showcase Panel with msg4 and msg5 */}
      <MessagingShowcaseComponent />

      {/* Component 5: Call-to-Action */}
      <MessagingCTAComponent />
    </main>
  );
}