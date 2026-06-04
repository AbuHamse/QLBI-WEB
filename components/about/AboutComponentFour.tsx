// components/about/AboutComponentFour.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutComponentFour() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="w-full bg-[#F6EFE9] text-[#221B1F] px-6 py-28 lg:px-12 border-t border-[#221B1F]/10 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Magazine Layout Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content Narrative */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A9E] block">
              The Objective
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.1] text-[#221B1F]">
              Helping people <br />
              connect with <br />
              <span className="font-normal italic text-[#D89A9E]">confidence</span>
            </h2>

            <div className="h-[1px] w-16 bg-[#221B1F]/20 my-6" />

            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="text-base sm:text-lg font-light leading-relaxed text-[#221B1F]/80"
            >
              Our goal is to make introductions easier, conversations more meaningful, and the path toward marriage more transparent for everyone involved. 
            </motion.p>
            
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="text-sm font-light leading-relaxed text-[#221B1F]/70"
            >
              By allowing high-intent choices and upfront transparency—free from conventional platform games—we unlock a dignified path to complete mutual compatibility.
            </motion.p>
          </div>

          {/* Right Column: Dominating Picture Canvas using img13.jpg */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#221B1F]/10 bg-[#221B1F]"
            >
              {/* Main Background Image Implementation */}
              <img 
                src="img13.jpg" 
                alt="QLBI Objective Canvas" 
                className="w-full h-full object-cover grayscale opacity-80"
              />

              {/* Sophisticated Editorial Luxury Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#221B1F]/70 via-[#221B1F]/20 to-transparent mix-blend-multiply" />
              <div className="absolute inset-0 bg-[#0A0A0C]/10 mix-blend-overlay" />

              {/* Minimal Clean Design Floating Asset Labels */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-[#F6EFE9]">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#D89A9E]">
                    Refined Focus
                  </p>
                  <p className="text-xs font-light text-[#F6EFE9]/70">
                    Sincerity Across Every Connection
                  </p>
                </div>
                <div className="text-[10px] font-mono tracking-wider opacity-40">
                  REF // 013
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}