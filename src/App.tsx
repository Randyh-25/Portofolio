import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSkills from './components/AboutSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import MainPage from './pages/MainPage';
import Portfolio3D from './portofolio-3d/Portofolio3D.tsx'; // Tambahkan .tsx di sini

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Navbar />
            <main>
              <Hero />
              <AboutSkills />
              <Experience />
              <Projects />
              <Contact />
            </main>
            <BackToTop />
            
            {/* Footer */}
            <footer className="bg-slate-900 text-white py-8">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                <p className="text-slate-400">
                  © 2025 Randy Hendriyawan. Built with React, TypeScript, and Tailwind CSS.
                </p>
              </div>
            </footer>
          </div>
        } />
        <Route path="/Portofolio3D" element={<Portfolio3D />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;