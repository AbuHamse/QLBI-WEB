// components/create-profile/CreateProfileIntroComponent.tsx
import React from "react";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";
import { ShieldCheck } from "lucide-react";

export default async function CreateProfileIntroComponent() {
  // Fetching the dedicated video asset from Sanity
  const videoAsset = await getMediaAssetBySlug("qlbi-vid2");

  return (
    <section className="w-full bg-[#F6EFE9] pt-20 pb-32 px-6 md:px-16 lg:px-24 flex justify-center relative overflow-hidden">
      {/* Light-SaaS subtle background accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-[#D89A9E]/20" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Modern Islamic Arch + Apple Minimalist Video Frame (Lg Grid 5) */}
        <div className="lg:col-span-5 w-full flex flex-col justify-center relative">
          {/* Subtle underlay shadow block to mimic curated editorial layout */}
          <div className="absolute -inset-2 bg-white/30 blur-xl rounded-t-full -z-10 opacity-70" />
          
          <div className="relative w-full aspect-[4/5] bg-[#0A0A0C]/5 border border-[#D89A9E]/20 overflow-hidden shadow-sm transition-all duration-500 hover:shadow-md hover:border-[#D89A9E]/40 rounded-t-full">
            {videoAsset?.url ? (
              <video 
                src={videoAsset.url}
                className="w-full h-full object-cover filter contrast-[101%] brightness-[98%]"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#D89A9E]/60 p-6 text-center">
                <ShieldCheck className="w-6 h-6 stroke-[1.2] animate-pulse" />
                <span className="font-serif italic text-xs tracking-wider text-[#221B1F]/60">
                  Initializing Premium Asset...
                </span>
              </div>
            )}
          </div>
          
          {/* Floating UI Meta Caption */}
          <div className="mt-4 flex items-center justify-between px-2 text-[#221B1F]/50">
            <span className="text-[9px] tracking-[0.3em] uppercase font-medium">
              QLBI // FRAME 01
            </span>
            <span className="text-xs font-serif italic font-light text-[#D89A9E]">
              Intentional Foundations
            </span>
          </div>
        </div>

        {/* Right Side: Clean Apple/Stripe Typography Section (Lg Grid 7) */}
        <div className="lg:col-span-7 flex flex-col justify-center lg:pl-16 xl:pl-24">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#D89A9E] font-semibold">
              OUR BLUEPRINT
            </span>
            <div className="w-6 h-[1px] bg-[#D89A9E]/40" />
          </div>
          
          {/* Large Editorial Title mirroring peachy layout styling */}
          <h1 className="text-5xl md:text-6xl font-light font-serif tracking-tight text-[#0A0A0C] mb-3 uppercase">
            QLBI
          </h1>
          
          <p className="text-lg md:text-xl font-serif font-light italic text-[#D89A9E] mb-8 max-w-xl leading-relaxed">
            Connecting with clarity, respect, and shared intentions.
          </p>

          {/* Premium Space Layout Copy */}
          <div className="space-y-6 max-w-xl text-[#221B1F]/80 text-sm md:text-base font-light leading-relaxed tracking-wide">
            <p>
              The journey toward a long-term commitment requires a space built entirely on honorable interactions. At QLBI, we strip away standard dating app variables to build a premium ecosystem tailored for serious marriage outcomes.
            </p>
            <p>
              By prioritizing comprehensive profiles and genuine lifestyle parameters, our community ensures your background is presented safely, truthfully, and directly to those who share your specific worldview.
            </p>
          </div>

          {/* Stripe SaaS Minimalist Interactive Indicator */}
          <div className="mt-10 pt-6 border-t border-[#D89A9E]/20 flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D89A9E]" />
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#221B1F]/60">
              High-Intent Verification Active
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}