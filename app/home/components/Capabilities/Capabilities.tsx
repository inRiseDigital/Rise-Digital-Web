'use client'
import React, { useState } from 'react'
import HoverCard from './HoverCard'
import { motion } from "framer-motion"
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Capabilities = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)
    const [hovered2, setHovered2] = useState<boolean>(false)

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: .1,
            },
        },
    };

    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='flex md:pl-10 space-x-3 md:space-x-10'>
                <div className='md:w-10/12 mb-24'>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        viewport={{ once: false }}
                        className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
                        style={{ transitionDelay: '300ms' }}
                    >
                        <h3
                            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
                            style={{ transitionDelay: '300ms' }}
                        >
                            <p className="text-[#939aff] font-heading2">Your Strategic Digital Partner</p>
                            <span className="text-[28px] md:text-[32px] leading-[36px] font-heading3">
                                Design, Marketing, AI Solutions, Technology
                            </span>
                        </h3>
                    </motion.h3>
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <div className="flex flex-col items-center max-lg:mt-10">
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-between md:space-x-10 max-md:flex-col'>
                                {/* Wrap each HoverCard with motion.div to apply hover scale effect (scale to 1.05) */}
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <HoverCard backgroundColor='#a55eea' direction='flex-col' left='-400px'>
                                        <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                                            <p className="text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                                                <span className='text-white font-semibold'>Artificial Intelligence</span> AI Solutions That Redefine Possibilities.
                                            </p>
                                            <div>
                                                <Link href="/ai" passHref legacyBehavior>
                                                    <a
                                                        onMouseEnter={() => setHovered1(true)}
                                                        onMouseLeave={() => setHovered1(false)}
                                                        href=""
                                                        className='py-1 inline-block text-xl text-white font-semibold'
                                                    >
                                                        Discover
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className={`mb-[2px] text-white transition inline-block ml-3 ease-in duration-300 ${hovered1 ? "translate-x-0" : "-translate-x-1"}`}
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
                                                                className={`text-white transition ease-in duration-150 ${hovered1 ? "opacity-100" : "opacity-0"}`}
                                                                stroke="currentColor"
                                                                d="M1.75 8H11"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                            ></path>
                                                        </svg>
                                                        <div className={`${hovered1 ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='overflow-hidden rounded-s-lg'>
                                            <motion.img
                                                initial={{ y: 20, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{ type: 'tween', duration: 0.3 }}
                                                className="w-full h-auto"
                                                width="1208"
                                                height="764"
                                                loading="lazy"
                                                decoding="async"
                                                alt=""
                                                aria-hidden="true"
                                                src="./home/ai.jpg"
                                            />
                                        </div>
                                    </HoverCard>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                                    <HoverCard backgroundColor='#a55eea' direction='flex-col' left='0'>
                                        <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                                            <p className="text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                                                <span className='text-white font-semibold'>Marketing</span> Strategies That Speak. Marketing That Converts.
                                            </p>
                                            <div>
                                                <Link href="/marketing" passHref legacyBehavior>
                                                    <a
                                                        onMouseEnter={() => setHovered(true)}
                                                        onMouseLeave={() => setHovered(false)}
                                                        href=""
                                                        className='py-1 inline-block text-xl text-white font-semibold'
                                                    >
                                                        Discover
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className={`mb-[2px] text-white transition inline-block ml-3 ease-in duration-300 ${hovered ? "translate-x-0" : "-translate-x-1"}`}
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
                                                                className={`text-white transition ease-in duration-150 ${hovered ? "opacity-100" : "opacity-0"}`}
                                                                stroke="currentColor"
                                                                d="M1.75 8H11"
                                                                strokeWidth="1.5"
                                                                strokeLinecap="round"
                                                            ></path>
                                                        </svg>
                                                        <div className={`${hovered ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <motion.div
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ type: 'tween', duration: 0.3 }}
                                            className='overflow-hidden rounded-s-lg'
                                        >
                                            <Image
                                                className="w-full h-auto"
                                                width={1209}
                                                height={890}
                                                alt=""
                                                aria-hidden="true"
                                                src="/home/technology.png"
                                            />
                                        </motion.div>
                                    </HoverCard>
                                </motion.div>
                            </div>
                        </div>

                        {/* The third HoverCard */}
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                            <HoverCard backgroundColor='#a55eea' direction='' left=''>
                                <div className='md:flex flex-col md:space-y-20 flex-1 py-20 p-10 justify-between'>
                                    <p className="text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                                        <span className='text-white font-medium'>Technology</span> Innovative Technology Solutions for a Connected World
                                    </p>
                                    <div>
                                        <Link href="/technology" passHref legacyBehavior>
                                            <a
                                                onMouseEnter={() => setHovered2(true)}
                                                onMouseLeave={() => setHovered2(false)}
                                                href=""
                                                className='py-1 inline-block text-xl text-white font-semibold'
                                            >
                                                Discover
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`mb-[2px] text-white transition inline-block ml-3 ease-in duration-300 ${hovered2 ? "translate-x-0" : "-translate-x-1"}`}
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
                                                        className={`text-white transition ease-in duration-150 ${hovered2 ? "opacity-100" : "opacity-0"}`}
                                                        stroke="currentColor"
                                                        d="M1.75 8H11"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                    ></path>
                                                </svg>
                                                <div className={`${hovered2 ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className='overflow-hidden rounded-s-lg'>
                                    <motion.img
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ type: 'tween', duration: 0.3 }}
                                        className="w-full h-auto"
                                        width="600"
                                        height="250"
                                        loading="lazy"
                                        decoding="async"
                                        alt=""
                                        aria-hidden="true"
                                        src="/home/marketing.png"
                                    />
                                </div>
                            </HoverCard>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '160px' }}
                transition={{ delay: 0.2 }}
                className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"
            ></motion.div>
        </div>
    )
}

export default Capabilities;





