import React from "react";
import Image from "next/image";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";

export default async function MessagingShowcaseComponent() {
  // Fetching media assets 4 and 5 from the Sanity database
  const msg4 = await getMediaAssetBySlug("msg4");
  const msg5 = await getMediaAssetBySlug("msg5");

  return (
    <section className="w-full py-24 bg-card text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-accent/10 relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Aspect: Miniature Frame */}
        <div className="lg:col-span-4 hidden lg:block">
          <div className="w-full h-[350px] relative border border-accent/10 rounded-xl overflow-hidden">
            {msg4?.url && (
              <Image 
                src={msg4.url} 
                alt="Balanced perspective building" 
                fill 
                className="object-cover"
                sizes="25vw"
              />
            )}
          </div>
        </div>

        {/* Center Aspect: Focal Supporting Text matching messaging strucutal template design.webp structure */}
        <div className="lg:col-span-4 text-center space-y-6">
          <h3 className="text-xl md:text-2xl font-serif tracking-tight uppercase text-foreground">
            Focus on what matters
          </h3>
          <p className="text-xs md:text-sm text-primary/70 font-light leading-relaxed tracking-wide">
            Discuss your goals, ask important questions, share perspectives, and learn how the other person approaches life and commitment.
          </p>
        </div>

        {/* Right Aspect: Miniature Frame */}
        <div className="lg:col-span-4 hidden lg:block">
          <div className="w-full h-[350px] relative border border-accent/10 rounded-xl overflow-hidden">
            {msg5?.url && (
              <Image 
                src={msg5.url} 
                alt="Intentional marriage preparation" 
                fill 
                className="object-cover"
                sizes="25vw"
              />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}