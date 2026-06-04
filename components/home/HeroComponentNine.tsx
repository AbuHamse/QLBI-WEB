// components/home/HeroComponentNine.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function HeroComponentNine() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
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
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section className="w-full bg-background px-6 py-28 lg:px-8 border-t border-border/40 overflow-hidden">
      <div className="mx-auto max-w-5xl">
        
        {/* Main Layout Stack mirroring FinalComponent.jpg */}
        <div className="space-y-12 lg:space-y-16">
          
          {/* Top Block: The Sacred Sign (Surah Ar-Rum) */}
          <motion.div 
            className="w-full rounded-2xl bg-brand-bg border border-border/50 p-8 md:p-12 text-center relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Soft decorative accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-brand-muted/30" />
            
            <motion.div variants={fadeInUpVariants} className="flex justify-center mb-6 text-brand-muted">
              <Heart className="h-5 w-5 fill-current opacity-80" />
            </motion.div>

            <motion.p 
              variants={fadeInUpVariants} 
              className="text-xl md:text-2xl font-light leading-relaxed text-brand-dark tracking-wide italic max-w-4xl mx-auto"
            >
              "And among His signs is that He created for you mates from among yourselves, that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought."
            </motion.p>
            
            <motion.p 
              variants={fadeInUpVariants} 
              className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-muted"
            >
              Surah Ar-Rum • Verse 21
            </motion.p>
          </motion.div>

          {/* Middle Row: Asymmetric Dual Column split from template schema */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Left Column: Understanding the Benefit */}
            <motion.div 
              variants={fadeInUpVariants}
              className="rounded-xl border border-border/40 p-8 flex flex-col justify-between bg-brand-bg/40"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted block mb-3">
                  The Purpose
                </span>
                <h3 className="text-lg font-normal text-brand-dark mb-4">
                  A Source of Tranquility
                </h3>
                <p className="text-sm font-light leading-relaxed text-brand-charcoal/80">
                  Marriage in Islam is built to be a sanctuary of peace, true emotional safety, and deep spiritual growth. QLBI is designed precisely to honor this timeless vision.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Authentic Hadith from Sahih Muslim */}
            <motion.div 
              variants={fadeInUpVariants}
              className="rounded-xl border border-border/40 p-8 flex flex-col justify-between bg-brand-bg/40"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted block mb-3">
                  Prophetic Guidance
                </span>
                <h3 className="text-lg font-normal text-brand-dark mb-4">
                  The Best Provision
                </h3>
                <p className="text-sm font-light leading-relaxed text-brand-charcoal/80 italic">
                  The Messenger of Allah (peace be upon him) said: "The whole world is a provision, and the best object of benefit of the world is the pious woman."
                </p>
              </div>
              <span className="text-[10px] font-medium tracking-wide text-brand-charcoal/40 block mt-6 uppercase">
                Sahih Muslim • Book 17, Hadith 47
              </span>
            </motion.div>
          </motion.div>

          {/* Base Block: Full Width Grounding Frame */}
          <motion.div 
            className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-muted/40 to-transparent pt-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-charcoal/30">
              Build with Intention • Begin Your Journey
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}