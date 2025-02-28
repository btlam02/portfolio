"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconProgress } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#",
      icon: <IconHome className="h-4 w-4 text-white" />,
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      
    },
    {
      name: "About me",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
        name: "Projects",
        link: "/projects",
        icon: (
          <IconProgress className="h-4 w-4 text-white" />
        ),
    },
    {
      name: "My Journey",
      link: "#", 
      icon: <IconMessage className="h-4 w-4 text-white" />,
      onClick: () => {
        const section = document.getElementById("journey-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "nearest"});
        }
      },
    },

  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}
const DummyContent = () => {
  return (
    <div className="grid grid-cols-1 h-auto w-auto bg-black-100 rounded-md"> 
    </div>
  );
};
