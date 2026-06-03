// app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "QLBI | Where Faith and Marriage Come Together",
  description: "An Islamic social and marriage platform designed to help Muslims build meaningful relationships, strengthen faith, learn together, and find compatible spouses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <body className="antialiased bg-brand-bg text-brand-charcoal flex min-h-screen flex-col selection:bg-brand-muted/30 selection:text-brand-dark">
        {/* Global Nav Layer */}
        <Navbar />
        
        {/* Main Content Node Flow */}
        <div className="flex-grow">
          {children}
        </div>
        
        {/* Global Footer Layer */}
        <Footer />
      </body>
    </html>
  );
}