// components/about/AboutComponentThree.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Clock, ShieldAlert } from "lucide-react";

export default function AboutComponentThree() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const barriers = [
    {
      icon: Globe,
      label: "Geographic Fragmentation",
      text: "Distance and rigid borders divide an interconnected Ummah, restricting circles to hyper-local or poorly matched networks."
    },
    {
      icon: Clock,
      label: "Modern Fast-Paced Demands",
      text: "Demanding professional careers and chaotic modern routines leave little room for traditional, high-intent introduction processes."
    },
    {
      icon: ShieldAlert,
      label: "The Verification Gap",
      text: "A steep decline in user accountability across current platforms creates persistent doubts over true intentions and trust."
    }
  ];

  return (
    <section className="w-full bg-[#0A0A0C] text-[#F6EFE9] px-6 py-28 lg:px-12 border-t border-[#F6EFE9]/10 relative overflow-hidden">
      {/* Decorative luxury architectural column lines */}
      <div className="absolute top-0 bottom-0 left-6 lg:left-12 w-[1px] bg-[#F6EFE9]/5 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-6 lg:right-12 w-[1px] bg-[#F6EFE9]/5 pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          
          {/* Left Column: Big Editorial Statement */}
          <div className="lg:col-span-5 space-y-6">
            <motion.span 
              variants={itemVariants}
              className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-[#D89A9E]"
            >
              The Unseen Barriers
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight leading-[1.1] text-[#F6EFE9]"
            >
              The challenge <br />
              many Muslims <br />
              <span className="font-normal italic text-[#F2C9B6]">face today</span>
            </motion.h2>
          </div>

          {/* Right Column: Narrative & Asymmetric Core Matrix */}
          <div className="lg:col-span-7 space-y-12 lg:pl-6">
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl font-light leading-relaxed text-[#F6EFE9]/90 max-w-2xl"
            >
              Finding a compatible spouse is not always easy. Distance, busy schedules, limited social circles, and valid concerns about transparency and digital safety can make the journey incredibly exhausting. QLBI was built explicitly to dismantle these exact barriers.
            </motion.p>

            {/* Micro-Editorial Row Grid */}
            <div className="border-t border-[#F6EFE9]/10 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {barriers.map((barrier, index) => {
                const IconComponent = barrier.icon;
                return (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="space-y-4 group"
                  >
                    <div className="text-[#D89A9E] group-hover:text-[#F2C9B6] transition-colors duration-300">
                      <IconComponent className="h-5 w-5 stroke-[1.5]" />
                    </div>
                    <h4 className="text-sm font-medium tracking-wide text-[#F6EFE9]">
                      {barrier.label}
                    </h4>
                    <p className="text-xs font-light leading-relaxed text-[#F6EFE9]/60">
                      {barrier.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}