// components/value/HeroComponentEighteen.tsx
import React from "react";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";
import Image from "next/image";

export default async function HeroComponentEighteen() {
  const serviceImg = await getMediaAssetBySlug("img17");

  // Intentionally mapped values framing the pillars of Honesty in marriage connections
  const pillars = [
    { 
      num: "01", 
      title: "Truthful Presentation", 
      description: "Presenting yourself authentically, removing pretense to find real alignment." 
    },
    { 
      num: "02", 
      title: "Sincere Communication", 
      description: "Conversations rooted in true intent, clarity, and honorable purpose." 
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-[#F6EFE9] text-[#221B1F] px-6 md:px-16 border-b border-[#D89A9E]/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Sincere Value Narrative & Structural Row Layout */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full">
          <span className="text-xs tracking-[0.3em] uppercase text-[#D89A9E] font-medium mb-4">
            Core Values // 03
          </span>
          
          <h3 className="text-4xl font-light font-serif tracking-tight text-[#0A0A0C] mb-6">
            Honesty
          </h3>
          
          <p className="text-base font-light text-[#221B1F]/80 max-w-xl mb-12 leading-relaxed">
            Meaningful connections begin with honesty. We encourage users to present themselves truthfully and communicate with sincerity.
          </p>
          
          {/* Elegant Horizontal Divider List based on the Editorial Template */}
          <div className="w-full border-t border-[#D89A9E]/40">
            {pillars.map((pillar, i) => (
              <div 
                key={i} 
                className="group w-full py-8 border-b border-[#D89A9E]/40 flex flex-col md:flex-row justify-between items-start gap-4 transition-all duration-300 hover:bg-[#F2C9B6]/10 px-3"
              >
                <div className="flex items-start gap-6 max-w-md">
                  <span className="text-xs font-serif italic text-[#D89A9E] pt-1">{pillar.num}.</span>
                  <div>
                    <h4 className="text-lg font-serif tracking-wide text-[#0A0A0C]">
                      {pillar.title}
                    </h4>
                    <p className="mt-2 text-sm text-[#221B1F]/70 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
                
                {/* Clean design accent without brutalist phrasing */}
                <div className="text-[10px] tracking-widest uppercase text-[#D89A9E] font-medium pt-1 self-end md:self-start">
                  Intentionality
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Elegant Floating Picture Frame Layout */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full pt-8 lg:pt-0">
          <div className="relative w-full max-w-sm aspect-[3/4] border border-[#D89A9E]/30 p-3 bg-[#F6EFE9] shadow-sm">
            <div className="relative w-full h-full overflow-hidden rounded-sm bg-[#F2C9B6]/10">
              {serviceImg?.url ? (
                <Image
                  src={serviceImg.url}
                  alt="Honesty and sincere reflection framework"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transform transition-transform duration-700 hover:scale-102 filter contrast-[101%]"
                />
              ) : (
                <div className="w-full h-full bg-[#F2C9B6]/20 animate-pulse" />
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}