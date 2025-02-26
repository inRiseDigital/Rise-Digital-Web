'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import FilterArea from './components/FilterArea'
import VacancyCard from './components/VacancyCard'

type Vacancy = {
  title: string
  level: string
  discipline: string
  type: string
}

const OpenVacancies = () => {
  // Example vacancy data
  const vacancies: Vacancy[] = [
    {
      title: 'Software Engineer',
      level: 'Junior',
      discipline: 'Software Engineering',
      type: 'Full Time',
    },
    {
      title: 'Senior Engineer – Data Engineering (Cyber Analytics & BI)',
      level: 'Mid-Senior',
      discipline: 'Data Engineering',
      type: 'Full Time',
    },
    {
      title: 'Senior Associate / Associate – Talent Acquisition',
      level: 'Associate',
      discipline: 'Talent Acquisition',
      type: 'Full Time',
    },
  ]

  // Updated available filters based on disciplines provided
  const availableFilters = [
    'Development Specialist',
    'Web Development Lead',
    'UI/UX Designer',
    'Frontend Developer',
    '3D Artist',
    'Backend Developer',
    'HR, Quality Analyst, Marketing',
    'Machine Learning Engineer',
  ]

  // State to hold selected filters.
  // When no filter is selected, "All" is considered active.
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  // State to control the filter area visibility on mobile
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)

  // Handler for toggling individual filters
  const handleFilterChange = (discipline: string) => {
    setSelectedFilters((prev) => {
      if (prev.includes(discipline)) {
        return prev.filter((f) => f !== discipline)
      } else {
        return [...prev, discipline]
      }
    })
  }

  // Handler for toggling "All" filter
  const handleAllChange = (checked: boolean) => {
    if (checked) {
      setSelectedFilters([])
    }
  }

  // Filter vacancies: if no filter is selected, show all vacancies
  const filteredVacancies = selectedFilters.length
    ? vacancies.filter((vacancy) =>
        selectedFilters.includes(vacancy.discipline)
      )
    : vacancies

  // Framer Motion Variants for animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 bg-transparent min-h-screen">
      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-6 text-white text-center md:text-left">
        Open Vacancies
      </h2>

      {/* Mobile Filter Toggle Button */}
      <div className="md:hidden mb-4 flex justify-center">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-purple-700 text-white rounded transition-colors duration-300"
        >
          {/* Filter Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
          </svg>
          Filters
        </button>
      </div>

      {/* Main Layout: Sidebar + Vacancy Cards List */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filter Area - hidden on mobile if not toggled, always visible on md */}
        <aside className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-1/3`}>
          <FilterArea
            availableFilters={availableFilters}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            onAllChange={handleAllChange}
          />
        </aside>

        {/* Vacancy Cards List */}
        <motion.div
          className="w-full md:flex-1 space-y-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredVacancies.length ? (
            filteredVacancies.map((vacancy, index) => (
              <motion.div key={index} variants={item}>
                <VacancyCard vacancy={vacancy} />
              </motion.div>
            ))
          ) : (
            <div className="flex items-center justify-center h-full min-h-[200px]">
              <p className="text-white text-center text-2xl font-bold">
                No vacancies match the selected filters.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default OpenVacancies
