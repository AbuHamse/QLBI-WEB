import React from "react";
import Image from "next/image";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";
import { MessageSquare } from "lucide-react";

export default async function ConnectIntroComponent() {
  // Fetching the requested 5 structural assets from Sanity
  const img14 = await getMediaAssetBySlug("img14");
  const img15 = await getMediaAssetBySlug("img15");
  const img26 = await getMediaAssetBySlug("img26");
  const img23 = await getMediaAssetBySlug("img23");
  const img22 = await getMediaAssetBySlug("img22");

  const horizonImages = [
    { asset: img14, h: "h-64 md:h-80", mt: "mt-12" },
    { asset: img15, h: "h-48 md:h-60", mt: "mt-24" },
    { asset: img26, h: "h-72 md:h-96", mt: "mt-0" },
    { asset: img23, h: "h-80 md:h-[420px]", mt: "mt-6" },
    { asset: img22, h: "h-56 md:h-72", mt: "mt-16" },
  ];

  return (
    <section className="w-full pt-32 pb-20 bg-background text-primary px-4 md:px-12 flex flex-col items-center relative overflow-hidden">
      {/* Editorial Header Section closely inspired by connect design structure template example.jpg */}
      <div className="max-w-5xl text-center flex flex-col items-center mb-16 animate-fade-in-up">
        <div className="w-px h-12 bg-accent/30 mb-6" />
        <div className="inline-flex items-center gap-2 text-accent mb-4">
          <MessageSquare className="w-3.5 h-3.5 stroke-[1.2]" />
          <span className="text-[10px] tracking-[0.35em] uppercase font-semibold">
            Dialogue Entry
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light font-serif tracking-tight text-foreground uppercase leading-[1.1] max-w-4xl">
          Begin <span className="font-sans italic font-normal text-accent lowercase">the</span> conversation
        </h1>
        
        <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-xl mt-6">
          When you find someone interesting, you can start a private conversation and begin learning more about each other at a comfortable pace.
        </p>
      </div>

      {/* Staggered Masonry Horizon Row - Exact Match to connect design structure template example.jpg */}
      <div className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 items-start pt-8">
        {horizonImages.map((item, index) => (
          <div 
            key={index} 
            className={`relative w-full ${item.h} ${item.mt} bg-muted/10 border border-accent/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500`}
          >
            {item.asset?.url ? (
              <Image
                src={item.asset.url}
                alt={`Editorial Horizon Layer ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover filter contrast-[102%] brightness-[99%] hover:scale-[1.03] transition-transform duration-1000 ease-out"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[10px] text-primary/30 italic">
                Asset Empty
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}