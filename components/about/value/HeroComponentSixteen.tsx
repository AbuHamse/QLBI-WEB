// components/value/HeroComponentSixteen.tsx
import React from "react";
import Image from "next/image";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";

export default async function HeroComponentSixteen() {
  const mainImage = await getMediaAssetBySlug("img24");

  return (
    <section className="relative w-full min-h-screen bg-[#F6EFE9] text-[#221B1F] flex flex-col md:flex-row items-stretch border-b border-[#D89A9E]/30">
      {/* Left Text & Sincere Core Value Introduction */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-8 md:p-16 relative">
        <div className="text-xs tracking-[0.3em] uppercase text-[#D89A9E] font-medium">
          Core Values // 01
        </div>
        
        <div className="my-auto max-w-xl pt-12 md:pt-0">
          <h1 className="text-5xl md:text-7xl font-light font-serif tracking-tight leading-[1.1] text-[#0A0A0C]">
            Faith
          </h1>
          <p className="mt-6 text-base md:text-lg font-light leading-relaxed text-[#221B1F]/80">
            Faith guides the foundation of QLBI. We strive to create an environment where users can pursue relationships while staying true to their beliefs.
          </p>
        </div>

        <div className="text-xs text-[#221B1F]/40 font-light tracking-wide">
          Cultivating purposeful connections with shared values.
        </div>
      </div>

      {/* Right Side: High-Fashion Asymmetrical Image Frame from Template */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen relative bg-[#F2C9B6]/10 overflow-hidden border-t md:border-t-0 md:border-l border-[#D89A9E]/30">
        {mainImage?.url ? (
          <Image
            src={mainImage.url}
            alt="Faith and purposeful devotion concept"
            fill
            sizes="50vw"
            priority
            className="object-cover object-center contrast-[102%] brightness-[98%]"
          />
        ) : (
          <div className="w-full h-full bg-[#F2C9B6]/20 animate-pulse" />
        )}
      </div>
    </section>
  );
}