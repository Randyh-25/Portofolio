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
      className="flex-1 px-8 py-12 bg-white"
    >
      <div className="max-w-3xl mx-auto">
  <h2 className="font-heading text-3xl font-bold text-brand mb-8">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-heading text-xl font-semibold text-brand mb-4">
              Send me a message
            </h3>
            <p className="font-body text-gray-600 mb-6">
              Have a question or want to work together? Fill out the form and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-3 text-gray-700 hover:text-primary
                  transition-colors font-body
                  focus:outline-none focus:ring-2 focus:ring-secondary rounded px-2 py-1
                "
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-3 text-gray-700 hover:text-primary
                  transition-colors font-body
                  focus:outline-none focus:ring-2 focus:ring-secondary rounded px-2 py-1
                "
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${links.email}`}
                className="
                  flex items-center gap-3 text-gray-700 hover:text-primary
                  transition-colors font-body
                  focus:outline-none focus:ring-2 focus:ring-secondary rounded px-2 py-1
                "
              >
                <Mail size={20} />
                <span>{links.email}</span>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
              <div>
                <label htmlFor="name" className="block font-body text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`
                    w-full px-4 py-2 rounded-lg border font-body
                    focus:outline-none focus:ring-2 focus:ring-secondary
                    ${errors.name ? 'border-red-500' : 'border-gray-300'}
                  `}
                  placeholder="Randy Hendriyawan"
                  aria-invalid={!!errors.name}
                  required
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm font-body mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block font-body text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`
                    w-full px-4 py-2 rounded-lg border font-body
                    focus:outline-none focus:ring-2 focus:ring-secondary
                    ${errors.email ? 'border-red-500' : 'border-gray-300'}
                  `}
                  placeholder="your.email@example.com"
                  aria-invalid={!!errors.email}
                  required
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm font-body mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block font-body text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className={`
                    w-full px-4 py-2 rounded-lg border font-body resize-none
                    focus:outline-none focus:ring-2 focus:ring-secondary
                    ${errors.message ? 'border-red-500' : 'border-gray-300'}
                  `}
                  placeholder="Your message..."
                  aria-invalid={!!errors.message}
                  required
                  autoComplete="off"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm font-body mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`
                  w-full flex items-center justify-center gap-2 px-6 py-3
                  rounded-lg font-body font-medium focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
                  ${status === 'sending' ? 'bg-primary/60 text-white cursor-not-allowed' : 'bg-primary text-white hover:bg-primary/90'}
                `}
              >
                <Send size={18} />
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-accent/20 border border-accent rounded-lg">
                  <p className="text-text-dark font-body text-sm">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-300 rounded-lg">
                  <p className="text-red-700 font-body text-sm">
                    Sorry, failed to send your message. Please check your configuration or try again later.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
