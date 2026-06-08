import React from "react";
import { Shield } from "lucide-react";

export default function VerificationIntroComponent() {
  return (
    <section className="w-full py-28 md:py-36 bg-[#F6EFE9] text-[#221B1F] px-6 md:px-16 lg:px-24 flex justify-center relative overflow-hidden">
      {/* Structural layout balance line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-[#D89A9E]/20" />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-3 text-[#D89A9E] mb-4">
            <Shield className="w-4 h-4 stroke-[1.2]" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
              Ecosystem Integrity
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light font-serif tracking-tight text-[#0A0A0C] uppercase leading-tight">
            Building confidence <br /> through verification
          </h2>
        </div>
        
        <div className="lg:col-span-7 lg:pt-10">
          <p className="text-base md:text-lg text-[#221B1F]/70 font-light leading-relaxed max-w-xl tracking-wide">
            Cultivating a safer, intentional space begins with accountable identity. Our verification protocol is engineered to neutralize deceptive profiles and foster genuine, transparent engagement across the entire community.
          </p>
        </div>
      </div>
    </section>
  );
}