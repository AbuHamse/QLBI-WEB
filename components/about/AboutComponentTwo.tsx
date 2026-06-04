// components/about/AboutComponentTwo.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Ban, Users } from "lucide-react";

export default function AboutComponentTwo() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="w-full bg-[#F6EFE9] text-[#221B1F] px-6 py-28 lg:px-12 border-t border-[#221B1F]/10 relative">
      <div className="mx-auto max-w-7xl">
        
        {/* Asymmetric Magazine-Style Grid Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-start">
          
          {/* Left Column: Bold Editorial Sticky Header */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D89A9E] block">
              The Reality & The Need
            </span>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight leading-[1.1] text-[#221B1F]">
              Why QLBI <br />
              <span className="font-normal italic text-[#D89A9E]">exists</span>
            </h2>
            <div className="h-[1px] w-20 bg-[#221B1F]/20 pt-2" />
          </div>

          {/* Right Column: Narrative Storytelling and Interactive Accordion */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              className="space-y-6"
            >
              <p className="text-xl font-light leading-relaxed text-[#221B1F]/90">
                Many people searching for marriage feel caught between modern dating culture and their religious values. We saw an urgent need for a platform that allows people to connect with complete sincerity while keeping faith at the absolute center of the experience.
              </p>
              
              <p className="text-base font-light leading-relaxed text-[#221B1F]/80">
                Mainstream apps frequently enforce Westernized, localized mindsets that actively penalize or restrict legitimate relationship structures ordained by Allah SWT in the Quran. True transparency from day one shouldn't result in exclusion—it should be celebrated as an act of faith.
              </p>
            </motion.div>

            {/* Premium Interactive Detail Block using Shadcn Accordion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-t border-[#221B1F]/15 pt-6"
            >
              <Accordion type="single" collapsible className="w-full space-y-2">
                
                <AccordionItem value="item-1" className="border-b border-[#221B1F]/10 py-2">
                  <AccordionTrigger className="text-base font-normal hover:no-underline text-[#221B1F] hover:text-[#D89A9E] transition-colors">
                    <span className="flex items-center gap-x-3">
                      <Ban className="h-4 w-4 text-[#D89A9E]" />
                      Beyond Mainstream Restrictions
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-light leading-relaxed text-[#221B1F]/70 pt-2 pl-7">
                    Traditional spaces often restrict or ban users who are clear about seeking polygynous family structures. QLBI provides a dignified, safe ecosystem for individuals to explicitly find partners who share matching life goals, with complete transparency.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-[#221B1F]/10 py-2">
                  <AccordionTrigger className="text-base font-normal hover:no-underline text-[#221B1F] hover:text-[#D89A9E] transition-colors">
                    <span className="flex items-center gap-x-3">
                      <Users className="h-4 w-4 text-[#D89A9E]" />
                      An Inclusive Paradigm
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-light leading-relaxed text-[#221B1F]/70 pt-2 pl-7">
                    In compliance with Islamic parameters, our framework safely extends communication options to Christian and Jewish women (*Ahl al-Kitab*) globally, breaking down geographic limits while preserving strict boundaries of respect.
                  </AccordionContent>
                </AccordionItem>

              </Accordion>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}