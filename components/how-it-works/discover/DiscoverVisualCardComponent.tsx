import React from "react";
import Image from "next/image";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";
import { Layers } from "lucide-react";

export default async function DiscoverVisualCardComponent() {
  // Fetching the dedicated assets by their slugs from Sanity
  const image37 = await getMediaAssetBySlug("img37");
  const image38 = await getMediaAssetBySlug("img38");

  return (
    <section className="w-full py-24 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Clean Typography Context */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 text-accent mb-4">
            <Layers className="w-4 h-4 stroke-[1.2]" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
              Shared Dimensions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light font-serif tracking-tight text-foreground uppercase leading-tight mb-4">
            Connected perspectives
          </h2>
          <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-md">
            True alignment brings separate lives into beautiful harmony, revealing shared aspirations through every layer of detail.
          </p>
        </div>

        {/* Right Side: Appeasing Tilted Imagery Stack */}
        <div className="lg:col-span-7 flex justify-center items-center min-h-[450px] relative">
          <div className="relative w-full max-w-md aspect-square bg-background/50 border border-accent/10 rounded-2xl p-8 shadow-sm flex items-center justify-center overflow-hidden group">
            
            {/* Image 37 - Tilted Base Layer */}
            <div className="absolute w-48 h-64 bg-muted/30 border border-accent/20 rounded-xl overflow-hidden shadow-md transform -rotate-[15deg] -translate-x-12 transition-transform duration-700 group-hover:-rotate-[12deg] group-hover:-translate-x-20">
              {image37?.url ? (
                <Image
                  src={image37.url}
                  alt="Synergy Dimension Base"
                  fill
                  sizes="200px"
                  className="object-cover object-center filter contrast-[101%]"
                />
              ) : (
                <div className="w-full h-full bg-muted/10 flex items-center justify-center text-[10px] text-accent/60 italic">
                  Asset 37 Unavailable
                </div>
              )}
            </div>

            {/* Image 38 - Tilted Foreground Layer (Intersecting at 65 degrees structural cross-angle) */}
            <div className="absolute w-48 h-64 bg-muted/40 border border-accent/30 rounded-xl overflow-hidden shadow-xl transform rotate-[50deg] translate-x-12 z-10 transition-transform duration-700 group-hover:rotate-[45deg] group-hover:translate-x-20">
              {image38?.url ? (
                <Image
                  src={image38.url}
                  alt="Synergy Dimension Overlay"
                  fill
                  sizes="200px"
                  className="object-cover object-center filter contrast-[101%]"
                />
              ) : (
                <div className="w-full h-full bg-muted/10 flex items-center justify-center text-[10px] text-accent/60 italic">
                  Asset 38 Unavailable
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}