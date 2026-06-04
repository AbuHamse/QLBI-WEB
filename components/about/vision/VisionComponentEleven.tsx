// components/about/vision/VisionComponentEleven.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VisionComponentEleven() {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center relative overflow-hidden px-6 lg:px-12 bg-[#0A0A0C]">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 grayscale"
        >
          <source src="/qlbi-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Custom Linear Gradient Overlay matching the theme layout from image_ebd1ac.png */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(to bottom, rgba(34, 27, 31, 0.85) 0%, rgba(10, 10, 12, 0.98) 100%)"
          }}
        />
      </div>

      {/* Hero Narrative Frame Content */}
      <div className="mx-auto max-w-5xl w-full text-center relative z-20 space-y-6 pt-20">
        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          whileInView={{ opacity: 0.7, letterSpacing: "0.3em" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="inline-block text-[11px] font-bold uppercase text-[#D89A9E]"
        >
          The Macro Horizon // Vision 2026
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-[#F6EFE9] leading-[1.1]"
        >
          Unifying the global <br />
          <span className="font-normal italic text-[#F2C9B6]">Ummah ecosystem</span>
        </motion.h1>

        <div className="pt-8 max-w-2xl mx-auto border-t border-[#F6EFE9]/10 mt-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg font-light leading-relaxed text-[#F6EFE9]/80 tracking-wide"
          >
            Our vision extends beyond typical matching algorithms. We are establishing an interconnected infrastructure that bridges pure intentions with real-world local community networks.
          </motion.p>
        </div>
      </div>
    </section>
  );
}