import React from "react";
import { ShieldAlert, Users, CheckCircle2 } from "lucide-react";

export default function VerificationSafetyComponent() {
  return (
    <section className="w-full bg-background text-primary flex flex-col lg:flex-row min-h-[450px] border-b border-accent/20 overflow-hidden">
      
      {/* Left Column: Light Minimalist Assurance Canvas */}
      <div className="flex-1 py-20 px-6 md:px-16 lg:px-24 flex flex-col justify-center items-start">
        <div className="inline-flex items-center gap-3 text-accent mb-4">
          <ShieldAlert className="w-4 h-4 stroke-[1.2]" />
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
            Our Commitment
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-light font-serif tracking-tight text-foreground uppercase leading-tight mb-6">
          Your safety is <br /> our priority
        </h2>
        
        <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-xl">
          We intentionally screen every single individual who requests entry to our platform. By maintaining rigorous admission standards, we ensure you can navigate your search with absolute peace of mind, always feeling protected within a verified community.
        </p>
      </div>

      {/* Right Column: Balanced Light-Contrast Workspace Grid Layout */}
      <div className="lg:w-[40%] bg-background/50 text-primary p-12 lg:p-16 flex flex-col justify-between items-start relative group border-t lg:border-t-0 lg:border-l border-accent/20">
        {/* Soft background tint change on hover to maintain premium interactive feedback */}
        <div className="absolute inset-0 bg-brand-highlight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent bg-background mb-8 lg:mb-0 shadow-sm">
          <Users className="w-4 h-4 stroke-[1.2]" />
         
        </div>
         <span className="text-[14px] tracking-[0.4em] uppercase text-primary/40 block font-semibold">
            Always know who you are talking to.
          </span>

        <div className="space-y-4 relative z-10 w-full">
          <span className="text-[9px] tracking-[0.4em] uppercase text-primary/40 block font-semibold">
            Vetting Protocol
          </span>
          <div className="flex items-start gap-3 bg-background/80 p-5 border border-accent/10 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-colors group-hover:bg-background">
            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5 stroke-[1.5]" />
            <p className="text-xs md:text-sm text-primary/80 font-light tracking-wide leading-relaxed">
              100% of registrations pass through mandatory manual administrative screening before profile activation.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}