import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ArrowLeft } from 'lucide-react';

export default function FullGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    'Gallery1.jpeg','Gallery2.jpeg','Gallery3.jpeg','Gallery4.jpeg',
    'Gallery5.jpeg','Gallery6.jpeg','Gallery7.jpeg','Gallery8.jpeg',
    'Gallery9.jpeg','Gallery10.jpeg','Gallery11.jpeg','Gallery12.jpeg',
    'Gallery13.jpeg','Gallery14.jpeg','Gallery15.jpeg','Gallery16.jpeg',
    'Gallery17.jpeg'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Open specific image
  const openModal = (index) => setSelectedIndex(index);
  
  // Close modal
  const closeModal = () => setSelectedIndex(null);

  // Navigate functions
  const showNext = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const showPrev = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Handle Keyboard Navigation & Scroll Lock
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
      
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'auto';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedIndex, showNext, showPrev]);

  return (
    <section className="bg-neutral-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors font-medium group"
          >
            <span className="p-2 rounded-full bg-white border border-neutral-200 group-hover:border-neutral-400 transition-colors">
              <ArrowLeft size={18} />
            </span>
            Back to Home
          </button>

          <div className="text-center sm:text-right">
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              Photo Gallery
            </h2>
            <p className="text-neutral-500 mt-1 text-sm">
              {images.length} Moments captured
            </p>
          </div>
        </div>

        {/* RESPONSIVE GRID */}
        {/* Mobile: 1col, Small Tablet: 2col, Tablet: 3col, Desktop: 4col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => openModal(i)}
              className="group relative aspect-[4/5] sm:aspect-square overflow-hidden rounded-xl bg-neutral-200 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={img}
                alt={`Gallery image ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay with Icon */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
                  <ZoomIn className="w-6 h-6 text-neutral-800" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LIGHTBOX MODAL */}
        {selectedIndex !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X size={28} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={showPrev}
              className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 hidden sm:block"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={showNext}
              className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 hidden sm:block"
            >
              <ChevronRight size={32} />
            </button>

            {/* Main Image */}
            <div 
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image area
            >
               <img
                src={images[selectedIndex]}
                alt="Fullscreen view"
                className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in-95 duration-300"
              />
              
              {/* Mobile Navigation Hints (Optional) */}
              <div className="absolute bottom-[-40px] left-0 right-0 flex justify-center gap-4 sm:hidden">
                 <button onClick={showPrev} className="p-2 text-white/70"><ChevronLeft size={24}/></button>
                 <span className="text-white/50 text-sm py-2">{selectedIndex + 1} / {images.length}</span>
                 <button onClick={showNext} className="p-2 text-white/70"><ChevronRight size={24}/></button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
