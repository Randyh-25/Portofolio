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
      className="flex-1 px-8 py-12 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-brand mb-8">About Me</h2>

        <div className="space-y-6 mb-8">
          {profile.bio.map((paragraph, index) => (
            <p key={index} className="font-body text-base text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="text-primary" size={24} />
            <h3 className="font-heading text-xl font-semibold text-brand">Education</h3>
          </div>
          <p className="font-body text-base text-gray-700">{profile.education}</p>
        </div>

        <div className="mb-8">
          <h3 className="font-heading text-xl font-semibold text-brand mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {profile.softSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full font-body text-sm bg-secondary/10 text-secondary border border-secondary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-heading text-xl font-semibold text-brand mb-4">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {profile.technicalSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full font-body text-sm bg-accent/30 text-text-dark border border-accent/40"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-start pt-4">
          <button
            onClick={onNavigateToExperience}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-body font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            View Experience
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
