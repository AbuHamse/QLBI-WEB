import React from "react";

export default function MessagingIntroComponent() {
  return (
    <section className="w-full py-24 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-accent/10">
      <div className="max-w-3xl w-full text-center space-y-6 animate-fade-in-up">
        <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-accent block">
          A Higher Standard
        </span>
        
        <h2 className="text-2xl md:text-4xl font-light font-serif tracking-tight text-foreground uppercase leading-tight">
          Move beyond one-word greetings
        </h2>
        
        <div className="w-8 h-px bg-accent/40 mx-auto my-4" />
        
        <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed tracking-wide max-w-xl mx-auto">
          Build conversations rooted in curiosity, understanding, and sincerity. Our layout guides you past simple distractions into meaningful interactions that honor your values.
        </p>
      </div>
    </section>
  );
}