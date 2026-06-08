// components/how-it-works/OverviewComponentFour.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OverviewComponentFour() {
  return (
    <section className="w-full py-24 bg-[#F6EFE9] text-[#221B1F] px-6 md:px-16 border-b border-[#D89A9E]/30 relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
        
        {/* Left Side: Large Elegant Number Anchor from Template Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="text-7xl md:text-9xl font-serif italic text-[#F2C9B6] select-none pointer-events-none font-light md:w-1/4"
        >
          03
        </motion.div>

        {/* Right Side: Reassuring Context Text Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          className="md:w-3/4 max-w-2xl"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-[#D89A9E] font-medium block mb-3">
            Third Principle
          </span>
          <h2 className="text-3xl md:text-4xl font-light font-serif tracking-tight text-[#0A0A0C] mb-6">
            Cultivating lasting foundations
          </h2>
          <p className="text-base font-light text-[#221B1F]/80 leading-relaxed">
            The ultimate objective is a lifelong relationship rooted in mutual understanding and shared devotion. Our structural timeline ensures that you are guided gently from early introductions all the way through family involvement and meaningful final commitments.
          </p>
        </motion.div>

      </div>
    </section>
  );
}