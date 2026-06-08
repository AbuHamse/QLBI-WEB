// components/create-profile/CreateProfileComponentThree.tsx
import React from "react";
import { Sliders, CheckCircle2 } from "lucide-react";

export default function CreateProfileComponentThree() {
  const criteria = [
    {
      title: "Shared Values & Goals",
      desc: "Filter introductions based on central foundational requirements, family lifestyle models, and personal spiritual aspirations."
    },
    {
      title: "Geographic Alignment",
      desc: "Specify geographic preferences and lifestyle environments that match your relocation readiness or familial bounds."
    }
  ];

  return (
    <section className="w-full py-28 md:py-36 bg-[#F6EFE9] text-[#221B1F] px-6 md:px-16 lg:px-24 flex justify-center relative overflow-hidden">
      {/* Structural layout balance line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-[#D89A9E]/20" />

      <div className="max-w-7xl w-full">
        
        {/* Top Full-Width Header Row Block */}
        <div className="w-full border-b border-[#D89A9E]/20 pb-16 mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 text-[#D89A9E] mb-4">
              <Sliders className="w-4 h-4 stroke-[1.2]" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
                Intentional Filters
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light font-serif tracking-tight text-[#0A0A0C] uppercase leading-tight">
              Set your <br /> preferences
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <p className="text-base md:text-lg text-[#221B1F]/70 font-light leading-relaxed max-w-xl tracking-wide">
              Choose the qualities and characteristics that align with your vision. These refined criteria help generate highly relevant introductions, honoring both parties long-term time and family expectations.
            </p>
          </div>
        </div>

        {/* Center Split Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Preference Mock Workspace (Apple/Stripe Polish) */}
          <div className="lg:col-span-5 w-full bg-white/40 border border-[#D89A9E]/20 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-500">
            <div className="border-b border-[#D89A9E]/10 pb-4 mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#221B1F]/50">
                Match Priorities Matrix
              </span>
            </div>

            <div className="space-y-3">
              {[
                "Core Value Alignment",
                "Family Dynamic Parameters",
                "Educational Milestones",
                "Geographic Bounds"
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-between bg-white/80 px-5 py-4 border border-[#D89A9E]/10 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors hover:bg-white"
                >
                  <span className="text-xs md:text-sm text-[#221B1F]/90 font-light tracking-wide">
                    {item}
                  </span>
                  {/* Premium, clean toggle dot */}
                  <div className="w-4 h-4 rounded-full border border-[#D89A9E]/40 flex items-center justify-center bg-[#F6EFE9]">
                    <div className="w-2 h-2 rounded-full bg-[#D89A9E]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Editorial Context Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-12 lg:pl-16 xl:pl-24">
            {criteria.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start relative group">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#D89A9E] stroke-[1.5]" />
                  <h3 className="text-xl font-serif text-[#0A0A0C] tracking-wide uppercase font-medium">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-[#221B1F]/70 font-light leading-relaxed tracking-wide max-w-xl">
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