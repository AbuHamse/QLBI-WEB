import React from "react";
import { CheckCircle, Fingerprint } from "lucide-react";

export default function VerificationIdentityComponent() {
  return (
    <section className="w-full py-28 md:py-36 bg-[#121214] text-[#F6EFE9] px-6 md:px-16 lg:px-24 flex justify-center relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Soft Islamic Architectural Framing (Inspired by value website design template_4.webp) */}
        <div className="lg:col-span-5 relative w-full aspect-[4/5] bg-white/[0.03] border border-white/[0.08] overflow-hidden rounded-t-full shadow-2xl flex flex-col items-center justify-center p-8 text-center group">
          <div className="absolute inset-0 bg-gradient-to-b from-[#D89A9E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <Fingerprint className="w-12 h-12 text-[#D89A9E] stroke-[1] mb-4" />
          <span className="text-[9px] tracking-[0.4em] uppercase text-white/40 block mb-1">
            Secure Cryptographic Check
          </span>
          <span className="font-serif italic text-xs text-[#D89A9E]/80">
            Real-Time Integrity Matrix
          </span>
        </div>

        {/* Right Side: Clean Apple/Stripe Typography Layout */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-3 text-[#D89A9E] mb-4">
            <CheckCircle className="w-4 h-4 stroke-[1.2]" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
              Authentication Tier
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light font-serif tracking-tight text-white uppercase leading-tight mb-6">
            Verify your identity
          </h2>
          
          <p className="text-sm md:text-base text-white/70 font-light leading-relaxed tracking-wide max-w-xl mb-8">
            Members undergo streamlined identity checks to guarantee that every profile represents an authentic individual. This background verification establishes profound mutual trust before a single introductory message is exchanged.
          </p>

          <div className="pt-6 border-t border-white/[0.08] inline-flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D89A9E]" />
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-white/50">
              Government ID Match System Enabled
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}