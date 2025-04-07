"use client";

import React from "react";
import ToolDataProvider from "./ToolDataProvider";
import {motion} from "framer-motion"
import { heading1, heading2 } from "../../../../fonts/font";

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
        <motion.div 
            className='max-w-[1280px] mx-auto flex flex-col items-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '50px' }}
                transition={{ delay: 0.2 }}
                className="h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"
            ></motion.div>

            <div className='w-full text-center mb-16'>
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    viewport={{ once: false }}
                    className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white"
                >
                    <p className={`text-[#939aff] ${heading1.className}`}>Technologies We Work With</p>
                    <span className={`text-[28px] md:text-[32px] leading-[36px] ${heading2.className}`}>World Class Brands</span>
                </motion.h3>
            </div>

            <div className="w-full flex justify-center">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 max-w-[1000px]">
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

            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100px' }}
                transition={{ delay: 0.2 }}
                className="h-[160px] mt-8 w-[3px] rounded-md bg-transparent"
            ></motion.div>
        </motion.div>
    );
};

export default Tools;

