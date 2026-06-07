// app/(marketing)/page.tsx
import React from "react";
import HeroComponentOne from "@/components/home/HeroComponentOne";
import HeroComponentTwo from "@/components/home/HeroComponentTwo";
import HeroComponentThree from "@/components/home/HeroComponentThree";
import HeroComponentFour from "@/components/home/HeroComponentFour";
import HeroComponentFive from "@/components/home/HeroComponentFive";
import HeroComponentSix from "@/components/home/HeroComponentSix";
import HeroComponentSeven from "@/components/home/HeroComponentSeven";
import HeroComponentEight from "@/components/home/HeroComponentEight";
import HeroComponentNine from "@/components/home/HeroComponentNine";

// Import the test runner from your new utility file
import { testSanityConnection } from "@/sanity/lib/fetchMedia";

export default async function HomePage() {
  // This runs on the server backend every time you reload localhost:3000
  // It will print out your 20+ assets directly into your terminal window!
  await testSanityConnection();

  return (
    <main className="w-full">
      {/* Phase 1: Main Introduction Block */}
      <HeroComponentOne />
      <HeroComponentTwo />
      <HeroComponentThree />
      <HeroComponentFour />
      <HeroComponentFive />
      <HeroComponentSix />
      <HeroComponentSeven />
      <HeroComponentEight />
      <HeroComponentNine />
    </main>
  );
}