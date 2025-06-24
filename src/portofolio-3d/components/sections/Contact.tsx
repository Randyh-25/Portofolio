import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo('.contact-item',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    gsap.fromTo('.contact-form',
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_x795sgp',
        'template_ce6i1r4',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Randy Hendriyawan'
        },
        'RwGRlZ7bm2WBZMbIL'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Success animation
      gsap.to('.success-message', {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'back.out(1.7)'
      });

    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className={isDarkMode ? 'text-cyan-400' : 'text-blue-600'} size={24} />,
      label: 'Email',
      value: 'randyhendriyawan@gmail.com',
      link: 'mailto:randyhendriyawan@gmail.com'
    },
    {
      icon: <Phone className={isDarkMode ? 'text-green-400' : 'text-green-600'} size={24} />,
      label: 'Phone',
      value: '+62 878-8173-3721',
      link: 'tel:+6287881733721'
    },
    {
      icon: <MapPin className={isDarkMode ? 'text-red-400' : 'text-red-600'} size={24} />,
      label: 'Location',
      value: 'Lampung, Indonesia',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className={isDarkMode ? 'text-white' : 'text-gray-900'} size={20} />,
      label: 'GitHub',
      link: 'https://github.com/Randyh-25'
    },
    {
      icon: <Linkedin className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} size={20} />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/randyhendriyawan'
    },
    {
      icon: <Globe className={isDarkMode ? 'text-purple-400' : 'text-purple-600'} size={20} />,
      label: 'Portfolio',
      link: 'https://randyh-25.github.io/Portofolio'
    }
  ];

  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-white/80' : 'text-gray-700';
  const textMuted = isDarkMode ? 'text-white/70' : 'text-gray-600';

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${
            isDarkMode 
              ? 'from-cyan-400 to-purple-400' 
              : 'from-blue-600 to-purple-600'
          } bg-clip-text text-transparent mb-4`}>
            Get In Touch
          </h2>
          <p className={`text-xl ${textMuted} max-w-2xl mx-auto`}>
            Ready to collaborate or have a question? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className={`text-2xl font-bold ${textPrimary} mb-6`}>Contact Information</h3>
            
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-white/20 to-white/10 border-white/20' 
                      : 'bg-gradient-to-br from-gray-100 to-gray-200 border-gray-300'
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className={`${textMuted} text-sm`}>{item.label}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className={`${textPrimary} font-medium hover:${
                          isDarkMode ? 'text-cyan-400' : 'text-blue-600'
                        } transition-colors duration-300`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`${textPrimary} font-medium`}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="contact-item">
              <h4 className={`text-xl font-semibold ${textPrimary} mb-4`}>Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group ${
                      isDarkMode 
                        ? 'bg-white/10 hover:bg-white/20 border border-white/20' 
                        : 'bg-black/5 hover:bg-black/10 border border-black/20'
                    }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className={`contact-item rounded-2xl p-6 border ${
              isDarkMode 
                ? 'bg-white/5 backdrop-blur-lg border-white/20' 
                : 'bg-white/50 backdrop-blur-lg border-black/10'
            }`}>
              <h4 className={`text-xl font-semibold ${textPrimary} mb-2`}>Availability</h4>
              <p className={textMuted}>
                Currently available for freelance projects and collaboration opportunities. 
                I typically respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block ${textPrimary} font-medium mb-2`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20' 
                      : 'bg-white/50 backdrop-blur-sm border border-black/20 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
                  } focus:outline-none`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className={`block ${textPrimary} font-medium mb-2`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20' 
                      : 'bg-white/50 backdrop-blur-sm border border-black/20 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
                  } focus:outline-none`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block ${textPrimary} font-medium mb-2`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl transition-all duration-300 resize-none ${
                    isDarkMode 
                      ? 'bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20' 
                      : 'bg-white/50 backdrop-blur-sm border border-black/20 text-gray-900 placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
                  } focus:outline-none`}
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 disabled:from-gray-500 disabled:to-gray-600 text-white' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="success-message opacity-0 scale-95 bg-green-500/20 border border-green-400/30 rounded-xl p-4 text-green-400 text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-4 text-red-400 text-center">
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;