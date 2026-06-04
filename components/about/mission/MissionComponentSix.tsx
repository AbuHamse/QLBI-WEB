// components/about/mission/MissionComponentSix.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionComponentSix() {
  return (
    <section className="w-full bg-[#0A0A0C] text-[#F6EFE9] px-6 pt-36 pb-24 lg:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-6 right-6 lg:left-12 lg:right-12 h-[1px] bg-[#F6EFE9]/10" />

      <div className="mx-auto max-w-7xl">
        {/* Asymmetric Split Grid Inspired by "mission design template page.jpg" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Arched Image Frame Geometry */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md aspect-[4/5] bg-[#221B1F] rounded-t-full overflow-hidden shadow-2xl border border-[#F6EFE9]/10"
              style={{ borderRadius: "240px 240px 0px 0px" }} // Explicit architectural arch
            >
              <Image
                src="/img6.jpg" // Ensure your image is located in the /public folder
                alt="QLBI True Sincerity Canvas"
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                priority
                className="object-cover opacity-60 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent" />
            </motion.div>
          </div>

          {/* Right Column: Editorial Headings with Delicate Calligraphy Script Style */}
          <div className="lg:col-span-6 space-y-6 relative">
            {/* Fine accent tracking text */}
            <span className="block text-[11px] font-bold uppercase tracking-[0.3em] text-[#D89A9E]">
              The Core Directive
            </span>

            <div className="relative">
              {/* Overlapping Fine Script Accent Layout */}
              <span className="absolute -top-6 left-0 font-serif italic text-xl text-[#F2C9B6] opacity-80 tracking-wide">
                Seeking pure intentions—
              </span>
              <h1 className="text-4xl sm:text-6xl font-extralight tracking-tight leading-[1.1] pt-2">
                Our mission is <br />
                <span className="font-normal italic text-[#F2C9B6]">
                  to build with truth
                </span>
              </h1>
            </div>

            <div className="h-[1px] w-20 bg-[#F6EFE9]/20 pt-2" />

            <p className="text-base sm:text-lg font-light leading-relaxed text-[#F6EFE9]/80 max-w-xl">
              We reject the superficial mechanics of modern app ecosystems to
              protect the sacred nature of seeking marriage. QLBI shifts the
              focus from instant gratification back to deliberate spiritual
              intent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
