import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

interface HomeTabProps {
  profile: {
    name: string;
    role: string;
    tagline: string;
    avatar: string;
  };
  links: {
    github: string;
    linkedin: string;
    email: string;
  };
  onNavigateToProfile: () => void;
}

export const HomeTab = ({ profile, links, onNavigateToProfile }: HomeTabProps) => {
  return (
    <div
      id="panel-home"
      role="tabpanel"
      aria-labelledby="tab-home"
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16"
    >
      <div className="max-w-6xl w-full space-y-6 sm:space-y-8 md:space-y-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Avatar Card */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-all duration-500"></div>
              <img
                src={profile.avatar}
                alt={profile.name}
                className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl sm:rounded-2xl object-cover shadow-2xl border border-white/20 backdrop-blur-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Info Card */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:bg-white/15 transition-all duration-300 space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-accent via-secondary to-white bg-clip-text text-transparent mb-2 sm:mb-3 md:mb-4">
                  {profile.name}
                </h1>
                <h2 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl text-accent font-semibold mb-3 sm:mb-4 md:mb-6">
                  {profile.role}
                </h2>
                <p className="font-body text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
                  {profile.tagline}
                </p>
              </div>

              {/* Social Media Links */}
              <div className="pt-3 sm:pt-4 border-t border-white/10">
                <p className="font-heading text-xs sm:text-sm md:text-base text-white/70 mb-2 sm:mb-3">Connect with me</p>
                <div className="flex gap-2 sm:gap-3">
                  <a 
                    href={links.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 sm:p-2.5 md:p-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-secondary/50 hover:scale-110 transition-all duration-300 group"
                    aria-label="Visit GitHub profile"
                  >
                    <Github size={18} className="sm:w-5 sm:h-5 group-hover:text-secondary transition-colors" />
                  </a>
                  <a 
                    href={links.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 sm:p-2.5 md:p-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-accent/50 hover:scale-110 transition-all duration-300 group"
                    aria-label="Visit LinkedIn profile"
                  >
                    <Linkedin size={18} className="sm:w-5 sm:h-5 group-hover:text-accent transition-colors" />
                  </a>
                  <a 
                    href={`mailto:${links.email}`} 
                    className="p-2 sm:p-2.5 md:p-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-accent/50 hover:scale-110 transition-all duration-300 group"
                    aria-label="Send email"
                  >
                    <Mail size={18} className="sm:w-5 sm:h-5 group-hover:text-accent transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4">
              <button
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = '/CV_RandyHendriyawan.pdf';
                  a.download = 'CV_RandyHendriyawan.pdf';
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                }}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-accent to-secondary text-gray-900 font-body font-semibold rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-900 text-xs sm:text-sm md:text-base"
                aria-label="Download CV as PDF"
              >
                <Download size={16} className="sm:w-5 sm:h-5" />
                Download CV
              </button>

              <button
                onClick={onNavigateToProfile}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white/10 border border-white/30 text-white font-body font-semibold rounded-lg sm:rounded-xl hover:bg-white/20 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent text-xs sm:text-sm md:text-base"
              >
                View Profile
                <ArrowRight size={16} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
