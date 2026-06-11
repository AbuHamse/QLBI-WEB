// app/how-it-works/marriage-journey/page.tsx
import React from "react";
import JourneyIntroComponent from "@/components/how-it-works/journey/JourneyIntroComponent";
import JourneyUnderstandingComponent from "@/components/how-it-works/journey/JourneyUnderstandingComponent";
import JourneyTrustComponent from "@/components/how-it-works/journey/JourneyTrustComponent";
import JourneyFutureComponent from "@/components/how-it-works/journey/JourneyFutureComponent";
import JourneyPreparationComponent from "@/components/how-it-works/journey/JourneyPreparationComponent";
import JourneyFoundationComponent from "@/components/how-it-works/journey/JourneyFoundationComponent";
import JourneyCTAComponent from "@/components/how-it-works/journey/JourneyCTAComponent";

export const metadata = {
  title: "The Marriage Journey | QLBI",
  description: "Every journey is unique. Build mutual trust, discuss future aspirations openly, and lay a foundation for a lasting relationship at your own pace.",
};

export default function MarriageJourneyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Component 1: Every journey is different (Asymmetric Editorial Collage) */}
      <JourneyIntroComponent />

      {/* Component 2: From introduction to understanding (Card Integration) */}
      <JourneyUnderstandingComponent />

      {/* Component 3: Building mutual trust (Asymmetric Card Row) */}
      <JourneyTrustComponent />

      {/* Component 4: Discuss the future openly (Balanced Contrast Deck) */}
      <JourneyFutureComponent />

      {/* Component 5: Preparing for the next chapter (Linear Split Canvas) */}
      <JourneyPreparationComponent />

      {/* Component 6: A foundation for lasting relationships (Minimalist Typography Anchor) */}
      <JourneyFoundationComponent />

      {/* Component 7: Your journey can begin today (Final Editorial Call-to-Action) */}
      <JourneyCTAComponent />
    </main>
  );
}