import React from "react";
import { UserPlus } from "lucide-react";

export default function FeaturesCTAComponent() {
  return (
    <section className="w-full py-32 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-b border-accent/10 relative overflow-hidden">
      
      {/* Asymmetric Design Anchor Grid lines */}
      <div className="absolute inset-y-0 left-1/3 w-[1px] bg-accent/5 hidden lg:block" />
      <div className="absolute inset-y-0 right-1/3 w-[1px] bg-accent/5 hidden lg:block" />

      <div className="max-w-4xl w-full text-center flex flex-col items-center relative z-10 animate-fade-in-up">
        <div className="w-12 h-px bg-accent mb-8" />
        
        <h2 className="text-4xl md:text-6xl font-light font-serif tracking-tight text-foreground uppercase mb-6 leading-tight">
          Begin your journey <br /> <span className="font-sans italic font-normal text-accent lowercase">with</span> intention
        </h2>
        
        <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-xl mb-12">
          Create your verified profile today to connect with individuals who share your values, respect your traditions, and look forward to building a meaningful future together.
        </p>

        <button className="inline-flex items-center gap-3 bg-primary text-primary-foreground border border-primary px-10 py-4 rounded-lg shadow-md hover:bg-background hover:text-primary transition-all duration-300 group">
          <UserPlus className="w-4 h-4 text-accent stroke-[1.2]" />
          <span className="text-[11px] tracking-[0.25em] uppercase font-bold">
            Create Verified Profile
          </span>
        </button>
      </div>

    </section>
  );
}