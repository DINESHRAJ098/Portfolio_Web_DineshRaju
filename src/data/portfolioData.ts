import { ProjectItem, EducationItem, ExperienceItem, CertificationItem, SkillCategory } from '../types';

export const personalInfo = {
  name: "Rathnakaram Dinesh Raju",
  shortName: "Dinesh Raju",
  title: "AI/ML Enthusiast & Full-Stack Developer",
  subheading: "Computer Science Undergraduate (B.Tech, Expected April 2027)",
  location: "Kurnool, Andhra Pradesh, India",
  phone: "+91 8309547352",
  email: "dineshrajusmile@gmail.com",
  linkedin: "https://linkedin.com/in/dinesh-raju-420201231",
  linkedinDisplay: "linkedin.com/in/dinesh-raju-420201231",
  github: "https://github.com/DINESHRAJU98",
  githubDisplay: "github.com/DINESHRAJU98",
  portfolioUrl: "https://dineshpotfolio.ccbp.tech",
  portfolioDisplay: "dineshpotfolio.ccbp.tech",
  statusBadge: "Open to Internships & AI/ML Roles",
  aboutBio: "Computer Science undergraduate (B.Tech, graduating April 2027) focused on AI/ML and applied Large Language Model (LLM) work, with hands-on experience in prompt engineering, Retrieval-Augmented Generation (RAG), conversational data analytics, and generative AI tools through mentor-guided internships and self-driven projects. Comfortable working with NumPy and Pandas for data handling, breaking down problems into structured prompts, iterating on model outputs, and communicating technical work clearly.",
};

