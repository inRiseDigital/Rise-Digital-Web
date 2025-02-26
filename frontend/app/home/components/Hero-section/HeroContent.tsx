"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Variants } from "framer-motion";
import { title, subtitle } from "../../../../fonts/font";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const HeroContent = () => {
  const [isClient, setIsClient] = useState(false);
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const variants: Variants = {
    float: {
      y: [-20, 20],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row relative max-w-[1680px] lg:pt-32 pt-8 px-4 md:px-10 mx-auto items-center justify-between"
    >
      {/* Image Section */}
      <motion.div
        variants={variants}
        animate="float"
        className="w-full lg:w-1/2 h-full flex justify-center items-center order-first lg:order-last mb-8 lg:mb-0"
      >
        <Image
          src="/home/hero.png"
          alt="work icons"
          height={650}
          width={650}
          className="w-auto h-auto max-w-full"
        />
      </motion.div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-5 justify-center text-start order-last lg:order-first -mt-4">
        <motion.div
          className={`
            flex flex-col gap-6 
            font-bold text-white tracking-wider
            ${title.className}
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            max-w-[600px] mx-auto lg:mx-0
          `}
        >
          <span>
            Innovative{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Marketing, AI, and Tech{" "}
            </span>
            Solutions for Unstoppable Growth
          </span>
          <p
            className={`
              text-[#7d8590] font-heading3 
              ${subtitle.className}
              text-base sm:text-lg md:text-xl lg:text-2xl 
              leading-6 sm:leading-8 md:leading-10 lg:leading-[44px]
            `}
          >
            {isClient ? (
              <Typewriter
                options={{
                  strings: [
                    "Partnering with forward-thinking brands to design and scale transformative digital solutions",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            ) : (
              "Partnering with forward-thinking brands..."
            )}
          </p>
          <div className="mt-4">
            <a
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              href=""
              className="border border-neutral-600 copilot rounded-full inline-block"
            >
              <div className="flex items-center p-3 px-5">
                <Image
                  className="w-11 h-11 flex-grow-0 flex-shrink-0 mr-4 sm:mr-6 scale-110"
                  width={44}
                  height={44}
                  loading="lazy"
                  alt=""
                  aria-hidden="true"
                  src=""
                />
                <div className="pr-3 sm:pr-5">
                  <div className="font-medium text-white text-sm sm:text-[16px] leading-5">
                    Explore Our Services
                  </div>
                </div>
                <div className="ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`text-white transition-transform duration-150 ${
                      hovered ? "translate-x-0" : "-translate-x-1"
                    }`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                    ></path>
                    <path
                      className={`transition-opacity duration-150 ${
                        hovered ? "opacity-100" : "opacity-0"
                      }`}
                      stroke="currentColor"
                      d="M1.75 8H11"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
