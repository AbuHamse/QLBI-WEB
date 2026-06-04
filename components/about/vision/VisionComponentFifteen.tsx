// components/about/vision/VisionComponentFifteen.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function VisionComponentFifteen() {
  return (
    <section className="w-full bg-[#0A0A0C] text-[#F6EFE9] border-t border-t-[#F6EFE9]/10 relative overflow-hidden min-h-[70vh] flex items-center">
      {/* Structural Framing Grid Background Accent Lines */}
      <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#F6EFE9]/5 hidden lg:block pointer-events-none" />

      <div className="mx-auto max-w-7xl w-full px-6 py-24 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Panel: Bold Typography Wrap */}
          <div className="space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D89A9E] block">
              The Long-Term Aim
            </span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight leading-[1.1]">
              Establishing a <br />
              sanctuary <br />
              <span className="font-normal italic text-[#F2C9B6]">for generations</span>
            </h2>
          </div>

          {/* Right Panel: Content Text & Navigation Call to Action */}
          <div className="space-y-8 lg:pl-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-base sm:text-lg font-light leading-relaxed text-[#F6EFE9]/80"
            >
              We are building a foundational platform designed to protect family lines, honor religious values, and uplift the entire Ummah. QLBI is committed to remaining a trusted space for anyone looking to build a marriage centered on faith and sincerity.
            </motion.p>

            <div className="h-[1px] w-full bg-[#F6EFE9]/10 pt-2" />

            {/* Seamless Interactive Route Navigator */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-4"
            >
              <Link 
                href="/about/values" 
                className="inline-flex items-center gap-x-4 group text-xs uppercase tracking-[0.25em] text-[#F2C9B6] hover:text-[#F6EFE9] transition-colors duration-300"
              >
                <span>Continue To Our Core Values</span>
                <span className="p-3 rounded-full border border-[#F2C9B6]/20 bg-[#221B1F]/40 group-hover:bg-[#F2C9B6] group-hover:text-[#0A0A0C] transition-all duration-300">
                  <ArrowRight className="h-4 w-4 stroke-[1.5]" />
                </span>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}