import React from "react";
import Image from "next/image";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";
import { ArrowRight } from "lucide-react";

export default async function JourneyUnderstandingComponent() {
  const img41 = await getMediaAssetBySlug("img41");

  return (
    <section className="w-full py-24 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-accent/10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fade-in-up">
        
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-accent block">Phase 01</span>
          <h2 className="text-3xl md:text-4xl font-light font-serif tracking-tight text-foreground uppercase">
            From introduction <br /> to understanding
          </h2>
          <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-xl">
            The early stages of acquaintance carry immense value. Take intentional intervals to discuss core principles, domestic expectations, and your respective paths without moving standard metrics forward prematurely.
          </p>
        </div>

        {/* Premium Clean Card Component Design (No Dome Lines) */}
        <div className="lg:col-span-6 w-full flex justify-end">
          <div className="w-full max-w-md bg-card border border-accent/25 p-4 rounded-xl shadow-sm group">
            <div className="w-full aspect-[4/3] relative bg-muted/10 rounded-lg overflow-hidden mb-6">
              {img41?.url && <Image src={img41.url} alt="Understanding Layer" fill className="object-cover filter brightness-[98%] transition-transform duration-700 group-hover:scale-102" sizes="(max-width: 768px) 100vw, 35vw" />}
            </div>
            <div className="flex items-center justify-between px-2 pb-2">
              <span className="text-[10px] uppercase tracking-widest text-primary/40 font-bold">Structural Discovery</span>
              <ArrowRight className="w-4 h-4 text-accent stroke-[1.2]" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}