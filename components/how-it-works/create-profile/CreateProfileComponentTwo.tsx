// components/create-profile/CreateProfileComponentTwo.tsx
import React from "react";
import { User, Heart, Sparkles } from "lucide-react";

export default function CreateProfileComponentTwo() {
  return (
    <section className="w-full py-28 md:py-36 bg-[#F6EFE9] text-[#221B1F] px-6 md:px-16 lg:px-24 flex justify-center relative overflow-hidden">
      {/* Structural layout balance line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-[#D89A9E]/20" />

      <div className="max-w-7xl w-full">
        {/* Top Header Block: Broad Apple-inspired typography grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start pb-16 mb-20 border-b border-[#D89A9E]/20">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 text-[#D89A9E] mb-4">
              <User className="w-4 h-4 stroke-[1.2]" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
                The Profile Canvas
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light font-serif tracking-tight text-[#0A0A0C] uppercase leading-tight">
              Start with <br /> your story
            </h2>
          </div>
          
          <div className="lg:col-span-7 lg:pt-10">
            <p className="text-base md:text-lg text-[#221B1F]/70 font-light leading-relaxed max-w-xl tracking-wide">
              Your profile is more than a dataset. It is a secure, intentional opportunity to curate your background, honors, worldview, and the specific spiritual and physical trajectory you envision for your future household.
            </p>
          </div>
        </div>

        {/* Bottom Feature Columns: Elegant Neo-Minimalist Content Distribution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Background & Aspirations */}
          <div className="flex flex-col items-start relative group">
            {/* Soft background glow transition on hover to match Apple/Stripe polish */}
            <div className="absolute -inset-4 bg-white/20 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 -z-10" />
            
            <div className="w-10 h-10 rounded-full border border-[#D89A9E]/30 flex items-center justify-center text-[#D89A9E] bg-white/40 mb-6 shadow-sm transition-colors group-hover:border-[#D89A9E]/60">
              <Sparkles className="w-4 h-4 stroke-[1.3]" />
            </div>
            
            <h3 className="text-xl font-serif text-[#0A0A0C] tracking-wide mb-3 uppercase font-medium">
              Background & Aspirations
            </h3>
            
            <p className="text-sm md:text-base text-[#221B1F]/70 font-light leading-relaxed tracking-wide">
              Reflect deeply on your path and detail your long-term worldview. Giving honest context to your upbringing, values, and personal evolution establishes foundational alignment early on.
            </p>
          </div>

          {/* Right Column: Marital Outlook */}
          <div className="flex flex-col items-start relative group">
            {/* Soft background glow transition on hover */}
            <div className="absolute -inset-4 bg-white/20 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500 -z-10" />
            
            <div className="w-10 h-10 rounded-full border border-[#D89A9E]/30 flex items-center justify-center text-[#D89A9E] bg-white/40 mb-6 shadow-sm transition-colors group-hover:border-[#D89A9E]/60">
              <Heart className="w-4 h-4 stroke-[1.3]" />
            </div>
            
            <h3 className="text-xl font-serif text-[#0A0A0C] tracking-wide mb-3 uppercase font-medium">
              Marital Outlook
            </h3>
            
            <p className="text-sm md:text-base text-[#221B1F]/70 font-light leading-relaxed tracking-wide">
              Clearly express what you hope to build with a partner. Articulating your vision of a deliberate, peace-filled home helps set clear reciprocal expectations with total transparency.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}