import React from "react";
import { Sparkles, EyeOff, CheckCircle } from "lucide-react";

export default function MatchingProcessComponent() {
  const steps = [
    {
      icon: <Sparkles className="w-5 h-5 text-accent stroke-[1.2]" />,
      title: "Value Onboarding",
      desc: "Share your lifestyle expectations, family background, religious practices, and personal goals through an honest profile built around your core character traits."
    },
    {
      icon: <EyeOff className="w-5 h-5 text-accent stroke-[1.2]" />,
      title: "Privacy-First Discovery",
      desc: "Profiles are structured beautifully to respect your personal details. Explore potential matches with absolute security, protecting your face-to-face visibility until you decide otherwise."
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-accent stroke-[1.2]" />,
      title: "Mutual Intent",
      desc: "Introductions are only opened when both parties express a sincere, purposeful interest, establishing a clear path forward devoid of pressure or casual distractions."
    }
  ];

  return (
    <section className="w-full py-24 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-accent/10">
      <div className="max-w-7xl w-full flex flex-col">
        
        <div className="max-w-xl mb-16">
          <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-accent block mb-3">The Process</span>
          <h2 className="text-2xl md:text-4xl font-light font-serif tracking-tight text-foreground uppercase">
            A balanced approach to introductions
          </h2>
        </div>

        {/* 3 Columns row layout inspired by matching page template details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-card border border-accent/10 p-8 rounded-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-background border border-accent/20 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-lg font-serif uppercase tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-primary/70 font-light leading-relaxed tracking-wide">
                  {step.desc}
                </p>
              </div>
              <span className="text-xs font-mono text-accent/40 font-bold self-end">0{idx + 1}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}