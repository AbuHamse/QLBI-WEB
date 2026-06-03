// components/Footer.tsx
import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background text-brand-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Brand Philosophy Manifest Column */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-brand-dark">
              QLBI<span className="text-brand-muted">.</span>
            </Link>
            <p className="text-xs max-w-sm leading-relaxed text-brand-charcoal/75">
              An intentional workspace engineered for Muslims mapping out relationships built on clarity, framework metrics, shared spiritual parameters, and deep mutual respect.
            </p>
          </div>

          {/* Quick Route Matrices */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-4">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-muted">About</h3>
              <ul className="mt-4 space-y-2 text-xs">
                <li><Link href="/about" className="hover:text-brand-muted transition-colors">Overview</Link></li>
                <li><Link href="/about/mission" className="hover:text-brand-muted transition-colors">Mission</Link></li>
                <li><Link href="/about/vision" className="hover:text-brand-muted transition-colors">Vision</Link></li>
                <li><Link href="/about/values" className="hover:text-brand-muted transition-colors">Values</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Workflow</h3>
              <ul className="mt-4 space-y-2 text-xs">
                <li><Link href="/how-it-works/create-profile" className="hover:text-brand-muted transition-colors">Profiles</Link></li>
                <li><Link href="/how-it-works/verification" className="hover:text-brand-muted transition-colors">Verification</Link></li>
                <li><Link href="/how-it-works/discover" className="hover:text-brand-muted transition-colors">Discovery</Link></li>
                <li><Link href="/how-it-works/marriage-journey" className="hover:text-brand-muted transition-colors">The Journey</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Platform</h3>
              <ul className="mt-4 space-y-2 text-xs">
                <li><Link href="/features" className="hover:text-brand-muted transition-colors">Features</Link></li>
                <li><Link href="/safety" className="hover:text-brand-muted transition-colors">Safety Systems</Link></li>
                <li><Link href="/community" className="hover:text-brand-muted transition-colors">Community Hub</Link></li>
                <li><Link href="/pricing" className="hover:text-brand-muted transition-colors">Pricing Tiers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Resources</h3>
              <ul className="mt-4 space-y-2 text-xs">
                <li><Link href="/blog" className="hover:text-brand-muted transition-colors">Our Blog</Link></li>
                <li><Link href="/faq" className="hover:text-brand-muted transition-colors">FAQ Index</Link></li>
                <li><Link href="/support" className="hover:text-brand-muted transition-colors">Support Desk</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal & Meta Bottom Accent */}
        <div className="mt-12 border-t border-border/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-y-4 text-[11px] text-brand-charcoal/60">
          <p>&copy; {currentYear} QLBI Web Ecosystem. All rights reserved.</p>
          <div className="flex gap-x-6">
            <Link href="/safety/privacy" className="hover:text-brand-muted transition-colors">Privacy Policy</Link>
            <Link href="/safety/reporting" className="hover:text-brand-muted transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}