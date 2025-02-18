"use client";

import React from "react";
import ToolDataProvider from "./ToolDataProvider";
import {motion} from "framer-motion"

  
const Tool_data = [
{
    tool_name: "Java Script",
    Image: "/js.png",
    width: 65,
    height: 65,
},
{
    tool_name: "Python",
    Image: "/python.png",
    width: 65,
    height: 65,
},
{
    tool_name: "Java",
    Image: "/java.png",
    width: 65,
    height: 65,
},
{
    tool_name: "Node js",
    Image: "/node-js.png",
    width: 65,
    height: 65,
},
{
    tool_name: "React",
    Image: "/react.png",
    width: 65,
    height: 65,
},
{
    tool_name: "Angular",
    Image: "/angular.png",
    width: 80,
    height: 80,
},
{
    tool_name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
},
{
    tool_name: "Postger SQL",
    Image: "/postger.png",
    width: 70,
    height: 70,
},
{
    tool_name: "My SQL",
    Image: "/mysql.png",
    width: 70,
    height: 70,
},
{
    tool_name: "AWS",
    Image: "/aws.png",
    width: 70,
    height: 70,
},
{
    tool_name: "GCP",
    Image: "/gcp.png",
    width: 70,
    height: 70,
},
{
    tool_name: "Azure",
    Image: "/azure.png",
    width: 70,
    height: 70,
}
];

    
const Tools = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='flex md:pl-10 space-x-3 md:space-x-10'>
                <div className='md:w-10/12 mb-24'>
                    <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.3 }} viewport={{ once: false }} className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate" style={{ transitionDelay: '300ms' }}>
                        <span className="text-[#939aff]">Technologies We Work With</span>
                    </motion.h3>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className="flex flex-col items-center max-lg:mt-10">
                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                        {Tool_data.map((image, index) => (
                            <ToolDataProvider
                                key={index}
                                src={image.Image}
                                width={image.width}
                                height={image.height}
                                index={index}
                            />
                        ))}
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default Tools;

