import React from "react";
import { MessageSquare } from "lucide-react";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";

export default async function MessagingHeroComponent() {
  // Fetching main background image asset from Sanity
  const msg1 = await getMediaAssetBySlug("msg1");

  return (
    <section className="w-full min-h-[90vh] relative flex items-center justify-center text-center px-6 md:px-16 lg:px-24 overflow-hidden bg-background">
      {/* Full-bleed editorial image container inspired by messaging strucutal template design.webp */}
      {msg1?.url ? (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 filter contrast-[102%] brightness-[85%]" 
          style={{ backgroundImage: `url(${msg1.url})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background" />
      )}

      {/* Luxury Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40 pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2.5 bg-background/70 backdrop-blur-md border border-accent/20 px-4 py-1.5 rounded-full">
          <MessageSquare className="w-3.5 h-3.5 text-accent stroke-[1.3]" />
          <span className="text-[9px] tracking-[0.4em] uppercase font-bold text-primary">
            Secure Communication
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-light font-serif tracking-tight text-foreground uppercase leading-[1.1] max-w-3xl">
          Conversations That <br />
          <span className="font-sans italic font-normal text-accent lowercase">encourage</span> Respect
        </h1>

        <p className="text-sm md:text-lg text-primary/80 font-light leading-relaxed tracking-wide max-w-2xl mx-auto">
          Meaningful relationships begin with meaningful dialogue. QLBI's messaging experience creates a space where individuals can communicate openly while maintaining dignity and mutual consideration.
        </p>
      </div>
    </section>
  );
}