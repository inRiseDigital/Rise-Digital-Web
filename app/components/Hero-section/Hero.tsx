'use client'
import React, { useState } from 'react'
import Earth from './Earth1'
import Earth2 from './Earth2'

type Props = {}

const Hero = (props: Props) => {
    const [hovered, setHovered] = useState<boolean>(false)

    return (
        <div className="relative max-w-[1280px] lg:pt-32 md:px-10 mx-auto pt-16 flex items-center justify-between">
            {/* Earth Component - FULLY Visible in the Left Corner */}
            <div className="relative w-[50%] max-w-[600px]">
                <div className="max-sm:hidden w-full">
                    <Earth />
                </div>
                <div className="sm:hidden w-full">
                    <Earth2 />
                </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="w-[50%] text-right pr-4 md:pr-12">
                <h1 className="text-[48px] md:text-[72px] lg:text-[80px] font-semibold text-white leading-tight">
                    Innovative Marketing, AI, and Technology Solutions for Unstoppable Growth
                </h1>
                <p className="text-[24px] md:text-[28px] lg:text-[32px] leading-[30px] md:leading-[36px] lg:leading-[44px] mt-4 text-[#7d8590]">
                    Partnering with forward-thinking brands to design and scale transformative digital solutions
                </p>
                <div className="mt-8">
                    <a
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        href=""
                        className="border-[1px] border-neutral-600 copilot rounded-full inline-block"
                    >
                        <div className="flex items-center p-3 px-5">
                            <img
                                className="d-block w-auto flex-grow-0 flex-shrink-0 mr-6 max-md:mr-3 scale-110"
                                width="44"
                                height="44"
                                loading="lazy"
                                decoding="async"
                                alt=""
                                aria-hidden="true"
                                src=""
                            />
                            <div className="md:pr-5 pr-3 md:mr-2 md:pl-2">
                                <div className="font-medium text-white text-[16px] max-md:text-[14px] leading-5">
                                    Explore Our Services
                                </div>
                            </div>
                            <div className="ml-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`text-white transition ease-in duration-150 ${
                                        hovered ? 'translate-x-0 ' : '-translate-x-1'
                                    }`}
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                                    ></path>
                                    <path
                                        className={`text-white transition ease-in duration-150 ${
                                            hovered ? ' opacity-100' : 'opacity-0 '
                                        }`}
                                        stroke="currentColor"
                                        d="M1.75 8H11"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero