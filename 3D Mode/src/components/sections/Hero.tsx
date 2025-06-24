import React, { useEffect, useRef } from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const heroRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial setup
    gsap.set(['.hero-text', '.hero-subtitle', '.hero-description', '.hero-buttons'], {
      opacity: 0,
      y: 30
    });

    // Animation sequence
    tl.to('.hero-text', { duration: 1, opacity: 1, y: 0, ease: 'power3.out' })
      .to('.hero-subtitle', { duration: 0.8, opacity: 1, y: 0, ease: 'power3.out' }, '-=0.5')
      .to('.hero-description', { duration: 0.8, opacity: 1, y: 0, ease: 'power3.out' }, '-=0.3')
      .to('.hero-buttons', { duration: 0.8, opacity: 1, y: 0, ease: 'power3.out' }, '-=0.3');

    // Portrait floating animation
    if (portraitRef.current) {
      gsap.to(portraitRef.current, {
        y: -10,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
      });
    }
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-white/80' : 'text-gray-700';
  const textMuted = isDarkMode ? 'text-white/70' : 'text-gray-600';

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Portrait Frame */}
        <div
          ref={portraitRef}
          className={`mb-8 mx-auto w-48 h-48 rounded-full p-1 shadow-2xl ${
            isDarkMode 
              ? 'bg-gradient-to-br from-cyan-400/20 to-purple-600/20 backdrop-blur-sm border border-white/20' 
              : 'bg-gradient-to-br from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-black/20'
          }`}
        >
          <div className={`w-full h-full rounded-full flex items-center justify-center text-6xl font-bold shadow-inner ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-700 to-gray-900 text-white' 
              : 'bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800'
          }`}>
            RH
          </div>
        </div>

        {/* Main Text */}
        <h1 className="hero-text text-5xl md:text-7xl font-bold mb-4">
          <span className={`bg-gradient-to-r ${
            isDarkMode 
              ? 'from-cyan-400 via-blue-500 to-purple-600' 
              : 'from-blue-600 via-purple-600 to-purple-800'
          } bg-clip-text text-transparent`}>
            Randy Hendriyawan
          </span>
        </h1>

        {/* Subtitle */}
        <div className={`hero-subtitle text-xl md:text-2xl ${textSecondary} mb-6 space-x-2`}>
          <span className={`inline-block px-4 py-2 rounded-full backdrop-blur-sm border mx-1 ${
            isDarkMode 
              ? 'bg-white/10 border-white/20 glow-text' 
              : 'bg-black/5 border-black/20'
          }`}>
            Informatics Student
          </span>
          <span className={isDarkMode ? 'text-cyan-400' : 'text-blue-600'}>•</span>
          <span className={`inline-block px-4 py-2 rounded-full backdrop-blur-sm border mx-1 ${
            isDarkMode 
              ? 'bg-white/10 border-white/20 glow-text' 
              : 'bg-black/5 border-black/20'
          }`}>
            Developer
          </span>
          <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>•</span>
          <span className={`inline-block px-4 py-2 rounded-full backdrop-blur-sm border mx-1 ${
            isDarkMode 
              ? 'bg-white/10 border-white/20 glow-text' 
              : 'bg-black/5 border-black/20'
          }`}>
            Content Writer
          </span>
        </div>

        {/* Description */}
        <p className={`hero-description text-lg md:text-xl ${textMuted} mb-8 max-w-2xl mx-auto leading-relaxed`}>
          Passionate about technology and student leadership at{' '}
          <span className={`font-semibold ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
            Institut Teknologi Sumatera (ITERA)
          </span>
        </p>

        {/* Action Buttons */}
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className={`group px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white hover:shadow-cyan-500/25' 
              : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white hover:shadow-blue-500/25'
          }`}>
            <Download size={20} />
            Download CV
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={scrollToProjects}
            className={`group px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 ${
              isDarkMode 
                ? 'bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white hover:shadow-purple-500/25' 
                : 'bg-black/5 backdrop-blur-sm border border-black/20 hover:bg-black/10 text-gray-900 hover:shadow-purple-500/25'
            }`}
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          isDarkMode ? 'border-white/30' : 'border-black/30'
        }`}>
          <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
            isDarkMode ? 'bg-white/60' : 'bg-black/60'
          }`}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;