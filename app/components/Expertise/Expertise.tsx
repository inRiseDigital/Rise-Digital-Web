'use client'
import React, {useState} from 'react'
import HoverCard from '../Capabilities/HoverCard'
import {motion} from "framer-motion"

type Props = {}

const Expertise = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)
    const [hovered2, setHovered2] = useState<boolean>(false)

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren:0.4,
          },
        },
      };
    
      const item = {
        hidden: { opacity: 0, scale:0.8 },
        show: { opacity: 1, scale:1},
    };
  return (
    <div className='max-w-[1280px] mx-auto'>
        <motion.div className='flex md:pl-7 space-x-3 md:space-x-10'>
            <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} transition={{delay:0.6, type:'tween'}} className='md:w-10/12 mb-24'>
                <h3 className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: '300ms'}}>
                    <p className="text-[#939aff]">Expertise Areas</p>
                    Expansive Expertise Across Industries
                </h3>
            </motion.div>
        </motion.div>
        <HoverCard backgroundColor = '#939aff' direction='' left='0'>
            <div className='flex w-10/12 flex-col mx-auto'>
                <motion.div variants={container} initial='hidden' whileInView='show' className='relative flex text-[17px] flex-col md:flex-row lg:my-10 flex-1 justify-between w-10/12 mx-auto md:gap-10'>
                    <motion.div variants={item} transition={{type:'tween'}} className='animate w-full'>
                        <div className='p-6 md:mt-8 mb-10 box-shadow-mktg-xl rounded-md' style={{background: 'rgba(235, 245, 255, 0.2)'}}>
                            <ul className='-mb-6'>
                                <li className='mb-6 flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <span className="font-medium text-white">Education</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div variants={item} transition={{type:'tween'}} className='animate w-full'>
                        <div className='p-6 md:mt-8 mb-10 box-shadow-mktg-xl rounded-md' style={{background: 'rgba(235, 245, 255, 0.2)'}}>
                            <ul className='-mb-6'>
                                <li className='mb-6 flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <span className="font-medium text-white">Government</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div variants={item} transition={{type:'tween'}} className='animate w-full'>
                        <div className='p-6 md:mt-8 mb-10 box-shadow-mktg-xl rounded-md' style={{background: 'rgba(235, 245, 255, 0.2)'}}>
                            <ul className='-mb-6'>
                                <li className='mb-6 flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <span className="font-medium text-white">Retail</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div variants={item} transition={{type:'tween'}} className='animate w-full'>
                        <div className='p-6 md:mt-8 mb-10 box-shadow-mktg-xl rounded-md' style={{background: 'rgba(235, 245, 255, 0.2)'}}>
                            <ul className='-mb-6'>
                                <li className='mb-6 flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <span className="font-medium text-white">Fitness</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
                </div>
        </HoverCard>
    </div>
  )
}

export default Expertise