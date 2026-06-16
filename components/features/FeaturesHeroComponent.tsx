import React from "react";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";
import { Shield } from "lucide-react";

export default async function FeaturesHeroComponent() {
  // Fetching the master background video loop from Sanity
  const featureVid = await getMediaAssetBySlug("qlbi-feature-vid");

  return (
    <section className="w-full h-screen relative flex items-center justify-center bg-background overflow-hidden px-6 md:px-16 lg:px-24">
      {/* Properly fitted full-frame background video */}
      {featureVid?.url ? (
        <video
          src={featureVid.url}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-screen h-10/12 object-contain opacity-40 filter contrast-[105%] brightness-[90%] top-3.5 md:top-7 "
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-brand-highlight/10 to-background" />
      )}

      {/* Luxury Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />

      {/* High-Contrast Bold Typography Overlay inspired by features page template structure_2.webp */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-start mt-20 animate-fade-in-up">
        <div className="inline-flex items-center gap-3 bg-background/60 backdrop-blur-md border border-accent/20 px-4 py-1.5 rounded-full mb-8">
          <Shield className="w-3.5 h-3.5 text-accent stroke-[1.5]" />
          <span className="text-[9px] tracking-[0.4em] uppercase font-bold text-primary">
            Platform Features
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black font-sans tracking-tighter text-foreground uppercase leading-[0.9] max-w-5xl">
          A Purposeful <br />
          <span className="font-serif italic font-light text-accent lowercase tracking-normal">path to</span> <br />
          Matrimony
        </h1>

        <p className="text-sm md:text-lg text-primary/90 font-light leading-relaxed tracking-wide max-w-xl mt-8 border-l border-accent pl-4">
          QLBI replaces casual browsing with a respectful space designed entirely around lifelong alignment. Every tool is crafted to help you move from initial introduction to marriage with complete peace of mind, integrity, and privacy.
        </p>
      </div>
    </section>
  );
}