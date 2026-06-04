// components/about/mission/MissionComponentSeven.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MissionComponentSeven() {
  return (
    <section className="w-full bg-[#F6EFE9] text-[#221B1F] px-6 py-28 lg:px-12 border-t border-[#221B1F]/10 relative">
      <div className="mx-auto max-w-4xl text-center space-y-8">
        
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D89A9E] block">
          Global Connectivity Framework
        </span>

        <div className="relative inline-block">
          <span className="block font-serif italic text-lg text-[#D89A9E] mb-1">
            Across countries & borders
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#221B1F] leading-tight">
            Creating better opportunities <br />
            <span className="font-normal italic">for the upright</span>
          </h2>
        </div>

        <div className="h-[1px] w-16 bg-[#221B1F]/20 mx-auto my-6" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-base sm:text-lg font-light leading-relaxed text-[#221B1F]/90 max-w-3xl mx-auto"
        >
          <p>
            We believe that finding a life partner should be easy, simple, affordable, and fully sustained within the beautiful paradigms of Islam. QLBI opens up high-end paths of connection across geographical limits to expand circles securely.
          </p>
          <p className="text-sm sm:text-base text-[#221B1F]/70">
            This digital platform is intentionally built to assist both Muslim men and sisters, alongside righteous, God-fearing Christian and Jewish women (*Ahl al-Kitab*) worldwide, to discover deep happiness, true compatibility, and lifelong guidance under the law of Allah.
          </p>
        </motion.div>

        {/* Minimal Quiet Luxury Editorial Button Options */}
        <div className="pt-6 flex flex-wrap justify-center gap-4">
          <div className="px-6 py-2.5 border border-[#221B1F] text-xs uppercase tracking-widest bg-[#221B1F] text-[#F6EFE9] hover:bg-transparent hover:text-[#221B1F] transition-all duration-300 cursor-pointer">
            Read Our Story
          </div>
          <div className="px-6 py-2.5 border border-[#221B1F]/20 text-xs uppercase tracking-widest hover:border-[#221B1F] transition-all duration-300 cursor-pointer">
            View Parameters
          </div>
        </div>

      </div>
    </section>
  );
}