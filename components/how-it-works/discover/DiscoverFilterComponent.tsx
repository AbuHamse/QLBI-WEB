import React from "react";
import { SlidersHorizontal } from "lucide-react";

export default function DiscoverFilterComponent() {
  const metricTracks = [
    "Foundational Values Matrix",
    "Spiritual Horizon Alignment",
    "Geographic & Relocation Criteria",
    "Lifestyle & Family Structure"
  ];

  return (
    <section className="w-full py-28 md:py-36 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center relative overflow-hidden">
      {/* Precision architectural layout divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-accent/20" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* Left Side: Editorial Typography Column */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
          <div className="inline-flex items-center gap-3 text-accent mb-4">
            <SlidersHorizontal className="w-4 h-4 stroke-[1.2]" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
              Precision Controls
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light font-serif tracking-tight text-foreground uppercase leading-tight mb-6">
            Search with purpose
          </h2>
          
          <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-xl">
            Use filters to narrow your search based on factors that matter most to your long-term success, helping you protect your focus and center your energy on people who perfectly align with your priorities.
          </p>
        </div>

        {/* Right Side: Stripe-Style Premium Workspace Control Block */}
        <div className="lg:col-span-5 w-full bg-background border border-accent/20 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 order-1 lg:order-2">
          <div className="border-b border-accent/10 pb-4 mb-6">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-primary/40">
              Active Focus Target
            </span>
          </div>

          <div className="space-y-3">
            {metricTracks.map((track, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between bg-background px-5 py-4 border border-accent/10 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.01)] transition-colors hover:bg-background/40"
              >
                <span className="text-xs md:text-sm text-primary/90 font-light tracking-wide">
                  {track}
                </span>
                <div className="w-3 h-3 rounded-full border border-accent/40 bg-accent" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}