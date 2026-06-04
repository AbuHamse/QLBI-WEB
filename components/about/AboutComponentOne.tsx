// components/about/AboutComponentOne.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutComponentOne() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="w-full bg-[#0A0A0C] text-[#F6EFE9] px-6 pt-36 pb-28 lg:px-12 flex items-center justify-center min-h-[85vh] relative overflow-hidden">
      {/* Editorial Luxury Top Border Decoration */}
      <div className="absolute top-0 left-6 right-6 lg:left-12 lg:right-12 h-[1px] bg-[#F6EFE9]/10" />

      <div className="mx-auto max-w-5xl w-full text-center space-y-8">
        {/* Subtle Luxury Tracking Overline */}
        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          whileInView={{ opacity: 0.7, letterSpacing: "0.3em" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="inline-block text-[11px] font-bold uppercase text-[#D89A9E]"
        >
          An Intentional Beginning
        </motion.span>

        {/* Large Premium Magazine Typography */}
        <motion.h1 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[1.05] text-[#F6EFE9]"
        >
          Built with purpose, <br />
          <span className="font-normal italic text-[#F2C9B6]">guided by faith</span>
        </motion.h1>

        {/* Highly Accessible, High-Contrast Reading Grid */}
        <div className="pt-8 max-w-3xl mx-auto border-t border-[#F6EFE9]/10 mt-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-[#F6EFE9]/90 tracking-wide"
          >
            QLBI was created to help Muslims find meaningful relationships in a way that respects faith, family, and personal values. We believe technology should support the journey toward marriage, not make it more complicated.
          </motion.p>
        </div>

        {/* Quiet Luxury Page-Down Structural Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="pt-12 flex justify-center"
        >
          <div className="h-12 w-[1px] bg-gradient-to-b from-[#D89A9E] to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}