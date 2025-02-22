'use client'
import React from 'react'

const GlowingButton: React.FC = () => {
  return (
    <button className="group relative mt-2">
      <span className="relative flex items-center justify-center rounded-lg bg-[#0f0123] bg-opacity-30 backdrop-blur-sm hover:bg-[#0f0123] hover:bg-opacity-40 px-4 py-2 leading-none text-sm text-white font-medium transition-all duration-300">
        Apply Here
      </span>
    </button>
  )
}

export default GlowingButton
