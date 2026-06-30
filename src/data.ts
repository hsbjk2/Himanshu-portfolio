import { Project, Skill, EducationItem, AchievementItem, SocialLink, GalleryItem } from './types';

export const personalInfo = {
  name: "Himanshu Sharma",
  brandName: "HSBJK",
  fullName: "Himanshu Sharma (HSBJK)",
  roles: [
    "Founder & CEO of HSBJK",
    "AI / ML Student",
    "Full Stack Developer",
    "Tech Entrepreneur"
  ],
  typingRoles: [
    "AI Enthusiast",
    "Full Stack Developer",
    "Software Developer",
    "Tech Entrepreneur"
  ],
  bio: "I'm a passionate Full Stack Developer and AI/ML student who loves building polished, real-world software products. As the Founder of HSBJK, I strive to combine advanced software engineering with Artificial Intelligence to solve complex problems and create high-end digital experiences.",
  detailedAbout: "I am currently pursuing my B.Tech in Artificial Intelligence & Machine Learning (2026-2029) at JCDM College of Engineering in Sirsa, Haryana. My focus is on developing responsive, performant web applications and training predictive machine learning models. I enjoy learning about prompt engineering, cloud computing, and advanced frontend frameworks. My long-term goal is to lead innovation at the intersection of AI development and tech entrepreneurship.",
  location: "Sirsa, Haryana, India",
  email: "support.hsbjk@gmail.com",
  website: "https://github.com/hsbjk2",
  github: "https://github.com/hsbjk2",
  linkedin: "https://www.linkedin.com/in/himanshubajekan/",
  instagram: "https://www.instagram.com/himanshubajekan/",
  logoIcon: "/images/HSBJK_Logo.png", // Monogram logo on white
  logoText: "input_file_1.png", // Monogram logo with HSBJK text
  profilePic: "/images/hero.png", // Portrait photo
  splitPic: "/images/desk.png", // Split workspace photo
  resumeUrl: "#" // Will generate a beautiful dynamic digital resume printable modal or download link!
};

export const skillsData: Skill[] = [
  // Programming
  { name: "JavaScript", level: 90, category: "programming" },
  { name: "Python", level: 85, category: "programming" },
  { name: "C", level: 80, category: "programming" },
  { name: "C++", level: 75, category: "programming" },
  
  // Frontend
  { name: "HTML5", level: 95, category: "frontend" },
  { name: "CSS3", level: 90, category: "frontend" },
  { name: "React", level: 88, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 82, category: "backend" },
  { name: "Express.js", level: 85, category: "backend" },
  
  // Database
  { name: "MongoDB", level: 80, category: "database" },
  { name: "Firebase", level: 85, category: "database" },
  
  // Tools
  { name: "Git", level: 85, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "Vercel", level: 88, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  
  // AI/ML
  { name: "Machine Learning", level: 78, category: "ai_ml" },
  { name: "Prompt Engineering", level: 92, category: "ai_ml" },
  { name: "Artificial Intelligence", level: 80, category: "ai_ml" }
];

export const projectsData: Project[] = [
  {
    id: "qr-cloud",
    title: "QR Cloud",
    description: "Advanced QR code generation and management platform featuring dynamic QR generation, real-time analytics, secure user authentication, and persistent cloud storage. Developed for modern businesses looking to track high-performance campaigns.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "QR Logic"],
    link: "https://qr-flow-hsbjk.vercel.app/",
    github: "https://github.com/hsbjk2/qr-cloud",
    image: "/images/QRCloud.png",
    category: "web",
    isFeatured: true
  },
  {
    id: "HSBJK-Video-Studio",
    title: "HSBJK Video Studio",
    description: "A multimedia platform hosted on GitHub that organizes video content and demonstrates structured web design and deployment.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript"],
    link: "https://hsbjk2.github.io/main-page-of-HSBJK-video-studio/",
    github: "https://github.com/hsbjk2/main-page-of-HSBJK-video-studio",
    image: "video_studio.png",
    category: "web",
    isFeatured: true
  },
{
    id: "Keyboard-Diagnostics-Suite",
    title: "Keyboard Diagnostics Suite",
    description: "Free browser-based keyboard diagnostics platform for checking keys, measuring typing speed, testing combinations, verifying rollover, and analyzing repeat rate in real time.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "TypeScript"],
    link: "https://hsbjk-keyboard-diagnostics.vercel.app/",
    github: "https://github.com/hsbjk2/HSBJK-Keyboard-Diagnostics",
    image: "/images/Keyboard_suite.png",
    category: "web",
    isFeatured: true
  },

  {
    id: "hsbjk-wallify",
    title: "HSBJK Wallify",
    description: "Premium desktop & mobile wallpaper hub with resolution filters, visual grids, download utilities, and beautiful material dark mode interface. Built with search categorization for creative users.",
    tags: ["React", "Tailwind CSS", "Vercel", "Media Storage"],
    link: "#",
    github: "https://github.com/hsbjk2/wallify",
    image: "/images/Wallify.png",
    category: "tool",
    isFeatured: false
  },
  {
    id: "calclogic",
    title: "CalcLogic",
    description: "Advanced mathematical calculator application inspired by iOS style guidelines with fluid layouts, arithmetic history logs, memory keys, dark themes, and error correction systems.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    link: "#",
    github: "https://github.com/hsbjk2/calclogic",
    image: "/images/Calclogic.png",
    category: "tool",
    isFeatured: false
  },
  {
    id: "hsbjk-image-pdf-studio",
    title: "HSBJK Image PDF Studio",
    description: "Professional multi-utility toolkit for on-the-fly image manipulation, format conversions, and PDF assembly. Supports secure client-side batch processing to ensure document privacy.",
    tags: ["React", "PDF-Lib", "Client-Side Processing", "Tailwind"],
    link: "#",
    github: "https://github.com/hsbjk2/image-pdf-studio",
    image: "/images/imagepdf_studio.png",
    category: "tool",
    isFeatured: true
  }
];

