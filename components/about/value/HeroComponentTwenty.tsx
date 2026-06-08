// components/value/HeroComponentTwenty.tsx
import React from "react";

export default function HeroComponentTwenty() {
  return (
    <section className="w-full py-32 bg-[#F6EFE9] text-[#221B1F] flex flex-col items-center justify-center text-center px-6 border-b border-[#D89A9E]/30 relative">
      {/* Elegant, Soft Editorial Framing Lines from the Design Template */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-[#D89A9E]/20 hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-[#D89A9E]/20 hidden md:block" />

      <div className="max-w-3xl flex flex-col items-center relative z-10">
        <span className="text-xs tracking-[0.3em] uppercase text-[#D89A9E] font-medium mb-6">
          Taking Next Steps
        </span>
        
        <h2 className="text-4xl md:text-6xl font-light font-serif tracking-tight text-[#0A0A0C] leading-tight">
          The journey starts with <span className="italic font-normal text-[#D89A9E]">intention</span>
        </h2>
        
        <p className="mt-6 text-sm md:text-base text-[#221B1F]/80 max-w-xl font-light leading-relaxed">
          Whether you&#39;re searching for marriage, building friendships within the community, or seeking beneficial knowledge, QLBI aims to provide a place where meaningful connections can grow with purpose.
        </p>

        {/* Reassuring, Intentional Interactive Triggers */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
          <button className="px-8 py-4 bg-[#221B1F] text-[#F6EFE9] text-xs tracking-widest uppercase font-medium hover:bg-[#0A0A0C] transition-colors duration-300 shadow-sm">
            Join the Community
          </button>
          <button className="px-8 py-4 border border-[#D89A9E]/40 bg-white text-xs tracking-widest uppercase font-medium text-[#221B1F] hover:bg-[#F6EFE9] transition-colors duration-300 shadow-sm">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Sub-Footer Marquee Accent Layout Line */}
      <div className="w-full mt-24 border-t border-[#D89A9E]/30 pt-8 flex justify-center">
        <span className="text-4xl md:text-7xl font-serif font-light text-[#F2C9B6]/40 tracking-[0.15em] select-none pointer-events-none uppercase">
          With Purpose <br/> With Intention - With Faith
        </span>
      </div>
    </section>
  );
}