import { Hero } from "@/components/Hero";
import { FloatingNavDemo } from "@/components/Navbar";
import { TimelineDemo } from "@/components/Journey";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <h1 className="max-w-7xl w-full">
        {/* Navbars */}
        <FloatingNavDemo />
        {/* Home */}
        <Hero />
        {/* Experiences */}
        <div id="journey-section">
          <TimelineDemo />
        </div>
        {/* Contact */}
        <div id="experience-section">
        
        </div>
      </h1>
    </main>
  );
}
