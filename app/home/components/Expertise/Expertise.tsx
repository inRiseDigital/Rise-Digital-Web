'use client'
import React from 'react'
import { motion } from "framer-motion"
import Explore from "./Explore"
import { heading1, heading2 } from "../../../../fonts/font";



type Props = {}

const Expertise = (props: Props) => {
  return (
    <div className='max-w-[1480px] mx-auto'>
      <motion.div className='flex md:pl-7 space-x-3 md:space-x-10'>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, type: 'tween', duration: 0.002 }} // Reduced duration
          className='md:w-10/12 mb-24'
        >
          <h3
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: '300ms' }}
          >
            <p className={`text-[#939aff] ${heading1.className}`}>Expertise Areas</p>
            <span className={`text-[28px] md:text-[32px] leading-[36px] font-heading3 ${heading2.className}`}>Whatever you need we make it happen</span>
          </h3>
        </motion.div>
      </motion.div>
      <Explore />
    </div>
  )
}

export default Expertise
