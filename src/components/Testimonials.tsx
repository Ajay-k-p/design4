import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from 'lucide-react';
export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const testimonials = [{
    name: 'Ajith',
    role: 'Wedding Client',
    content: 'Absolutely phenomenal! The food was exquisite and the service was impeccable. Our guests are still talking about the amazing meal.',
    rating: 5
  }, {
    name: 'Anshif',
    role: 'Corporate Event Manager',
    content: 'Professional, reliable, and the quality is unmatched. They have catered multiple events for our company and never disappoint.',
    rating: 5
  }, {
    name: 'Sana',
    role: 'Birthday Party Host',
    content: 'From planning to execution, everything was perfect. The team went above and beyond to make our celebration special.',
    rating: 5
  }];
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prev = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 30
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real experiences from satisfied customers
          </p>
        </motion.div>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div key={currentIndex} initial={{
            opacity: 0,
            x: 100
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: -100
          }} transition={{
            duration: 0.5
          }} className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => <StarIcon key={i} className="text-amber-500 fill-amber-500" size={24} />)}
              </div>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </p>
              <div>
                <p className="font-bold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-amber-600">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={prev} className="bg-amber-500 text-white p-3 rounded-full hover:bg-amber-600 transition-colors">
              <ChevronLeftIcon size={24} />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-amber-500' : 'bg-gray-300'}`} />)}
            </div>
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} onClick={next} className="bg-amber-500 text-white p-3 rounded-full hover:bg-amber-600 transition-colors">
              <ChevronRightIcon size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>;
}