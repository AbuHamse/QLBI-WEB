import React from "react";
import { Target, Heart, Shield, Users } from "lucide-react";

export default function ConnectFocusComponent() {
  const pillars = [
    { title: "Values & Commitment", icon: Target },
    { title: "Family Expectations", icon: Users },
    { title: "Religious Practices", icon: Shield },
    { title: "Personal Life Goals", icon: Heart }
  ];

  return (
    <section className="w-full py-28 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-accent/10">
      <div className="max-w-7xl w-full flex flex-col items-center">
        
        <div className="text-center max-w-2xl mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-light font-serif tracking-tight text-foreground uppercase mb-4">
            Focus on what matters
          </h2>
          <p className="text-sm text-primary/70 font-light tracking-wide max-w-md mx-auto">
            Talk openly about the fundamental qualities that contribute to constructing a successful, long-term marriage registry.
          </p>
        </div>

        {/* Precise Clean Edge Cards (No Dome Contours) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-background border border-accent/20 p-8 rounded-lg shadow-sm hover:border-accent transition-colors duration-300 group"
              >
                <div className="w-8 h-8 rounded-md bg-brand-highlight/20 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-background transition-colors duration-300">
                  <Icon className="w-4 h-4 stroke-[1.3]" />
                </div>
                <h3 className="text-sm uppercase font-semibold tracking-wider text-foreground mb-2">
                  {item.title}
                </h3>
                <div className="w-8 h-[1px] bg-accent/30 mt-4" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}