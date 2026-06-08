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
      icon: <BookOpen className="w-4 h-4 stroke-[1.2]" />,
      tag: "Practices & Background",
      title: "Faith & Education",
      desc: "Detail your religious commitments, traditions, and educational journey to share the baseline of your daily lifestyle.",
      // Custom modern Islamic arch cuts to match the luxury template aesthetics
      imageRounding: "rounded-tl-[80px] rounded-br-[40px]",
      staggerClass: "lg:translate-y-0"
    },
    {
      img: selfie2?.url,
      icon: <ShieldCheck className="w-4 h-4 stroke-[1.2]" />,
      tag: "Foundational Values",
      title: "Family Principles",
      desc: "Express your perspectives on family structures, heritage, and household environments to highlight long-term stability.",
      imageRounding: "rounded-t-full", // Pristine arch signature
      staggerClass: "lg:translate-y-12" // Staggered layout offset
    },
    {
      img: selfie3?.url,
      icon: <Compass className="w-4 h-4 stroke-[1.2]" />,
      tag: "Future Horizons",
      title: "Aspirations & Goals",
      desc: "Outline your professional trajectories, relocation outlooks, and future growth milestones to map out shared paths.",
      imageRounding: "rounded-tr-[80px] rounded-bl-[40px]",
      staggerClass: "lg:translate-y-6"
    },
  ];

  return (
    <section className="w-full py-28 md:pt-36 md:pb-48 bg-[#F6EFE9] text-[#221B1F] px-6 md:px-16 lg:px-24 flex justify-center relative overflow-hidden">
      {/* Structural layout balance line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-[#D89A9E]/20" />

      <div className="max-w-7xl w-full">
        
        {/* Apple-style Asymmetrical Header Block */}
        <div className="w-full border-b border-[#D89A9E]/20 pb-16 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 text-[#D89A9E] mb-4">
              <Compass className="w-4 h-4 stroke-[1.2]" />
              <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
                Core Attributes
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light font-serif tracking-tight text-[#0A0A0C] uppercase leading-tight">
              Share what <br /> matters most
            </h2>
          </div>
          
          <div className="lg:col-span-7 lg:pt-10">
            <p className="text-base md:text-lg text-[#221B1F]/70 font-light leading-relaxed max-w-xl tracking-wide">
              From foundational commitments and education to core family values and your timeline expectations, your profile helps build mutual visibility anchored in shared honor and reality.
            </p>
          </div>
        </div>

        {/* 3-Column Asymmetrical Staggered Grid Frame */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-start">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className={`flex flex-col justify-between transition-all duration-500 group ${card.staggerClass}`}
            >
              {/* Media Container Block with Soft Neo-Minimalist shadow and custom arch styling */}
              <div className={`relative w-full aspect-[4/5] bg-[#0A0A0C]/5 mb-8 overflow-hidden shadow-sm border border-[#D89A9E]/10 group-hover:shadow-md transition-shadow duration-500 ${card.imageRounding}`}>
                {card.img ? (
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover object-center filter contrast-[101%] brightness-[99%] transition-transform duration-700 group-hover:scale-[1.015]"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-xs text-[#D89A9E]/60 font-serif italic bg-white/20">
                    <span>Curated Presentation</span>
                  </div>
                )}
              </div>

              {/* Text Context Area */}
              <div className="px-1 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-[#D89A9E]">
                      {card.icon}
                    </div>
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-[#D89A9E]">
                      {card.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-serif text-[#0A0A0C] uppercase tracking-wide mb-3 font-medium">
                    {card.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-[#221B1F]/70 font-light leading-relaxed tracking-wide mt-1">
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