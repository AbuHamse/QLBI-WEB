// app/(marketing)/about/mission/page.tsx
import React from "react";
import MissionComponentSix from "@/components/about/mission/MissionComponentSix";
import MissionComponentSeven from "@/components/about/mission/MissionComponentSeven";
import MissionComponentEight from "@/components/about/mission/MissionComponentEight";
import MissionComponentNine from "@/components/about/mission/MissionComponentNine";
import MissionComponentTen from "@/components/about/mission/MissionComponentTen";

export const metadata = {
  title: "Our Mission — QLBI",
  description: "Dismantling modern barriers to construct transparent, safe marital avenues for Muslim men, sisters, and Ahl al-Kitab, wholly submission to the Decree of Allah SWT.",
};

export default function MissionPage() {
  return (
    <main className="w-full min-h-screen bg-[#0A0A0C] selection:bg-[#D89A9E] selection:text-[#0A0A0C]">
      {/* 
        Alternating Magazine Composition Sequence:
        Component 6: Dark Hero Arch Split (#0A0A0C)
        Component 7: Light Clean Grid Canvas (#F6EFE9)
        Component 8: Deep Plum Overlap Layout (#221B1F)
        Component 9: Light Framed Callout Block (#F6EFE9)
        Component 10: Dark Structural Tabs Loop (#0A0A0C)
      */}
      <MissionComponentSix />
      <MissionComponentSeven />
      <MissionComponentEight />
      <MissionComponentNine />
      <MissionComponentTen />
    </main>
  );
}