'use client'
import React, {useState} from 'react'
import HoverCard from './HoverCard'
import {motion} from "framer-motion"
import Link from 'next/link'

type Props = {}

const Capabilities = (props: Props) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren:.1,
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0, y:40 },
        show: { opacity: 1, y:0},
    };
    return (
        <div className='max-w-[1280px] mx-auto'>
            <motion.div initial={{height:0}} whileInView={{height:'160px'}} transition={{delay:0.2}}   className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"></motion.div>
            <div className='flex md:pl-10 space-x-3 md:space-x-10'>
                <div className='md:w-10/12 mb-24'>
                    <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }} viewport={{ once: false }} className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{ transitionDelay: '300ms' }}>
                        <h3 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '300ms'}}>
                            <p className="text-[#939aff]">Core Marketing Services</p>
                            Comprehensive Marketing Solutions for Every Goal
                        </h3>
                    </motion.h3>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className="flex flex-col items-center max-lg:mt-10">
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-between md:space-x-10 max-md:flex-col'>
                                <HoverCard backgroundColor='#ffa28b' direction='flex-col' left='-400px'>
                                    <div className='md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-semibold'>Go-to-Market Strategies</span> AI Solutions That Redefine Possibilities.</p>
                                    </div>
                                    <div className='overflow-hidden rounded-s-lg'>
                                    <motion.img initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{type:'tween', duration:0.3}} className="w-full h-auto " width="1208" height="764" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://cdn.prod.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg" />
                                    </div>
                                </HoverCard>
                                <HoverCard backgroundColor='#ffa28b' direction='flex-col' left='0'>
                                    <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-semibold'>Performance Marketing</span> Strategies That Speak. Marketing That Converts.</p>
                                    </div>
                                    <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{type:'tween', duration:0.3}} className='overflow-hidden rounded-s-lg'>
                                        <img className="w-full h-auto" width="1209" height="890" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://www.berlinsbi.com/uploads/sites/2/2021/12/5-ways-msc-digital-marketing-will-advance-your-career.jpg" />
                                    </motion.div>
                                </HoverCard>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-between md:space-x-10 max-md:flex-col'>
                                <HoverCard backgroundColor='#ffa28b' direction='flex-col' left='0'>
                                    <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-semibold'>Content That Captivates</span> Strategies That Speak. Marketing That Converts.</p>
                                    </div>
                                    <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{type:'tween', duration:0.3}} className='overflow-hidden rounded-s-lg'>
                                        <img className="w-full h-auto" width="1209" height="890" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://www.berlinsbi.com/uploads/sites/2/2021/12/5-ways-msc-digital-marketing-will-advance-your-career.jpg" />
                                    </motion.div>
                                </HoverCard>
                                <HoverCard backgroundColor='#ffa28b' direction='flex-col' left='-400px'>
                                    <div className='md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-semibold'>Marketing Automation</span> AI Solutions That Redefine Possibilities.</p>
                                    </div>
                                    <div className='overflow-hidden rounded-s-lg'>
                                    <motion.img initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{type:'tween', duration:0.3}} className="w-full h-auto " width="1208" height="764" loading="lazy" decoding="async" alt="" aria-hidden="true" src="https://cdn.prod.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg" />
                                    </div>
                                </HoverCard>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        <motion.div initial={{height:0}} whileInView={{height:'160px'}} transition={{delay:0.2}}   className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"></motion.div>
    </div>
  )
}

export default Capabilities;





