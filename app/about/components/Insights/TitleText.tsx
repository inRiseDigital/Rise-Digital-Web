'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../../../../utils/motion';

interface TitleTextProps {
  title: string;
  textStyles?: string;
}

export const TitleText = ({ title, textStyles }: TitleTextProps) => (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
    >
      {title}
    </motion.h2>
  );