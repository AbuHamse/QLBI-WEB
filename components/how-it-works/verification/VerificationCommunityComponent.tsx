import React from "react";
import { Shield } from "lucide-react";

export default function VerificationCommunityComponent() {
  return (
    <section className="w-full py-28 md:py-36 bg-[#F6EFE9] text-[#221B1F] px-6 md:px-16 lg:px-24 flex justify-center relative overflow-hidden">
      {/* Structural layout balance line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-[#D89A9E]/20" />
      
      <div className="max-w-5xl w-full text-center flex flex-col items-center">
        <div className="w-10 h-10 rounded-full border border-[#D89A9E]/30 flex items-center justify-center text-[#D89A9E] bg-white/40 mb-8 shadow-sm">
          <Shield className="w-4 h-4 stroke-[1.3]" />
        </div>

        <h2 className="text-4xl md:text-6xl font-light font-serif tracking-tight text-[#0A0A0C] uppercase mb-6 max-w-3xl">
          Protecting the community
        </h2>

        <p className="text-base md:text-xl font-light font-serif italic leading-relaxed max-w-2xl tracking-wide mb-10 text-[#D89A9E]">
          Upholding foundational respect and transparency across every interaction.
        </p>

        <p className="text-sm md:text-base text-[#221B1F]/70 font-light leading-relaxed tracking-wide max-w-2xl">
          Verification is merely the baseline of a layered infrastructure engineered to preserve a respectful and deeply reliable marriage registry. By anchoring entries to validated backgrounds, we ensure our high communal metrics remain entirely compromise-free.
        </p>
      </div>
    </section>
  );
}