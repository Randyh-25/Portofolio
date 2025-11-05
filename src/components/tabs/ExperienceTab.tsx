import { useState } from 'react';
import { MapPin, Calendar, ArrowLeft, ExternalLink } from 'lucide-react';

interface Experience {
  slug: string;
  org: string;
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

  if (selectedExperience) {
    return (
      <div
        id="panel-experience-detail"
        className="flex-1 px-8 py-12 bg-white overflow-y-auto"
      >
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedExperience(null)}
            className="
              inline-flex items-center gap-2 mb-6 text-primary font-body
              hover:text-primary/80 transition-colors
              focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded px-2 py-1
            "
          >
            <ArrowLeft size={20} />
            Back to Experience
          </button>

          <div className="mb-6">
            <h2 className="font-heading text-3xl font-bold text-brand mb-2">
              {selectedExperience.role}
            </h2>
            <h3 className="font-heading text-xl text-primary mb-4">
              {selectedExperience.org}
            </h3>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 font-body mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {formatPeriod(selectedExperience.period)}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {selectedExperience.location}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="font-heading text-lg font-semibold text-brand mb-3">Overview</h4>
            <p className="font-body text-base text-gray-700 leading-relaxed">
              {selectedExperience.summary}
            </p>
          </div>

          <div className="mb-8">
            <h4 className="font-heading text-lg font-semibold text-brand mb-3">Key Achievements</h4>
            <ul className="space-y-3">
              {selectedExperience.highlights.map((highlight, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span className="font-body text-base text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="font-heading text-lg font-semibold text-brand mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {selectedExperience.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md font-body text-sm bg-gray-100 text-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {selectedExperience.links.length > 0 && (
            <div>
              <h4 className="font-heading text-lg font-semibold text-brand mb-3">Links</h4>
              <div className="space-y-2">
                {selectedExperience.links.map((link, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2 text-primary font-body
                      hover:text-primary/80 transition-colors
                    "
                  >
                    <ExternalLink size={16} />
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
      className="flex-1 px-8 py-12 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-brand mb-8">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <button
              key={exp.slug}
              onClick={() => setSelectedExperience(exp)}
              className="
                w-full text-left p-6 rounded-lg border border-gray-200
                hover:border-primary/30 hover:shadow-md
                transition-all duration-200 bg-white
                focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
              "
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                <div className="min-w-0">
                  <h3 className="font-heading text-xl font-semibold text-brand mb-1 break-words">
                    {exp.role}
                  </h3>
                  <p className="font-body text-lg text-primary">{exp.org}</p>
                </div>
                <span className="
                  px-3 py-1 rounded-full text-xs font-body bg-secondary/10 text-secondary
                  whitespace-nowrap flex-shrink-0 self-start sm:self-auto mt-1 sm:mt-0
                ">
                  {formatPeriod(exp.period)}
                </span>
              </div>

              <p className="font-body text-sm text-gray-600 mb-4">
                {exp.summary}
              </p>

              <div className="space-y-2">
                {exp.highlights.slice(0, 2).map((highlight, idx) => (
                  <div key={idx} className="flex gap-2 text-sm">
                    <span className="text-secondary font-bold">•</span>
                    <span className="font-body text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>

              {index < experiences.length - 1 && (
                <div className="mt-6 border-t border-primary/10" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
