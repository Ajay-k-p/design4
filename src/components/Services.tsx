import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HeartIcon,
  SparklesIcon,
  CakeIcon,
  BriefcaseIcon,
  UtensilsIcon,
  PaletteIcon,
  MapPinIcon,
  FlowerIcon,
  UsersIcon
} from 'lucide-react';

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: <HeartIcon size={40} />,
      title: 'Wedding Planning',
      description: 'Complete wedding planning from concept to execution for your perfect day.'
    },
    {
      icon: <MapPinIcon size={40} />,
      title: 'Destination Wedding',
      description: 'Luxury destination wedding arrangements with travel, decor, and coordination.'
    },
    {
      icon: <SparklesIcon size={40} />,
      title: 'Stage Decor',
      description: 'Stylish stage setups with lighting and themed decorations.'
    },
    {
      icon: <FlowerIcon size={40} />,
      title: 'Haldi Bridal Shower',
      description: 'Traditional Haldi and bridal shower decor with vibrant styling.'
    },
    {
      icon: <UsersIcon size={40} />,
      title: 'Groom to be & Bride to be',
      description: 'Bachelor and bachelorette party decorations and surprise setups.'
    },
    {
      icon: <CakeIcon size={40} />,
      title: 'Birthday Decor',
      description: 'Custom birthday party decor for kids and adults with creative themes.'
    },
    {
      icon: <BriefcaseIcon size={40} />,
      title: 'Inauguration Decor',
      description: 'Professional décor for business launches and store openings.'
    },
    {
      icon: <PaletteIcon size={40} />,
      title: 'Social Events',
      description: 'Decoration services for social functions and special gatherings.'
    },
    {
      icon: <UtensilsIcon size={40} />,
      title: 'Catering Service',
      description: 'Delicious catering with customizable menus for all events.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            OUR SERVICES...
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wedding & Event Decoration • Catering Services • Destination Weddings
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-neutral-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="text-amber-500 mb-6"
              >
                {service.icon}
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}