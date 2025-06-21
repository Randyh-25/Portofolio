import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work' | 'volunteer';
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Assistant Practicum – C++ Programming',
      organization: 'Institut Teknologi Sumatera (ITERA)',
      period: 'Feb 2025 – May 2025',
      description: 'Guided students in C++ programming basics and assessed laboratory works.',
      type: 'work',
    },
    {
      title: 'Website Division – Public Relations',
      organization: 'Informatics Department ITERA',
      period: 'Oct 2024 – Present',
      description: 'Write and publish articles for department website, improving engagement.',
      type: 'work',
    },
    {
      title: 'Website Division – Accreditation Team',
      organization: 'Informatics Department ITERA',
      period: 'May 2024 – Dec 2024',
      description: 'Built study program website supporting "Baik" accreditation achievement.',
      type: 'work',
    },
    {
      title: 'Group Guide – Campus Orientation',
      organization: 'Institut Teknologi Sumatera (ITERA)',
      period: 'Aug 2024',
      description: 'Mentored new students in campus adaptation and academic activities.',
      type: 'volunteer',
    },
    {
      title: 'Content Editor – Al-Faris Organization',
      organization: 'SMAN 3 Medan',
      period: 'Aug 2020 – Jul 2021',
      description: 'Created content and campaigns that increased member count by 10%.',
      type: 'volunteer',
    },
  ];

  const getIcon = (type: ExperienceItem['type']) => {
    return type === 'work' ? <Briefcase className="w-4 h-4" /> : <Users className="w-4 h-4" />;
  };

  const getColor = (type: ExperienceItem['type']) => {
    return type === 'work' ? 'bg-blue-500' : 'bg-green-500';
  };

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
    <section id="experience" className="py-20 bg-slate-50">
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
            Experience
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-2xl mx-auto text-balance"
          >
            Professional journey through education, content creation, and leadership
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-sm card-hover border border-slate-100"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${getColor(experience.type)} text-white p-2 rounded-lg`}>
                  {getIcon(experience.type)}
                </div>
                <div className="flex items-center text-xs text-slate-500">
                  <Calendar className="w-3 h-3 mr-1" />
                  {experience.period}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">
                {experience.title}
              </h3>
              
              <p className="text-sm text-blue-600 font-medium mb-3">
                {experience.organization}
              </p>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;