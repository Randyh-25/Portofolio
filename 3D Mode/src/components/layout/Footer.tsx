import React from 'react';
import { Heart } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const textMuted = isDarkMode ? 'text-white/70' : 'text-gray-600';
  const textLight = isDarkMode ? 'text-white/50' : 'text-gray-500';

  return (
    <footer className={`relative z-10 py-8 px-4 sm:px-6 lg:px-8 border-t ${
      isDarkMode ? 'border-white/10' : 'border-black/10'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className={`${textMuted} flex items-center justify-center gap-2 flex-wrap`}>
            © 2025 Randy Hendriyawan. Built with
            <Heart className="text-red-400" size={16} />
            using React, TypeScript, and Tailwind CSS.
          </p>
          <p className={`${textLight} text-sm mt-2`}>
            Powered by Three.js and GSAP for immersive experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;