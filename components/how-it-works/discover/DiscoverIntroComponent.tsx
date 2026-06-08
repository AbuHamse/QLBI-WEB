import React from "react";
import { Sparkles } from "lucide-react";

export default function DiscoverIntroComponent() {
  return (
    <section className="w-full py-28 md:py-36 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center relative overflow-hidden">
      {/* Precision architectural layout divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-accent/20" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-3 text-accent mb-4">
            <Sparkles className="w-4 h-4 stroke-[1.2]" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
              Intentional Discovery
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light font-serif tracking-tight text-foreground uppercase leading-tight">
            Explore compatible <br /> profiles
          </h2>
        </div>
        
        <div className="lg:col-span-7 lg:pt-10">
          <p className="text-base md:text-lg text-primary/70 font-light leading-relaxed max-w-xl tracking-wide">
            Discover people who share similar values, goals, interests, and expectations. Our matching tools bypass superficial mechanics to help make every introduction deeply meaningful from the very first interaction.
          </p>
        </div>
      </div>
    </section>
  );
}