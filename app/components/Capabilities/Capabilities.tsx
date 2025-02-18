'use client'
import React, {useState} from 'react'
import HoverCard from './HoverCard'
import {motion} from "framer-motion"

type Props = {}

const Capabilities = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false);
    const [hovered1, setHovered1] = useState<boolean>(false);
    const [hovered2, setHovered2] = useState<boolean>(false);

    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='flex md:pl-10 space-x-3 md:space-x-10'>
                <div className='md:w-10/12 mb-24'>
                    <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }} viewport={{ once: false }} className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{ transitionDelay: '300ms' }}>
                        <span className="text-[#939aff]">Our Capabilities</span>
                    </motion.h3>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex justify-between md:space-x-10 max-md:flex-col'>
                    {/* HoverCard 1 */}
                    <HoverCard backgroundColor='#939aff' direction='flex-col' left='0'>
                        <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                            <p className="text-xl md:text-2xl mb-6 font-medium text-[#F8FAFC]">
                                <span className="text-white font-semibold block">Marketing</span>Strategic Solutions That Resonate Deeply, Captivate Audiences, and Inspire Action—Marketing That Engages Emotionally, Persuades Effectively, and Converts with Impact.
                            </p>
                            <div>
                                <a onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} href="" className='md:text-xl text-white font-semibold inline-block'>
                                    Discover
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`text-white transition inline-block ml-3 ease-in duration-300 mb-[3px] ${hovered ? "translate-x-0" : "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none">
                                        <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                                        <path className={`text-white transition ease-in duration-150 ${hovered ? "opacity-100" : "opacity-0"}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path>
                                    </svg>
                                    <div className={` ${hovered ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
                                </a>
                            </div>
                        </div>
                    </HoverCard>

                    {/* HoverCard 2 */}
                    <HoverCard backgroundColor='#939aff' direction='flex-col' left='-400px'>
                        <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                            <p className="text-xl md:text-2xl mb-6 font-medium text-[#F8FAFC]">
                                <span className="text-white font-semibold block">AI Solutions</span>AI-driven solutions that push boundaries, spark innovation, and deliver strategic marketing that emotionally engages, influences, and converts effectively.
                            </p>
                            <div>
                                <a onMouseEnter={() => setHovered1(true)} onMouseLeave={() => setHovered1(false)} href="" className='md:text-xl text-white font-semibold inline-block'>
                                    Discover
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`text-white transition inline-block ml-3 ease-in duration-300 mb-[3px] ${hovered1 ? "translate-x-0" : "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none">
                                        <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                                        <path className={`text-white transition ease-in duration-150 ${hovered1 ? "opacity-100" : "opacity-0"}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path>
                                    </svg>
                                    <div className={` ${hovered1 ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
                                </a>
                            </div>
                        </div>
                    </HoverCard>
                    {/* HoverCard 3 */}
                    <HoverCard backgroundColor='#939aff' direction='flex-col' left='-400px'>
                        <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                            <p className="text-xl md:text-2xl mb-6 font-medium text-[#F8FAFC]">
                                <span className="text-white font-semibold block">Technology</span>Pioneering and Innovative Technology Solutions Designed to Empower Businesses, Enhance Connectivity, and Transform the Way the World Interacts and Operates.
                            </p>
                            <div>
                                <a onMouseEnter={() => setHovered2(true)} onMouseLeave={() => setHovered2(false)} href="" className='md:text-xl text-white font-semibold inline-block'>
                                    Discover
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`text-white transition inline-block ml-3 ease-in duration-300 mb-[3px] ${hovered2 ? "translate-x-0" : "-translate-x-1"}`} width="20" height="20" viewBox="0 0 16 16" fill="none">
                                        <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
                                        <path className={`text-white transition ease-in duration-150 ${hovered2 ? "opacity-100" : "opacity-0"}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path>
                                    </svg>
                                    <div className={` ${hovered2 ? "w-11/12 scale-100" : "w-0 scale-0"} origin-left transition ease-in duration-300 h-[2.5px] bg-white rounded-full`}></div>
                                </a>
                            </div>
                        </div>
                    </HoverCard>
                </div>
            </div>
        </div>
    );
};

export default Capabilities;


