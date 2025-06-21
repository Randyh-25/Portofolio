import React from 'react';
import { User, MapPin, GraduationCap, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about my background, interests, and what drives my passion for technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <User className="w-6 h-6 text-blue-600 mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Background</h3>
                <p className="text-gray-600">
                  As an active undergraduate student in Informatics Engineering, I've developed a strong foundation 
                  in technology and software development. My experience spans digital content management, website 
                  development, and active organizational involvement.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-blue-600 mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
                <p className="text-gray-600">
                  Currently pursuing my degree in Informatics Engineering at Institut Teknologi Sumatera (ITERA), 
                  Indonesia. I'm passionate about applying theoretical knowledge to real-world projects and 
                  contributing to the tech community.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Heart className="w-6 h-6 text-blue-600 mt-1" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interests & Values</h3>
                <p className="text-gray-600">
                  I'm passionate about technology, application development, and student leadership. 
                  I believe in the power of collaboration and effective communication to drive meaningful 
                  change and innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Institut Teknologi Sumatera, Indonesia</span>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-gray-900">Key Strengths</h4>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>• Collaborative team player</li>
                  <li>• Strong communication skills</li>
                  <li>• Excellent time management</li>
                  <li>• Detail-oriented approach</li>
                  <li>• Continuous learner</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold text-gray-900">Experience Areas</h4>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li>• Digital content management</li>
                  <li>• Website development</li>
                  <li>• Student mentoring</li>
                  <li>• Event organization</li>
                  <li>• Technical writing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;