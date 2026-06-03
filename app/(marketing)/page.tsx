// app/(marketing)/page.tsx
import React from "react";
import HeroComponentOne from "@/components/home/HeroComponentOne";
import HeroComponentTwo from "@/components/home/HeroComponentTwo";
import HeroComponentThree from "@/components/home/HeroComponentThree";
import HeroComponentFour from "@/components/home/HeroComponentFour";
import HeroComponentFive from "@/components/home/HeroComponentFive";
import HeroComponentSix from "@/components/home/HeroComponentSix";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Phase 1: Main Introduction Block */}
      <HeroComponentOne />
      <HeroComponentTwo/>
      <HeroComponentThree />
      <HeroComponentFour />
      <HeroComponentFive />
      <HeroComponentSix />
      
      {/* HeroComponentTwo will map right below here */}
    </main>
  );
}