import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Gamepad2, Image, Cpu, Globe } from 'lucide-react';

interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: React.ReactNode;
  color: string;
}

const Projects: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      title: 'Too Much Pixels',
      description: '2D top-down survival pixel-art game with engaging gameplay mechanics.',
      technologies: ['Python', 'Pygame'],
      githubUrl: 'https://github.com/Randyh-25',
      icon: <Gamepad2 className="w-5 h-5" />,
      color: 'bg-red-500',
    },
    {
      title: 'Pic-Sorter',
      description: 'Desktop app to automatically organize images using metadata analysis.',
      technologies: ['Python', 'Tkinter'],
      githubUrl: 'https://github.com/Randyh-25',
      icon: <Image className="w-5 h-5" />,
      color: 'bg-blue-500',
    },
    {
      title: 'CPU Scheduling Simulator',
      description: 'Simulation of CPU scheduling algorithms with result visualization.',
      technologies: ['Python'],
      githubUrl: 'https://github.com/Randyh-25',
      icon: <Cpu className="w-5 h-5" />,
      color: 'bg-purple-500',
    },
    {
      title: 'Project UMKM',
      description: 'Web platform promoting local village MSMEs and digital products.',
      technologies: ['HTML', 'CSS', 'PHP'],
      githubUrl: 'https://github.com/Randyh-25',
      icon: <Globe className="w-5 h-5" />,
      color: 'bg-green-500',
    },
  ];

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
              className="bg-white rounded-2xl shadow-sm card-hover border border-slate-100 overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`${project.color} text-white p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  </div>
                  
                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-600 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
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