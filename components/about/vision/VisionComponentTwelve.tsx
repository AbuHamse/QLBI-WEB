// components/about/vision/VisionComponentTwelve.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VisionComponentTwelve() {
  return (
    <section className="w-full bg-[#F6EFE9] text-[#221B1F] px-6 py-28 lg:px-12 border-t border-[#221B1F]/10 relative">
      <div className="mx-auto max-w-7xl">
        
        {/* Asymmetric Split Layout inspired by image_ebd1ac.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Copy */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A9E] block">
              Fluid Geographies
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.1] text-[#221B1F]">
              Seamless boundary <br />
              <span className="font-normal italic text-[#D89A9E]">travel nodes</span>
            </h2>

            <div className="h-[1px] w-16 bg-[#221B1F]/20 my-6" />

            <p className="text-base sm:text-lg font-light leading-relaxed text-[#221B1F]/80 max-w-xl">
              Believers are constantly in motion—whether traveling for trade, study, or relocation. Our platform framework adapts to your coordinates, ensuring you stay visible to high-intent matches wherever you deploy your journey.
            </p>
            
            <p className="text-sm font-light leading-relaxed text-[#221B1F]/70 max-w-xl">
              By removing localized restriction boundaries, we unlock an expansive network where cultural and geographic gaps dissolve under shared religious goals.
            </p>
          </div>

          {/* Right Column: Next.js Optimized Image Frame using img18.jpg */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.99 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#221B1F]/10 bg-[#221B1F]"
            >
              <Image 
                src="/img18.jpg"
                alt="QLBI Node Mobility" 
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover opacity-85 transition-transform duration-700 hover:scale-102"
              />
              {/* Subtle light luxury overlay */}
              <div className="absolute inset-0 bg-[#0A0A0C]/5 mix-blend-overlay pointer-events-none" />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}