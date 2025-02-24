"use client";

import React from "react";
import { title, subtitle } from "../../../fonts/font";


const WelcomeMessage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-1/2 p-4">
      <h1 className={`text-[#ffffff] text-center text-4xl font-bold ${title.className}`}>
        Welcome to Rise Digital
      </h1>
      <p className={`text-[#ffffff] text-center text-lg font-medium mt-8 sm:mt-4 ${subtitle.className}`}>
        We are committed to transforming businesses with innovative digital
        solutions. Whether it's cutting-edge software, seamless management tools,
        or AI-powered automation, we help you stay ahead in the digital era.
        Let’s build the future together!
      </p>
    </div>
  );
};

export default WelcomeMessage;
