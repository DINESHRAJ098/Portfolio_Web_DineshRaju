export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'Full-Stack' | 'AI & Web' | 'Frontend';
  featured?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field?: string;
  period: string;
  location?: string;
  description?: string;
  highlight?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  program?: string;
  period: string;
  mode?: string;
  bullets: string[];
}

export interface CertificationItem {
  title: string;
  date: string;
  issuer: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}
