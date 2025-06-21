import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Wrench, Edit, Users, MapPin, GraduationCap } from 'lucide-react';

const AboutSkills: React.FC = () => {
  const skills = {
    technical: [
      { name: 'C++', level: 85 },
      { name: 'Python', level: 90 },
      { name: 'HTML/CSS', level: 80 },
      { name: 'Typescript', level: 85 },
      { name: 'Node.js', level: 80 },
    ],
    tools: ['WordPress', 'VS Code', 'MongoDB', 'Vercell', 'Microsoft Office', 'Adobe Premiere Pro'],
    soft: ['Communication', 'Collaboration', 'Time Management', 'Leadership'],
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
    <section id="about" className="py-20 bg-white">
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
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 max-w-2xl mx-auto text-balance"
          >
            Informatics Engineering student with a passion for technology and leadership
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-xl">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Background</h3>
                <p className="text-slate-600">
                  Active undergraduate student with experience in digital content management, 
                  website development, and organizational leadership.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Education</h3>
                <p className="text-slate-600">
                  Informatics Engineering at Institut Teknologi Sumatera (ITERA), Indonesia
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-xl">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Location</h3>
                <p className="text-slate-600">Lampung, Indonesia</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Technical Skills */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-4">
                <Code className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-900">Technical Skills</h3>
              </div>
              <div className="space-y-3">
                {skills.technical.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <motion.div
                        className="bg-blue-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-4">
                <Wrench className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-900">Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((tool) => (
                  <span key={tool} className="skill-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-purple-600 mr-2" />
                <h3 className="text-xl font-semibold text-slate-900">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.soft.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;