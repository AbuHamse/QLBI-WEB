import React from "react";
import Image from "next/image";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";
import { Heart } from "lucide-react";

export default async function DiscoverHeartScrollComponent() {
  // Fetching the heart connection asset from Sanity
  const image31 = await getMediaAssetBySlug("img31");

  return (
    <section className="w-full py-28 bg-background text-primary px-6 md:px-16 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Centered Media Frame */}
      <div className="w-full max-w-2xl bg-background border border-accent/10 p-4 rounded-3xl shadow-sm mb-12 flex flex-col items-center justify-center relative group">
        <div className="w-full aspect-[16/10] rounded-2xl bg-muted/20 overflow-hidden relative border border-accent/5">
          {image31?.url ? (
            <Image
              src={image31.url}
              alt="Two hands forming a heart shape"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.02] filter contrast-[101%]"
            />
          ) : (
            <div className="w-full h-full bg-muted/10 flex items-center justify-center text-xs text-accent/60 font-serif italic">
              Asset 31 Unavailable
            </div>
          )}
          <div className="absolute inset-0 bg-background/5 mix-blend-multiply pointer-events-none" />
        </div>
      </div>

      {/* Dynamic Scroll Animation Text Area */}
      <div className="text-center flex flex-col items-center max-w-xl animate-fade-in-up">
        <div className="inline-flex items-center gap-2 text-accent mb-4">
          <Heart className="w-3.5 h-3.5 fill-accent/10 stroke-[1.2]" />
          <span className="text-[9px] tracking-[0.3em] uppercase font-semibold">
            The Final Bond
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-light font-serif tracking-tight text-foreground uppercase mb-4">
          Two intentions, one destination
        </h2>
        
        <p className="text-xs md:text-sm text-primary/60 font-light tracking-wide leading-relaxed">
          Where deliberate paths cross, authentic unity naturally follows.
        </p>
      </div>

    </section>
  );
}