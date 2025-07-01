'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Developer = () => {
  const skills = [
    'Figma', 
    'UX Research', 
    'Design Systems',
    'User Flows',
    'Wireframing',
    'Prototyping',
    'UI Design',
    'Design Thinking',
    'User Testing',
    'Accessibility',
    'Microinteractions',
    'Design Ops'
  ]

  return (
    <div className="h-[450px] w-full bg-white dark:bg-gray-950 transition-colors duration-500 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 py-8 relative h-full"
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAiLz48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtZGFzaGFycmF5PSIyLDIiPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgweiIvPjwvZz48L3N2Zz4=')]"></div>
        </div>

        {/* Floating design elements */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-indigo-500/30 blur-3xl pointer-events-none"
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute bottom-1/3 -left-20 w-72 h-72 rounded-full bg-pink-500/30 blur-3xl pointer-events-none"
        />

        <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10 h-full">
          {/* Designer Profile - Compact */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              damping: 10,
              stiffness: 100
            }}
            className="w-full lg:w-2/5 relative group h-full"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-xl border-2 border-gray-200/50 dark:border-gray-700/50">
              <Image
                src="/developer.png"
                alt="Senior UI/UX Designer"
                fill
                className="object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/30 to-black/60" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500 bg-[length:200%_100%] group-hover:animate-shine" />
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-4 left-4"
              >
                <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium tracking-wider text-white bg-black/80 backdrop-blur-md rounded-full border border-white/10 shadow">
                  <span className="w-2 h-2 mr-1.5 bg-indigo-400 rounded-full animate-pulse"></span>
                  SENIOR UI/UX DESIGNER
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Designer Content - Compact */}
          <div className="w-full lg:w-3/5 space-y-4 h-full overflow-y-auto">
            <div className="space-y-3">
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  delay: 0.3,
                  type: "spring",
                  damping: 10,
                  stiffness: 100
                }}
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
                  Human-Centered
                </span> Design Specialist
              </motion.h1>
              
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100px' }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-[2px] bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
              />

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  delay: 0.6,
                  type: "spring",
                  damping: 10,
                  stiffness: 100
                }}
                className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl"
              >
                Crafting <span className="font-semibold text-indigo-500 dark:text-indigo-400">exceptional digital experiences</span> through evidence-based design. 
                Specializing in <span className="font-semibold text-pink-500 dark:text-pink-400">complex design systems</span>.
              </motion.p>
            </div>

            {/* Compact Skills Grid */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-3"
            >
              {skills.slice(0, 6).map((skill, index) => (
                <motion.div 
                  key={skill}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: 0.9 + index * 0.03,
                    type: "spring",
                    stiffness: 300
                  }}
                  whileHover={{ 
                    y: -2,
                    scale: 1.02,
                  }}
                  className="relative group"
                >
                  <div className="px-3 py-2 bg-white dark:bg-gray-800/80 rounded-lg text-sm font-medium text-gray-800 dark:text-gray-200 shadow-xs border border-gray-200/70 dark:border-gray-700/50 flex items-center justify-center text-center backdrop-blur-sm">
                    {skill}
                    <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-indigo-400/20 transition-all duration-300 pointer-events-none" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-b-lg" />
                </motion.div>
              ))}
            </motion.div>

            {/* Compact CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <motion.button
                whileHover={{ 
                  y: -2,
                  boxShadow: '0 8px 20px -5px rgba(99, 102, 241, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-medium rounded-lg shadow-md relative overflow-hidden group text-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-sm">✏️</span>
                  Case Studies
                </span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/80 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </motion.button>

              <motion.button
                whileHover={{ 
                  y: -2,
                  boxShadow: '0 8px 20px -5px rgba(236, 72, 153, 0.2)'
                }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 bg-white dark:bg-gray-800/90 text-gray-800 dark:text-white font-medium rounded-lg shadow-md border border-gray-200/80 dark:border-gray-700/50 relative overflow-hidden group backdrop-blur-sm text-sm"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-sm">💬</span>
                  Consultation
                </span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </div>
  )
}

export default Developer