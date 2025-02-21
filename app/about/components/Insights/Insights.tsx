"use client";

import { motion } from "framer-motion";

import styles from "../../../../styles";
import { staggerContainer } from "../../../../utils/motion";
import InsightCard from "./InsightCard";


const insights = [
  {
    imgUrl: "/about/spirituality.png",
    title: "Spirituality – Nurturing the Mind and Soul",
    subtitle:
      "We promote a balanced life by integrating meditation and mindfulness practices into daily work routines.",
  },
  {
    imgUrl: "/planet-07.png",
    title: "AI Technology – Driving the Digital Transformation",
    subtitle:
      "Rise Digital is the AI powerhouse of Rise Tech Village, delivering cutting-edge AI solutions, technology, and marketing services.",
  },
  {
    imgUrl: "/planet-08.png",
    title: "Agriculture – Sustainability and Innovation",
    subtitle:
      "We integrate AI-driven smart agriculture to optimize farming, increase yields, and enhance sustainability.",
  },
];


const Insights = () => (
    <div className="max-w-[1280px] mx-auto">
        <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "160px" }}
            transition={{ delay: 0.2 }}
            className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"
        ></motion.div>
        <div className="flex md:pl-10 space-x-3 md:space-x-10">
            <div className="md:w-10/12 mb-10">
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    viewport={{ once: false }}
                    className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
                    style={{ transitionDelay: "300ms" }}
                >
                    <p className="text-[#939aff]">The Rise Tech Village: A Hub of Innovation</p>
                    <span className="text-[28px] md:text-[32px] leading-[36px]">
                        AI solution for every business need
                    </span>
                </motion.h3>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <div className="flex flex-col items-center max-lg:mt-10">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                    <section className={`${styles.paddings} relative z-10`}>
                        <motion.div
                            variants={staggerContainer(0.1, 0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.25 }}
                            className={`${styles.innerWidth} mx-auto flex flex-col`}
                        >
                            <div className="mt-[10px] flex flex-col gap-[30px]">
                                {insights.map((item, index) => (
                                    <InsightCard
                                        key={`insight-${index}`}
                                        {...item}
                                        index={index + 1}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </section>
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

export default Insights;
