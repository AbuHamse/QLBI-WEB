// app/how-it-works/verification/page.tsx
import React from "react";
import VerificationIntroComponent from "@/components/how-it-works/verification/VerificationIntroComponent";
import VerificationIdentityComponent from "@/components/how-it-works/verification/VerificationIdentityComponent";
import VerificationCommunityComponent from "@/components/how-it-works/verification/VerificationCommunityComponent";
import VerificationPrivacyComponent from "@/components/how-it-works/verification/VerificationPrivacyComponent";
import VerificationSafetyComponent from "@/components/how-it-works/verification/VerificationSafetyComponent";

export const metadata = {
  title: "Verification System | QLBI",
  description: "Building a secure, intentional, and highly trusted marriage registry through accountable identity verification.",
};

export default function VerificationPage() {
  return (
    <main className="min-h-screen bg-[#F6EFE9] overflow-x-hidden">
      {/* Component 6: Introduction */}
      <VerificationIntroComponent />

      {/* Component 7: Identity Authentication (Dark Tier) */}
      <VerificationIdentityComponent />

      {/* Component 8: Community Protection Standards */}
      <VerificationCommunityComponent />

      {/* Component 9: Privacy & Encryption Protocols (Dark Tier) */}
      <VerificationPrivacyComponent />

      {/* Component 10: Safety & Trust Protocols (Dark Tier) */}
      <VerificationSafetyComponent/>
    </main>
  );
}