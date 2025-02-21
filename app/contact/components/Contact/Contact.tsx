"use client";
import React, { useState } from "react";
import HoverCard from "./ContactCard";
import { motion } from "framer-motion";
import { Send, Phone, MapPin } from "lucide-react";

type Props = {};

type Direction = "up" | "down" | "left" | "right";

const FadeIn = (direction: Direction, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

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
              <p className="text-[#939aff]">Tell Us About Your Project</p>
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
                        <Send
                          className={`ml-2 transition ease-in duration-150 ${
                            hovered ? "translate-x-2" : "-translate-x-0"
                          }`}
                          size={20}
                          color="currentColor"
                        />
                      </a>
                    </div>
                  </motion.form>
                </div>
              </div>
            </HoverCard>
            <HoverCard backgroundColor="#ffa28b" direction="" left="">
              <div className="md:flex flex-col md:space-y-20 flex-1 py-0 p-10  justify-between">
                <div className="px6 container flex flex-col justify-between py-1 text-lg md:flex-row">
                  <motion.div
                    variants={FadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }}
                    className="flex flex-col gap-8 p-10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#939aff] p-4">
                        <Send size={24} color="white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-white">
                          Email
                        </h4>
                        <a
                          href="mailto:info@risedigital.com"
                          className="text-gray-400 hover:text-[#939aff]"
                        >
                          info@risedigital.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#939aff] p-4">
                        <Phone size={24} color="white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-white">
                          Phone
                        </h4>
                        <a
                          href="tel:+1234567890"
                          className="text-gray-400 hover:text-[#939aff]"
                        >
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-[#939aff] p-4">
                        <MapPin size={24} color="white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-medium text-white">
                          Location
                        </h4>
                        <p className="text-gray-400">
                          123 Business Street, New York, NY 10001
                        </p>
                      </div>
                    </div>
                  </motion.div>
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
