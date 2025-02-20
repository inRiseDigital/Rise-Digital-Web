// components/ui/CustomButton.tsx

import React, { useState } from "react";

export const CustomButton = () => {
  const [isTransitioning, setTransitioning] = useState(false);

  // Handle button click/touch without using Next.js router
  const handleClick = () => {
    setTransitioning(true); // Start fade-out transition
    // Wait for the smooth transition (700ms) then navigate to homepage
    setTimeout(() => {
      window.location.href = "/"; // Native redirect to homepage
    }, 700);
  };

  return (
    <div className="mt-4 flex justify-center">
      <button
        type="button"
        onClick={handleClick} // Attach click handler for transition and navigation
        className={`
          relative 
          w-48 h-14 
          bg-white/10 backdrop-blur-sm text-white/60 text-xl font-semibold 
          rounded-lg  
          text-center 
          overflow-hidden 
          cursor-pointer 
          group
          permanent-glow
          transition-all duration-700 ease-in-out
          border-0 outline-none
          ${isTransitioning ? "opacity-0" : "opacity-100"}  /* Fade-out effect */
        `}
      >
        {/* Arrow container - fades out on hover */}
        <div
          className="
            bg-white
            rounded-md  
            h-12 w-1/4 
            flex items-center justify-center 
            absolute 
            left-1 top-[4px] 
            z-10 
            transition-all duration-700 ease-in-out
            group-hover:w-[184px]
            group-hover:opacity-0
          "
        >
          <svg
            className="transform scale-x-[-1]" /* Flips arrow horizontally */
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            height="25px"
            width="25px"
          >
            <path
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              fill="#000000"
            />
            <path
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              fill="#000000"
            />
          </svg>
        </div>

        {/* Default text - fades out on hover */}
        <p className="translate-x-2 transition-all duration-700 ease-in-out group-hover:opacity-0">
          Visit US
        </p>

        {/* "RISE DIGITAL" text appears on hover */}
        <p className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100">
          RISE DIGITAL
        </p>
      </button>
      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 8px #6b46c1;
          }
          50% {
            box-shadow: 0 0 16px #6b46c1;
          }
        }
        .permanent-glow {
          animation: glow 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
