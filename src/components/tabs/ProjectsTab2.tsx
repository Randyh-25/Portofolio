import { useState } from 'react';
import { ExternalLink, Github, ArrowLeft, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';

interface Project {
  slug: string;
  title: string;
  summary: string;
  thumbnail?: string;
  status: 'Done' | 'Ongoing' | string;
  period: {
    start: string;
    end: string | null;
  };
  tech: string[];
  category: string[];
  screenshots: Array<{
    url: string;
    caption: string;
  }>;
  demoUrl: string;
  repoUrl: string;
  outcomes: string[];
}

interface ProjectsTabProps {
  projects: Project[];
}

type FilterStatus = 'All' | 'Done' | 'Ongoing';

export const ProjectsTab = ({ projects }: ProjectsTabProps) => {
  const [filter, setFilter] = useState<FilterStatus>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [screenshotIndex, setScreenshotIndex] = useState(0);

  const filteredProjects = projects.filter((p) => filter === 'All' || p.status === filter);

  const getThumbnail = (project: Project): string | null => {
    if (project.thumbnail) return project.thumbnail;
    if (project.screenshots.length > 0) return project.screenshots[0].url;
    return null;
  };

  if (selectedProject) {
    return (
      <div id="panel-project-detail" className="w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Sticky Back Button */}
          <div className="sticky top-14 sm:top-16 md:top-18 z-40 mb-4 sm:mb-6 md:mb-8 pt-2">
            <button
              onClick={() => {
                setSelectedProject(null);
                setScreenshotIndex(0);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-xl bg-accent/95 border border-accent/50 text-gray-900 font-body font-semibold text-xs sm:text-sm md:text-base hover:bg-accent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg shadow-lg"
            >
              <ArrowLeft size={16} className="sm:w-4.5 sm:h-4.5" />
              Back to Projects
            </button>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">{selectedProject.title}</h2>
              <span
                className={`px-2.5 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-body flex-shrink-0 font-semibold ${
                  selectedProject.status === 'Done'
                    ? 'bg-accent/30 text-accent'
                    : 'bg-secondary/30 text-secondary'
                }`}
              >
                {selectedProject.status}
              </span>
            </div>
            <p className="font-body text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">{selectedProject.summary}</p>
          </div>

          {selectedProject.screenshots.length > 0 && (
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 shadow-xl">
              <h4 className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4">Screenshots</h4>
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden bg-black/50 aspect-[4/3] sm:aspect-[16/9] min-h-[180px] sm:min-h-[200px]">
                <img
                  src={selectedProject.screenshots[screenshotIndex].url}
                  alt={selectedProject.screenshots[screenshotIndex].caption}
                  className="absolute inset-0 w-full h-full object-contain"
                />
                {selectedProject.screenshots.length > 1 && (
                  <div>
                    <button
                      onClick={() =>
                        setScreenshotIndex((prev) =>
                          prev > 0 ? prev - 1 : selectedProject.screenshots.length - 1
                        )
                      }
                      className="absolute left-1.5 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={16} className="sm:w-4.5 sm:h-4.5 text-white" />
                    </button>
                    <button
                      onClick={() =>
                        setScreenshotIndex((prev) =>
                          prev < selectedProject.screenshots.length - 1 ? prev + 1 : 0
                        )
                      }
                      className="absolute right-1.5 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={16} className="sm:w-4.5 sm:h-4.5 text-white" />
                    </button>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2 sm:p-3 md:p-4 pointer-events-none">
                  <p className="text-white text-[10px] sm:text-xs md:text-sm font-body">{selectedProject.screenshots[screenshotIndex].caption}</p>
                </div>
              </div>
            </div>
          )}

          {selectedProject.tech.length > 0 && (
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 shadow-xl">
              <h4 className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg font-body text-[10px] sm:text-xs md:text-sm bg-white/10 border border-white/20 text-white/80 hover:border-accent/50 transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selectedProject.outcomes.length > 0 && (
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 md:mb-8 shadow-xl">
              <h4 className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4">Outcomes & Metrics</h4>
              <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                {selectedProject.outcomes.map((outcome, index) => (
                  <li key={index} className="flex gap-2 sm:gap-2.5 md:gap-3">
                    <span className="text-accent font-bold flex-shrink-0">✓</span>
                    <span className="font-body text-xs sm:text-sm md:text-base text-white/80">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4">
            {selectedProject.demoUrl && (
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-accent to-secondary text-gray-900 font-body font-semibold rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 text-xs sm:text-sm md:text-base"
              >
                <ExternalLink size={16} className="sm:w-4.5 sm:h-4.5" />
                Live Demo
              </a>
            )}
            {selectedProject.repoUrl && (
              <a
                href={selectedProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white/10 border border-white/30 text-white font-body font-semibold rounded-lg sm:rounded-xl hover:bg-white/20 transition-all duration-300 text-xs sm:text-sm md:text-base"
              >
                <Github size={16} className="sm:w-4.5 sm:h-4.5" />
                Repository
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="panel-projects" role="tabpanel" aria-labelledby="tab-projects" className="w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8 md:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent via-secondary to-white bg-clip-text text-transparent mb-4 sm:mb-6 md:mb-8">Projects</h2>
          
          <div className="flex gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-1.5 sm:pb-2">
            {(['All', 'Done', 'Ongoing'] as FilterStatus[]).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-lg font-body text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
                  filter === status 
                    ? 'bg-gradient-to-r from-accent to-secondary text-gray-900 shadow-lg shadow-accent/50' 
                    : 'bg-white/10 border border-white/20 text-white/70 hover:text-white hover:border-white/40'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {filteredProjects.map((project) => {
            const thumb = getThumbnail(project);
            return (
            <button
              key={project.slug}
              onClick={() => setSelectedProject(project)}
              className="text-left backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg sm:rounded-xl overflow-hidden hover:bg-white/15 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent group"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-video bg-black/30 overflow-hidden">
                {thumb ? (
                  <img
                    src={thumb}
                    alt={`${project.title} thumbnail`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon size={32} className="text-white/20" />
                  </div>
                )}
                <span
                  className={`absolute top-2 right-2 px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-body font-semibold backdrop-blur-sm ${
                    project.status === 'Done'
                      ? 'bg-accent/80 text-gray-900'
                      : 'bg-secondary/80 text-gray-900'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-3 sm:p-4 md:p-5">
              <h3 className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white break-words mb-1.5 sm:mb-2">{project.title}</h3>

              <p className="font-body text-[10px] sm:text-xs md:text-sm text-white/70 mb-2 sm:mb-3 md:mb-4 line-clamp-2">{project.summary}</p>

              {project.tech.length > 0 && (
                <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-2 sm:mb-3 md:mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] md:text-xs font-body bg-white/10 border border-white/20 text-white/70">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] md:text-xs font-body text-white/50">+{project.tech.length - 3}</span>
                  )}
                </div>
              )}

              <div className="text-accent font-body text-[10px] sm:text-xs md:text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">View Details →</div>
              </div>
            </button>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-8 sm:py-12 md:py-16">
            <p className="font-body text-white/50 text-xs sm:text-sm md:text-base">No projects found with this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};