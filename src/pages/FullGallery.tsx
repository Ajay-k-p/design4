import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function FullGallery() {
  const [selected, setSelected] = useState(null);

  const images = [
    'Gallery1.jpeg','Gallery2.jpeg','Gallery3.jpeg','Gallery4.jpeg',
    'Gallery5.jpeg','Gallery6.jpeg','Gallery7.jpeg','Gallery8.jpeg',
    'Gallery9.jpeg','Gallery10.jpeg','Gallery11.jpeg','Gallery12.jpeg',
    'Gallery13.jpeg','Gallery14.jpeg','Gallery15.jpeg','Gallery16.jpeg',
    'Gallery17.jpeg'
  ];

  // ✅ Disable scroll when image is open (fix space issue)
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [selected]);

  return (
    <section className="bg-gray-100 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <button
            onClick={() => window.history.back()}
            className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg w-fit shadow-md"
          >
            ← Back
          </button>

          <h2 className="text-3xl sm:text-4xl font-bold text-center sm:text-right mt-4 sm:mt-0">
            Full Gallery
          </h2>
        </div>

        {/* ✅ FORCE 4 IMAGES IN A ROW */}
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              onClick={() => setSelected(img)}
            >
              <img
                src={img}
                alt="gallery"
                loading="lazy"
                draggable="false"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
            </div>
          ))}
        </div>

        {/* FULL IMAGE VIEW */}
        {selected && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >

            {/* CLOSE ICON */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 p-2 rounded-full"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* IMAGE */}
            <img
              src={selected}
              alt="preview"
              draggable="false"
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

      </div>
    </section>
  );
}
