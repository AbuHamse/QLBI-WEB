// app/(marketing)/page.tsx
import React from "react";
import HeroComponentOne from "@/components/home/HeroComponentOne";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* Phase 1: Main Introduction Block */}
      <HeroComponentOne />
      
      {/* HeroComponentTwo will map right below here */}
    </main>
  );
}