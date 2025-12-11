import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactTabProps {
  links: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export const ContactTab = ({ links }: ContactTabProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_x795sgp';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const PUBLIC_KEY = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_EMAILJS_KEY) as string | undefined;

  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    }
  }, [PUBLIC_KEY]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      if (!TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn('EmailJS template/public key is not configured.');
        setStatus('error');
        return;
      }

      try {
        setStatus('sending');
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            time: new Date().toLocaleString(),
          }
        );
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } catch (err) {
        console.error('Email send failed:', err);
        setStatus('error');
      }
    }
  };

  return (
    <div
      id="panel-contact"
      role="tabpanel"
      aria-labelledby="tab-contact"
      className="w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent via-secondary to-white bg-clip-text text-transparent mb-6 sm:mb-8 md:mb-12">Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          {/* Contact Links */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <a
              href={`mailto:${links.email}`}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:bg-white/15 hover:border-accent/50 transition-all duration-300 flex items-center gap-3 sm:gap-4 group"
            >
              <div className="p-2 sm:p-2.5 md:p-3 rounded-lg bg-accent/20 border border-accent/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Mail className="text-accent" size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-bold text-white mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base">Email</h3>
                <p className="font-body text-[10px] sm:text-xs md:text-sm text-white/70 break-all">{links.email}</p>
              </div>
            </a>

            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:bg-white/15 hover:border-secondary/50 transition-all duration-300 flex items-center gap-3 sm:gap-4 group"
            >
              <div className="p-2 sm:p-2.5 md:p-3 rounded-lg bg-secondary/20 border border-secondary/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Github className="text-secondary" size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-bold text-white mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base">GitHub</h3>
                <p className="font-body text-[10px] sm:text-xs md:text-sm text-white/70 truncate">github.com/Randyh-25</p>
              </div>
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 hover:bg-white/15 hover:border-accent/50 transition-all duration-300 flex items-center gap-3 sm:gap-4 group"
            >
              <div className="p-2 sm:p-2.5 md:p-3 rounded-lg bg-accent/20 border border-accent/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Linkedin className="text-accent" size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-bold text-white mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base">LinkedIn</h3>
                <p className="font-body text-[10px] sm:text-xs md:text-sm text-white/70 truncate">linkedin.com/in/randyhendriyawan</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl" aria-live="polite">
            <div className="mb-3 sm:mb-4 md:mb-6">
              <label htmlFor="name" className="block font-heading font-semibold text-white mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base">Name</label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base"
                placeholder="Your name"
                aria-invalid={!!errors.name}
                autoComplete="name"
              />
              {errors.name && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-3 sm:mb-4 md:mb-6">
              <label htmlFor="email" className="block font-heading font-semibold text-white mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base">Email</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-xs sm:text-sm md:text-base"
                placeholder="your.email@example.com"
                aria-invalid={!!errors.email}
                autoComplete="email"
              />
              {errors.email && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4 sm:mb-6 md:mb-8">
              <label htmlFor="message" className="block font-heading font-semibold text-white mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none text-xs sm:text-sm md:text-base"
                placeholder="Your message..."
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.message}</p>}
            </div>

            {status === 'success' && (
              <div className="mb-3 sm:mb-4 p-2 sm:p-2.5 md:p-3 bg-accent/20 border border-accent/30 rounded-lg text-accent text-[10px] sm:text-xs md:text-sm font-body">
                ✓ Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="mb-3 sm:mb-4 p-2 sm:p-2.5 md:p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-[10px] sm:text-xs md:text-sm font-body">
                ✕ Failed to send message. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-accent to-secondary text-gray-900 font-body font-semibold rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-accent/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-xs sm:text-sm md:text-base"
            >
              <Send size={16} className="sm:w-4.5 sm:h-4.5" />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
