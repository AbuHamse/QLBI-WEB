// components/HeroComponentOne.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroComponentOne() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-brand-bg px-6 py-20 lg:px-8">
      {/* Editorial Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img4.jpg"
          alt="QLBI Introduction Backdrop"
          fill
          priority
          className="object-cover object-center opacity-[0.12] filter contrast-[1.05]"
        />
        {/* Soft custom gradient mesh overlay to keep text hyper-readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/40 via-transparent to-brand-bg" />
      </div>

      {/* Content Container Matrix */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Upper Muted Label - CozySpace Design Pattern */}
        <span className="inline-block animate-fade-in-up text-[11px] font-bold uppercase tracking-[0.25em] text-brand-muted">
          Welcome to QLBI
        </span>

        {/* Hero 1 Main Header */}
        <h1 className="mt-6 animate-fade-in-up text-4xl font-light tracking-tight text-brand-dark sm:text-5xl md:text-6xl lg:text-7xl">
          Where faith and marriage <br className="hidden sm:inline" />
          <span className="relative inline-block font-normal">
            come together
            {/* Elegant template micro-underline signature */}
            <span className="absolute -bottom-2 left-1/2 h-[2px] w-24 -translate-x-1/2 rounded-full bg-brand-muted/60" />
          </span>
        </h1>

        {/* Hero 1 Paragraph Copy */}
        <p className="mx-auto mt-10 max-w-2xl text-base font-light leading-relaxed text-brand-charcoal/80 sm:text-lg animate-fade-in-up [animation-delay:150ms]">
          QLBI is a space for Muslims looking to build something serious. It’s not about casual chats or endless swiping. It’s about meeting people with the same intention — marriage, respect, and faith at the center.
        </p>

        {/* Call to Actions Interaction Group */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up [animation-delay:300ms]">
          <Link
            href="#waitlist"
            className="group flex items-center gap-x-2 rounded-full bg-brand-charcoal px-7 py-3.5 text-xs font-semibold text-brand-bg transition-all hover:bg-brand-dark shadow-sm hover:shadow"
          >
            Join the Waitlist
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          
          <Link
            href="/how-it-works"
            className="rounded-full border border-brand-charcoal/20 bg-transparent px-7 py-3.5 text-xs font-medium text-brand-charcoal transition-all hover:bg-brand-charcoal/5"
          >
            Learn Our Process
          </Link>
        </div>
      </div>
    </section>
  );
}