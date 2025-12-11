import { GraduationCap, ArrowRight } from 'lucide-react';

interface ProfileTabProps {
  profile: {
    bio: string[];
    education: string;
    softSkills: string[];
    technicalSkills: string[];
  };
  onNavigateToExperience: () => void;
}

export const ProfileTab = ({ profile, onNavigateToExperience }: ProfileTabProps) => {
  return (
    <div
      id="panel-profile"
      role="tabpanel"
      aria-labelledby="tab-profile"
      className="w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent via-secondary to-white bg-clip-text text-transparent mb-6 sm:mb-8 md:mb-12">About Me</h2>

        {/* Bio Section */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 md:mb-12 shadow-xl">
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {profile.bio.map((paragraph, index) => (
              <p key={index} className="font-body text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Grid of Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          {/* Education Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-accent/20 border border-accent/30">
                <GraduationCap className="text-accent" size={20} />
              </div>
              <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white">Education</h3>
            </div>
            <p className="font-body text-xs sm:text-sm md:text-base text-white/70">{profile.education}</p>
          </div>

          {/* Stats Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:bg-white/15 transition-all duration-300">
            <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4">Quick Stats</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/70 font-body text-xs sm:text-sm md:text-base">Soft Skills</span>
                <span className="text-accent font-heading font-bold text-base sm:text-lg md:text-xl">{profile.softSkills.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70 font-body text-xs sm:text-sm md:text-base">Tech Skills</span>
                <span className="text-secondary font-heading font-bold text-base sm:text-lg md:text-xl">{profile.technicalSkills.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {/* Soft Skills */}
          <div>
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="w-1 h-6 sm:h-7 md:h-8 bg-gradient-to-b from-accent to-secondary rounded-full"></span>
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 md:gap-4">
              {profile.softSkills.map((skill) => (
                <div
                  key={skill}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg sm:rounded-xl p-3 sm:p-3.5 md:p-4 text-white/80 font-body text-xs sm:text-sm md:text-base hover:bg-white/15 hover:border-accent/50 transition-all duration-300 text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-5 md:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="w-1 h-6 sm:h-7 md:h-8 bg-gradient-to-b from-secondary to-accent rounded-full"></span>
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5 md:gap-3 lg:gap-4">
              {profile.technicalSkills.map((skill) => (
                <div
                  key={skill}
                  className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg sm:rounded-xl p-2 sm:p-2.5 md:p-3 lg:p-4 text-white/80 font-body text-[10px] sm:text-xs md:text-sm hover:bg-white/15 hover:border-secondary/50 transition-all duration-300 text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-12 md:mt-16 flex justify-center">
          <button
            onClick={onNavigateToExperience}
            className="inline-flex items-center gap-2 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-accent to-secondary text-gray-900 font-body font-bold rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 text-xs sm:text-sm md:text-base"
          >
            View Experience
            <ArrowRight size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
