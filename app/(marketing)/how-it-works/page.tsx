// app/(marketing)/how-it-works/page.tsx
import React from "react";
import HeroComponentOne from "@/components/how-it-works/HeroComponentOne";
import OverviewComponentTwo from "@/components/how-it-works/OverviewComponentTwo";
import OverviewComponentThree from "@/components/how-it-works/OverviewComponentThree";
import OverviewComponentFour from "@/components/how-it-works/OverviewComponentFour";

export const metadata = {
  title: "How It Works | QLBI",
  description: "A structured, intentional, and respectful path toward marriage.",
};

export default function HowItWorksPage() {
  return (
    <main className="w-full min-h-screen bg-[#F6EFE9]">
      <HeroComponentOne />
      <OverviewComponentTwo />
      <OverviewComponentThree />
      <OverviewComponentFour />
    </main>
  );
}