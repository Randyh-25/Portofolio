/* Temporarily disabled corrupted implementation. See ProjectsTab2.tsx for the working version.
import { useState } from 'react';
import { ExternalLink, Github, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  slug: string;
  title: string;
  summary: string;
  status: 'Done' | 'Ongoing';
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

  const filteredProjects = projects.filter(
    (p) => filter === 'All' || p.status === filter
  );

  if (selectedProject) {
    return (
      <div
        id="panel-project-detail"
        className="flex-1 px-8 py-12 bg-white overflow-y-auto no-scrollbar lg:overflow-hidden"
      >
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => {
              setSelectedProject(null);
              setScreenshotIndex(0);
            }}
                  className="flex-1 px-8 py-12 bg-white overflow-y-auto no-scrollbar lg:overflow-hidden"
              inline-flex items-center gap-2 mb-6 text-primary font-body
              hover:text-primary/80 transition-colors
              focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 rounded px-2 py-1
            "
          >
            <ArrowLeft size={20} />
            Back to Projects
          </button>

          <div className="mb-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h2 className="font-heading text-3xl font-bold text-brand">
                {selectedProject.title}
              </h2>
              <span
                className={`
                  px-3 py-1 rounded-full text-sm font-body flex-shrink-0
                  ${selectedProject.status === 'Done'
                    ? 'bg-accent/30 text-text-dark'
                        <h2 className="font-heading text-3xl font-bold text-brand">
                  }
                `}
              >
                {selectedProject.status}
              </span>
            </div>
            <p className="font-body text-base text-gray-700 leading-relaxed">
              {selectedProject.summary}
            </p>
          </div>

          {selectedProject.screenshots.length > 0 && (
            <div className="mb-8">
              <h4 className="font-heading text-lg font-semibold text-brand mb-3">Screenshots</h4>
              <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={selectedProject.screenshots[screenshotIndex].url}
                  alt={selectedProject.screenshots[screenshotIndex].caption}
                  className="w-full h-64 object-cover"
                />
                {selectedProject.screenshots.length > 1 && (
                        <h4 className="font-heading text-lg font-semibold text-brand mb-3">Screenshots</h4>
                    <button
                      onClick={() =>
                        setScreenshotIndex((prev) =>
                          prev > 0 ? prev - 1 : selectedProject.screenshots.length - 1
                        )
                      }
                      className="
                        absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full
                        hover:bg-white transition-colors
                        focus:outline-none focus:ring-2 focus:ring-secondary
                      "
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() =>
                        setScreenshotIndex((prev) =>
                          prev < selectedProject.screenshots.length - 1 ? prev + 1 : 0
                        )
                      }
                      className="
                        absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full
                        hover:bg-white transition-colors
                        focus:outline-none focus:ring-2 focus:ring-secondary
                      "
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                  <p className="text-white text-sm font-body">
                    {selectedProject.screenshots[screenshotIndex].caption}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mb-8">
            <h4 className="font-heading text-lg font-semibold text-brand mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md font-body text-sm bg-gray-100 text-gray-700"
                >
                  {tech}
                      <h4 className="font-heading text-lg font-semibold text-brand mb-3">Technologies</h4>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="font-heading text-lg font-semibold text-brand mb-3">Outcomes & Metrics</h4>
            <ul className="space-y-2">
              {selectedProject.outcomes.map((outcome, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="font-body text-base text-gray-700">{outcome}</span>
                </li>
              ))}
                      <h4 className="font-heading text-lg font-semibold text-brand mb-3">Outcomes & Metrics</h4>
          </div>

          <div className="flex gap-4">
            {selectedProject.demoUrl && (
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 px-4 py-2
                  bg-primary text-white font-body rounded-lg
                  hover:bg-primary/90 transition-colors
                  focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
                "
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
                className="
                  inline-flex items-center gap-2 px-4 py-2
                  bg-gray-800 text-white font-body rounded-lg
                  hover:bg-gray-700 transition-colors
                  focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
                "
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
    <div
      id="panel-projects"
      role="tabpanel"
      aria-labelledby="tab-projects"
      className="flex-1 px-8 py-12 bg-white overflow-y-auto no-scrollbar lg:overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-heading text-3xl font-bold text-brand">Projects</h2>

          <div className="flex gap-2">
            {(['All', 'Done', 'Ongoing'] as FilterStatus[]).map((status) => (
                className="flex-1 px-8 py-12 bg-white overflow-y-auto no-scrollbar lg:overflow-hidden"
                key={status}
                onClick={() => setFilter(status)}
                className={`
                    <h2 className="font-heading text-3xl font-bold text-brand">Projects</h2>
                  focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
                  ${filter === status
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <button
              key={project.slug}
              onClick={() => setSelectedProject(project)}
              className="
                text-left p-5 rounded-lg border border-base/10
                hover:border-primary/30 hover:shadow-md hover:scale-[1.01]
                transition-all duration-200 bg-white
                focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
              "
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="font-heading text-lg font-semibold text-base">
                          text-left p-5 rounded-lg border border-brand/10
                </h3>
                <span
                  className={`
                    px-2 py-1 rounded text-xs font-body flex-shrink-0
                    ${project.status === 'Done'
                      ? 'bg-accent/30 text-text-dark'
                          <h3 className="font-heading text-lg font-semibold text-brand">
                    }
                  `}
                <button
                  {project.status}
                </span>
              </div>

              <p className="font-body text-sm text-gray-600 mb-4 line-clamp-2">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded text-xs font-body bg-gray-100 text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="text-primary font-body text-sm font-medium">
                View Details →
              </div>
                    text-left p-5 rounded-lg border border-brand/10
                    hover:border-primary/30 hover:shadow-md hover:scale-[1.01]
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="font-body text-gray-500">No projects found with this filter.</p>
                    <h3 className="font-heading text-lg font-semibold text-brand">
        )}
      </div>
    </div>
  );
};
*/

export { ProjectsTab } from './ProjectsTab2';
