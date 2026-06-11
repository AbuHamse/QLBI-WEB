import React from "react";
import { ShieldAlert } from "lucide-react";

export default function JourneyFoundationComponent() {
  return (
    <section className="w-full py-28 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-accent/10">
      <div className="max-w-4xl w-full text-center flex flex-col items-center animate-fade-in-up">
        
        <div className="w-9 h-9 rounded-full bg-brand-highlight/30 border border-accent/20 flex items-center justify-center text-accent mb-6">
          <ShieldAlert className="w-4 h-4 stroke-[1.3]" />
        </div>

        <h2 className="text-3xl md:text-5xl font-light font-serif tracking-tight text-foreground uppercase mb-6 max-w-2xl leading-tight">
          A foundation for lasting relationships
        </h2>

        <p className="text-sm md:text-base text-primary/70 font-light max-w-2xl leading-relaxed tracking-wide">
          True marriage is not simply about discovering a partner. It is about actively building a life alongside an individual who shares your faith, respect, and foundational values.
        </p>

      </div>
    </section>
  );
}