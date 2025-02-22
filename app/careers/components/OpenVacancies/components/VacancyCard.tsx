'use client'
import React from 'react'
import { motion } from 'framer-motion'
import GlowingButton from './GlowingButton'

type Vacancy = {
  title: string
  level: string
  discipline: string
  type: string
}

type VacancyCardProps = {
  vacancy: Vacancy
}

const VacancyCard: React.FC<VacancyCardProps> = ({ vacancy }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="p-4 rounded-lg shadow flex items-center justify-between cursor-pointer bg-white/30 backdrop-blur-md border border-white/10 text-white hover:shadow-[0_0_20px_rgba(162,112,214,0.7)] transition-shadow duration-300"
    >
      <div>
        <h3 className="text-xl font-semibold">{vacancy.title}</h3>
        <p className="opacity-80">{vacancy.discipline}</p>
        <p className="opacity-80">{vacancy.type}</p>
      </div>
      <div className="text-right">
        <p className="font-medium">{vacancy.level}</p>
        <GlowingButton />
      </div>
    </motion.div>
  )
}

export default VacancyCard
