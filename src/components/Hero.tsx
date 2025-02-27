import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { BoxesCore } from "./ui/backgroud-boxes";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlight & BoxesCore */}
      <div>
        <BoxesCore className="pt-96" />
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      {/* backgroud setup */}
      <div className="w-auto h-auto bg-black-100">
        {/* Text Intro */}
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Thanh-Lam Bui's blog
            </h2>
            <TextGenerateEffect 
              words="Space for share my Experiences and Projects"
              />
            <p className="text-blue-100 text-center md:tracking-wider mb-4 lg:mt-5 text-sm md:text-lg lg:text-xl">Hi, I'm Thanh - Lam Bui, a Master's student at UIT, VNUHCM.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};
