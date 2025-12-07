import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  MenuIcon,
  XIcon,
  Home,
  UtensilsCrossed,
  Package,
  Info,
  ImageIcon,
  Phone,
} from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  // Check if we are on the home page or a sub-page
  useEffect(() => {
    // This assumes your home page is just '/' or blank. 
    // Adjust logic if your home path is different.
    setIsHomePage(window.location.pathname === '/');
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={20} /> },
    { name: 'Services', href: '#services', icon: <UtensilsCrossed size={20} /> },
    { name: 'Packages', href: '#menu', icon: <Package size={20} /> },
    { name: 'About', href: '#about', icon: <Info size={20} /> },
    { name: 'Gallery', href: '#gallery', icon: <ImageIcon size={20} /> },
    { name: 'Contact', href: '#contact', icon: <Phone size={20} /> },
  ];

  // ✅ Universal Navigation Handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (isHomePage) {
      // 1. If on Home Page: Smooth Scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // 2. If on Gallery Page: Go to Home + Section
      window.location.href = `/${href}`;
    }
  };

  // Determine styling: If scrolled OR not on home page, use solid white background
  const useSolidBackground = isScrolled || !isHomePage;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useSolidBackground ? 'bg-white shadow-lg py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="flex items-center gap-3 cursor-pointer"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <img
              src="/FM.jpg"
              alt="FM Event Planners Logo"
              className="h-12 w-12 object-contain rounded-full"
            />
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold leading-tight ${
                  useSolidBackground ? 'text-gray-900' : 'text-white'
                }`}
              >
                FM EVENT PLANNERS
              </span>
              <span
                className={`text-xs ${
                  useSolidBackground ? 'text-gray-600' : 'text-gray-200'
                }`}
              >
                Flavour Makers Event Management
              </span>
            </div>
          </motion.div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 font-medium transition-colors cursor-pointer ${
                  useSolidBackground
                    ? 'text-gray-700 hover:text-amber-600'
                    : 'text-white hover:text-amber-300'
                }`}
              >
                {link.icon}
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${useSolidBackground ? 'text-gray-700' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <XIcon size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>
      </div>

      {/* BACKDROP */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          className="fixed inset-0 bg-black md:hidden z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* RIGHT-SIDE MOBILE MENU */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.4 }}
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl md:hidden z-50 p-6"
      >
        <div className="flex flex-col space-y-4">
            <div className="flex justify-end mb-4">
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-500">
                    <XIcon size={24} />
                </button>
            </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center gap-3 text-lg text-gray-700 hover:text-amber-600 font-medium py-2 border-b border-gray-100"
            >
              {link.icon}
              {link.name}
            </a>
          ))}

        </div>
      </motion.div>
    </motion.nav>
  );
}
