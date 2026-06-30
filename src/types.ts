export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image: string;
  category: 'web' | 'ai' | 'tool' | 'mobile' | 'all';
  isFeatured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100 for visual progress if needed
  category: 'programming' | 'frontend' | 'backend' | 'database' | 'tools' | 'ai_ml';
}

export interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'profile' | 'workspace' | 'activities';
  createdAt: string;
}

