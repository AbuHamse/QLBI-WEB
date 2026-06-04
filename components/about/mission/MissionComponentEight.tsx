// components/about/mission/MissionComponentEight.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MissionComponentEight() {
  return (
    <section className="w-full bg-[#221B1F] text-[#F6EFE9] px-6 py-32 lg:px-12 relative overflow-hidden border-t border-[#F6EFE9]/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Overlap Narrative Canvas Container */}
          <div className="lg:col-span-6 space-y-6 relative z-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#D89A9E]">
              Absolute Transparency
            </span>
            
            <div className="relative">
              <span className="block font-serif italic text-lg text-[#F2C9B6] mb-1">
                Honesty from day one—
              </span>
              <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight leading-[1.15]">
                Encouraging clear, <br />
                <span className="font-normal italic text-[#F2C9B6]">transparent options</span>
              </h2>
            </div>

            <p className="text-base font-light leading-relaxed text-[#F6EFE9]/80 max-w-xl">
              True transparency from the start should not lead to unfair exclusion or localized platform bans. We provide a dignified ecosystem designed to ensure safety and comfort for all individuals involved.
            </p>
          </div>

          {/* Right Column: Physical Card Boundary Overlap Layout */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-[#0A0A0C] border border-[#F6EFE9]/10 rounded-xl p-8 lg:p-12 shadow-2xl relative lg:translate-x-6 z-20 space-y-6"
            >
              <div className="text-xs font-mono uppercase tracking-widest text-[#D89A9E]">
                Structural Paradigm // Polygyny Protection
              </div>
              
              <p className="text-sm font-light leading-relaxed text-[#F6EFE9]/70">
                A Muslim man seeking multiple wives can feel perfectly safe coming here to look for a spouse, ensuring his profile is exclusively visible to those women who are completely open and receptive to it. 
              </p>
              
              <p className="text-xs font-light italic leading-relaxed text-[#F6EFE9]/50 border-t border-[#F6EFE9]/10 pt-4">
                This beautiful family model is fully ordained by Allah SWT in the Holy Quran, provided the core condition of absolute justice and equity is maintained across all households.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}