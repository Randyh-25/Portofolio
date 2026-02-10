import { useState } from 'react';
import { MapPin, Calendar, ArrowLeft, ExternalLink, Building2 } from 'lucide-react';

interface Experience {
  slug: string;
  org: string;
  logo?: string;
  role: string;
  period: {
    start: string;
    end: string | 'Present';
  };
  location: string;
  summary: string;
  highlights: string[];
  tech: string[];
  links: string[];
}

interface ExperienceTabProps {
  experiences: Experience[];
}

export const ExperienceTab = ({ experiences }: ExperienceTabProps) => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const safeParse = (val: string) => {
    // Handle YYYY or YYYY-MM by appending day for safer parsing
    if (/^\d{4}$/.test(val)) return new Date(`${val}-01-01`);
    if (/^\d{4}-\d{2}$/.test(val)) return new Date(`${val}-01`);
    return new Date(val);
  };

  const formatPeriod = (period: Experience['period']) => {
    const start = safeParse(period.start).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
    const end = period.end === 'Present'
      ? 'Present'
      : safeParse(period.end as string).toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric',
        });
    return `${start} - ${end}`;
  };

  const OrgLogo = ({ logo, org, size = 'md' }: { logo?: string; org: string; size?: 'sm' | 'md' | 'lg' }) => {
    const sizeClasses = {
      sm: 'w-8 h-8 sm:w-10 sm:h-10',
      md: 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14',
      lg: 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20',
    };

    if (logo) {
      return (
        <img
          src={logo}
          alt={`${org} logo`}
          className={`${sizeClasses[size]} rounded-lg sm:rounded-xl object-contain bg-white/10 border border-white/20 p-1 sm:p-1.5 flex-shrink-0`}
        />
      );
    }

    return (
      <div className={`${sizeClasses[size]} rounded-lg sm:rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0`}>
        <Building2 size={size === 'lg' ? 28 : size === 'md' ? 22 : 16} className="text-white/40" />
      </div>
    );
  };

  if (selectedExperience) {
    return (
      <div
        id="panel-experience-detail"
        className="w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16"
      >
        <div className="max-w-4xl mx-auto">
          {/* Sticky Back Button */}
          <div className="sticky top-14 sm:top-16 md:top-18 z-40 mb-4 sm:mb-6 md:mb-8 pt-2">
            <button
              onClick={() => {
                setSelectedExperience(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-xl bg-accent/95 border border-accent/50 text-gray-900 font-body font-semibold text-xs sm:text-sm md:text-base hover:bg-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg shadow-lg"
            >
              <ArrowLeft size={16} className="sm:w-4.5 sm:h-4.5" />
              Back to Experience
            </button>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 shadow-xl">
            <div className="flex items-start gap-3 sm:gap-4 md:gap-5 mb-3 sm:mb-4 md:mb-6">
              <OrgLogo logo={selectedExperience.logo} org={selectedExperience.org} size="lg" />
              <div className="min-w-0">
                <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1.5 sm:mb-2 md:mb-3">
                  {selectedExperience.role}
                </h2>
                <h3 className="font-heading text-base sm:text-lg md:text-xl text-accent">
                  {selectedExperience.org}
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-6 text-[10px] sm:text-xs md:text-sm text-white/70 font-body">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Calendar size={14} className="sm:w-4 sm:h-4" />
                {formatPeriod(selectedExperience.period)}
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <MapPin size={14} className="sm:w-4 sm:h-4" />
                {selectedExperience.location}
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 shadow-xl">
            <h4 className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4">Overview</h4>
            <p className="font-body text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
              {selectedExperience.summary}
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 shadow-xl">
            <h4 className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4">Key Achievements</h4>
            <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {selectedExperience.highlights.map((highlight, index) => (
                <li key={index} className="flex gap-2 sm:gap-2.5 md:gap-3">
                  <span className="text-secondary font-bold flex-shrink-0 mt-0.5">•</span>
                  <span className="font-body text-xs sm:text-sm md:text-base text-white/80">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {selectedExperience.tech.length > 0 && (
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 shadow-xl">
              <h4 className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                {selectedExperience.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg font-body text-[10px] sm:text-xs md:text-sm bg-white/10 border border-white/20 text-white/80 hover:border-accent/50 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selectedExperience.links.length > 0 && (
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
              <h4 className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4">Links</h4>
              <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                {selectedExperience.links.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-1.5 sm:gap-2 text-accent font-body text-xs sm:text-sm md:text-base
                      hover:text-accent/80 transition-colors break-all
                    "
                  >
                    <ExternalLink size={14} className="flex-shrink-0 sm:w-4 sm:h-4" />
                    {link}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      id="panel-experience"
      role="tabpanel"
      aria-labelledby="tab-experience"
      className="w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent via-secondary to-white bg-clip-text text-transparent mb-6 sm:mb-8 md:mb-12">Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {experiences.map((exp) => (
            <button
              key={exp.slug}
              onClick={() => setSelectedExperience(exp)}
              className="
                text-left backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6
                hover:bg-white/15 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-accent
              "
            >
              <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                <OrgLogo logo={exp.logo} org={exp.org} size="sm" />
                <div className="min-w-0">
                  <h3 className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white break-words mb-0.5 sm:mb-1">
                    {exp.role}
                  </h3>
                  <p className="font-body text-xs sm:text-sm md:text-base text-accent">{exp.org}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4 text-[10px] sm:text-xs md:text-sm text-white/60 font-body">
                <Calendar size={12} className="sm:w-3.5 sm:h-3.5" />
                {formatPeriod(exp.period)}
              </div>

              <p className="font-body text-[10px] sm:text-xs md:text-sm text-white/70 line-clamp-2">
                {exp.summary}
              </p>

              {exp.highlights.length > 0 && (
                <div className="mt-2 sm:mt-3 md:mt-4 pt-2 sm:pt-3 md:pt-4 border-t border-white/10">
                  <div className="space-y-0.5 sm:space-y-1">
                    {exp.highlights.slice(0, 1).map((highlight, idx) => (
                      <div key={idx} className="flex gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-sm">
                        <span className="text-secondary font-bold flex-shrink-0">•</span>
                        <span className="font-body text-white/70 line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
