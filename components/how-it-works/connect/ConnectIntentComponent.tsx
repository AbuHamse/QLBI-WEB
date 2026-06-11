import React from "react";
import { Compass } from "lucide-react";

export default function ConnectIntentComponent() {
  return (
    <section className="w-full py-24 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-accent/10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center animate-fade-in-up">
        
        {/* Left Aspect: High Luxury Typography Block */}
        <div className="lg:col-span-5 border-l-2 border-accent/40 pl-6 md:pl-8">
          <div className="inline-flex items-center gap-3 text-accent mb-3">
            <Compass className="w-4 h-4 stroke-[1.2]" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
              Deliberate Path
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light font-serif tracking-tight text-foreground uppercase leading-tight">
            Communication <br /> with intention
          </h2>
        </div>

        {/* Right Aspect: Modern Minimalist Split Info Section */}
        <div className="lg:col-span-7 bg-card border border-accent/20 p-8 md:p-12 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
          <p className="text-base md:text-lg text-primary/80 font-light leading-relaxed tracking-wide font-serif italic mb-6 text-accent">
            "Every conversation should have a purpose."
          </p>
          <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide">
            QLBI encourages meaningful discussions that help users thoroughly understand compatibility, values, and shared future goals before moving forward.
          </p>
        </div>

      </div>
    </section>
  );
}