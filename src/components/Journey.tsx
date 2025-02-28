import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "12-2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-bold mb-2">
            University of Information Technology, VNUHCM
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal">
          Pursuing a Master's program in Computer Science.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
          I am particularly interested in problems related to NLP, especially speech, as well as another field—computer vision.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* image section */}
          </div>
        </div>
      ),
    },
    {
      title: "10-2024",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-bold mb-2">
            University of Science, VNUHCM 
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal">
          Graduated with a Bachelor's degree in Information Technology, majoring in Computer Science.
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-bold mb-8">
          GPA: 3.34 / 4.0
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* image section */}
          </div>
        </div>
      ),
    },
    {
      title: "05-2023",
      content: (
        <div>
          <p className="text-neutral-200 text-xs md:text-sm font-bold mb-2">
            Robotics - Internet of things Club, VNUHCM-US
          </p>
          <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
          Teaching Robotics and Programming classes for middle and high school students.
          </p>

          <div className="grid grid-cols-2 gap-4">

          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
