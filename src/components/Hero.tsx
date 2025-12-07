import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
export function Hero() {
  return <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&h=1080&fit=crop" alt="Wedding decoration" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.1
        }} className="mb-6">
            <img src="/FM.jpg" alt="FM Event Planners Logo" className="h-32 w-32 mx-auto object-contain"  style={{borderRadius:"50%",}} />
          </motion.div>
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="text-5xl md:text-7xl font-bold text-white mb-6">
            Creating Unforgettable Moments
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8">
            Expert Event Decoration & Catering Services for Your Special Day
          </motion.p>
          <motion.button
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.7 }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
  className="bg-amber-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transition-colors shadow-xl"
>
  Plan Your Event
</motion.button>

        </div>
      </div>

      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }}>
          <ChevronDownIcon className="text-white" size={40} />
        </motion.div>
      </motion.div>
    </section>;
}