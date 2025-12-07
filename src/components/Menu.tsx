import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export function Menu() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const packages = [{
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop',
    name: 'Premium Wedding Package',
    description: 'Complete wedding decoration with stage setup, floral arrangements, lighting, and catering for 200+ guests',
    price: ''
  }, {
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
    name: 'Elegant Reception Decor',
    description: 'Sophisticated reception decoration with backdrop, centerpieces, and ambient lighting',
    price: ''
  }, {
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop',
    name: 'Birthday Party Special',
    description: 'Themed birthday decoration with balloon arrangements, backdrop, and catering services',
    price: ''
  }, {
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop',
    name: 'Catering Excellence',
    description: 'Multi-cuisine catering with appetizers, main course, desserts, and beverage service',
    price: ''
  }, {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
    name: 'Corporate Event Package',
    description: 'Professional event setup with stage decoration, seating arrangements, and business lunch catering',
    price: ''
  }, {
    image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=400&fit=crop',
    name: 'Custom Event Design',
    description: 'Personalized decoration and catering tailored to your specific theme and requirements',
    price: ''
  }];
  return <section id="menu" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Our Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive event packages combining decoration and catering
            services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} animate={inView ? {
          opacity: 1,
          scale: 1
        } : {}} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          scale: 1.05
        }} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <motion.img whileHover={{
              scale: 1.1
            }} transition={{
              duration: 0.4
            }} src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-amber-500">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}