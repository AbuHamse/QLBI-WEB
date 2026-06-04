// components/home/HeroComponentEight.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, ShieldCheck, HeartHandshake } from "lucide-react";

export default function HeroComponentEight() {
  const cards = [
    {
      icon: Compass,
      title: "Shared Values First",
      description: "Look through profiles designed around deep priorities, lifestyle choices, and religious practices before you say hello.",
    },
    {
      icon: ShieldCheck,
      title: "Honest Intentions",
      description: "Connect safely with real people who are verified, focused on commitment, and seeking genuine marriage.",
    },
    {
      icon: HeartHandshake,
      title: "Natural Pace",
      description: "Get to know one another through simple, respectful communication spaces built without the pressure of games.",
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
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
    <section className="w-full bg-brand-bg px-6 py-28 lg:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        
        {/* Animated Introductory Header Block */}
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.span 
            variants={fadeInUpVariants}
            className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-brand-muted"
          >
            QLBI — Core Foundation
          </motion.span>

          <motion.h2 
            variants={fadeInUpVariants}
            className="mt-5 text-3xl font-light tracking-tight text-brand-dark sm:text-4xl md:text-5xl leading-[1.2]"
          >
            Clear steps to <br className="sm:hidden" />
            <span className="relative inline-block font-normal italic">true understanding</span>
          </motion.h2>
        </motion.div>

        {/* 3-Column Geometry matching HeroComponent8.jpg with elongated heights */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeInUpVariants}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-background px-8 py-16 lg:px-10 lg:py-20 min-h-[450px] lg:min-h-[520px] transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-brand-muted/40 cursor-pointer"
              >
                {/* Visual Accent Top Bar Effect */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-brand-muted transition-all duration-500 group-hover:w-full" />
                
                <div>
                  {/* Icon Space with Interactive Motion Color-Shift */}
                  <div className="inline-flex p-3 rounded-xl bg-brand-charcoal/5 text-brand-muted transition-colors duration-300 group-hover:bg-brand-muted group-hover:text-background mb-10">
                    <IconComponent className="h-5 w-5" />
                  </div>

                  {/* Text Information Elements */}
                  <h3 className="text-xl font-normal tracking-tight text-brand-dark mb-4 transition-colors duration-300 group-hover:text-brand-muted">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm font-light leading-relaxed text-brand-charcoal/70">
                    {card.description}
                  </p>
                </div>

                {/* Subtle indicators at the base */}
                <div className="mt-auto pt-8 flex items-center text-[10px] font-bold uppercase tracking-wider text-brand-muted/0 transition-all duration-300 transform translate-x-2 group-hover:text-brand-muted/100 group-hover:translate-x-0">
                  Read More &rarr;
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}