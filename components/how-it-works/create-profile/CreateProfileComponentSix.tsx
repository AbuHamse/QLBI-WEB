// components/create-profile/CreateProfileComponentSix.tsx
import React from "react";
import { ShieldAlert, Fingerprint, Eye, Sparkles } from "lucide-react";

export default function CreateProfileComponentSix() {
  const principles = [
    {
      icon: <Fingerprint className="w-5 h-5" />,
      title: "Real Identity",
      desc: "Providing genuine details allows the right people to find you without barriers or false expectations.",
    },
    {
      icon: <ShieldAlert className="w-5 h-5" />,
      title: "Building Trust",
      desc: "Transparency from day one builds a solid foundation of mutual respect across our entire community.",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Clear Intentions",
      desc: "Honest profiles help clear up ambiguity, ensuring conversations start with a shared objective.",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Sincere Bonds",
      desc: "Authenticity makes your path smoother, protecting the sanctity of your marriage search.",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#F6EFE9] text-[#221B1F] px-6 md:px-16 border-b border-[#D89A9E]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Top 4-Column Feature Grid Framework based on Template 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-8">
          {principles.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white/40 border border-[#D89A9E]/20 p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#D89A9E]/60 rounded-sm group shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#F2C9B6]/20 flex items-center justify-center text-[#D89A9E] mb-6 transition-colors group-hover:bg-[#F2C9B6]/40">
                  {item.icon}
                </div>
                <h3 className="text-lg font-serif text-[#0A0A0C] tracking-wide mb-3">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-[#221B1F]/70 font-light leading-relaxed mt-4">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Horizontal Baseline Banner based on Template 4 Layout */}
        <div className="w-full bg-white/30 border border-[#D89A9E]/20 p-8 md:p-12 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8 transition-colors hover:border-[#D89A9E]/40">
          <div className="max-w-xl">
            <span className="text-xs tracking-[0.3em] uppercase text-[#D89A9E] font-medium block mb-3">
              Step 04 // Transparency
            </span>
            <h2 className="text-2xl md:text-3xl font-light font-serif tracking-tight text-[#0A0A0C]">
              Present yourself honestly
            </h2>
          </div>
          
          <p className="text-sm text-[#221B1F]/80 font-light leading-relaxed max-w-md md:text-right">
            Strong relationships begin with honesty. We encourage users to provide accurate information so conversations can start with trust and transparency.
          </p>
        </div>

      </div>
    </section>
  );
}