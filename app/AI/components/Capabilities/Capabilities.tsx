'use client'
import React from 'react'
import HoverCard from './HoverCard'
import {motion} from "framer-motion"
import Image from 'next/image'
import { heading1 } from "../../../../fonts/font";


const Capabilities = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <motion.div initial={{height:0}} whileInView={{height:'160px'}} transition={{delay:0.2}}   className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"></motion.div>
            <div className='flex md:pl-10 space-x-3 md:space-x-10'>
                <div className='md:w-10/12 mb-24'>
                    <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }} viewport={{ once: false }} className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{ transitionDelay: '300ms' }}>
                        <h3 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '300ms'}}>
                            <p className={`text-[#939aff] ${heading1.className}`}>Core AI Services</p>
                            <span className="text-[28px] md:text-[32px] leading-[36px] font-heading3">AI solution for every business need</span>
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
                                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-semibold'>Predictive Analytics</span> Stay ahead with AI-powered predictive analytics that forecast trends and future outcomes. Our machine learning models analyze data to optimize sales, inventory, and marketing decisions, ensuring proactive business growth.
                                        </p>
                                    </div>
                                    <div className='overflow-hidden rounded-s-lg'>
                                        <motion.img initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{type:'tween', duration:0.3}} className="w-full h-auto " width="1208" height="764" loading="lazy" decoding="async" alt="" aria-hidden="true" src="/ai/predictive analytics.png" />
                                    </div>
                                </HoverCard>
                                <HoverCard backgroundColor='#ffa28b' direction='flex-col' left='0'>
                                    <div className='md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-semibold'>Intelligent Automation</span> Automate repetitive tasks with AI-driven workflows that enhance accuracy and efficiency. From data entry to customer service, our intelligent automation solutions reduce costs, minimize errors, and boost productivity.</p>
                                    </div>
                                    <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{type:'tween', duration:0.3}} className='overflow-hidden rounded-s-lg'>
                                        <Image className="w-full h-auto" width={1209} height={890} loading="lazy" alt="" aria-hidden="true" src="/ai/intelligentautomation.png" />
                                    </motion.div>
                                </HoverCard>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-between md:space-x-10 max-md:flex-col'>
                                <HoverCard backgroundColor='#ffa28b' direction='flex-col' left='0'>
                                    <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-semibold'>Personalization at Scale</span> Deliver personalized experiences with AI that tailors recommendations and marketing messages. Our solutions analyze customer data to enhance engagement, increase conversions, and build lasting relationships.</p>
                                    </div>
                                    <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{type:'tween', duration:0.3}} className='overflow-hidden rounded-s-lg'>
                                        <Image className="w-full h-auto" width={1209} height={890} loading="lazy" alt="" aria-hidden="true" src="/ai/personalizationatscale.png" />
                                    </motion.div>
                                </HoverCard>
                                <HoverCard backgroundColor='#ffa28b' direction='flex-col' left='-400px'>
                                    <div className='md:flex flex-col  flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32 '>
                                        <p className=" text-xl md:text-2xl mb-6 font-medium text-[#7d8590]"><span className='text-white font-semibold'>AI Chatbots</span> Enhance customer service with AI chatbots that provide instant, 24/7 support. These bots handle inquiries, recommend products, and resolve issues efficiently, improving satisfaction and reducing operational costs.
                                        </p>
                                    </div>
                                    <div className='overflow-hidden rounded-s-lg'>
                                        <motion.img initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{type:'tween', duration:0.3}} className="w-full h-auto " width="1208" height="764" loading="lazy" decoding="async" alt="" aria-hidden="true" src="/ai/chatbot.png" />
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





