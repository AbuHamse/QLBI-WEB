// components/home/HeroComponentFive.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroComponentFive() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="w-full bg-background px-6 py-32 lg:px-8 border-t border-border/40 flex items-center justify-center min-h-[60vh]">
      <motion.div 
        className="mx-auto max-w-4xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.span 
          variants={fadeInUpVariants}
          className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-brand-muted"
        >
          Functional Framework
        </motion.span>

        <motion.h2 
          variants={fadeInUpVariants}
          className="mt-6 text-4xl font-light tracking-tight text-brand-dark sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15]"
        >
          Built for <br className="sm:hidden" />
          <span className="relative inline-block font-normal italic">real conversations</span>
        </motion.h2>

        <motion.p 
          variants={fadeInUpVariants}
          className="mx-auto mt-10 max-w-2xl text-base font-light leading-relaxed text-brand-charcoal/80 sm:text-lg md:text-xl"
        >
          QLBI includes thoughtful tools like matching based on values, private messaging, community spaces, and guided profiles. Everything is designed to help you understand someone properly before making decisions.
        </motion.p>

        <motion.div 
          variants={fadeInUpVariants}
          className="mt-12 flex justify-center"
        >
          <div className="h-[1px] w-12 bg-brand-muted/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}