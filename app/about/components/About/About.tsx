"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

const Clients = () => {
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <div className="max-w-[1280px] mx-auto">
            <div className='max-w-[1280px] mx-auto relative z-[2]'>
                <div className='flex my-8 md:my-16 sm:my-12 relative md:items-center text-center flex-col'>
                    <div className='py-3 mb-2 flex flex-col justify-center items-center'>
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            viewport={{ once: false }}
                            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
                            style={{ transitionDelay: '300ms' }}
                        >
                            <p className="text-[#939aff]">About Us</p>
                            <span className="text-[28px] md:text-[32px] leading-[36px]">
                                At Rise Digital, we are pioneering the future by delivering cutting-edge AI solutions that transform industries, enhance human lives, and drive sustainability. As the AI powerhouse of Rise Tech Village, under the umbrella of CodeGen, we are committed to ethical innovation, ensuring that artificial intelligence seamlessly integrates with human progress.
                            </span>
                        </motion.h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;