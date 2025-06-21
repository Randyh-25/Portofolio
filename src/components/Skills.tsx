import React from 'react';
import { SkillCategory } from '../types';
import { Code, Wrench, Edit, FileText, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories: (SkillCategory & { icon: React.ReactNode; color: string })[] = [
    {
      title: 'Programming Languages',
      skills: ['C++', 'Python', 'HTML'],
      icon: <Code className="w-6 h-6" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Frameworks/Tools',
      skills: ['Pygame', 'Tkinter'],
      icon: <Wrench className="w-6 h-6" />,
      color: 'bg-green-500',
    },
    {
      title: 'Web Content & CMS',
      skills: ['Article Writing', 'WordPress'],
      icon: <Edit className="w-6 h-6" />,
      color: 'bg-purple-500',
    },
    {
      title: 'Other Tools',
      skills: ['Microsoft Office', 'Video Editing'],
      icon: <FileText className="w-6 h-6" />,
      color: 'bg-orange-500',
    },
    {
      title: 'Soft Skills',
      skills: ['Communication', 'Collaboration', 'Time Management'],
      icon: <Users className="w-6 h-6" />,
      color: 'bg-pink-500',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills developed through academic study and practical experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`${category.color} text-white p-3 rounded-lg mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`${category.color} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${85 + skillIndex * 5}%`,
                          animationDelay: `${index * 0.1 + skillIndex * 0.05}s`,
                        }}
                      ></div>
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-700 min-w-max">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Currently Learning</h3>
            <p className="text-gray-600 mb-6">
              I'm always expanding my skillset and staying up-to-date with the latest technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['JavaScript', 'React', 'Node.js', 'Database Design', 'Mobile Development'].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;