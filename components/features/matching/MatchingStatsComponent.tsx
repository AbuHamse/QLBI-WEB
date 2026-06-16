import React from "react";
import { Quote } from "lucide-react";

export default function MatchingStatsComponent() {
  const statistics = [
    { val: "94%", label: "Value Alignment Rate" },
    { val: "100%", label: "Identity Verification" },
    { val: "0 Swipe", label: "Intentional Design Framework" }
  ];

  return (
    <section className="w-full py-24 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-accent/10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Number Grid layout mimicking the template format */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8 lg:border-r lg:border-accent/10 lg:pr-12">
          {statistics.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-4xl md:text-6xl font-sans tracking-tight text-accent font-light block">
                {stat.val}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-primary/60 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Right Column: Elegant Minimalist Blockquote Card */}
        <div className="lg:col-span-6 space-y-6">
          <Quote className="w-8 h-8 text-accent/30 stroke-[1]" />
          
          <blockquote className="text-lg md:text-2xl font-serif font-light tracking-wide text-foreground leading-relaxed italic">
            &ldquo;Finding someone who shared my commitment to faith and family timeline used to feel overwhelming. QLBI skipped all the shallow small talk and introduced us through our core goals first. It changed everything.&rdquo;
          </blockquote>
          
          <div className="space-y-0.5">
            <p className="text-xs tracking-[0.15em] uppercase font-bold text-foreground">Amina &amp; Bilal</p>
            <p className="text-[11px] text-primary/50 font-light tracking-wide">Married October 2025</p>
          </div>
        </div>

      </div>
    </section>
  );
}