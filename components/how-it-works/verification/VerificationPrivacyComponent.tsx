import React from "react";
import { Lock, EyeOff } from "lucide-react";

export default function VerificationPrivacyComponent() {
  return (
    <section className="w-full py-28 md:py-36 bg-[#0E0E10] text-[#F6EFE9] px-6 md:px-16 lg:px-24 flex justify-center relative overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-3 text-[#D89A9E] mb-4">
            <Lock className="w-4 h-4 stroke-[1.2]" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">
              Data Isolation
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light font-serif tracking-tight text-white uppercase leading-tight">
            Privacy remains <br /> important
          </h2>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between h-full lg:pt-10">
          <p className="text-base md:text-lg text-white/70 font-light leading-relaxed max-w-xl tracking-wide mb-12">
            Your verification criteria are treated with systemic isolation and cryptographic rigor. Sensitive identifying files are fully encrypted and permanently concealed from public view, remaining entirely inaccessible to other system users.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/[0.06] w-full">
            <div className="flex items-center gap-3">
              <EyeOff className="w-4 h-4 text-[#D89A9E] shrink-0 stroke-[1.2]" />
              <span className="text-xs tracking-wider text-white/60 font-light">
                Never Shared Publicly
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Lock className="w-4 h-4 text-[#D89A9E] shrink-0 stroke-[1.2]" />
              <span className="text-xs tracking-wider text-white/60 font-light">
                AES-256 Cloud Encryption
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}