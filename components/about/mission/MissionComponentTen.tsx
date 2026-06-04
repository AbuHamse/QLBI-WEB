// components/about/mission/MissionComponentTen.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MissionComponentTen() {
  return (
    <section className="w-full bg-[#0A0A0C] text-[#F6EFE9] px-6 py-28 lg:px-12 border-t border-[#F6EFE9]/10 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Description Context */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D89A9E] block">
              Systemic Boundaries
            </span>
            <div className="relative">
              <span className="block font-serif italic text-lg text-[#F2C9B6] mb-1">
                Protecting interactions—
              </span>
              <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight text-[#F6EFE9] leading-tight">
                High-Intent <br />
                <span className="font-normal italic text-[#F2C9B6]">safety networks</span>
              </h2>
            </div>
            <p className="text-sm font-light text-[#F6EFE9]/60 leading-relaxed pt-2">
              We design continuous internal architecture to guarantee absolute user safety while maintaining maximum focus on religious values.
            </p>
          </div>

          {/* Right Column Interactive Tabs Framework */}
          <div className="lg:col-span-7 w-full lg:pl-6">
            <Tabs defaultValue="intent" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-[#221B1F] text-[#F6EFE9]/60 border border-[#F6EFE9]/10 rounded-xl h-12 p-1">
                <TabsTrigger value="intent" className="rounded-lg text-xs font-medium uppercase tracking-wider transition-all data-[state=active]:bg-[#0A0A0C] data-[state=active]:text-[#F2C9B6]">
                  Accountability
                </TabsTrigger>
                <TabsTrigger value="safety" className="rounded-lg text-xs font-medium uppercase tracking-wider transition-all data-[state=active]:bg-[#0A0A0C] data-[state=active]:text-[#F2C9B6]">
                  Guardianship
                </TabsTrigger>
              </TabsList>

              <TabsContent value="intent" className="mt-6 rounded-xl border border-[#F6EFE9]/10 p-8 bg-[#221B1F]/30 backdrop-blur-md">
                <h4 className="text-base font-normal text-[#F6EFE9] mb-2">Zero-Game Ecosystem</h4>
                <p className="text-sm font-light leading-relaxed text-[#F6EFE9]/70">
                  By removing swiping patterns and tracking features that commodify users, we ensure that every conversation parameter initialized remains rooted strictly in the search for a marriage partner.
                </p>
              </TabsContent>

              <TabsContent value="safety" className="mt-6 rounded-xl border border-[#F6EFE9]/10 p-8 bg-[#221B1F]/30 backdrop-blur-md">
                <h4 className="text-base font-normal text-[#F6EFE9] mb-2">Honoring Traditions</h4>
                <p className="text-sm font-light leading-relaxed text-[#F6EFE9]/70">
                  Our system accommodates user settings to invite family members or guardians into verification spaces, upholding proper traditional respect from start to finish.
                </p>
              </TabsContent>
            </Tabs>
          </div>

        </div>
      </div>
    </section>
  );
}