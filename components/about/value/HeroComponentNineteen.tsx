// components/value/HeroComponentNineteen.tsx
import React from "react";
import Image from "next/image";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";

export default async function HeroComponentNineteen() {
  const privacyImg = await getMediaAssetBySlug("img27");

  return (
    <section className="w-full py-24 bg-[#221B1F] text-[#F6EFE9] px-6 md:px-16 border-b border-[#0A0A0C]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Asymmetrical Portrait Frame Integration from the Design Template */}
        <div className="lg:col-span-5 relative w-full aspect-[4/5] bg-[#0A0A0C] border border-[#D89A9E]/20 p-2 shadow-xl">
          {privacyImg?.url ? (
            <Image
              src={privacyImg.url}
              alt="Secure and confidential environment concept"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top contrast-[102%] brightness-[92%]"
            />
          ) : (
            <div className="w-full h-full bg-[#0A0A0C] animate-pulse" />
          )}
        </div>

        {/* Right Side: Sincere Narrative Copy Block */}
        <div className="lg:col-span-7 lg:pl-8 flex flex-col justify-center">
          <span className="text-xs tracking-[0.3em] uppercase text-[#D89A9E] font-medium mb-4">
            Core Values // 04
          </span>
          <h3 className="text-4xl md:text-5xl font-light font-serif tracking-tight text-white mb-8">
            Privacy
          </h3>
          
          <div className="space-y-6 text-[#F6EFE9]/80 font-light leading-relaxed max-w-xl text-sm md:text-base">
            <p className="text-white font-serif italic text-lg md:text-xl leading-relaxed">
              &#34;Personal information should be protected.&#34;
            </p>
            <p>
              We are deeply committed to giving our community absolute control over their data, ensuring that your personal journey unfolds securely and at your own pace.
            </p>
            <p>
              By handling all information responsibly and maintaining high architectural standards, we protect the sanctity of your interactions so you can focus on building meaningful connections with peace of mind.
            </p>
          </div>

          {/* Clean, non-brutalist anchor highlight */}
          <div className="mt-10 text-xs tracking-widest uppercase text-[#D89A9E] font-medium">
            Protected & Secure Space
          </div>
        </div>

      </div>
    </section>
  );
}