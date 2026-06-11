import React from "react";
import Image from "next/image";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";
import { HelpCircle } from "lucide-react";

export default async function JourneyFutureComponent() {
  const img43 = await getMediaAssetBySlug("img43");

  return (
    <section className="w-full py-24 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-accent/10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fade-in-up">
        
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-accent block">Phase 03</span>
          <h2 className="text-3xl md:text-4xl font-light font-serif tracking-tight text-foreground uppercase">
            Discuss the future openly
          </h2>
          <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-xl">
            Practical conversations regarding marriage should openly address shared obligations, extended family dynamics, and your ultimate long-term aspirations.
          </p>
        </div>

        {/* Exact Geometric Sharp Aspect Panel */}
        <div className="lg:col-span-6 w-full flex justify-end">
          <div className="w-full max-w-md bg-card border border-accent/25 p-4 rounded-xl shadow-sm relative group">
            <div className="w-full aspect-[4/3] relative bg-muted/10 rounded-lg overflow-hidden mb-4">
              {img43?.url && <Image src={img43.url} alt="Future Framework" fill className="object-cover" sizes="(max-width: 768px) 100vw, 35vw" />}
            </div>
            <div className="flex items-center gap-2 text-primary/40 px-2">
              <HelpCircle className="w-3.5 h-3.5 text-accent stroke-[1.5]" />
              <span className="text-[9px] uppercase tracking-widest font-bold">Transparent Exchange Matrix</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}