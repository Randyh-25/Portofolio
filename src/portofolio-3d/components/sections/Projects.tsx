import React, { useEffect, useState } from 'react';
import { Github, ExternalLink, Code, Gamepad2, Image, Cpu, Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.project-card',
      { opacity: 0, scale: 0.8, rotationY: -10 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#projects',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const projects = [
    {
      title: 'Too Much Pixels',
      description: 'A captivating 2D top-down pixel-art survival game built with Python and Pygame. Features dynamic gameplay mechanics, pixel-perfect animations, and immersive survival elements.',
      icon: <Gamepad2 className={isDarkMode ? 'text-green-400' : 'text-green-600'} size={32} />,
      technologies: ['Python', 'Pygame', 'Pixel Art', 'Game Design'],
      github: 'https://github.com/Randyh-25',
      details: 'Developed complete game mechanics including player movement, enemy AI, resource management, and procedural level generation. Implemented custom sprite animations and sound effects for enhanced player experience.'
    },
    {
      title: 'Pic-Sorter',
      description: 'An intelligent desktop application using Python and Tkinter that automatically organizes images based on their metadata, creation date, and file properties.',
      icon: <Image className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} size={32} />,
      technologies: ['Python', 'Tkinter', 'PIL', 'File Management'],
      github: 'https://github.com/Randyh-25',
      details: 'Features automatic image categorization, bulk processing capabilities, custom sorting rules, and a user-friendly GUI. Supports multiple image formats and maintains original file integrity.'
    },
    {
      title: 'CPU Scheduling Simulator',
      description: 'A comprehensive visual simulator of various CPU scheduling algorithms built with Python, demonstrating process management and system optimization.',
      icon: <Cpu className={isDarkMode ? 'text-purple-400' : 'text-purple-600'} size={32} />,
      technologies: ['Python', 'Algorithm Design', 'Data Visualization', 'System Programming'],
      github: 'https://github.com/Randyh-25',
      details: 'Implements FCFS, SJF, Round Robin, and Priority scheduling algorithms with real-time visualization. Includes performance metrics, Gantt chart generation, and comparative analysis tools.'
    },
    {
      title: 'Project DigiVill',
      description: 'A comprehensive web platform built with modern technologies to promote local MSMEs and digital products, featuring e-commerce functionality and community engagement.',
      icon: <Globe className={isDarkMode ? 'text-cyan-400' : 'text-blue-500'} size={32} />,
      technologies: ['TypeScript', 'Next.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/Randyh-25',
      details: 'Full-stack application with user authentication, product catalog, payment integration, and admin dashboard. Designed to support local businesses with digital transformation and online presence.'
    }
  ];

  const handleProjectClick = (index: number) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  const cardClass = `project-card ${
    isDarkMode 
      ? 'bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15' 
      : 'bg-white/80 backdrop-blur-lg border-black/10 hover:bg-white/90'
  } rounded-2xl p-6 border transition-all duration-300 cursor-pointer transform-gpu`;

  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-white/80' : 'text-gray-700';
  const textMuted = isDarkMode ? 'text-white/70' : 'text-gray-600';

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${
            isDarkMode 
              ? 'from-cyan-400 to-purple-400' 
              : 'from-blue-600 to-purple-600'
          } bg-clip-text text-transparent mb-4`}>
            Projects
          </h2>
          <p className={`text-xl ${textMuted} max-w-2xl mx-auto`}>
            Innovative solutions crafted with passion and precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={cardClass}
              onClick={() => handleProjectClick(index)}
            >
              {/* Project Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center border ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-white/20 to-white/10 border-white/20' 
                    : 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300'
                }`}>
                  {project.icon}
                </div>
                <div className="flex-grow">
                  <h3 className={`text-xl md:text-2xl font-bold ${textPrimary} mb-2`}>
                    {project.title}
                  </h3>
                  <p className={`${textSecondary} text-sm md:text-base leading-relaxed`}>
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode 
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-400/30 text-white' 
                        : 'bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Expanded Details */}
              {selectedProject === index && (
                <div className={`mt-4 p-4 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-white/5 border-white/10' 
                    : 'bg-black/5 border-black/10'
                }`}>
                  <p className={`${textSecondary} text-sm leading-relaxed mb-4`}>
                    {project.details}
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                    isDarkMode 
                      ? 'bg-white/10 hover:bg-white/20 border border-white/20 text-white' 
                      : 'bg-black/5 hover:bg-black/10 border border-black/20 text-gray-900'
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={16} />
                  <span>GitHub</span>
                  <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
                
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-400/30 text-white' 
                      : 'bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 border border-blue-200 text-blue-700'
                  }`}
                >
                  <Code size={16} />
                  <span>{selectedProject === index ? 'Less Info' : 'More Info'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className={`rounded-2xl p-8 border ${
            isDarkMode 
              ? 'bg-white/5 backdrop-blur-lg border-white/20' 
              : 'bg-white/50 backdrop-blur-lg border-black/10'
          }`}>
            <h3 className={`text-2xl font-bold ${textPrimary} mb-4`}>
              Interested in collaborating?
            </h3>
            <p className={`${textMuted} mb-6`}>
              I'm always excited to work on innovative projects and explore new technologies.
            </p>
            <a
              href="https://github.com/Randyh-25"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
              }`}
            >
              <Github size={20} />
              View All Projects
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;