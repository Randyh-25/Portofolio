import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_x795sgp';
const TEMPLATE_ID = 'template_ce6i1r4';
const PUBLIC_KEY = 'RwGRlZ7bm2WBZMbIL';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
    setIsSubmitting(false);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-500" />
              <span>randyhendriyawan@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-blue-500" />
              <span>+62 878-8173-3721</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-500" />
              <span>Lampung, Indonesia</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Follow Me</h3>
            <div className="flex gap-3">
              <a href="https://github.com/Randyh-25" target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-2 rounded-lg hover:bg-slate-200">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/randyhendriyawan" target="_blank" rel="noopener noreferrer" className="bg-slate-100 p-2 rounded-lg hover:bg-slate-200">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-8 shadow flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="border rounded-lg px-4 py-2"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="your.email@example.com"
            className="border rounded-lg px-4 py-2"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your message..."
            className="border rounded-lg px-4 py-2 min-h-[100px]"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <motion.button
            type="submit"
            className="bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitted ? (
              <>
                <CheckCircle size={18} /> Sent!
              </>
            ) : (
              <>
                <Send size={18} /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </>
            )}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;