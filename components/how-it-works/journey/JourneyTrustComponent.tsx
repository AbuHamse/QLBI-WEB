import React from "react";
import Image from "next/image";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";

export default async function JourneyTrustComponent() {
  const img42 = await getMediaAssetBySlug("img42");

  return (
    <section className="w-full py-24 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-accent/10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center animate-fade-in-up">
        
        {/* Left Side: Image Content Frame */}
        <div className="lg:col-span-6 order-2 lg:order-1 flex justify-start">
          <div className="w-full max-w-md bg-card border border-accent/25 p-4 rounded-xl shadow-sm group">
            <div className="w-full aspect-[4/3] relative bg-muted/10 rounded-lg overflow-hidden">
              {img42?.url && <Image src={img42.url} alt="Trust Layer" fill className="object-cover filter contrast-[101%]" sizes="(max-width: 768px) 100vw, 35vw" />}
            </div>
          </div>
        </div>

        {/* Right Side: Editorial Text Canvas */}
        <div className="lg:col-span-6 order-1 lg:order-2 space-y-6 lg:pl-8">
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-accent block">Phase 02</span>
          <h2 className="text-3xl md:text-4xl font-light font-serif tracking-tight text-foreground uppercase">
            Building mutual trust
          </h2>
          <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-xl">
            True confidence develops through transparency, routine reliability, and clear communication. Resilient unions are built step by deliberate step within a structured timeline.
          </p>
        </div>

      </div>
    </section>
  );
}