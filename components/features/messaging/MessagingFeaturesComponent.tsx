import React from "react";
import Image from "next/image";
import { getMediaAssetBySlug } from "@/sanity/lib/fetchMedia";
import { ShieldAlert, HelpCircle, MessageCircleCode, MessageSquareDashed } from "lucide-react";

export default async function MessagingFeaturesComponent() {
  // Fetching twin interlocking panels from Sanity
  const msg2 = await getMediaAssetBySlug("msg2");
  const msg3 = await getMediaAssetBySlug("msg3");

  const expectations = [
    {
      icon: <ShieldAlert className="w-4 h-4 text-accent stroke-[1.2]" />,
      title: "Secure private conversations",
      desc: "End-to-end parameters designed to keep your personal correspondence entirely protected and private."
    },
    {
      icon: <HelpCircle className="w-4 h-4 text-accent stroke-[1.2]" />,
      title: "Thoughtful icebreakers and prompts",
      desc: "Curated conversational milestones that clear away awkwardness and inspire genuine core discovery."
    },
    {
      icon: <MessageCircleCode className="w-4 h-4 text-accent stroke-[1.2]" />,
      title: "Tools that encourage constructive dialogue",
      desc: "System layouts built around compatibility questions, future milestones, and mutual expectations."
    },
    {
      icon: <MessageSquareDashed className="w-4 h-4 text-accent stroke-[1.2]" />,
      title: "Flexible communication at your own pace",
      desc: "Take the necessary space and time required to make major decisions without synthetic timers or pressure."
    }
  ];

  return (
    <section className="w-full py-28 bg-background text-primary px-6 md:px-16 lg:px-24 flex justify-center border-t border-accent/10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Expectation List */}
        <div className="lg:col-span-6 space-y-10">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-accent block mb-3">What You Can Expect</span>
            <h2 className="text-3xl md:text-5xl font-light font-serif tracking-tight text-foreground uppercase leading-tight">
              An ecosystem built <br /> for genuine connection
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {expectations.map((item, idx) => (
              <div key={idx} className="space-y-3 bg-card border border-accent/10 p-6 rounded-xl">
                <div className="w-8 h-8 rounded-full bg-background border border-accent/20 flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-xs tracking-tight font-serif uppercase text-foreground font-bold">{item.title}</h4>
                <p className="text-[11px] text-primary/60 font-light leading-relaxed tracking-wide">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Asymmetric Interlocking Panels styled like messaging strucutal template design.webp */}
        <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative w-full h-[400px] md:h-[500px]">
          <div className="col-span-7 h-[90%] relative border border-accent/10 bg-card rounded-xl overflow-hidden shadow-sm">
            {msg2?.url && (
              <Image 
                src={msg2.url} 
                alt="Secure dialogue space" 
                fill 
                className="object-cover" 
                sizes="35vw"
              />
            )}
          </div>
          <div className="col-span-5 h-[80%] mt-auto relative border border-accent/15 bg-card rounded-xl overflow-hidden shadow-md">
            {msg3?.url && (
              <Image 
                src={msg3.url} 
                alt="Respectful connection guidelines" 
                fill 
                className="object-cover filter brightness-[95%]" 
                sizes="25vw"
              />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}