import React from "react";
import Image from "next/image";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";
import { Columns } from "lucide-react";

export default async function FeaturesOverviewComponent() {
  // Fetching explicit editorial spotlights from Sanity
  const img56 = await getMediaAssetBySlug("img56");
  const img57 = await getMediaAssetBySlug("img57");

  return (
    <section className="w-full py-28 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-accent/10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center animate-fade-in-up">
        
        {/* Left Aspect: Asymmetric Content Description */}
        <div className="lg:col-span-5 space-y-8">
          <div className="inline-flex items-center gap-2 text-accent">
            <Columns className="w-4 h-4 stroke-[1.2]" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Platform Philosophy</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-light font-serif tracking-tight text-foreground uppercase leading-tight">
            Built for clarity, <br /> guided by values
          </h2>
          
          <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide">
            We intentionally move away from the noise of casual dating apps. By introducing verified identities, respectful communication controls, and seamless options for family involvement, our platform provides a clear, reliable path toward building a shared future.
          </p>
        </div>

        {/* Right Aspect: Double Image Interlocking Panels inspired by feature sub pages structural design.webp */}
        <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative w-full h-[400px] md:h-[500px]">
          <div className="col-span-7 h-full relative border border-accent/10 bg-card rounded-xl overflow-hidden shadow-sm">
            {img56?.url && (
              <Image 
                src={img56.url} 
                alt="Intentional spaces for connection" 
                fill 
                className="object-cover" 
                sizes="40vw"
              />
            )}
          </div>
          <div className="col-span-5 h-[80%] mt-auto relative border border-accent/15 bg-card rounded-xl overflow-hidden shadow-md">
            {img57?.url && (
              <Image 
                src={img57.url} 
                alt="Thoughtful community design" 
                fill 
                className="object-cover filter contrast-[102%]" 
                sizes="30vw"
              />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}