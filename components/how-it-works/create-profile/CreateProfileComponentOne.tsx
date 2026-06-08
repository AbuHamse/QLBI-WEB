// components/create-profile/CreateProfileComponentOne.tsx
import React from "react";
import Image from "next/image";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";
import { BookOpen, ShieldCheck, Compass } from "lucide-react";

export default async function CreateProfileComponentOne() {
  // Fetching the three dedicated selfie assets from Sanity
  const selfie1 = await getMediaAssetBySlug("selfie1");
  const selfie2 = await getMediaAssetBySlug("selfie2");
  const selfie3 = await getMediaAssetBySlug("selfie3");

  const cards = [
    {
      img: selfie1?.url,
      icon: <BookOpen className="w-4 h-4" />,
      tag: "Practices &amp; Background",
      title: "Faith &amp; Education",
      desc: "Detail your religious commitments, traditions, and educational journey to share the baseline of your daily lifestyle.",
    },
    {
      img: selfie2?.url,
      icon: <ShieldCheck className="w-4 h-4" />,
      tag: "Foundational Values",
      title: "Family Principles",
      desc: "Express your perspectives on family structures, heritage, and household environments to highlight long-term stability.",
    },
    {
      img: selfie3?.url,
      icon: <Compass className="w-4 h-4" />,
      tag: "Future Horizons",
      title: "Aspirations &amp; Goals",
      desc: "Outline your professional trajectories, relocation outlooks, and future growth milestones to map out shared paths.",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#F6EFE9] text-[#221B1F] px-6 md:px-16 border-b border-[#D89A9E]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block Section */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-[#D89A9E] font-medium block mb-4">
            Step 02 // Core Attributes
          </span>
          <h2 className="text-3xl md:text-5xl font-light font-serif tracking-tight text-[#0A0A0C] leading-tight mb-6">
            Share what matters most
          </h2>
          <p className="text-base text-[#221B1F]/80 font-light leading-relaxed">
            From religious practices and education to family values and future plans, your profile helps others understand who you are beyond first impressions.
          </p>
        </div>

        {/* 3-Column Card Grid Framework */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-white/30 border border-[#D89A9E]/20 p-3 flex flex-col justify-between transition-all duration-300 hover:border-[#D89A9E]/60 rounded-sm group shadow-sm hover:shadow-md"
            >
              {/* Media Container Block */}
              <div className="relative w-full aspect-[4/5] bg-[#F2C9B6]/10 mb-6 overflow-hidden rounded-sm">
                {card.img ? (
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover object-center filter contrast-[101%] transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="w-full h-full bg-[#F2C9B6]/10 animate-pulse flex items-center justify-center text-xs text-[#D89A9E]/60 font-serif italic">
                    Asset unavailable
                  </div>
                )}
              </div>

              {/* Text Context Area */}
              <div className="px-3 pb-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-[#D89A9E]">
                      {card.icon}
                    </div>
                    <span className="text-[10px] tracking-widest uppercase font-medium text-[#D89A9E]">
                      {card.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-serif text-[#0A0A0C] mb-3">
                    {card.title}
                  </h3>
                </div>

                <p className="text-sm text-[#221B1F]/70 font-light leading-relaxed mt-2">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}