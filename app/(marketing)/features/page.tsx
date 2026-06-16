import React from "react";
import FeaturesHeroComponent from "@/components/features/FeaturesHeroComponent";
import FeaturesOverviewComponent from "@/components/features/FeaturesOverviewComponent";
import FeaturesHorizonComponent from "@/components/features/FeaturesHorizonComponent";
import FeaturesCTAComponent from "@/components/features/FeaturesCTAComponent";

export const metadata = {
  title: "Platform Features | QLBI",
  description: "Explore the intentional, value-driven layers of the QLBI platform—engineered for clarity, secure messaging, and traditional family alignment.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Component 1: Full-Screen Motion Intro */}
      <FeaturesHeroComponent />

      {/* Component 2: Architectural Overview Grid */}
      <FeaturesOverviewComponent />

      {/* Component 3: Core Pillars Horizon Row */}
      <FeaturesHorizonComponent />

      {/* Component 4: The Anchor Outro */}
      <FeaturesCTAComponent />
    </main>
  );
}