// components/create-profile/CreateProfileComponentThree.tsx
import React from "react";
import { Sliders, CheckCircle2, SlidersHorizontal } from "lucide-react";

export default function CreateProfileComponentThree() {
  const criteria = [
    {
      title: "Shared Values & Goals",
      desc: "Filter introductions based on central foundational requirements, family lifestyle models, and personal aspirations."
    },
    {
      title: "Geographic Alignment",
      desc: "Specify geographic preferences and lifestyle environments that match your relocation readiness or familial bounds."
    }
  ];

  return (
    <section className="w-full py-24 bg-[#F6EFE9] text-[#221B1F] px-6 md:px-16 border-b border-[#D89A9E]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Full-Width Header Row Block */}
        <div className="w-full border-b border-[#D89A9E]/30 pb-12 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs tracking-[0.3em] uppercase text-[#D89A9E] font-medium block mb-4">
              Step 03 // Compatibility Filters
            </span>
            <h2 className="text-3xl md:text-5xl font-light font-serif tracking-tight text-[#0A0A0C] leading-tight">
              Set your preferences
            </h2>
          </div>
          <p className="text-base text-[#221B1F]/80 font-light leading-relaxed max-w-md">
            Choose the qualities and characteristics that are important to you. These preferences help create more relevant introductions and better compatibility suggestions.
          </p>
        </div>

        {/* Center Split Grid Section based on Structural Template 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Preference Mock Workspace */}
          <div className="lg:col-span-5 bg-white/40 border border-[#D89A9E]/20 p-8 rounded-sm shadow-sm group hover:border-[#D89A9E]/40 transition-colors">
            <div className="flex items-center justify-between border-b border-[#D89A9E]/20 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <Sliders className="w-4 h-4 text-[#D89A9E]" />
                <span className="text-xs uppercase tracking-wider font-serif text-[#0A0A0C]">Match Priorities</span>
              </div>
              <SlidersHorizontal className="w-3.4 h-3.5 text-[#D89A9E]/60" />
            </div>

            <div className="space-y-4">
              {["Core Value Alignment", "Family Background Parameters", "Educational Milestones", "Geographic Radius"].map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-white/60 px-4 py-3 border border-[#D89A9E]/10 rounded-sm">
                  <span className="text-xs text-[#221B1F]/90 font-light">{item}</span>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#F2C9B6] border border-[#D89A9E]/40 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#221B1F]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stacked Context Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:pl-6">
            {criteria.map((item, idx) => (
              <div key={idx} className="border-l-2 border-[#F2C9B6] pl-6 py-2 group">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D89A9E]" />
                  <h3 className="text-xl font-serif text-[#0A0A0C] tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[#221B1F]/70 font-light leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}