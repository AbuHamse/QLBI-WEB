// components/HeroComponentFour.tsx
"use client";

import React from "react";
import Image from "next/image";

export default function HeroComponentFour() {
  return (
    <section className="w-full bg-brand-bg px-6 py-24 lg:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        {/* Asymmetrical Offset Grid from the Full Layout Template */}
        <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-x-16">
          
          {/* Left Column: Image Block with Editorial Framing */}
          <div className="lg:col-span-5 order-last lg:order-first">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-sm border border-border/40 bg-brand-charcoal/5">
              <Image
                src="/img5.jpg"
                alt="Clarity and Process Framework"
                fill
                className="object-cover object-center"
                sizes="(max-w-7xl) 100vw, 450px"
              />
            </div>
          </div>

          {/* Right Column: Text & Structured Value Statement */}
          <div className="lg:col-span-7 space-y-6 lg:pl-4">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-brand-muted">
              The Protocol
            </span>
            
            <h2 className="text-3xl font-light tracking-tight text-brand-dark sm:text-4xl md:text-5xl leading-[1.15]">
              A clear path <br />
              <span className="relative inline-block font-normal italic">
                toward marriage
              </span>
            </h2>

            <div className="pt-4 max-w-xl">
              <p className="text-base md:text-lg font-light leading-relaxed text-brand-charcoal/90">
                Start by creating your profile, share what matters to you, and complete verification. From there, you can explore compatible matches, start conversations, and take things step by step — with clarity, not pressure.
              </p>
            </div>

            {/* Subtle sub-label accent echoing the template details */}
            <div className="pt-6 flex items-center gap-x-4 text-[11px] tracking-wider text-brand-charcoal/40 font-bold uppercase">
              <span>01. Profile</span>
              <span className="h-[1px] w-8 bg-brand-muted/40" />
              <span>02. Verify</span>
              <span className="h-[1px] w-8 bg-brand-muted/40" />
              <span>03. Connect</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}