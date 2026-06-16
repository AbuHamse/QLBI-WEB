"use client";

import React, { useState } from "react";
import { MailCheck } from "lucide-react";

export default function MessagingCTAComponent() {
  const [iconError, setIconError] = useState(false);

  return (
    <section className="w-full py-32 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-b border-accent/10 relative overflow-hidden">
      
      {/* Asymmetric Design Anchor Grid lines */}
      <div className="absolute inset-y-0 left-1/3 w-[1px] bg-accent/5 hidden lg:block" />
      <div className="absolute inset-y-0 right-1/3 w-[1px] bg-accent/5 hidden lg:block" />

      <div className="max-w-4xl w-full text-center flex flex-col items-center relative z-10 animate-fade-in-up">
        <div className="w-12 h-px bg-accent mb-8" />
        
        <h2 className="text-3xl md:text-5xl font-light font-serif tracking-tight text-foreground uppercase mb-6 leading-tight">
          The strongest relationships <br /> 
          <span className="font-sans italic font-normal text-accent lowercase">begin with</span> conversations that matter
        </h2>
        
        <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-lg mb-12">
          Take part in a messaging environment where boundaries are valued, identity is verified, and real marriage intentions are always centered.
        </p>

       
      </div>

    </section>
  );
}