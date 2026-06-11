import React from "react";
import { Sparkles } from "lucide-react";

export default function JourneyCTAComponent() {
  return (
    <section className="w-full py-32 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-b border-accent/10 relative overflow-hidden">
      
      <div className="max-w-3xl w-full text-center flex flex-col items-center relative z-10 animate-fade-in-up">
        <h2 className="text-4xl md:text-6xl font-light font-serif tracking-tight text-foreground uppercase mb-6 leading-none">
          Your journey can <br /><span className="font-sans italic text-accent lowercase">begin</span> today
        </h2>
        
        <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-xl mb-10">
          Whether you are actively seeking marriage right now or thoughtfully preparing for the future, QLBI offers a protected space to meet individuals who match your exact intent.
        </p>

        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground border border-primary px-8 py-3.5 rounded-lg shadow-md hover:bg-background hover:text-primary transition-all duration-300 group">
          <Sparkles className="w-4 h-4 text-accent fill-accent/10 stroke-[1.2]" />
          <span className="text-[11px] tracking-[0.25em] uppercase font-semibold">
            Initialize Profile Registry
          </span>
        </button>
      </div>

    </section>
  );
}