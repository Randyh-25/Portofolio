export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work' | 'volunteer' | 'education';
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}