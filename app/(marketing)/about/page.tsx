// app/about/page.tsx
import React from "react";
import AboutComponentOne from "@/components/about/AboutComponentOne";
import AboutComponentTwo from "@/components/about/AboutComponentTwo";
import AboutComponentThree from "@/components/about/AboutComponentThree";
import AboutComponentFour from "@/components/about/AboutComponentFour";
import AboutComponentFive from "@/components/about/AboutComponentFive";

export const metadata = {
  title: "Our Story — QLBI",
  description: "Discover why QLBI was created, the core real-world challenges we solve, and how we are revolutionizing relationship-building within the true paradigms of Islam.",
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-[#0A0A0C] selection:bg-[#D89A9E] selection:text-[#0A0A0C]">
      {/* 
        Rhythmic Inverted Pattern Sequence Matrix:
        Component 1: Dark (#0A0A0C)
        Component 2: Light (#F6EFE9)
        Component 3: Dark (#0A0A0C)
        Component 4: Light (#F6EFE9)
        Component 5: Dark (#0A0A0C)
      */}
      <AboutComponentOne />
      <AboutComponentTwo />
      <AboutComponentThree />
      <AboutComponentFour />
      <AboutComponentFive />
    </main>
  );
}