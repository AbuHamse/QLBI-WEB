import React from "react";
import { Lock, EyeOff } from "lucide-react";

export default function ConnectSecurityComponent() {
  return (
    <section className="w-full py-26 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-accent/10">
      <div className="max-w-4xl w-full bg-card border border-accent/20 rounded-2xl p-8 md:p-16 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.01)] animate-fade-in-up relative overflow-hidden">
        
        <div className="w-12 h-12 rounded-full border border-accent/20 bg-background flex items-center justify-center text-accent mb-8 shadow-sm">
          <Lock className="w-4 h-4 stroke-[1.2]" />
        </div>

        <h2 className="text-3xl md:text-4xl font-light font-serif tracking-tight text-foreground uppercase mb-6 max-w-xl">
          Use secure communication tools
        </h2>

        <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-2xl mb-12">
          Messaging and communication features are explicitly designed to help users connect safely while maintaining absolute, complete control over their privacy parameters and contact visibility.
        </p>

        {/* Minimal Footer Assurance Map */}
        <div className="w-full pt-8 border-t border-accent/10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
          <div className="flex items-center justify-center gap-2 text-primary/60">
            <EyeOff className="w-3.5 h-3.5 text-accent stroke-[1.5]" />
            <span className="text-xs tracking-wide font-light">Protected Metadata Isolation</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-primary/60">
            <Lock className="w-3.5 h-3.5 text-accent stroke-[1.5]" />
            <span className="text-xs tracking-wide font-light">On-Demand Profile Shield</span>
          </div>
        </div>

      </div>
    </section>
  );
}