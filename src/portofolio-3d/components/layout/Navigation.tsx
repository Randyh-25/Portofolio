import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const is3DMode = location.pathname === '/Portofolio3D';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? isDarkMode 
          ? 'bg-black/20 backdrop-blur-lg border-b border-white/10' 
          : 'bg-white/20 backdrop-blur-lg border-b border-black/10'
        : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className={`text-2xl font-bold bg-gradient-to-r ${
            isDarkMode 
              ? 'from-cyan-400 to-purple-400' 
              : 'from-blue-600 to-purple-600'
          } bg-clip-text text-transparent`}>
            RH
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${
                  isDarkMode ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                } transition-colors duration-300 relative group`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${
                  isDarkMode 
                    ? 'from-cyan-400 to-purple-400' 
                    : 'from-blue-600 to-purple-600'
                } transition-all duration-300 group-hover:w-full`}></span>
              </button>
            ))}

            {/* Toggles Container */}
            <div className={`flex items-center gap-4 pl-6 border-l ${isDarkMode ? 'border-white/20' : 'border-black/20'}`}>
              <Link
                to="/"
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                  isDarkMode ? 'bg-white/10 text-white/80 hover:bg-white/20' : 'bg-black/5 text-gray-800 hover:bg-black/10'
                }`}
                aria-label="Switch to Normal Mode"
              >
                2D
              </Link>
              <button
                onClick={toggleTheme}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-white/10 hover:bg-white/20 text-white' 
                    : 'bg-black/5 hover:bg-black/10 text-gray-900'
                }`}
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isDarkMode ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-black/10'}`}
              aria-label="Open Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 ${
            isDarkMode 
              ? 'bg-black/90 backdrop-blur-lg border-t border-white/10' 
              : 'bg-white/90 backdrop-blur-lg border-t border-black/10'
          }`}>
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left text-lg ${
                    isDarkMode ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                  } transition-colors duration-300 py-2`}
                >
                  {item.name}
                </button>
              ))}
              
              {/* Mobile Toggles */}
              <div className={`flex items-center justify-center gap-6 pt-4 mt-4 border-t ${isDarkMode ? 'border-white/10' : 'border-black/10'}`}>
                <Link
                  to="/"
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    isDarkMode ? 'bg-white/10 text-white/80 hover:bg-white/20' : 'bg-black/5 text-gray-800 hover:bg-black/10'
                  }`}
                  aria-label="Switch to Normal Mode"
                >
                  2D
                </Link>
                <button
                  onClick={toggleTheme}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-white/10 hover:bg-white/20 text-white' 
                      : 'bg-black/5 hover:bg-black/10 text-gray-900'
                  }`}
                  aria-label="Toggle Theme"
                >
                  {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;