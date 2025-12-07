import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import FullGallery from './pages/FullGallery'; // create this file

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/full-gallery" element={<FullGallery />} />
      </Routes>
    </BrowserRouter>
  );
}
