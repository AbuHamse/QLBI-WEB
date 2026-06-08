// components/create-profile/CreateProfileComponentTwo.tsx
import React from "react";
import { User, Heart, Sparkles } from "lucide-react";

export default function CreateProfileComponentTwo() {
  return (
    <section className="w-full py-24 bg-[#F6EFE9] text-[#221B1F] px-6 md:px-16 border-b border-[#D89A9E]/30">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-8">
        
        {/* Left Side: Tall Feature Box */}
        <div className="w-full lg:w-1/2 bg-white/40 border border-[#D89A9E]/20 p-8 md:p-12 flex flex-col justify-between transition-all duration-300 hover:border-[#D89A9E]/60 group rounded-sm">
          <div>
            <div className="w-10 h-10 rounded-full bg-[#F2C9B6]/20 flex items-center justify-center mb-8 text-[#D89A9E] transition-colors group-hover:bg-[#F2C9B6]/40">
              <User className="w-5 h-5" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase text-[#D89A9E] font-medium block mb-4">
              Step 01 // Introduction
            </span>
            <h2 className="text-3xl md:text-5xl font-light font-serif tracking-tight text-[#0A0A0C] leading-tight">
              Start with your story
            </h2>
          </div>
          
          <p className="mt-12 text-base text-[#221B1F]/80 font-light leading-relaxed max-w-md">
            Your profile is more than a photo and a name. It&#39;s an opportunity to share your background, interests, values, goals, and what you're looking for in a future spouse.
          </p>
        </div>

        {/* Right Side: Two Stacked Horizontal Boxes */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          
          {/* Top Stacking Card */}
          <div className="flex-1 bg-white/40 border border-[#D89A9E]/20 p-8 flex flex-col justify-center transition-all duration-300 hover:border-[#D89A9E]/60 group rounded-sm">
            <div className="flex items-start gap-5">
              <div className="w-8 h-8 rounded-full bg-[#F2C9B6]/20 flex items-center justify-center text-[#D89A9E] shrink-0 mt-1">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#0A0A0C] tracking-wide mb-2">
                  Background &amp; Aspirations
                </h3>
                <p className="text-sm text-[#221B1F]/70 font-light leading-relaxed">
                  Reflect deeply on your path and detail your long-term worldview. Giving context to your upbringing and future intentions establishes clear alignment early on.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Stacking Card */}
          <div className="flex-1 bg-white/40 border border-[#D89A9E]/20 p-8 flex flex-col justify-center transition-all duration-300 hover:border-[#D89A9E]/60 group rounded-sm">
            <div className="flex items-start gap-5">
              <div className="w-8 h-8 rounded-full bg-[#F2C9B6]/20 flex items-center justify-center text-[#D89A9E] shrink-0 mt-1">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg font-serif text-[#0A0A0C] tracking-wide mb-2">
                  Marital Outlook
                </h3>
                <p className="text-sm text-[#221B1F]/70 font-light leading-relaxed">
                  Clearly express what you hope to build with a partner. Articulating your vision of an intentional home helps set foundational expectations with sincerity.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}