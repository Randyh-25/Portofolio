import React, { useEffect } from 'react';
import { User, GraduationCap, MapPin, Code, Wrench, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections
    gsap.fromTo('.about-section', 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#about',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate progress bars
    gsap.fromTo('.progress-bar', 
      { width: '0%' },
      {
        width: (index, element) => element.dataset.width,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.technical-skills',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate skill badges
    gsap.fromTo('.skill-badge',
      { opacity: 0, scale: 0, rotation: -10 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.tools-platforms',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const skills = [
    { name: 'C++', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 }
  ];

  const tools = [
    'WordPress', 'VS Code', 'MongoDB', 'Vercel', 'Microsoft Office', 'Adobe Premiere Pro'
  ];

  const softSkills = [
    'Communication', 'Collaboration', 'Time Management', 'Leadership'
  ];

  const cardClass = `${
    isDarkMode 
      ? 'bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15' 
      : 'bg-black/5 backdrop-blur-lg border-black/20 hover:bg-black/10'
  } rounded-2xl p-6 border transition-all duration-300`;

  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-white/80' : 'text-gray-700';
  const textMuted = isDarkMode ? 'text-white/60' : 'text-gray-500';

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${
            isDarkMode 
              ? 'from-cyan-400 to-purple-400' 
              : 'from-blue-600 to-purple-600'
          } bg-clip-text text-transparent mb-4`}>
            About Me
          </h2>
          <p className={`text-xl ${textMuted} max-w-2xl mx-auto`}>
            Informatics Engineering student with a passion for technology and leadership
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Background, Education, Location */}
          <div className="space-y-6">
            {/* Background */}
            <div className={`about-section ${cardClass}`}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isDarkMode 
                    ? 'bg-blue-500/20 border border-blue-400/30' 
                    : 'bg-blue-100 border border-blue-200'
                }`}>
                  <User className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold ${textPrimary} mb-2`}>Background</h3>
                  <p className={`${textSecondary} leading-relaxed text-sm lg:text-base`}>
                    Active undergraduate student with experience in digital content management, 
                    website development, and organizational leadership.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className={`about-section ${cardClass}`}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isDarkMode 
                    ? 'bg-green-500/20 border border-green-400/30' 
                    : 'bg-green-100 border border-green-200'
                }`}>
                  <GraduationCap className={isDarkMode ? 'text-green-400' : 'text-green-600'} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold ${textPrimary} mb-2`}>Education</h3>
                  <p className={`${textSecondary} text-sm lg:text-base`}>
                    Informatics Engineering at Institut Teknologi Sumatera (ITERA), Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className={`about-section ${cardClass}`}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  isDarkMode 
                    ? 'bg-purple-500/20 border border-purple-400/30' 
                    : 'bg-purple-100 border border-purple-200'
                }`}>
                  <MapPin className={isDarkMode ? 'text-purple-400' : 'text-purple-600'} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-semibold ${textPrimary} mb-2`}>Location</h3>
                  <p className={`${textSecondary} text-sm lg:text-base`}>
                    Lampung, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div className="technical-skills about-section">
              <div className="flex items-center gap-3 mb-6">
                <Code className={isDarkMode ? 'text-cyan-400' : 'text-blue-600'} size={24} />
                <h3 className={`text-2xl font-semibold ${textPrimary}`}>Technical Skills</h3>
              </div>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`${textPrimary} font-medium text-sm lg:text-base`}>{skill.name}</span>
                      <span className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'} font-semibold text-sm`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${
                      isDarkMode ? 'bg-white/10' : 'bg-black/10'
                    }`}>
                      <div
                        className={`progress-bar h-full rounded-full ${
                          isDarkMode 
                            ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
                            : 'bg-gradient-to-r from-blue-500 to-blue-600'
                        }`}
                        data-width={`${skill.level}%`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="tools-platforms about-section">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className={isDarkMode ? 'text-purple-400' : 'text-purple-600'} size={24} />
                <h3 className={`text-2xl font-semibold ${textPrimary}`}>Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span
                    key={tool}
                    className={`skill-badge px-3 py-2 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 cursor-default ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-white hover:from-purple-500/30 hover:to-pink-500/30' 
                        : 'bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 text-purple-700 hover:from-purple-200 hover:to-pink-200'
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="about-section">
              <div className="flex items-center gap-3 mb-6">
                <Users className={isDarkMode ? 'text-green-400' : 'text-green-600'} size={24} />
                <h3 className={`text-2xl font-semibold ${textPrimary}`}>Soft Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`skill-badge rounded-lg p-3 text-center font-medium text-xs lg:text-sm transition-all duration-300 cursor-default ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-400/30 text-white hover:from-green-500/30 hover:to-teal-500/30' 
                        : 'bg-gradient-to-r from-green-100 to-teal-100 border border-green-200 text-green-700 hover:from-green-200 hover:to-teal-200'
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;