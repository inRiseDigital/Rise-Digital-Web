'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../../../styles';
import { fadeIn, staggerContainer } from '../../../../utils/motion';

const exploreExpertise = [
  {
    id: 'Education',
    imgUrl: '/home/education.jpg',
    title: 'Education',
    hoveredText: 'Hovered Text for Education',
  },
  {
    id: 'Government',
    imgUrl: '/home/governance.jpg',
    title: 'Government',
    hoveredText: 'Hovered Text for Government',
  },
  {
    id: 'Retail',
    imgUrl: '/home/retail.png',
    title: 'Retail',
    hoveredText: 'Hovered Text for Retail',
  },
  {
    id: 'Finance',
    imgUrl: '/home/finance.png',
    title: 'Finance',
    hoveredText: 'Hovered Text for Finance',
  },
  {
    id: 'Healthcare',
    imgUrl: '/home/health.jpg',
    title: 'Healthcare',
    hoveredText: 'Hovered Text for Healthcare',
  },
];

const ExploreCard = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
  hovered,
  handleHover,
  hoveredText,
}) => {
  const isExpanded = hovered ? id === hovered : id === active;

  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      onMouseEnter={() => handleHover(id)}
      onMouseLeave={() => handleHover(null)}
      onClick={() => handleClick(id)}
      className={`relative ${
        isExpanded ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    >
      <Image
        src={imgUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="rounded-[24px]"
      />

      {hovered === id && (
        <>
          <div className="absolute inset-0 flex items-center justify-center bg-gray-400 bg-opacity-30 text-white p-2 rounded glassmorphism">
            {hoveredText}
          </div>
          <h2 className="absolute bottom-4 left-4 font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </>
      )}

      {isExpanded ? (
        <div>
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          />
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      ) : (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      )}
    </motion.div>
  );
};

const Explore = () => {
  const [active, setActive] = useState('world-2');
  const [hovered, setHovered] = useState(null);

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreExpertise.map((area, index) => (
            <ExploreCard
              key={area.id}
              {...area}
              index={index}
              active={active}
              handleClick={setActive}
              hovered={hovered}
              handleHover={setHovered}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;

