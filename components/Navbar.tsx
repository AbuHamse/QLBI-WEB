// components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationStructure = [
    {
      title: "About",
      href: "/about",
      items: [
        { label: "Overview", href: "/about" },
        { label: "Our Mission", href: "/about/mission" },
        { label: "Our Vision", href: "/about/vision" },
        { label: "Our Values", href: "/about/values" },
      ],
    },
    {
      title: "How It Works",
      href: "/how-it-works",
      items: [
        { label: "Create Profile", href: "/how-it-works/create-profile" },
        { label: "Verification System", href: "/how-it-works/verification" },
        { label: "Discover Matches", href: "/how-it-works/discover" },
        { label: "Connect Respectfully", href: "/how-it-works/connect" },
        { label: "Marriage Journey", href: "/how-it-works/marriage-journey" },
      ],
    },
    {
      title: "Features",
      href: "/features",
      items: [
        { label: "Intended Matching", href: "/features/matching" },
        { label: "Private Messaging", href: "/features/messaging" },
        { label: "Community Stories", href: "/features/stories" },
        { label: "Shared Feed", href: "/features/feed" },
        { label: "Focused Communities", href: "/features/communities" },
        { label: "Secure Video Calls", href: "/features/video-calls" },
        { label: "Wali Support", href: "/features/wali-support" },
      ],
    },
    {
      title: "Safety",
      href: "/safety",
      items: [
        { label: "Identity Verification", href: "/safety/verification" },
        { label: "Data Privacy", href: "/safety/privacy" },
        { label: "System Moderation", href: "/safety/moderation" },
        { label: "Reporting Tools", href: "/safety/reporting" },
      ],
    },
    {
      title: "Community",
      href: "/community",
      items: [
        { label: "Active Groups", href: "/community/groups" },
        { label: "Faith Events", href: "/community/events" },
        { label: "Dawah Learning", href: "/community/dawah" },
        { label: "Success Stories", href: "/community/success-stories" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo / Brand Anchor */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-brand-dark">
          QLBI<span className="text-brand-muted">.</span>
        </Link>

        {/* Desktop Navigation Link Cluster */}
        <nav className="hidden lg:flex lg:gap-x-8">
          {navigationStructure.map((group) => (
            <div
              key={group.title}
              className="relative inline-block text-left"
              onMouseEnter={() => setActiveDropdown(group.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-x-1 text-sm font-medium tracking-wide text-brand-charcoal hover:text-brand-muted transition-colors py-2 cursor-pointer">
                <Link href={group.href}>
                  {group.title}
                </Link>
                <ChevronDown className="h-3 w-3 opacity-70" />
              </button>

              {/* Smooth Premium Dropdown Box */}
              {activeDropdown === group.title && (
                <div className="absolute left-0 w-56 origin-top-left rounded-lg border border-border bg-background p-2 shadow-xl ring-1 ring-black/5 animate-fade-in-up">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-md px-4 py-2.5 text-xs text-brand-charcoal hover:bg-brand-highlight/30 hover:text-brand-dark transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Simple Static Links */}
          <Link href="/pricing" className="text-sm font-medium tracking-wide text-brand-charcoal hover:text-brand-muted transition-colors py-2">
            Pricing
          </Link>
          <Link href="/faq" className="text-sm font-medium tracking-wide text-brand-charcoal hover:text-brand-muted transition-colors py-2">
            FAQ
          </Link>
          <Link href="/blog" className="text-sm font-medium tracking-wide text-brand-charcoal hover:text-brand-muted transition-colors py-2">
            Blog
          </Link>
        </nav>

        {/* Call to Action Trigger */}
        <div className="hidden lg:flex items-center gap-x-4">
          <Link href="/support" className="text-sm font-medium text-brand-charcoal hover:text-brand-muted transition-colors">
            Support
          </Link>
          <Link
            href="/#waitlist"
            className="rounded-full bg-brand-charcoal px-5 py-2 text-xs font-semibold text-brand-bg hover:bg-brand-dark transition-all shadow-sm"
          >
            Join Waitlist
          </Link>
        </div>

        {/* Mobile Toggle Trigger */}
        <button
          className="rounded-md p-2 text-brand-charcoal lg:hidden cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-50 bg-background px-6 py-6 overflow-y-auto lg:hidden animate-fade-in-up">
          <div className="flex flex-col gap-y-4">
            {navigationStructure.map((group) => (
              <div key={group.title} className="border-b border-border/50 pb-2">
                <span className="text-xs uppercase tracking-wider font-bold text-brand-muted block mb-2">
                  {group.title}
                </span>
                <div className="grid grid-cols-1 gap-y-2 pl-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm text-brand-charcoal py-1 block"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-y-3 pt-2 text-base font-medium">
              <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-border/50 text-brand-charcoal">Pricing</Link>
              <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-border/50 text-brand-charcoal">FAQ</Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-border/50 text-brand-charcoal">Blog</Link>
              <Link href="/support" onClick={() => setMobileMenuOpen(false)} className="py-2 text-brand-charcoal">Support</Link>
              <Link
                href="/#waitlist"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 rounded-full bg-brand-charcoal py-3 text-center text-sm font-semibold text-brand-bg shadow-sm"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}