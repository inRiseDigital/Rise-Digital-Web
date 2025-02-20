"use client";
import React, { useState } from "react";
import HoverCard from "./ContactCard";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import FadeIn from "../../lib/variants";

type Props = {};

/**
 * A component that displays a contact section with a form and a hover card.
 *
 * @returns A JSX element representing the contact section.
 */
const Contact = (props: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex md:pl-10 space-x-3 md:space-x-10">
        <div className="md:w-10/12 mb-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <h3
              className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
              style={{ transitionDelay: "300ms" }}
            >
              <p className="text-[#939aff]">Your Strategic Digital Partner</p>
              Design, Marketing, AI Solutions, Technology
            </h3>
          </motion.h3>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center max-lg:mt-10">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 w-full ">
            <HoverCard backgroundColor="#ffa28b" direction="" left="">
              <div className="md:flex flex-col md:space-y-20 flex-1 py-0 p-10  justify-between">
                <div className="px6 container flex flex-col justify-between py-1 text-lg md:flex-row">
                  <motion.div
                    variants={FadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }}
                    className="mb-12 mr-6 flex items-center py-6"
                  >
                    <h1 className="text-[40px] font-bold uppercase leading-[3rem] text-white">
                      let&apos;s work <br />{" "}
                      <span className="under-line">together</span>
                    </h1>
                  </motion.div>
                  <motion.form
                    variants={FadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }}
                    className="flex max-w-3xl flex-1 flex-col items-start gap-y-8 rounded-md bg-secondary/80 p-10"
                  >
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/10 focus:border-blue/25 text-white"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/10 focus:border-blue/25 text-white"
                    />
                    <input
                      type="text"
                      placeholder="Company Name "
                      required
                      className="w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/10 focus:border-blue/25 text-white"
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      required
                      className="w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/10 focus:border-blue/25 text-white"
                    />
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Project Description"
                      className="mb-12 w-full resize-none border-b border-white/25 bg-transparent py-12 outline-none transition-all placeholder:text-white/10 focus:border-blue/25 text-white"
                    ></textarea>
                    <div className="lg:ml-5 flex items-center justify-center lg:space-x-5 max-lg:space-y-3 max-lg:flex-col max-lg:w-full max-lg:mt-5">
                      <a
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        href=""
                        className="flex items-center text-white font-bold justify-center space-x-2 text-[20px]  border-[1px] border-neutral-500 px-4 py-3 rounded-md"
                      >
                        Submit Your Inquiry
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={` ml-2 transition ease-in duration-150 ${
                            hovered ? "translate-x-2 " : "-translate-x-0"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            fill="currentColor"
                            d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                          ></path>
                          <path
                            className={` text-white transition ease-in duration-150 origin-right ${
                              hovered ? " opacity-100" : "opacity-0 "
                            }`}
                            stroke="currentColor"
                            d="M1.75 8H11"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </motion.form>
                </div>
              </div>
            </HoverCard>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "160px" }}
        transition={{ delay: 0.2 }}
        className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"
      ></motion.div>
    </div>
  );
};

export default Contact;
