// components/value/HeroComponentSeventeen.tsx
import React from "react";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";
import Image from "next/image";

export default async function HeroComponentSeventeen() {
  const centerImage = await getMediaAssetBySlug("img28");

  return (
    <section className="relative w-full py-24 md:py-40 bg-[#F2C9B6]/40 text-[#221B1F] flex flex-col items-center justify-center overflow-hidden border-b border-[#D89A9E]/30">
      <div className="relative max-w-5xl px-6 text-center z-10 flex flex-col items-center">
        <span className="text-xs tracking-[0.3em] uppercase text-[#D89A9E] font-medium mb-6">
          Core Values // 02
        </span>

        <h2 className="text-3xl md:text-5xl font-light font-serif tracking-wide leading-[1.4] text-[#0A0A0C] max-w-4xl">
          Respect shapes how people communicate, interact, and <span className="italic font-normal text-[#D89A9E]">build relationships</span> on the platform. Every user deserves to be treated with dignity.
        </h2>
        
        {/* Asymmetrical Floating Graphic Element Anchor from Template Layout */}
        {centerImage?.url && (
          <div className="relative w-43 h-32 mt-12 border border-[#D89A9E]/30 p-1 bg-[#F6EFE9] shadow-sm overflow-hidden rounded-sm">
            <Image
              src={centerImage.url}
              alt="Dignity and respect abstract detail"
              fill
              className="object-cover contrast-[102%]"
            />
          </div>
        )}
      </div>
      
      {/* Decorative Elegant Line Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-[#D89A9E]/30" />
    </section>
  );
}