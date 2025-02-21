"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

type Props = {};

const Clients = (props: Props) => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "200px" }}
        transition={{ delay: 0.2 }}
        className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"
      ></motion.div>

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
              <p className="text-[#939aff] font-poppins">Our Clients</p>
              <span className="text-[28px] md:text-[32px] leading-[36px]">
                Trust with Reliability and Excellence
              </span>
            </h3>
          </motion.h3>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center max-lg:mt-10">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map((company) => (
              <motion.div
                key={company.id}
                className="flex md:max-w-60 max-w-32 gap-2"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                  width={40}
                  height={40}
                />
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                  height={company.id === 4 || company.id === 5 ? 100 : 150}
                />
              </motion.div>
            ))}
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

export default Clients;
