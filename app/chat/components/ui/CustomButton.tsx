"use client";

import React, { useState } from "react";

export const CustomButton = () => {
  const [isTransitioning, setTransitioning] = useState(false);

  // Handle button click/touch without using Next.js router
  const handleClick = () => {
    setTransitioning(true);
    // Wait for the smooth transition (700ms) then navigate to homepage
    setTimeout(() => {
      window.location.href = "/";
    }, 700);
  };

  return (
    <div className="mt-4 flex justify-center">
      <button
        type="button"
        onClick={handleClick}
        className={`
          relative 
          rounded-full 
          bg-transparent 
          px-4 
          py-2 
          font-mono 
          font-bold 
          text-white/60
          text-lg 
          transition-colors 
          duration-300 
          ease-linear 
          before:absolute 
          before:right-1/2 
          before:top-1/2 
          before:-z-[1] 
          before:h-3/4 
          before:w-2/3 
          before:origin-bottom-left 
          before:-translate-y-1/2 
          before:translate-x-1/2 
          before:animate-ping 
          before:rounded-full 
          before:bg-indigo-800 
          hover:bg-indigo-900 
          hover:before:bg-indigo-900
          ${isTransitioning ? "opacity-0" : "opacity-100"}
        `}
      >
        VISIT RISE DIGITAL
      </button>
    </div>
  );
};
