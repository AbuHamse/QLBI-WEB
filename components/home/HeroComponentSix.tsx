// components/home/HeroComponentSix.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Standard shadcn paths

export default function HeroComponentSix() {
  // Array of images matching your /public naming convention
  const carouselImages = [
    { src: "/img7.jpg", alt: "Intentional Connection Space 1" },
    { src: "/img8.jpg", alt: "Intentional Connection Space 2" },
    { src: "/img9.jpg", alt: "Intentional Connection Space 3" },
    { src: "/img10.jpg", alt: "Intentional Connection Space 4" },
    { src: "/img11.jpg", alt: "Intentional Connection Space 5" },
  ];

  // Identical animation definitions carried over from Component Five
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
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section className="w-full bg-brand-bg px-6 py-28 lg:px-8 border-t border-border/40 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        
        {/* Animated Copy Layout Container */}
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Your Custom Track Identifier */}
          <motion.span 
            variants={fadeInUpVariants}
            className="inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-brand-muted"
          >
            QLBI — Real Intentions Only
          </motion.span>

          {/* Large Premium Header */}
          <motion.h2 
            variants={fadeInUpVariants}
            className="mt-5 text-3xl font-light tracking-tight text-brand-dark sm:text-4xl md:text-5xl leading-[1.2]"
          >
            People here are looking for <br className="hidden sm:inline" />
            <span className="relative inline-block font-normal italic">something real</span>
          </motion.h2>

          {/* Description Paragraph */}
          <motion.p 
            variants={fadeInUpVariants}
            className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-brand-charcoal/80"
          >
            Everyone on QLBI joins with purpose. Whether someone is ready for marriage now or preparing for the future, the intention is always clear from the start.
          </motion.p>
        </motion.div>

        {/* Shadcn Slider Framework with Subtle Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl mx-auto px-4 md:px-10"
        >
          {/* Looping options or alignment adjustments can be passed via opts prop if needed */}
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {carouselImages.map((img, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3" // Multi-slide responsive grid layout
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-border/40 shadow-sm bg-brand-charcoal/5">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-center select-none"
                      sizes="(max-w-7xl) 100vw, 320px"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Elegant Minimal Controls Container */}
            <div className="flex justify-end gap-2 mt-6 md:absolute md:-top-16 md:right-4 md:mt-0">
              <CarouselPrevious className="static translate-y-0 h-9 w-9 border border-border/60 hover:bg-brand-charcoal/5" />
              <CarouselNext className="static translate-y-0 h-9 w-9 border border-border/60 hover:bg-brand-charcoal/5" />
            </div>
          </Carousel>
        </motion.div>

      </div>
    </section>
  );
}