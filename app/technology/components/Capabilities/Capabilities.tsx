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
  <motion.div
    initial={{ height: 0 }}
    whileInView={{ height: '160px' }}
    transition={{ delay: 0.2 }}
    className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"
  ></motion.div>
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
          <p className="text-[#939aff]">Core Technology Services</p>
          <span className="text-[28px] md:text-[32px] leading-[36px]">
            Comprehensive Tech Solutions for Modern Businesses
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
            {/* Wrap first HoverCard with motion.div for hover scale effect */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <HoverCard backgroundColor='#a55eea' direction='flex-col' left='-400px'>
                <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                  <p className="text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                    <span className='text-white font-semibold'>Full-Stack Excellence</span> We deliver scalable, AI-integrated full-stack solutions that enhance user experience and efficiency. Our expertise spans from front-end design to back-end systems, driving innovation and business growth.
                  </p>
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
                    src="https://cdn.prod.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg"
                  />
                </div>
              </HoverCard>
            </motion.div>
            {/* Wrap second HoverCard with motion.div for hover scale effect */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <HoverCard backgroundColor='#a55eea' direction='flex-col' left='0'>
                <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                  <p className="text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                    <span className='text-white font-semibold'>Cloud Computing</span> Empower your business with AI-powered cloud services offering flexibility, scalability, and security. We handle architecture, migration, and management to optimize performance, resource allocation, and threat detection.
                  </p>
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  className='overflow-hidden rounded-s-lg'
                >
                  <img
                    className="w-full h-auto"
                    width="1209"
                    height="890"
                    loading="lazy"
                    decoding="async"
                    alt=""
                    aria-hidden="true"
                    src="https://www.berlinsbi.com/uploads/sites/2/2021/12/5-ways-msc-digital-marketing-will-advance-your-career.jpg"
                  />
                </motion.div>
              </HoverCard>
            </motion.div>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex justify-between md:space-x-10 max-md:flex-col'>
            {/* Wrap third HoverCard with motion.div for hover scale effect */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <HoverCard backgroundColor='#a55eea' direction='flex-col' left='0'>
                <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                  <p className="text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                    <span className='text-white font-semibold'>Data Engineering & BI</span> Transform your data into actionable insights with AI-enhanced data engineering and business intelligence. We integrate multiple data sources to deliver real-time analysis and dashboards for informed decision-making.
                  </p>
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ type: 'tween', duration: 0.3 }}
                  className='overflow-hidden rounded-s-lg'
                >
                  <img
                    className="w-full h-auto"
                    width="1209"
                    height="890"
                    loading="lazy"
                    decoding="async"
                    alt=""
                    aria-hidden="true"
                    src="https://www.berlinsbi.com/uploads/sites/2/2021/12/5-ways-msc-digital-marketing-will-advance-your-career.jpg"
                  />
                </motion.div>
              </HoverCard>
            </motion.div>
            {/* Wrap fourth HoverCard with motion.div for hover scale effect */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <HoverCard backgroundColor='#a55eea' direction='flex-col' left='-400px'>
                <div className='md:flex flex-col flex-1 p-8 sm:p-10 lg:py-16 lg:pl-16 lg:pr-32'>
                  <p className="text-xl md:text-2xl mb-6 font-medium text-[#7d8590]">
                    <span className='text-white font-semibold'>Cybersecurity</span> Safeguard your digital assets with AI-driven cybersecurity solutions that detect threats and respond in real time. Our proactive security frameworks protect your business from evolving risks, ensuring data safety and compliance.
                  </p>
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
                    src="https://cdn.prod.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg"
                  />
                </div>
              </HoverCard>
            </motion.div>
          </div>
        </div>
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





