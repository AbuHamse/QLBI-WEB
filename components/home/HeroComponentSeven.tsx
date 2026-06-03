// components/home/HeroComponentSeven.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquareShare } from "lucide-react";

export default function HeroComponentSeven() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <section className="w-full bg-background px-6 py-24 lg:px-8 border-t border-border/40 overflow-hidden">
      <div className="mx-auto max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 items-center relative">
          
          {/* Left Column: Text Engine */}
          <motion.div 
            className="lg:col-span-6 z-20 space-y-6 lg:pr-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUpVariants}
              className="inline-flex items-center gap-x-2 rounded-full bg-brand-charcoal/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-muted"
            >
              <MessageSquareShare className="h-3.5 w-3.5" />
              QLBI — Community Feed
            </motion.div>
            
            <motion.h2 
              variants={fadeInUpVariants}
              className="text-4xl font-light tracking-tight text-brand-dark sm:text-5xl md:text-6xl leading-[1.1]"
            >
              More than <br />
              <span className="relative inline-block font-normal italic">just profiles</span>
            </motion.h2>

            <motion.div 
              variants={fadeInUpVariants}
              className="pt-4 max-w-lg lg:bg-background/90 lg:backdrop-blur-md lg:p-6 lg:rounded-xl lg:border lg:border-border/40 lg:shadow-sm"
            >
              <p className="text-base md:text-lg font-light leading-relaxed text-brand-charcoal/90">
                Beyond matchmaking, QLBI includes a community space for reminders, reflections, and shared knowledge. It’s a place where faith and daily life can meet in a simple, respectful way.
              </p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUpVariants}
              className="pt-2 flex items-center gap-x-6 text-[10px] font-bold tracking-widest uppercase text-brand-muted/80"
            >
              <span>• Reminders</span>
              <span>• Reflections</span>
              <span>• Knowledge</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Image Canvas */}
          <div className="lg:col-span-6 z-10 relative lg:pl-4">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-md border border-border/50 bg-brand-charcoal/5"
            >
              <Image
                src="/img12.jpg"
                alt="QLBI Shared Knowledge and Reflection Space"
                fill
                className="object-cover object-center transform transition-transform duration-1000 hover:scale-103"
                sizes="(max-w-7xl) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/20 via-transparent to-transparent" />
            </motion.div>
            
            <div className="hidden lg:block absolute -bottom-6 -left-6 h-full w-full border border-brand-muted/20 rounded-2xl -z-10 pointer-events-none translate-x-3 translate-y-3" />
          </div>

        </div>
      </div>
    </section>
  );
}