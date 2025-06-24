import React, { useEffect } from 'react';
import { Calendar, MapPin, Users, Code2, Globe, Edit3 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ExperienceProps {
  isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.experience-card',
      { opacity: 0, y: 50, rotationY: -15 },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#experience',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Add hover animations
    const cards = document.querySelectorAll('.experience-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.02, rotationY: 2, duration: 0.3 });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, rotationY: 0, duration: 0.3 });
      });
    });
  }, []);

  const experiences = [
    {
      title: 'Assistant Practicum – C++ Programming',
      period: 'Feb 2025 – May 2025',
      location: 'Institut Teknologi Sumatera',
      icon: <Code2 className={isDarkMode ? 'text-cyan-400' : 'text-blue-600'} size={24} />,
      description: 'Guide and mentor students in C++ programming fundamentals, help with debugging, and assist in practical assignments.',
      skills: ['C++', 'Teaching', 'Mentoring', 'Problem Solving']
    },
    {
      title: 'Website Division – Public Relations',
      period: 'Oct 2024 – Present',
      location: 'Institut Teknologi Sumatera',
      icon: <Globe className={isDarkMode ? 'text-purple-400' : 'text-purple-600'} size={24} />,
      description: 'Develop and maintain public relations websites, manage digital content, and enhance online presence.',
      skills: ['Web Development', 'Content Management', 'Digital Marketing', 'UI/UX']
    },
    {
      title: 'Website Division – Accreditation Team',
      period: 'May 2024 – Dec 2024',
      location: 'Institut Teknologi Sumatera',
      icon: <Globe className={isDarkMode ? 'text-blue-400' : 'text-blue-500'} size={24} />,
      description: 'Built and maintained accreditation websites, ensuring compliance with educational standards and documentation.',
      skills: ['Web Development', 'Documentation', 'Quality Assurance', 'Project Management']
    },
    {
      title: 'Group Guide – Campus Orientation',
      period: 'Aug 2024',
      location: 'Institut Teknologi Sumatera',
      icon: <Users className={isDarkMode ? 'text-green-400' : 'text-green-600'} size={24} />,
      description: 'Led orientation groups for new students, facilitated integration activities, and provided campus guidance.',
      skills: ['Leadership', 'Communication', 'Event Management', 'Team Building']
    },
    {
      title: 'Content Editor – Al-Faris Organization',
      period: 'Aug 2020 – Jul 2021',
      location: 'Al-Faris Organization',
      icon: <Edit3 className={isDarkMode ? 'text-orange-400' : 'text-orange-600'} size={24} />,
      description: 'Managed digital content creation, edited publications, and significantly increased member engagement.',
      skills: ['Content Creation', 'Editing', 'Social Media', 'Community Management']
    }
  ];

  const cardClass = `experience-card ${
    isDarkMode 
      ? 'bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15' 
      : 'bg-white/80 backdrop-blur-lg border-black/10 hover:bg-white/90'
  } rounded-2xl p-6 border transition-all duration-300 cursor-pointer transform-gpu`;

  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-white/80' : 'text-gray-700';
  const textMuted = isDarkMode ? 'text-white/70' : 'text-gray-600';

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${
            isDarkMode 
              ? 'from-cyan-400 to-purple-400' 
              : 'from-blue-600 to-purple-600'
          } bg-clip-text text-transparent mb-4`}>
            Experience
          </h2>
          <p className={`text-xl ${textMuted} max-w-2xl mx-auto`}>
            Building expertise through diverse roles and responsibilities
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className={cardClass}>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon & Timeline */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-white/20 to-white/10 border-white/20' 
                      : 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300'
                  }`}>
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className={`text-xl md:text-2xl font-bold ${textPrimary} mb-2`}>
                        {exp.title}
                      </h3>
                      <div className={`flex items-center gap-4 ${textMuted} mb-2`}>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className={`${textSecondary} mb-4 leading-relaxed`}>
                    {exp.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isDarkMode 
                            ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 text-white' 
                            : 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;