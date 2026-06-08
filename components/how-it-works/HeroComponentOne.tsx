// components/how-it-works/HeroComponentOne.tsx
import React from "react";

export default function HeroComponentOne() {
  return (
    <section className="w-full py-28 md:py-40 bg-[#F6EFE9] text-[#221B1F] px-6 md:px-16 border-b border-[#D89A9E]/30 relative overflow-hidden">
      {/* Structural Accent Line mimicking luxury editorial layouts */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-[#D89A9E]/20" />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10 pt-12">
        <span className="text-xs tracking-[0.3em] uppercase text-[#D89A9E] font-medium mb-6">
          The Process // Overview
        </span>
        
        <h1 className="text-4xl md:text-6xl font-light font-serif tracking-tight text-[#0A0A0C] leading-[1.15] max-w-3xl">
          A simpler path toward marriage
        </h1>
        
        <p className="mt-8 text-base md:text-lg text-[#221B1F]/80 max-w-2xl font-light leading-relaxed">
          Finding the right person should not feel confusing or overwhelming. QLBI provides a structured experience that helps people connect with clarity, respect, and shared intentions from the very beginning.
        </p>

        {/* Elegant structural indicator for scrolling */}
        <div className="mt-16 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#D89A9E] font-medium">
            Explore the Roadmap
          </span>
          <div className="w-[1px] h-12 bg-[#D89A9E]/40 animate-pulse" />
        </div>
      </div>
    </section>
  );
}