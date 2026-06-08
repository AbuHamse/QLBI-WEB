import React from "react";
import { Eye, Layers } from "lucide-react";

export default function DiscoverDepthComponent() {
  return (
    <section className="w-full py-28 md:py-36 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center relative overflow-hidden">
      {/* Precision architectural layout divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-accent/20" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* Left Side: Soft Architectural Arch Frame as seen in value website design template_4.webp */}
        <div className="lg:col-span-5 relative w-full aspect-[4/5] bg-background border border-accent/20 overflow-hidden rounded-t-full shadow-sm flex flex-col items-center justify-center p-8 text-center group transition-all duration-500 hover:shadow-md">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <Layers className="w-10 h-10 text-accent stroke-[1] mb-4" />
          <span className="text-[9px] tracking-[0.4em] uppercase text-primary/40 block mb-1 font-semibold">
            Substance Over Surface
          </span>
          <span className="font-serif italic text-xs text-accent/80">
            Comprehensive Profile Architecture
          </span>
        </div>

        {/* Right Side: Clean Apple Typography Context Grid */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:pl-12">
          <div className="inline-flex items-center gap-3 text-accent mb-4">
            <Eye className="w-4 h-4 stroke-[1.2]" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
              Holistic Clarity
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light font-serif tracking-tight text-foreground uppercase leading-tight mb-6">
            Look beyond appearances
          </h2>
          
          <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-xl">
            Compatibility involves much more than photographs. Profiles highlight important, structured details that help users make highly informed decisions before ever initiating a new conversation.
          </p>
        </div>

      </div>
    </section>
  );
}