import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  InstagramIcon,
  ExternalLinkIcon,
  ArrowRightIcon
} from 'lucide-react';

export function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Let's Create Something <span className="text-amber-600">Beautiful</span>
          </motion.h2>
          <motion.div variants={itemVariants} className="h-1 w-24 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to plan your perfect event? Reach out to us via WhatsApp, phone, or email. We are here to help.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Contact Cards */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Phone Card */}
            {/* Phone Card */}
<ContactCard 
  icon={<PhoneIcon size={24} />}
  title="Call Us"
  subtitle="Mon-Sat from 9am to 7pm"
  href="tel:+919496509214,+918137956267"
  actionText="+91 9496509214, +91 81379 56267"
  delay={0.1}
/>


            {/* Email Card - Opens email client */}
            <ContactCard 
              icon={<MailIcon size={24} />}
              title="Email Us"
              subtitle="We'll get back to you within 24h"
              href="mailto:fmeventtplanners@gmail.com"
              actionText="fmeventtplanners@gmail.com"
              delay={0.2}
            />

            {/* Location Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="bg-slate-100 p-3 rounded-xl text-slate-600">
                <MapPinIcon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">Visit Our Office</h3>
                <p className="text-slate-600 mt-1">Ramanattukara, Kozhikode<br/>Kerala, India</p>
              </div>
            </div>

            {/* Instagram Card */}
            <a 
              href="https://instagram.com/fm_event_planners" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[2px] rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="bg-white p-5 rounded-xl flex items-center justify-between h-full group-hover:bg-opacity-95 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="text-pink-600">
                    <InstagramIcon size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Follow on Instagram</h3>
                    <p className="text-sm text-slate-500">@fm_event_planners</p>
                  </div>
                </div>
                <ArrowRightIcon className="text-slate-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </motion.div>

          {/* RIGHT COLUMN: WhatsApp & Map */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* WhatsApp Section */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageCircleIcon className="text-green-500" />
                Quick Chat via WhatsApp
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <WhatsAppButton number="919496509214" label="Chat Support 1" />
                <WhatsAppButton number="918137956267" label="Chat Support 2" />
              </div>
            </div>

            {/* Map & QR Flex Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-80">
              {/* Map */}
              <div className="bg-white p-2 rounded-3xl shadow-lg border border-slate-100 overflow-hidden h-64 md:h-full relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.435787163073!2d75.8694!3d11.1685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba651d66b5a3f51%3A0x6273752763267566!2sRamanattukara%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps Location"
                  className="rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* QR Code Section */}
              <div className="bg-slate-900 text-white rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 rounded-full filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
                
                <h4 className="font-semibold text-lg mb-4">Scan to Connect</h4>
                
                {/* UPDATED: Reduced padding on the white box and increased image size */}
                <div className="bg-white p-1 rounded-xl mb-4">
                   <img
                    src="/insta.jpeg"
                    alt="Scan QR"
                    className="w-44 h-44 object-contain"
                  />
                </div>
                <p className="text-slate-400 text-sm">Point your camera to visit our profile</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for Clickable Contact Cards
function ContactCard({ icon, title, subtitle, href, actionText, delay }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? "_blank" : "_self"}
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      className="block bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-amber-200 transition-all group"
    >
      <div className="flex items-center gap-4">
        <div className="bg-amber-50 text-amber-600 p-3 rounded-xl group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-slate-900 group-hover:text-amber-600 transition-colors">{title}</h3>
          <p className="text-sm text-slate-500 mb-1">{subtitle}</p>
          <p className="text-slate-900 font-medium flex items-center gap-1">
            {actionText}
            {href.startsWith('http') && <ExternalLinkIcon size={14} />}
          </p>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500">
          <ArrowRightIcon />
        </div>
      </div>
    </motion.a>
  );
}

// Sub-component for WhatsApp Buttons
function WhatsAppButton({ number, label }) {
  return (
    <a
      href={`https://wa.me/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between bg-green-50 hover:bg-green-100 text-green-700 p-4 rounded-xl border border-green-200 transition-all group"
    >
      <div className="flex items-center gap-3">
        <div className="bg-green-500 text-white p-2 rounded-full">
          <MessageCircleIcon size={20} />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-green-600 opacity-70">WhatsApp</p>
          <p className="font-bold text-slate-900 group-hover:text-green-800">{number.replace('91', '+91 ')}</p>
        </div>
      </div>
    </a>
  );
}