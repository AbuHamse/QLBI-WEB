// app/how-it-works/connect-respectfully/page.tsx
import React from "react";
import ConnectIntroComponent from "@/components/how-it-works/connect/ConnectIntroComponent";
import ConnectIntentComponent from "@/components/how-it-works/connect/ConnectIntentComponent";
import ConnectFocusComponent from "@/components/how-it-works/connect/ConnectFocusComponent";
import ConnectRespectComponent from "@/components/how-it-works/connect/ConnectRespectComponent";
import ConnectFamilyComponent from "@/components/how-it-works/connect/ConnectFamilyComponent";
import ConnectSecurityComponent from "@/components/how-it-works/connect/ConnectSecurityComponent";
import ConnectOutroComponent from "@/components/how-it-works/connect/ConnectOutroComponent";

export const metadata = {
  title: "Connect Respectfully | QLBI",
  description: "Begin private conversations, communicate with deliberate intention, and move forward toward marriage with absolute clarity and trust.",
};

export default function ConnectRespectfullyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Component 1: Begin the conversation (Staggered Horizon Grid) */}
      <ConnectIntroComponent />

      {/* Component 2: Communication with intention (Split Canvas Highlight) */}
      <ConnectIntentComponent />

      {/* Component 3: Focus on what matters (Clean Geometric Grid) */}
      <ConnectFocusComponent />

      {/* Component 4: Respect every interaction (Asymmetric Luxury Hero Block) */}
      <ConnectRespectComponent />

      {/* Component 5: Involve family when appropriate (Linear Feature Deck) */}
      <ConnectFamilyComponent />

      {/* Component 6: Use secure communication tools (Structured Matrix Card) */}
      <ConnectSecurityComponent />

      {/* Component 7: Move forward with confidence (The Anchor Outro Canvas) */}
      <ConnectOutroComponent />
    </main>
  );
}