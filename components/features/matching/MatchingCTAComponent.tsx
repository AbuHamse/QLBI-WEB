import React from "react";
import { ArrowRight } from "lucide-react";

export default function MatchingCTAComponent() {
  return (
    <section className="w-full py-32 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-b border-accent/10">
      <div className="max-w-3xl w-full text-center flex flex-col items-center space-y-8">
        
        <h2 className="text-3xl md:text-5xl font-light font-serif tracking-tight text-foreground uppercase leading-tight">
          Your path to a lasting <br /> <span className="font-sans italic font-normal text-accent lowercase">marriage</span> begins here
        </h2>
        
        <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-xl">
          Take the first step towards a peaceful, family-aligned partnership. Join our verified community and connect with individuals who match your standard of living and lifestyle values.
        </p>

 
      </div>
    </section>
  );
}