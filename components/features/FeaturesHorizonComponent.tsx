import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FeaturesHorizonComponent() {
  const pathways = [
    { 
      num: "01", 
      title: "Intentional Matching", 
      path: "/features/matching", 
      desc: "Connect thoughtfully based on shared values, life goals, and long-term compatibility." 
    },
    { 
      num: "02", 
      title: "Secure Messaging", 
      path: "/features/messaging", 
      desc: "Engage in meaningful, safe conversations focused on future family intentions." 
    },
    { 
      num: "03", 
      title: "Wali Support", 
      path: "/features/wali-support", 
      desc: "Involve family guardians seamlessly into your journey with complete comfort." 
    },
    { 
      num: "04", 
      title: "Marriage Journey", 
      path: "/features/stories", 
      desc: "Read real, heartwarming milestones and guidance written by verified families." 
    }
  ];

  return (
    <section className="w-full py-24 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-accent/10">
      <div className="max-w-7xl w-full flex flex-col">
        
        <div className="mb-16 max-w-xl">
          <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-accent block mb-3">Platform Features</span>
          <h2 className="text-2xl md:text-3xl font-light font-serif tracking-tight text-foreground uppercase">
            Explore our core pillars
          </h2>
        </div>

        {/* Clean Linear Row Deck inspired by feature sub pages structural design.webp */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pathways.map((item, idx) => (
            <Link 
              href={item.path} 
              key={idx}
              className="group bg-card border border-accent/20 p-8 rounded-xl flex flex-col justify-between min-h-[260px] hover:border-accent transition-colors duration-300 shadow-sm"
            >
              <div>
                <span className="text-xs font-mono text-accent block mb-6 font-bold">{item.num} </span>
                <h3 className="text-base font-serif uppercase tracking-tight text-foreground mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-primary/60 font-light leading-relaxed tracking-wide">
                  {item.desc}
                </p>
              </div>

              <div className="flex justify-end pt-6">
                <div className="w-7 h-7 rounded-full border border-accent/20 flex items-center justify-center text-primary/40 group-hover:border-accent group-hover:text-accent transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}