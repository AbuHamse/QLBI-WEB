// components/HeroComponentTwo.tsx
"use client";

import React from "react";
import { AlertCircle } from "lucide-react";

export default function HeroComponentTwo() {
  return (
    <section className="w-full bg-brand-bg px-6 py-24 lg:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        {/* Responsive Grid Structure to match template weight */}
        <div className="grid grid-cols-1 items-start gap-y-12 lg:grid-cols-12 lg:gap-x-16">
          
          {/* Left Column: Visual Visual Anchor / Subtle Brand Accent Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-x-2 rounded-full bg-brand-charcoal/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-muted">
              <AlertCircle className="h-3.5 w-3.5" />
              The Landscape Today
            </div>
            
            <h2 className="text-3xl font-light tracking-tight text-brand-dark sm:text-4xl md:text-5xl leading-[1.15]">
              Modern apps <br />
              <span className="relative inline-block font-normal">
                miss the point
                <span className="absolute -bottom-1 left-0 h-[2px] w-16 rounded-full bg-brand-muted/40" />
              </span>
            </h2>
            
            {/* Elegant minimalistic stylized element placeholder (Echoes CozySpace ceramic balances) */}
            <div className="hidden lg:block h-[1px] w-2/3 bg-gradient-to-r from-brand-muted/40 to-transparent pt-12" />
          </div>

          {/* Right Column: Editorial Core Copy Block */}
          <div className="lg:col-span-7 lg:pt-10">
            <div className="relative border-l-2 border-brand-highlight pl-6 md:pl-8">
              <p className="text-base md:text-lg font-light leading-relaxed text-brand-charcoal/90">
                Most platforms today are built for attention, not commitment. They focus on quick matches and surface-level conversations. That often leaves people more confused than connected, especially when they are looking for something meaningful.
              </p>
              
              {/* Subtle structural subtext line */}
              <p className="mt-6 text-xs tracking-wide text-brand-charcoal/50 font-medium uppercase">
                Designed for retention, not results • QLBI Thesis
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}