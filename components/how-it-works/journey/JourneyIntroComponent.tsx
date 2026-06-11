import React from "react";
import Image from "next/image";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";
import { Compass } from "lucide-react";

export default async function JourneyIntroComponent() {
  // Fetching collage assets (img48 - img55) from Sanity
  const assets = await Promise.all([
    getMediaAssetBySlug("img48"),
    getMediaAssetBySlug("img49"),
    getMediaAssetBySlug("img50"),
    getMediaAssetBySlug("img51"),
    getMediaAssetBySlug("img52"),
    getMediaAssetBySlug("img53"),
    getMediaAssetBySlug("img54"),
    getMediaAssetBySlug("img55"),
  ]);

  const urls = assets.map((a) => a?.url || null);

  return (
    <section className="w-full pt-32 pb-24 bg-background text-primary px-6 md:px-16 lg:px-24 flex flex-col items-center relative overflow-hidden">
      
      {/* Premium Minimalist Header Block */}
      <div className="max-w-4xl text-center flex flex-col items-center mb-20 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 text-accent mb-4">
          <Compass className="w-3.5 h-3.5 stroke-[1.2]" />
          <span className="text-[10px] tracking-[0.4em] uppercase font-semibold">The Horizon</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-light font-serif tracking-tight text-foreground uppercase leading-none max-w-3xl">
          Every journey is <br /><span className="font-sans italic text-accent lowercase">different</span>
        </h1>
        <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-xl mt-6">
          Some individuals connect quickly, while others require more time. QLBI respects each person’s timeline, supporting your pace without unnecessary platform pressure.
        </p>
      </div>

      {/* High Luxury Mosaic Grid Layout - Inspired by marriage Journey structual design.webp */}
      <div className="w-full max-w-7xl grid grid-cols-12 gap-4 auto-rows-[120px] md:auto-rows-[160px]">
        
        {/* Slot 1: Large Vertical Accent */}
        <div className="col-span-6 md:col-span-4 row-span-3 relative border border-accent/10 overflow-hidden bg-card">
          {urls[0] && <Image src={urls[0]} alt="Journey Track 1" fill priority className="object-cover contrast-[101%]" sizes="33vw" />}
        </div>

        {/* Slot 2: Top Wide Span */}
        <div className="col-span-6 md:col-span-5 row-span-2 relative border border-accent/10 overflow-hidden bg-card">
          {urls[1] && <Image src={urls[1]} alt="Journey Track 2" fill priority className="object-cover contrast-[101%]" sizes="40vw" />}
        </div>

        {/* Slot 3: High Corner Cube */}
        <div className="col-span-4 md:col-span-3 row-span-2 relative border border-accent/10 overflow-hidden bg-card hidden md:block">
          {urls[2] && <Image src={urls[2]} alt="Journey Track 3" fill className="object-cover contrast-[101%]" sizes="45vw" />}
        </div>

        {/* Slot 4: Mid Central Compact Box */}
        <div className="col-span-6 md:col-span-3 row-span-2 relative border border-accent/10 overflow-hidden bg-card">
          {urls[3] && <Image src={urls[3]} alt="Journey Track 4" fill className="object-cover contrast-[101%]" sizes="25vw" />}
        </div>

        {/* Slot 5: Lower Center Structural Hero */}
        <div className="col-span-6 md:col-span-5 row-span-3 relative border border-accent/10 overflow-hidden bg-card">
          {urls[4] && <Image src={urls[4]} alt="Journey Track 5" fill className="object-cover contrast-[101%]" sizes="40vw" />}
        </div>

        {/* Slot 6: Baseline Square Column */}
        <div className="col-span-4 md:col-span-4 row-span-2 relative border border-accent/10 overflow-hidden bg-card hidden md:block">
          {urls[5] && <Image src={urls[5]} alt="Journey Track 6" fill className="object-cover contrast-[101%]" sizes="33vw" />}
        </div>

        {/* Slot 7: Lower Left Base Span */}
        <div className="col-span-6 md:col-span-3 row-span-2 relative border border-accent/10 overflow-hidden bg-card">
          {urls[6] && <Image src={urls[6]} alt="Journey Track 7" fill className="object-cover contrast-[101%]" sizes="25vw" />}
        </div>

        {/* Slot 8: Lower Terminal Anchor */}
        <div className="col-span-6 md:col-span-4 row-span-2 relative border border-accent/10 overflow-hidden bg-card">
          {urls[7] && <Image src={urls[7]} alt="Journey Track 8" fill className="object-cover contrast-[101%]" sizes="33vw" />}
        </div>

      </div>
    </section>
  );
}