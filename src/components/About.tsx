import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div ref={ref} initial={{
          opacity: 0,
          x: -50
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8
        }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About FM Event Planners
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              FM Event Planners (Flavour Makers Event Management) is your trusted
              partner for creating memorable events. We specialize in wedding
              decorations, event setup, and comprehensive catering services that
              bring your vision to life.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our experienced team combines creative decoration expertise with
              culinary excellence to deliver events that exceed expectations.
              From intimate gatherings to grand celebrations, we handle every
              detail with precision and care.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8
        }} className="grid grid-cols-2 gap-4">
            <motion.img whileHover={{
            scale: 1.05
          }} src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=500&fit=crop" alt="Wedding decoration" className="rounded-2xl shadow-lg object-cover h-full" />
            <motion.img whileHover={{
            scale: 1.05
          }} src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=500&fit=crop" alt="Event setup" className="rounded-2xl shadow-lg object-cover h-full mt-8" />
          </motion.div>
        </div>
      </div>
    </section>;
}
