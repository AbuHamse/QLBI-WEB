// components/about/AboutComponentFive.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Compass } from "lucide-react";

export default function AboutComponentFive() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="w-full bg-[#0A0A0C] text-[#F6EFE9] px-6 py-28 lg:px-12 border-t border-[#F6EFE9]/10 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Magazine Style Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Dominating Picture Canvas using img16.jpg */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#F6EFE9]/10 bg-[#221B1F]"
            >
              {/* Main Background Image */}
              <img 
                src="img16.jpg" 
                alt="QLBI Community Network" 
                className="w-full h-full object-cover opacity-60 transition-transform duration-700 hover:scale-105"
              />

              {/* Luxury Overlays for Editorial Contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C]/40 via-transparent to-[#0A0A0C]/90 mix-blend-multiply" />
              <div className="absolute inset-0 bg-[#221B1F]/20 mix-blend-color-burn" />

              {/* Floating Layout Specs */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="flex items-center gap-x-3 text-[#F6EFE9]">
                  <div className="p-2 rounded-lg bg-[#F6EFE9]/10 backdrop-blur-md">
                    <MapPin className="h-4 w-4 text-[#F2C9B6]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-wide">Global Masjid Router</p>
                    <p className="text-[10px] text-[#F6EFE9]/50">Connecting Traveling Believers</p>
                  </div>
                </div>
                <div className="text-[10px] font-mono tracking-wider opacity-30">
                  LOC // 016
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Core Story Copy */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D89A9E] block">
              The Revolutionary Hybrid
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight tracking-tight leading-[1.1] text-[#F6EFE9]">
              More than a <br />
              marriage <br />
              <span className="font-normal italic text-[#F2C9B6]">platform</span>
            </h2>

            <div className="h-[1px] w-16 bg-[#F6EFE9]/20 my-6" />

            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="text-base sm:text-lg font-light leading-relaxed text-[#F6EFE9]/90"
            >
              QLBI is also a secure community space where users can learn, share authentic experiences, and benefit from regular reminders that support deep personal growth and stronger relationships.
            </motion.p>
            
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              className="text-sm font-light leading-relaxed text-[#F6EFE9]/70"
            >
              Whether you are traveling across borders or exploring local neighborhoods, our built-in structural maps make it effortless to pinpoint local Masjids, connect with upright brothers or sisters, and discover sincere paths toward reward and shared *ajr*.
            </motion.p>
          </div>

        </div>

      </div>
    </section>
  );
}