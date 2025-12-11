import { useState } from 'react';
import { ExternalLink, Github, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  slug: string;
  title: string;
  summary: string;
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

  if (selectedProject) {
    return (
      <div id="panel-project-detail" className="w-full min-h-screen px-3 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => {
              setSelectedProject(null);
              setScreenshotIndex(0);
            }}
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 text-accent font-body text-sm sm:text-base hover:text-accent/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </button>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{selectedProject.title}</h2>
              <span
                className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-body flex-shrink-0 font-semibold ${
                  selectedProject.status === 'Done'
                    ? 'bg-accent/30 text-accent'
                    : 'bg-secondary/30 text-secondary'
                }`}
              >
                {selectedProject.status}
              </span>
            </div>
            <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">{selectedProject.summary}</p>
          </div>

          {selectedProject.screenshots.length > 0 && (
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-xl">
              <h4 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-white mb-4">Screenshots</h4>
              <div className="relative rounded-xl overflow-hidden bg-black/50 aspect-[4/3] sm:aspect-[16/9] min-h-[200px]">
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
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={18} className="text-white" />
                    </button>
                    <button
                      onClick={() =>
                        setScreenshotIndex((prev) =>
                          prev < selectedProject.screenshots.length - 1 ? prev + 1 : 0
                        )
                      }
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={18} className="text-white" />
                    </button>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4 pointer-events-none">
                  <p className="text-white text-xs sm:text-sm font-body">{selectedProject.screenshots[screenshotIndex].caption}</p>
                </div>
              </div>
            </div>
          )}

          {selectedProject.tech.length > 0 && (
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-xl">
              <h4 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-white mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-body text-xs sm:text-sm bg-white/10 border border-white/20 text-white/80 hover:border-accent/50 transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selectedProject.outcomes.length > 0 && (
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 shadow-xl">
              <h4 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-white mb-4">Outcomes & Metrics</h4>
              <ul className="space-y-2 sm:space-y-3">
                {selectedProject.outcomes.map((outcome, index) => (
                  <li key={index} className="flex gap-2 sm:gap-3">
                    <span className="text-accent font-bold flex-shrink-0">✓</span>
                    <span className="font-body text-sm sm:text-base text-white/80">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {selectedProject.demoUrl && (
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent to-secondary text-gray-900 font-body font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 text-sm sm:text-base"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            {selectedProject.repoUrl && (
              <a
                href={selectedProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border border-white/30 text-white font-body font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
              >
                <Github size={18} />
                Repository
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="panel-projects" role="tabpanel" aria-labelledby="tab-projects" className="w-full min-h-screen px-3 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent via-secondary to-white bg-clip-text text-transparent mb-6 sm:mb-8">Projects</h2>
          
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {(['All', 'Done', 'Ongoing'] as FilterStatus[]).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-body text-sm sm:text-base font-semibold whitespace-nowrap transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <button
              key={project.slug}
              onClick={() => setSelectedProject(project)}
              className="text-left backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl p-4 sm:p-6 hover:bg-white/15 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <div className="flex items-start justify-between gap-2 mb-3 sm:mb-4">
                <h3 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-white break-words">{project.title}</h3>
                <span
                  className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-body flex-shrink-0 font-semibold ${
                    project.status === 'Done' 
                      ? 'bg-accent/30 text-accent' 
                      : 'bg-secondary/30 text-secondary'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="font-body text-xs sm:text-sm text-white/70 mb-3 sm:mb-4 line-clamp-2">{project.summary}</p>

              {project.tech.length > 0 && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 sm:px-3 py-1 rounded-md text-xs font-body bg-white/10 border border-white/20 text-white/70">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 sm:px-3 py-1 rounded-md text-xs font-body text-white/50">+{project.tech.length - 3}</span>
                  )}
                </div>
              )}

              <div className="text-accent font-body text-xs sm:text-sm font-semibold">View Details →</div>
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <p className="font-body text-white/50 text-sm sm:text-base">No projects found with this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};