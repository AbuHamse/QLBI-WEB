import React from "react";
import { Hourglass } from "lucide-react";

export default function DiscoverPaceComponent() {
  return (
    <section className="w-full py-28 md:py-36 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center relative overflow-hidden">
      <div className="max-w-5xl w-full text-center flex flex-col items-center">
        <div className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent bg-background mb-8 shadow-sm">
          <Hourglass className="w-4 h-4 stroke-[1.3] animate-spin-slow" />
        </div>

        <h2 className="text-4xl md:text-6xl font-light font-serif tracking-tight text-foreground uppercase mb-6 max-w-3xl">
          Take your time
        </h2>

        <p className="text-base md:text-xl text-accent font-light font-serif italic leading-relaxed max-w-2xl tracking-wide mb-8">
          There is absolutely no pressure to rush.
        </p>

        <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-2xl">
          Browse through records intentionally and thoughtfully. True alignment takes consideration—move forward to introduction coordinates only when you feel completely comfortable, deliberate, and confident.
        </p>
      </div>
    </section>
  );
}