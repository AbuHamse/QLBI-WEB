// components/create-profile/CreateProfileIntroComponent.tsx
import React from "react";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";
import { ShieldCheck } from "lucide-react";

export default async function CreateProfileIntroComponent() {
  // Fetching the dedicated video asset from Sanity
  const videoAsset = await getMediaAssetBySlug("qlbi-vid2");

  return (
    <section className="w-full py-24 md:py-32 bg-[#F6EFE9] px-6 md:px-16 border-b border-[#D89A9E]/30 flex justify-center">
      <div className="max-w-7xl w-full">
        
        {/* Massive Editorial Container Block mimicking the "Founder's Note" from value website design template_2.webp */}
        <div className="w-full bg-[#221B1F] text-[#F6EFE9] px-8 py-16 md:p-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative overflow-hidden rounded-sm">
          
          {/* Subtle architectural luxury layout accent lines */}
          <div className="absolute top-0 bottom-0 left-8 w-[1px] bg-[#D89A9E]/10 hidden md:block" />
          
          {/* Left Block: Asymmetric Visual Showcase (Lg Grid 5) */}
          <div className="lg:col-span-5 flex flex-col justify-center relative z-10 pl-0 md:pl-4">
            <div className="relative w-full aspect-[4/5] bg-[#0A0A0C] border border-[#D89A9E]/20 overflow-hidden shadow-2xl group rounded-sm">
              {videoAsset?.url ? (
                <video 
                  src={videoAsset.url}
                  className="w-full h-full object-cover filter contrast-[101%] brightness-[90%] transition-transform duration-700"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#D89A9E]/60 p-6 text-center">
                  <ShieldCheck className="w-8 h-8 stroke-[1.1] animate-pulse" />
                  <span className="font-serif italic text-xs tracking-wider">Secure Media Asset Initializing</span>
                </div>
              )}
            </div>
            
            {/* Minimalist Sub-Label Text */}
            <div className="mt-4 flex items-center justify-between text-[#F2C9B6]/60">
              <span className="text-[9px] tracking-[0.3em] uppercase font-medium">
                QLBI Visual Guide //
              </span>
              <span className="text-xs font-serif italic font-light">
                01. Intentional Foundations
              </span>
            </div>
          </div>

          {/* Right Block: Pure High-End Text Typography Column (Lg Grid 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-10 lg:pl-6">
            <span className="text-xs tracking-[0.4em] uppercase text-[#D89A9E] font-medium block mb-4">
              Our Blueprint
            </span>
            
            {/* Large Bold Identity Header from the layout reference */}
            <h2 className="text-4xl md:text-5xl font-light font-serif tracking-tight text-white mb-2 uppercase">
              QLBI
            </h2>
            
            <p className="text-xl md:text-2xl font-serif font-light italic text-[#F2C9B6] mb-8 border-b border-[#D89A9E]/20 pb-6 max-w-xl">
              Connecting with clarity, respect, and shared intentions.
            </p>

            {/* Structured Narrative Content Block */}
            <div className="space-y-6 max-w-xl text-[#F6EFE9]/80 text-sm md:text-base font-light leading-relaxed">
              <p>
                The journey toward a long-term commitment requires a space built entirely on honorable interactions. At QLBI, we strip away standard dating app patterns to create a structured ecosystem tailored for serious marriage intentions.
              </p>
              <p>
                By prioritizing comprehensive profiles and genuine values, our community ensures your story is presented safely, truthfully, and directly to those who share your specific worldview.
              </p>
            </div>

            {/* Elegant Callout Tag */}
            <div className="mt-12 pt-6 border-t border-[#D89A9E]/20 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-[#D89A9E]" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-[#D89A9E]">
                Built for High-Intent Commitment
              </span>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}