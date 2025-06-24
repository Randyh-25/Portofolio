import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Gamepad2, Image, Cpu, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: React.ReactNode;
  color: string;
  screenshots: string[];
}

export const projects: ProjectItem[] = [
  {
    title: 'Too Much Pixels',
    description: '2D top-down survival pixel-art game with engaging gameplay mechanics.',
    technologies: ['Python', 'Pygame'],
    githubUrl: 'https://github.com/Randyh-25/TooMuchPixels',
    icon: <Gamepad2 className="w-5 h-5" />,
    color: 'bg-red-500',
    screenshots: [
      'https://raw.githubusercontent.com/Randyh-25/TooMuchPixels/refs/heads/main/img/SS%20(1).png',
      'https://raw.githubusercontent.com/Randyh-25/TooMuchPixels/refs/heads/main/img/SS%20(2).png',
      'https://raw.githubusercontent.com/Randyh-25/TooMuchPixels/refs/heads/main/img/SS%20(3).png',
      'https://raw.githubusercontent.com/Randyh-25/TooMuchPixels/refs/heads/main/img/SS%20(4).png',
    ],
  },
  {
    title: 'Pic-Sorter',
    description: 'Desktop app to automatically organize images using metadata analysis.',
    technologies: ['Python', 'Tkinter'],
    githubUrl: 'https://github.com/Randyh-25/Pic-Sorter/tree/main',
    icon: <Image className="w-5 h-5" />,
    color: 'bg-blue-500',
    screenshots: [
      'https://raw.githubusercontent.com/Randyh-25/Pic-Sorter/refs/heads/main/Screenshoot/1.TentukanJumlahKategori.png',
      'https://raw.githubusercontent.com/Randyh-25/Pic-Sorter/refs/heads/main/Screenshoot/2.MasukanKategori.png',
      'https://raw.githubusercontent.com/Randyh-25/Pic-Sorter/refs/heads/main/Screenshoot/3.%20Sortir.png',
    ],
  },
  {
    title: 'CPU Scheduling Simulator',
    description: 'Simulation of CPU scheduling algorithms with result visualization.',
    technologies: ['Python'],
    githubUrl: 'https://randyh-25.github.io/CPU-Scheduling/',
    icon: <Cpu className="w-5 h-5" />,
    color: 'bg-purple-500',
    screenshots: [
      'https://raw.githubusercontent.com/Randyh-25/CPU-Scheduling/refs/heads/main/img/SS%20(1).png',
      'https://raw.githubusercontent.com/Randyh-25/CPU-Scheduling/refs/heads/main/img/SS%20(2).png',
    ],
  },
  {
    title: 'Project DigiVill',
    description: 'Web platform promoting local village MSMEs and digital products.',
    technologies: ['Typescript', 'Next.js', 'Express.js', 'MongoDB'],
    githubUrl: 'https://github.com/Randyh-25',
    icon: <Globe className="w-5 h-5" />,
    color: 'bg-green-500',
    screenshots: [
      'https://raw.githubusercontent.com/Randyh-25/Project-DigiVill/refs/heads/main/img/SS%20(1).png',
      'https://raw.githubusercontent.com/Randyh-25/Project-DigiVill/refs/heads/main/img/SS%20(2).png',
      'https://raw.githubusercontent.com/Randyh-25/Project-DigiVill/refs/heads/main/img/SS%20(3).png',
      'https://raw.githubusercontent.com/Randyh-25/Project-DigiVill/refs/heads/main/img/SS%20(4).png',
    ],
  },
];

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  // Reset slide index when modal open
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedProject]);

  // Auto-slide logic
  useEffect(() => {
    if (!selectedProject) return;
    slideInterval.current && clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) =>
        selectedProject && selectedProject.screenshots.length > 0
          ? (prev + 1) % selectedProject.screenshots.length
          : 0
      );
    }, 3000);
    return () => {
      slideInterval.current && clearInterval(slideInterval.current);
    };
  }, [selectedProject, currentSlide]);

  const handlePrev = () => {
    if (!selectedProject) return;
    setCurrentSlide((prev) =>
      prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (!selectedProject) return;
    setCurrentSlide((prev) =>
      (prev + 1) % selectedProject.screenshots.length
    );
  };

  // Tutup modal
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold gradient-text mb-4"
          >
            Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-2xl mx-auto text-balance"
          >
            Showcase of technical projects demonstrating programming skills and creativity
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-sm card-hover border border-slate-100 overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`${project.color} text-white p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  </div>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Project Detail */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fadeIn">
              {/* Tombol close */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 text-xl"
                aria-label="Close"
              >
                &times;
              </button>
              {/* Logo Project */}
              <div className="flex flex-col items-center mb-4">
                <div className={`${selectedProject.color} text-white p-4 rounded-2xl mb-3`}>
                  {selectedProject.icon}
                </div>
                <h2 className="text-2xl font-bold mb-1">{selectedProject.title}</h2>
              </div>
              {/* Tombol View Github */}
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-semibold mb-4 hover:bg-blue-700 transition"
              >
                View Github
              </a>
              {/* Deskripsi singkat */}
              <p className="text-slate-700 text-center mb-4">{selectedProject.description}</p>
              {/* Screenshot carousel */}
              <div className="w-full h-48 bg-slate-100 rounded-lg flex items-center justify-center mb-2 overflow-hidden relative">
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow transition z-10"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6 text-slate-700" />
                </button>
                <img
                  src={selectedProject.screenshots[currentSlide]}
                  alt={`Screenshot ${currentSlide + 1}`}
                  className="object-contain h-full transition-all duration-500"
                />
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full shadow transition z-10"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6 text-slate-700" />
                </button>
                {/* Indicator dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedProject.screenshots.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full ${currentSlide === idx ? 'bg-blue-600' : 'bg-slate-300'} transition`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              {/* Teknologi */}
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/Randyh-25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;