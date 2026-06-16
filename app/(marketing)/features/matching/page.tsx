import React from "react";
import MatchingHeroComponent from "@/components/features/matching/MatchingHeroComponent";
import MatchingProcessComponent from "@/components/features/matching/MatchingProcessComponent";
import MatchingFactorsComponent from "@/components/features/matching/MatchingFactorsComponent";
import MatchingStatsComponent from "@/components/features/matching/MatchingStatsComponent";
import MatchingCTAComponent from "@/components/features/matching/MatchingCTAComponent";

export const metadata = {
  title: "Intentional Matching | QLBI",
  description: "Discover a value-driven approach to marital compatibility. Our matching framework focuses on shared principles, spiritual traditions, and life goals.",
};

export default function MatchingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Component 1: Hero Banner */}
      <MatchingHeroComponent />

      {/* Component 2: How Matching Works */}
      <MatchingProcessComponent />

      {/* Component 3: Compatibility Factors */}
      <MatchingFactorsComponent />

      {/* Component 4: Success Statistics / Testimonial */}
      <MatchingStatsComponent />

      {/* Component 5: Match Call-to-Action */}
      <MatchingCTAComponent />
    </main>
  );
}