export const educationData: EducationItem[] = [
  {
    year: "2026 – 2029",
    degree: "B.Tech Artificial Intelligence & Machine Learning",
    institution: "JCDM College of Engineering",
    location: "Sirsa, Haryana, India",
    description: "Deep dive into statistical learning, neural networks, advanced programming, data structures, and computer vision systems. Active lead in technical workshops and student developer clubs."
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "projects",
    label: "Projects Completed",
    value: 15,
    suffix: "+",
    icon: "FolderGit2"
  },
  {
    id: "websites",
    label: "Websites Developed",
    value: 10,
    suffix: "+",
    icon: "Globe"
  },
  {
    id: "technologies",
    label: "Technologies Learned",
    value: 12,
    suffix: "+",
    icon: "Cpu"
  },
  {
    id: "experience",
    label: "Years of Tech Venture",
    value: 3,
    suffix: "+",
    icon: "Briefcase"
  }
];

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/hsbjk2", icon: "Github" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/himanshubajekan/", icon: "Linkedin" },
  { platform: "Instagram", url: "https://www.instagram.com/himanshubajekan/", icon: "Instagram" },
  { platform: "Email", url: "mailto:support.hsbjk@gmail.com", icon: "Mail" }
];

// GALLERY CONFIGURATION SECTION
// You can add, edit, or remove pictures/images directly in this array.
// Available categories: 'profile', 'workspace', 'activities'
export const galleryData: GalleryItem[] = [
  {
    id: 'profile-main',
    title: 'Founder & CEO Portrait',
    description: 'Official portrait of Himanshu Sharma, captured for corporate releases.',
    url: 'input_file_2.png',
    category: 'profile',
    createdAt: 'June 2026'
  },
  {
    id: 'workspace-main',
    title: 'Cognitive Development Center',
    description: 'Workspace setup where machine learning models and full-stack software suites are designed.',
    url: 'input_file_3.png',
    category: 'workspace',
    createdAt: 'May 2026'
  },
  {
    id: 'ai-matrix',
    title: 'Neural Synthesizers',
    description: 'Generative matrix art symbolizing statistical deep learning networks.',
    url: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop',
    category: 'activities',
    createdAt: 'April 2026'
  },
  {
    id: 'workspace-terminal',
    title: 'Custom Keyboard & Monitors',
    description: 'Macro mechanical keyboards configured for highly dense code-flow efficiency.',
    url: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80&w=600&auto=format&fit=crop',
    category: 'workspace',
    createdAt: 'March 2026'
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Grid Visualizer',
    description: 'Interactive telemetry matrix used to log server-side performance vectors.',
    url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop',
    category: 'activities',
    createdAt: 'June 2026'
  }
];

