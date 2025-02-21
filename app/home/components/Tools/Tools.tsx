"use client";

import React from "react";
import ToolDataProvider from "./ToolDataProvider";
import {motion} from "framer-motion"

  
const Tool_data = [
{
    tool_name: "Java Script",
    Image: "/home/js.png",
    width: 65,
    height: 65,
},
{
    tool_name: "Python",
    Image: "/home/python.png",
    width: 65,
    height: 65,
},
{
    tool_name: "Java",
    Image: "/home/java.png",
    width: 65,
    height: 65,
},
{
    tool_name: "Node js",
    Image: "/home/node-js.png",
    width: 65,
    height: 65,
},
{
    tool_name: "React",
    Image: "/home/react.png",
    width: 65,
    height: 65,
},
{
    tool_name: "Angular",
    Image: "/home/angular.png",
    width: 80,
    height: 80,
},
{
    tool_name: "Mongo db",
    Image: "/home/mongodb.png",
    width: 40,
    height: 40,
},
{
    tool_name: "Postger SQL",
    Image: "/home/postger.png",
    width: 70,
    height: 70,
},
{
    tool_name: "My SQL",
    Image: "/home/mysql.png",
    width: 70,
    height: 70,
},
{
    tool_name: "AWS",
    Image: "/home/aws.png",
    width: 70,
    height: 70,
},
{
    tool_name: "GCP",
    Image: "/home/gcp.png",
    width: 70,
    height: 70,
},
{
    tool_name: "Azure",
    Image: "/home/azure.png",
    width: 70,
    height: 70,
}
];

    
const Tools = () => {
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
          <p className="text-[#939aff]">Technologies We Work With</p>
          <span className="text-[28px] md:text-[32px] leading-[36px]">World Class Brands</span>
        </h3>
      </motion.h3>
    </div>
  </div>
  <div className='flex justify-between items-center'>
    <div className="flex flex-col items-center max-lg:mt-10">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
        {Tool_data.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.3 }}
          >
            <ToolDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          </motion.div>
        ))}
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

    );
};

export default Tools;

