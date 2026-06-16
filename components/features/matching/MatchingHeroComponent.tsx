import React from "react";
import Image from "next/image";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";
import { Heart } from "lucide-react";

export default async function MatchingHeroComponent() {
  // Fetching high-impact custom image from Sanity asset range
  const heroImg = await getMediaAssetBySlug("img50");

  return (
    <section className="w-full min-h-[85vh] bg-background text-primary px-6 md:px-16 lg:px-24 pt-32 pb-20 flex justify-center items-center relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Aspect: Soft Narrative Header */}
        <div className="lg:col-span-7 space-y-6 z-10">
          <div className="inline-flex items-center gap-2 text-accent">
            <Heart className="w-4 h-4 stroke-[1.2]" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Intentional Pairing</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-light font-serif tracking-tight text-foreground uppercase leading-[1.05]">
            Alignment <br />
            <span className="font-sans italic font-normal text-accent lowercase">beyond</span> appearance
          </h1>
          
          <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-xl">
            True compatibility begins with shared principles. We have designed our introduction platform to focus entirely on who a person is, ensuring your first connection is anchored in mutual respect, values, and life aspirations.
          </p>
        </div>

        {/* Right Aspect: Editorial Portrait Box */}
        <div className="lg:col-span-5 w-full h-[450px] md:h-[550px] relative border border-accent/10 bg-card rounded-xl overflow-hidden shadow-sm">
          {heroImg?.url && (
            <Image 
              src={heroImg.url} 
              alt="Honoring traditions in marriage discovery" 
              fill 
              className="object-cover"
              priority
              sizes="(max-w-1024px) 100vw, 40vw"
            />
          )}
        </div>

      </div>
    </section>
  );
}