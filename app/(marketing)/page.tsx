// app/(marketing)/page.tsx
import React from "react";
import HeroComponentOne from "@/components/home/HeroComponentOne";
import HeroComponentTwo from "@/components/home/HeroComponentTwo";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Phase 1: Main Introduction Block */}
      <HeroComponentOne />
      <HeroComponentTwo/>
      
      {/* HeroComponentTwo will map right below here */}
    </main>
  );
}