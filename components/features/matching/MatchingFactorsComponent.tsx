import React from "react";
import Image from "next/image";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";
import { Check } from "lucide-react";

export default async function MatchingFactorsComponent() {
  // Fetching a random image placeholder within the 20-49 range via specific asset slug
  const factorImg = await getMediaAssetBySlug("img25");

  const pillars = [
    { title: "Shared Traditions", detail: "Prioritizing religious guidelines, spiritual practice habits, and mutual expectations for a happy home environment." },
    { title: "Life & Direction", detail: "Aligning relocation options, long-term careers, educational milestones, and family-raising perspectives." },
    { title: "Family Involvement", detail: "Ensuring deep respect for extended families, traditions, and supportive guardian roles right from the beginning." }
  ];

  return (
    <section className="w-full py-28 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-accent/10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Aspect: Asymmetric Image Frame */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="w-full h-[400px] md:h-[500px] relative border border-accent/10 bg-card rounded-xl overflow-hidden shadow-sm">
            {factorImg?.url && (
              <Image 
                src={factorImg.url} 
                alt="Values and compatibility factors" 
                fill 
                className="object-cover filter sepia-[5%]" 
                sizes="40vw"
              />
            )}
          </div>
        </div>

        {/* Right Aspect: Linear Pillars Breakdown */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-accent block mb-3">Core Pillars</span>
            <h2 className="text-3xl md:text-5xl font-light font-serif tracking-tight text-foreground uppercase leading-tight">
              Compatibility centered <br /> around what matters
            </h2>
          </div>

          <div className="space-y-6">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="flex gap-4 border-b border-accent/10 pb-6 last:border-none">
                <div className="mt-1 w-5 h-5 rounded-full border border-accent/30 flex items-center justify-center text-accent shrink-0">
                  <Check className="w-3 h-3 stroke-[2]" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-serif uppercase tracking-tight text-foreground">{pillar.title}</h4>
                  <p className="text-xs md:text-sm text-primary/60 font-light leading-relaxed tracking-wide">{pillar.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}