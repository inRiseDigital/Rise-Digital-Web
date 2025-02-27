"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { fadeIn } from "../../../../utils/motion";

interface InsightCardProps {
  imgUrl: string;
  title: string;
  index: number;
}

const InsightCard = ({ imgUrl, title, index }: InsightCardProps) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <Image
      src={imgUrl}
      alt="planet-01"
      width={270}
      height={250}
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
      </div>

      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white hover:bg-white cursor-pointer group">
        <Image
          src="/arrow.svg"
          alt="arrow"
          width={40}
          height={40}
          className="object-contain group-hover:filter group-hover:invert"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
