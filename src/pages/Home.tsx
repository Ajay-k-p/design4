import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Menu } from '../components/Menu';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="w-full bg-neutral-50">

      {/* FULL WIDTH */}
      <Navigation />
      <Hero />

      {/* CENTERED CONTENT */}
      <div className="max-w-7xl mx-auto px-4">
        <Services />
        <Menu />
        <WhyChooseUs />
        <About />
        <Testimonials />
      </div>

      {/* FULL WIDTH */}
      <Gallery />

      {/* CENTERED */}
      <div className="max-w-7xl mx-auto px-4">
        <Contact />
      </div>

      {/* FULL WIDTH */}
      <Footer />
    </div>
  );
}
