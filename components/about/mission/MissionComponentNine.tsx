// components/about/mission/MissionComponentNine.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MissionComponentNine() {
  return (
    <section className="w-full bg-[#F6EFE9] text-[#221B1F] px-6 py-28 lg:px-12 border-t border-[#221B1F]/10 relative">
      <div className="mx-auto max-w-5xl text-center space-y-10">
        
        <div className="space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A9E] block">
            The Sovereignty of Allah SWT
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#221B1F]">
            Guiding affairs through <br />
            <span className="font-normal italic text-[#D89A9E]">Divine Decree</span>
          </h2>
        </div>

        {/* Rolex Style Clean Framed Callout Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl bg-[#221B1F] text-[#F6EFE9] space-y-6 shadow-xl border border-[#221B1F]/10"
        >
          <span className="inline-block font-serif italic text-base text-[#F2C9B6]">
            A vital reminder to all hearts—
          </span>
          
          <p className="text-lg md:text-2xl font-extralight tracking-wide leading-relaxed text-[#F6EFE9]/95 max-w-2xl mx-auto">
            This platform does not control anything. QLBI is only a tool. It is exclusively Allah SWT who rules, orchestrates, and controls the affairs of believing men, women, and all of mankind.
          </p>
          
          <div className="h-[1px] w-12 bg-[#F6EFE9]/20 mx-auto" />
          <p className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D89A9E]">
            Everything relies completely upon His Will
          </p>
        </motion.div>

      </div>
    </section>
  );
}