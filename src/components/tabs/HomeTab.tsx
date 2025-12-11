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
      className="w-full min-h-screen flex items-center justify-center px-3 sm:px-6 lg:px-8 py-12 sm:py-20"
    >
      <div className="max-w-5xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Avatar Card with Glassmorphism */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-all duration-500"></div>
              <img
                src={profile.avatar}
                alt={profile.name}
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-2xl object-cover shadow-2xl border border-white/20 backdrop-blur-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Content Card with Glassmorphism */}
          <div className="space-y-6 sm:space-y-8">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 shadow-xl hover:bg-white/15 transition-all duration-300">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-accent via-secondary to-white bg-clip-text text-transparent mb-3 sm:mb-4">
                {profile.name}
              </h1>
              <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl text-accent font-semibold mb-4 sm:mb-6">
                {profile.role}
              </h2>
              <p className="font-body text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
                {profile.tagline}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = '/CV_RandyHendriyawan.pdf';
                  a.download = 'CV_RandyHendriyawan.pdf';
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                }}
                className="
                  inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4
                  bg-gradient-to-r from-accent to-secondary text-gray-900 font-body font-semibold rounded-xl
                  hover:shadow-lg hover:shadow-accent/50 transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900
                  text-sm sm:text-base
                "
                aria-label="Download CV as PDF"
              >
                <Download size={20} />
                Download CV
              </button>

              <button
                onClick={onNavigateToProfile}
                className="
                  inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4
                  bg-white/10 border border-white/30 text-white font-body font-semibold rounded-xl
                  hover:bg-white/20 hover:border-white/50 transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-accent
                  text-sm sm:text-base
                "
              >
                View Profile
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
