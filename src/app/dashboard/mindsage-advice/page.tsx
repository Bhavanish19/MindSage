import React from "react";

import {
  AnimatedListDemo,
  AnimatedListDemo2,
} from "@/components/explore/Animated";
import { DevLoomImage } from "@/components/explore/DevLoomImage";
import { Showtext } from "@/components/magic/Showtext";

import { MindSageTitle } from "@/components/explore/MindSageTitle";
// import { MindWellTitle } from "@/components/explore/MindWellTitle";

import { GradualSpacingDemo } from "@/components/magic/GradualSpacing";
import Link from "next/link";
import { Box } from "lucide-react";
import Image from "next/image";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { MentalHealthFacts } from "@/components/MentalHealthFacts";

const AdvicePage = () => {
  return (
    <>
      <MindSageTitle />
      <GradualSpacing
        className="my-5 text-center text-[16px] font-bold -tracking-widest text-black dark:text-white md:my-7 md:text-5xl md:leading-[5rem]"
        text="Unlock your Inner Peace Step by Step"
      />

      <div className="flex flex-col gap-5 px-5 md:px-10">
        {/* Section for Mental Wellness Techniques */}
        <div className="text-center">
          <h2 className="text-xl font-bold md:text-3xl">
             Its Okay not to be Perfect !  dost ! 
          </h2>
         

          <div className="flex justify-center">
            <Image
              src="/files/meditation.png" // Use your actual path to the image
              alt="Yoga for Mental Wellness"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>

        <MentalHealthFacts/>
       
      </div>

      <Showtext />

      <GradualSpacingDemo />
    </>
  );
};

export default AdvicePage;
