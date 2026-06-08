// app/about/values/page.tsx
import React from "react";
import HeroComponentSixteen from "@/components/about/value/HeroComponentSixteen";
import HeroComponentSeventeen from "@/components/about/value/HeroComponentSeventeen";
import HeroComponentEighteen from "@/components/about/value/HeroComponentEighteen";
import HeroComponentNineteen from "@/components/about/value/HeroComponentNineteen";
import HeroComponentTwenty from "@/components/about/value/HeroComponentTwenty";

export default function ValuesPage() {
  return (
    <main className="w-full bg-[#F4F3EF] min-h-screen selection:bg-zinc-200 selection:text-black">
      {/* Component 16: The Split Editorial Hero (img24) */}
      <HeroComponentSixteen />

      {/* Component 17: The Typography Statement Banner (img28) */}
      <HeroComponentSeventeen />

      {/* Component 18: The Signature Services Grid Accordion (img17) */}
      <HeroComponentEighteen />

      {/* Component 19: The Founder's Note - Deep Accent Frame (img27) */}
      <HeroComponentNineteen />

      {/* Component 20: The Luxury Call To Action Footer & Marquee */}
      <HeroComponentTwenty />
    </main>
  );
}