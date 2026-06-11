import React from "react";
import { Scale } from "lucide-react";

export default function ConnectFamilyComponent() {
  return (
    <section className="w-full py-24 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-accent/10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up">
        
        <div className="space-y-6 max-w-xl">
          <div className="inline-flex items-center gap-3 text-accent">
            <Scale className="w-4 h-4 stroke-[1.2]" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
              Traditional Guardrails
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-light font-serif tracking-tight text-foreground uppercase leading-tight">
            Involve family when <br /> appropriate
          </h2>
          
          <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide">
            For those who prefer it, family members or guardians can become involved as conversations naturally progress toward serious, formalized marital discussions.
          </p>
        </div>

        {/* Structural Geometric Panel Box */}
        <div className="w-full p-8 md:p-10 bg-brand-highlight/10 border border-accent/20 rounded-xl flex flex-col justify-center">
          <span className="text-[9px] uppercase tracking-[0.25em] text-primary/40 font-bold block mb-4">
            Adaptive Privacy Settings
          </span>
          <p className="text-xs md:text-sm text-primary/80 font-light tracking-wide leading-relaxed">
            Our infrastructure supports multiple communication styles, honoring cultural boundaries while fostering safe, uncompromised introductions.
          </p>
        </div>

      </div>
    </section>
  );
}