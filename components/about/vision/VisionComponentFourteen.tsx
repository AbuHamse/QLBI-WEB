// components/about/vision/VisionComponentFourteen.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VisionComponentFourteen() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const blockVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="w-full bg-[#F6EFE9] text-[#221B1F] px-6 py-32 lg:px-12 border-t border-[#221B1F]/10 relative">
      <div className="mx-auto max-w-7xl">
        
        {/* Manipulated 3-Column Architectural Lookbook Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          
          {/* Column 1: Micro Typography & Intent Heading */}
          <motion.div variants={blockVariants} className="space-y-6 lg:pt-4">
            <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#D89A9E]">
              SEC // 014 — METRIC
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-light tracking-tight leading-[1.15] text-[#221B1F]">
              Maximizing <br />
              shared <br />
              <span className="font-normal italic text-[#D89A9E]">rewards</span>
            </h3>
            
            <div className="h-[1px] w-12 bg-[#221B1F]/30" />
            
            <p className="text-xs font-light tracking-wide text-[#221B1F]/60 leading-relaxed uppercase">
              The platform architecture is calculated to foster spiritual benefits alongside digital matches.
            </p>
          </motion.div>

          {/* Column 2: Asymmetric Aspect Image Container using img20.jpg */}
          <motion.div variants={blockVariants} className="w-full">
            <div className="relative w-full aspect-[3/4] bg-[#221B1F] rounded-2xl overflow-hidden shadow-xl group">
              <Image 
                src="/img20.jpg"
                alt="QLBI Maximizing Ajr" 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              
              {/* Luxury Light Overlays */}
              <div className="absolute inset-0 bg-[#0A0A0C]/5 mix-blend-overlay pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#221B1F]/40 via-transparent to-transparent opacity-60" />
              
              {/* Fine Minimal Stamp */}
              <div className="absolute bottom-4 left-4 text-[9px] font-mono tracking-widest text-[#F6EFE9]/70 uppercase">
                IMG_20 // PLATES
              </div>
            </div>
          </motion.div>

          {/* Column 3: The Narrative & Structural Callout */}
          <motion.div variants={blockVariants} className="space-y-6 md:col-span-2 lg:col-span-1 lg:pt-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D89A9E] block">
              The Spiritual Framework
            </span>
            
            <p className="text-base font-light leading-relaxed text-[#221B1F]/90">
              Every single component of QLBI is intentionally framed around facilitating paths toward reward (*ajr*). We aim to honor your pursuit of companionship, turning intentional connections into a profound act of worship.
            </p>

            <div className="bg-[#221B1F] text-[#F6EFE9] rounded-xl p-6 space-y-3 shadow-md border border-[#221B1F]/20">
              <p className="text-[10px] font-mono tracking-widest uppercase text-[#F2C9B6]">
                Prophetic Path
              </p>
              <p className="text-xs font-light leading-relaxed text-[#F6EFE9]/80 italic">
                "When a person marries, they have fulfilled half of their religion; so let them fear Allah regarding the remaining half."
              </p>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}