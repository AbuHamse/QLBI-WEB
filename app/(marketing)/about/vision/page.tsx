// app/(marketing)/about/vision/page.tsx
import React from "react";
import VisionComponentEleven from "@/components/about/vision/VisionComponentEleven";
import VisionComponentTwelve from "@/components/about/vision/VisionComponentTwelve";
import VisionComponentThirteen from "@/components/about/vision/VisionComponentThirteen";
import VisionComponentFourteen from "@/components/about/vision/VisionComponentFourteen";
import VisionComponentFifteen from "@/components/about/vision/VisionComponentFifteen";

export const metadata = {
  title: "Our Vision — QLBI",
  description: "Unifying global Ummah networks, travel mobility trackers, and local Masjid infrastructure parameters designed for shared spiritual rewards.",
};

export default function VisionPage() {
  return (
    <main className="w-full min-h-screen bg-[#0A0A0C] selection:bg-[#D89A9E] selection:text-[#0A0A0C]">
      {/* 
        Manipulated Magazine Vision Layout Template Run:
        Component 11: Dark Video Hero Layer with Gradient Blur (#0A0A0C / #221B1F)
        Component 12: Light Linen Asymmetric Image Grid (img18.jpg / #F6EFE9)
        Component 13: Soft Deep Plum Espresso Staggered Box Overlap (img19.jpg / #221B1F)
        Component 14: Light 3-Column Column Architectural Lookbook Grid (img20.jpg / #F6EFE9)
        Component 15: Dark Portfolio Typography Split Panel Finish (#0A0A0C)
      */}
      <VisionComponentEleven />
      <VisionComponentTwelve />
      <VisionComponentThirteen />
      <VisionComponentFourteen />
      <VisionComponentFifteen />
    </main>
  );
}