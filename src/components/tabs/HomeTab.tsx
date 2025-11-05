import { Download, ArrowRight } from 'lucide-react';

interface HomeTabProps {
  profile: {
    name: string;
    role: string;
    tagline: string;
    avatar: string;
  };
  onNavigateToProfile: () => void;
}

export const HomeTab = ({ profile, onNavigateToProfile }: HomeTabProps) => {
  return (
    <div
      id="panel-home"
      role="tabpanel"
      aria-labelledby="tab-home"
      className="flex-1 flex items-center justify-center px-8 py-12 bg-surface"
    >
      <div className="max-w-4xl w-full flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white ring-4 ring-primary/20 ring-offset-2 transition-transform duration-300 hover:scale-105 animate-float-slow"
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-brand mb-2">
            {profile.name}
          </h1>
          <h2 className="font-heading text-2xl lg:text-3xl text-primary mb-4">
            {profile.role}
          </h2>
          <p className="font-body text-lg text-gray-700 mb-8 max-w-xl">
            <span className="bg-accent/30 px-2 py-1 rounded">
              {profile.tagline}
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv.pdf';
                link.download = 'CV.pdf';
                link.click();
              }}
              className="
                inline-flex items-center gap-2 px-6 py-3
                bg-primary text-white font-body font-medium rounded-lg
                hover:bg-primary/90 transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
                shadow-md hover:shadow-lg
              "
              aria-label="Download CV as PDF"
            >
              <Download size={20} />
              Download CV
            </button>

            <button
              onClick={onNavigateToProfile}
              className="
                inline-flex items-center gap-2 px-6 py-3
                bg-white text-primary font-body font-medium rounded-lg border-2 border-primary
                hover:bg-primary/5 transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
              "
            >
              View Profile
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
