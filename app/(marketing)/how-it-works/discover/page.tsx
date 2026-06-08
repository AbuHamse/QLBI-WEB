// app/how-it-works/discover-matches/page.tsx
import React from "react";
import DiscoverIntroComponent from "@/components/how-it-works/discover/DiscoverIntroComponent";
import DiscoverDepthComponent from "@/components/how-it-works/discover/DiscoverDepthComponent";
import DiscoverFilterComponent from "@/components/how-it-works/discover/DiscoverFilterComponent";
import DiscoverPaceComponent from "@/components/how-it-works/discover/DiscoverPaceComponent";
import DiscoverHeartScrollComponent from "@/components/how-it-works/discover/DiscoverHeartScrollComponent";
import DiscoverVisualCardComponent from "@/components/how-it-works/discover/DiscoverVisualCardComponent";

export const metadata = {
  title: "Discover Matches | QLBI",
  description: "Explore profiles anchored in shared values, look beyond appearances, and navigate your search with purpose.",
};

export default function DiscoverMatchesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Component 10: Explore Compatible Profiles */}
      <DiscoverIntroComponent />

      <DiscoverVisualCardComponent />

      {/* Component 11: Visualize the Final Bond */}
      <DiscoverHeartScrollComponent />

      {/* Component 12: Look Beyond Appearances */}
      <DiscoverDepthComponent />

      {}

      {/* Component 13: Search With Purpose */}
      <DiscoverFilterComponent />

      {/* Component 14: Take Your Time */}
      <DiscoverPaceComponent />
    </main>
  );
}