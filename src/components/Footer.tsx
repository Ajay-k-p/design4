import React from 'react';
import { motion } from 'framer-motion';
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/FM.jpg" alt="FM Event Planners Logo" className="h-12 w-12 object-contain"  style={{borderRadius:"50%",}} />
              <div>
                <h3 className="text-xl font-bold">FM EVENT PLANNERS</h3>
                <p className="text-xs text-gray-400">
                  Flavour Maker Event Management
                </p>
              </div>
            </div>
            <p className="text-gray-400">
              Creating unforgettable moments with expert event decoration and
              catering services
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Packages
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-amber-500 transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Wedding Decorations</li>
              <li className="text-gray-400">Event Setup</li>
              <li className="text-gray-400">Catering Services</li>
              <li className="text-gray-400">Corporate Events</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">+91 9496509214</p>
            <p className="text-gray-400 mb-4">+91 8137956267</p>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <motion.a whileHover={{
              scale: 1.2
            }} href="https://www.instagram.com/fm_event_planners?igsh=MXRhbmF2ZjZ2OTVpYw==" className="bg-gray-800 p-2 rounded-full hover:bg-amber-500 transition-colors">
                <InstagramIcon size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 FM Event Planners - Flavour Maker Event Management. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}