import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function ConnectOutroComponent() {
  return (
    <section className="w-full py-32 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-b border-accent/10 relative overflow-hidden">
      {/* Decorative Alignment Dot representing the design aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-highlight/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-3xl w-full text-center flex flex-col items-center relative z-10 animate-fade-in-up">
        <div className="w-12 h-px bg-accent mb-8" />
        
        <h2 className="text-4xl md:text-6xl font-light font-serif tracking-tight text-foreground uppercase mb-6 leading-none">
          Move forward <br /> <span className="font-sans italic font-normal text-accent lowercase">with</span> confidence
        </h2>
        
        <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-xl mb-10">
          As authentic trust and clarity develop, users can continue exploring deep compatibility and comfortably determine whether they wish to take the next meaningful steps together.
        </p>

        <div className="inline-flex items-center gap-2 bg-card border border-accent/30 px-5 py-2.5 rounded-full shadow-sm text-accent">
          <CheckCircle2 className="w-4 h-4 stroke-[1.5]" />
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold font-sans">
            Verified Integrity Verified Pipeline
          </span>
        </div>
      </div>
    </section>
  );
}