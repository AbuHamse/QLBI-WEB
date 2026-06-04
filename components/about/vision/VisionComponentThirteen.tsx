// components/about/vision/VisionComponentThirteen.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Compass } from "lucide-react";

export default function VisionComponentThirteen() {
  return (
    <section className="w-full bg-[#221B1F] text-[#F6EFE9] px-6 py-32 lg:px-12 border-t border-[#F6EFE9]/10 relative overflow-hidden">
      {/* Editorial background watermarking */}
      <div className="absolute top-12 right-12 text-[14vw] font-bold text-[#0A0A0C]/20 select-none pointer-events-none font-serif italic">
        Masjid
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Manipulated Staggered Pattern Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Elevated Typography Box */}
          <div className="lg:col-span-7 bg-[#0A0A0C]/40 border border-[#F6EFE9]/5 rounded-3xl p-8 md:p-14 space-y-8 backdrop-blur-md order-2 lg:order-1 self-center">
            <div className="flex items-center gap-x-3 text-[#D89A9E]">
              <Compass className="h-4 w-4 stroke-[1.5] animate-spin-slow" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em]">
                Physical Nodes
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extralight tracking-tight leading-tight">
              Integrating local <br />
              <span className="font-normal italic text-[#F2C9B6]">Masjid infrastructure</span>
            </h2>

            <div className="h-[1px] w-12 bg-[#F6EFE9]/20" />

            <p className="text-base font-light leading-relaxed text-[#F6EFE9]/80">
              Our vision directly links your digital matching journey with the local physical community. By providing real-time infrastructure tracking tools, users can effortlessly locate local Masjids and secure safe communication spaces.
            </p>

            <p className="text-sm font-light leading-relaxed text-[#F6EFE9]/60">
              This anchors marriages within safe physical environments monitored by local leadership and families, promoting maximum visibility and religious accountability.
            </p>
          </div>

          {/* Manipulated Overlapping Image Layer using img19.jpg */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 min-h-[300px] lg:min-h-full">
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 lg:-left-16 lg:top-12 lg:-bottom-12 rounded-2xl overflow-hidden shadow-2xl border border-[#F6EFE9]/10 bg-[#0A0A0C]"
            >
              <Image 
                src="/img19.jpg"
                alt="QLBI Masjid Infrastructure Map" 
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover opacity-50 grayscale contrast-125 transition-transform duration-1000 hover:scale-105"
              />
              
              {/* Luxury Muted Rose Tint Overlay */}
              <div 
                className="absolute inset-0 mix-blend-color-burn opacity-40 pointer-events-none"
                style={{ backgroundColor: "#D89A9E" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#221B1F] via-transparent to-transparent opacity-80" />
              
              {/* Floating Blueprint Stamp */}
              <div className="absolute bottom-6 right-6 text-right font-mono text-[9px] uppercase tracking-widest text-[#F2C9B6]/40">
                MAP ID // 019.NODE
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}