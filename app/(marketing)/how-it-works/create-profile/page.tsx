// app/(marketing)/how-it-works/create-profile/page.tsx
import React from "react";
import CreateProfileComponentTwo from "@/components/how-it-works/create-profile/CreateProfileComponentTwo";
import CreateProfileComponentOne from "@/components/how-it-works/create-profile/CreateProfileComponentOne";
import CreateProfileComponentThree from "@/components/how-it-works/create-profile/CreateProfileComponentThree";
import CreateProfileComponentSix from "@/components/how-it-works/create-profile/CreateProfileComponentSix";
import CreateProfileIntroComponent from "@/components/how-it-works/create-profile/CreateProfileIntroComponent";

export const metadata = {
  title: "Create Profile | How It Works",
  description: "Learn how to build a profile with sincerity and purpose on QLBI.",
};

export default function CreateProfilePage() {
  return (
    <main className="w-full min-h-screen bg-[#F6EFE9]">
      {/* 4 sequential step components running without text motion */}
      <CreateProfileIntroComponent />
      <CreateProfileComponentOne/>
      <CreateProfileComponentTwo />
      <CreateProfileComponentThree />
      <CreateProfileComponentSix />
    </main>
  );
}