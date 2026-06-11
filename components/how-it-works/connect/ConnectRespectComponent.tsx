import React from "react";
import { Star } from "lucide-react";

export default function ConnectRespectComponent() {
  return (
    <section className="w-full py-28 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center relative overflow-hidden border-t border-accent/10">
      {/* Refined clean structural backdrop lines reminiscent of Connect Components 2-7.webp styling */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-accent/5 hidden lg:block" />
      
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in-up">
        <div className="lg:col-span-4 flex items-center gap-3">
          <Star className="w-4 h-4 text-accent stroke-[1.2]" />
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-primary/40">
            Community Core
          </span>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-4xl md:text-5xl font-light font-serif tracking-tight text-foreground uppercase leading-tight">
            Respect every interaction
          </h2>
          <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-xl">
            A healthy community depends completely on mutual respect. Users are expected to communicate courteously, safeguard intentions, and treat one another with profound dignity across all stages of connection.
          </p>
        </div>
      </div>
    </section>
  );
}