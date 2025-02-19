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
const Capabilities = (props: Props) => {

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
                      placeholder="your name "
                      required
                      className="w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50 focus:border-blue/25"
                    />
                    <input
                      type="text"
                      placeholder="subject "
                      required
                      className="w-full border-b border-white/25 bg-transparent py-3 outline-none transition-all placeholder:text-white/50 focus:border-blue/25"
                    />
                    <textarea
                      name="message"
                      id="message"
                      className="mb-12 w-full resize-none border-b border-white/25 bg-transparent py-12 outline-none transition-all placeholder:text-white/50 focus:border-blue/25"
                    ></textarea>
                    <button className="w-50 mt-12 flex items-center justify-between gap-x-2 rounded-full bg-blue px-4 py-3 transition-all duration-300 hover:bg-lighted hover:text-secondary hover:transition-all">
                      <p className="text-md capitalize"> Send Messsage</p>
                      <Send className="h-5 w-5" />
                    </button>
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

export default Capabilities;
