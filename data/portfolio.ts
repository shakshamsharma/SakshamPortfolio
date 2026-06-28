import {
  Github,
  Linkedin,
  Mail
} from "lucide-react";
import type {
  Experience,
  NavItem,
  Project,
  SkillCategory,
  SocialLink,
  Stat
} from "@/types/portfolio";

export const personal = {
  name: "Saksham Sharma",
  location: "Palampur, Himachal Pradesh",
  title: "Cloud & DevOps Engineer | Backend Developer",
  tagline: "Building Scalable Cloud Infrastructure and Intelligent Systems.",
  shortDescription:
    "I design and build cloud-native applications, backend systems, and AI-powered solutions with a focus on automation, scalability, and reliability.",
  introduction:
    "I'm a Computer Science Engineer specializing in Cloud Computing, DevOps, and Backend Development. I have hands-on experience with AWS, Python, Linux, Docker, FastAPI, and CI/CD practices, and I enjoy building scalable systems that solve real-world problems.",
  extendedIntro:
    "My work spans cloud infrastructure, distributed systems, automation, and AI-powered applications. Through hands-on projects and continuous learning, I have developed practical experience in designing backend services, automating deployments, and building reliable cloud-native solutions.",
  goal:
    "I am currently seeking opportunities where I can contribute to real-world engineering challenges, deepen my technical expertise, and continue growing as a Cloud and DevOps Engineer.",
  email: "sakshamsharmaa15@gmail.com",
  github: "https://github.com/shakshamsharma",
  githubUsername: "shakshamsharma",
  linkedin: "https://www.linkedin.com/in/shakshamm/",
  resumePath: "/resume/SakshamSharma_Resume.pdf",
  profileImage: "/images/saksham-profile.jpeg",
  coverImage: "/images/mountain-cover.jpeg"
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" }
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: personal.github, icon: Github },
  { label: "LinkedIn", href: personal.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${personal.email}`, icon: Mail }
];

export const typingRoles = [
  "Cloud Engineer",
  "DevOps Engineer",
  "Backend Developer",
  "AI Enthusiast"
];

export const stats: Stat[] = [
  { label: "Projects Completed", value: 3, suffix: "+" },
  { label: "Technologies Learned", value: 18, suffix: "+" },
  { label: "GitHub Repositories", value: 12, suffix: "+" }
];

const icon = (slug: string, color = "0f172a") => `https://cdn.simpleicons.org/${slug}/${color}`;
const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description: "Core languages for backend services, automation, and data handling.",
    skills: [
      { name: "Python", level: 88, iconUrl: icon("python", "3776AB") },
      { name: "SQL", level: 78, iconUrl: icon("postgresql", "4169E1") },
      { name: "Java", level: 68, iconUrl: icon("openjdk", "F89820") }
    ]
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure, delivery, observability, and cloud operations.",
    skills: [
      {
        name: "AWS",
        level: 84,
        iconUrl: devicon("amazonwebservices/amazonwebservices-original-wordmark.svg")
      },
      { name: "Docker", level: 80, iconUrl: icon("docker", "2496ED") },
      { name: "Kubernetes", level: 64, iconUrl: icon("kubernetes", "326CE5") },
      { name: "Terraform", level: 70, iconUrl: icon("terraform", "844FBA") },
      { name: "Jenkins", level: 62, iconUrl: icon("jenkins", "D24939") },
      { name: "GitHub Actions", level: 78, iconUrl: icon("githubactions", "2088FF") },
      { name: "Linux", level: 82, iconUrl: icon("linux", "FCC624") }
    ]
  },
  {
    title: "Backend",
    description: "APIs, persistence, real-time features, and service reliability.",
    skills: [
      { name: "FastAPI", level: 84, iconUrl: icon("fastapi", "009688") },
      { name: "PostgreSQL", level: 76, iconUrl: icon("postgresql", "4169E1") },
      { name: "MongoDB", level: 66, iconUrl: icon("mongodb", "47A248") }
    ]
  },
  {
    title: "Tools",
    description: "Daily engineering tools for collaboration, testing, and automation.",
    skills: [
      { name: "Git", level: 82, iconUrl: icon("git", "F05032") },
      { name: "GitHub", level: 86, iconUrl: icon("github", "181717") },
      { name: "Postman", level: 76, iconUrl: icon("postman", "FF6C37") },
      { name: "VS Code", level: 90, iconUrl: devicon("vscode/vscode-original.svg") },
      { name: "n8n", level: 64, iconUrl: icon("n8n", "EA4B71") }
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: "GokBoru Tech.",
    role: "Cloud Computing with AWS",
    location: "Remote",
    duration: "Jun 2024 - Aug 2024",
    description:
      "Completed industry training focused on AWS cloud services and infrastructure management. Designed and deployed scalable cloud solutions using EC2, Auto Scaling, Elastic Load Balancing, and CloudWatch while gaining practical experience in Linux administration, cloud security, and monitoring.",
    technologies: ["AWS", "EC2", "S3", "RDS", "IAM", "VPC", "Auto Scaling", "CloudWatch", "ELB", "Docker", "Linux"],
    link: "https://github.com/shakshamsharma/AWS-Smart-Ecommerce"
  }
];

export const projects: Project[] = [
  {
    title: "SmartCampus",
    subtitle: "AI Attendance Recognition System",
    period: "Feb 2026 - Mar 2026",
    description:
      "AI-powered attendance management system using facial recognition and real-time processing to automate classroom attendance tracking.",
    features: [
      "Real-time webcam scanning with facial recognition",
      "Role-based student, faculty, and admin workflows",
      "Dashboards, reporting modules, and live attendance updates"
    ],
    technologies: ["Python", "FastAPI", "OpenCV", "WebSockets", "JWT Authentication"],
    github: "https://github.com/shakshamsharma/SmartCampus---AI-Face-Attendance-System",
    accent: "cyan"
  },
  {
    title: "IncidentPilot AI",
    subtitle: "AI-Powered DevOps Incident Assistant",
    period: "Aug 2025 - Sep 2025",
    description:
      "Intelligent incident management platform that analyzes infrastructure alerts, performs AI-driven log analysis, and generates root cause insights and remediation recommendations.",
    features: [
      "Automated incident detection with CloudWatch and SNS",
      "LLM-based log analysis and remediation guidance",
      "PostgreSQL-backed incident tracking with IaC deployment"
    ],
    technologies: ["Python", "FastAPI", "AWS", "Docker", "Terraform", "PostgreSQL", "OpenAI API", "RAG"],
    github: "https://github.com/shakshamsharma/AI-Powered-DevOps-Incident-Response-Analysis-Platform",
    accent: "violet"
  },
  {
    title: "CloudShareX",
    subtitle: "Distributed File Sharing Platform",
    period: "Nov 2025 - Dec 2025",
    description:
      "Secure cloud-based file sharing platform for authenticated uploads and scalable file distribution through AWS-backed delivery.",
    features: [
      "Authenticated uploads and secure file sharing",
      "S3 and CloudFront delivery for reliable access",
      "Docker deployment with GitHub Actions CI/CD"
    ],
    technologies: ["Python", "FastAPI", "AWS", "Docker", "GitHub Actions", "PostgreSQL"],
    github: "https://github.com/shakshamsharma/Distributed-File-Sharing-System",
    accent: "emerald"
  }
];


