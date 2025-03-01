"use client";
import React from "react";
import { useRouter } from "next/navigation"; 
import { FloatingNav } from "@/components/ui/floating-navbar";
import { usePathname } from "next/navigation"; // Import usePathname
import { IconHome, IconMessage, IconUser, IconProgress } from "@tabler/icons-react";

export function FloatingNavDemo() {
  const router = useRouter(); 
  const pathname = usePathname(); // Lấy URL hiện tại

  const navItems = [
    {
      name: "Home",
      link: "/home",
      icon: <IconHome className="h-4 w-4 text-white" />,
      onClick: () => {
        if (pathname === "/") {
          // Nếu đang ở Home, chỉ cuộn lên
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          // Nếu đang ở trang khác, điều hướng về Home với hiệu ứng
          router.push("/");
        }
      },
      
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
      onClick: async () => {
        if (pathname === "/") {
          // Nếu đã ở trang Home, cuộn xuống ngay
          const section = document.getElementById("journey-section");
          section?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } else {
          // Chuyển về trang Home
          await router.push("/");
      
          // Đợi một chút để trang load xong rồi mới cuộn
          setTimeout(() => {
            const newSection = document.getElementById("journey-section");
            newSection?.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }, 500); // Chỉnh thời gian nếu cần (500ms)
        }
      }
      

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
