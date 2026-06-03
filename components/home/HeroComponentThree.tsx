// components/HeroComponentThree.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function HeroComponentThree() {
  return (
    <section className="w-full bg-background px-6 py-24 lg:px-8 border-t border-border/40">
      <div className="mx-auto max-w-4xl text-center">
        
        {/* Editorial Tracking Tag */}
        <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-muted">
          A Paradigm Shift
        </span>

        {/* Hero 3 Copy Header */}
        <h2 className="mt-6 text-3xl font-light tracking-tight text-brand-dark sm:text-4xl md:text-5xl leading-[1.2]">
          A different way <br className="hidden sm:inline" />
          <span className="relative inline-block font-normal italic">
            to connect
          </span>
        </h2>

        {/* Hero 3 Core Paragraph Box */}
        <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-brand-charcoal/80 sm:text-lg">
          QLBI brings structure and intention back into the process. Every profile is built with purpose, and every interaction is guided by respect. You’re not here to scroll endlessly — you’re here to find someone aligned with your values.
        </p>

        {/* Framed Lifestyle Presentation Element from Full Layout Template */}
        <div className="mt-16 relative w-full h-[320px] sm:h-[450px] overflow-hidden rounded-xl shadow-sm border border-border/50">
          <Image
            src="/img3.jpg"
            alt="Structured Intentional Connection"
            fill
            className="object-cover object-center transform scale-102 transition-transform duration-700 hover:scale-100"
            sizes="(max-w-7xl) 100vw, 896px"
          />
          {/* Extremely soft elegant overlay tint mirroring template shadows */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent" />
        </div>

      </div>
    </section>
  );
}