export const stats = [
  { label: "Graduation Year", value: "2027", detail: "Sandip University, B.Tech CSE" },
  { label: "Internships Completed", value: "2", detail: "Edunet Foundation & VOIS" },
  { label: "Key Web & AI Projects", value: "2+", detail: "Live Deployed Web Apps" },
  { label: "Industry Credentials", value: "4+", detail: "IBM AI, Hackathons & Sites" },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "AI/ML & LLMs",
    iconName: "Cpu",
    skills: [
      "Prompt Engineering",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Agentic AI Concepts",
      "Generative AI Tools",
      "Conversational Data Analytics",
    ],
  },
  {
    category: "Programming Languages",
    iconName: "Code2",
    skills: [
      "Python",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Frontend & Backend",
    iconName: "Layers",
    skills: [
      "React.js",
      "Node.js",
      "REST APIs",
      "Responsive Design",
      "Tailwind CSS",
      "Vercel Deployment",
    ],
  },
  {
    category: "Data & Analysis",
    iconName: "BarChart3",
    skills: [
      "NumPy",
      "Pandas",
      "SQL",
      "Data Manipulation",
      "Model Output Iteration",
    ],
  },
  {
    category: "Core Strengths",
    iconName: "Sparkles",
    skills: [
      "Problem Solving",
      "Clear Technical Communication",
      "Time Management",
      "Fast Adaptability",
      "Self-Motivated Learner",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "crisis-management",
    title: "Crisis Management Solutions",
    tagline: "Web-based platform to manage and coordinate rapid emergency responses",
    description: "A specialized emergency response coordination web platform designed to streamline communication and logistical task allocations during crisis scenarios with high reliability and intuitive UX.",
    bullets: [
      "Developed a responsive web-based platform to help manage and coordinate responses during critical crisis situations.",
      "Engineered frontend architecture prioritizing rapid usability, accessibility, and high performance across devices.",
      "Built with clean, maintainable, modular, and testable code structure adhering to industry best practices.",
      "Implemented seamless view layouts with quick-access status boards and emergency reporting flows."
    ],
    techStack: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive UI", "Vercel"],
    liveUrl: "https://crisis-management-solutions.vercel.app",
    githubUrl: "https://github.com/DINESHRAJU98/CrisisManagementSolutions",
    category: "Frontend",
    featured: true,
  },
  {
    id: "trust-layer-os",
    title: "Trust Layer OS",
    tagline: "End-to-end web application focused on trust and verification workflows",
    description: "A verification platform architecture built to secure transactional trust pipelines, audit validation workflows, and provide a tamper-resistant operational dashboard.",
    bullets: [
      "Architected and deployed an end-to-end web application focused on trust and verification workflows.",
      "Handled full-lifecycle development from user interface design to production deployment.",
      "Maintained the application as a live, functioning production deployment on Vercel.",
      "Applied systematic iterative testing and validation passes to ensure enterprise-grade stability and reliability."
    ],
    techStack: ["React.js", "Node.js", "REST APIs", "Modern CSS", "Vercel"],
    liveUrl: "https://trust-layer-os.vercel.app",
    category: "Full-Stack",
    featured: true,
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Conversational Data Analytics with LLMs — Intern",
    organization: "Edunet Foundation",
    program: "VOIS for Tech Program (AICTE, in association with Vodafone Idea Foundation)",
    period: "Sep 2025 – Oct 2025",
    bullets: [
      "Completed a 4-week mentor-guided intensive internship crafting and refining high-precision prompts for LLMs to drive conversational data analytics.",
      "Spearheaded hands-on case studies across agriculture, science & technology, and business operations domains.",
      "Worked independently under mentor guidance to design an end-to-end LLM-based analytics workflow, continuously iterating on prompts to maximize output accuracy and quality.",
      "Delivered comprehensive technical project documentation within the stipulated timeline."
    ]
  },
  {
    role: "Artificial Intelligence & Cloud Technology — Intern",
    organization: "Edunet Foundation AICTE",
    mode: "Online Mode",
    period: "Sep 2025 – Oct 2025",
    bullets: [
      "Completed a structured professional online internship covering foundational AI/ML concepts and architectures.",
      "Acquired practical exposure to model deployment workflows and cloud technology fundamentals.",
      "Engaged in hands-on laboratories exploring modern AI application pipelines."
    ]
  }
];

export const educationHistory: EducationItem[] = [
  {
    institution: "Sandip University",
    degree: "B.Tech in Computer Science and Engineering",
    field: "Computer Science & Engineering (AI/ML Specialization Focus)",
    period: "2023 – 2027",
    location: "Nashik, India",
    description: "Expected Graduation: April 2027. Coursework focused on algorithms, data structures, artificial intelligence, software engineering, and database systems.",
    highlight: "Expected April 2027"
  },
  {
    institution: "Sri Bhavishya Junior College",
    degree: "Intermediate (Class XII)",
    field: "Mathematics, Physics, Chemistry (MPC)",
    period: "2021 – 2023",
    description: "Higher secondary education building core scientific, analytical, and mathematical foundations.",
    highlight: "MPC Stream"
  },
  {
    institution: "Sri Chaitanya High School",
    degree: "10th Standard (SSC)",
    period: "2020 – 2021",
    description: "Secondary school certificate with high distinction in STEM and computer fundamentals.",
    highlight: "Secondary School Certificate"
  }
];

export const certifications: CertificationItem[] = [
  {
    title: "IBM Artificial Intelligence (Skill Credential)",
    date: "October 2025",
    issuer: "IBM"
  },
  {
    title: "AI Academia Certification",
    date: "June 2025",
    issuer: "AI Academia"
  },
  {
    title: "Hack with India",
    date: "August 2025",
    issuer: "Hack With India"
  },
  {
    title: "Karbon Sites Web Development",
    date: "September 2025",
    issuer: "Karbon Sites"
  }
];

export const hackathons = [
  {
    title: "Idea to Impact Hackathon (Offline)",
    date: "August 2, 2026",
    description: "Participated in an offline hackathon to brainstorm and build rapid technology prototypes solving real-world challenges.",
    type: "Offline National Hackathon"
  }
];
