'use client';

import { motion } from 'framer-motion';
import styles from "../../../../styles";
import { slideIn, staggerContainer, textVariant } from "../../../../utils/motion"

const Hero = () => (
  <div className="relative max-w-[1750px] lg:pt-20 md:px-6 mx-auto pt-10 flex items-center justify-between">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <img
            src="/cover.png"
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20">
            <h1 className="text-white text-4xl md:text-6xl font-bold">AI Solutions That Redefine Possibilities</h1>
            
            <p className="text-[#939aff] text-lg md:text-2xl mt-4">Empowering businesses with intelligent tools, predictive analytics, and automation to unlock new growth opportunities.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
);

export default Hero;