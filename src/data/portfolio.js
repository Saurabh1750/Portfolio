import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import Saurabh from "../assets/Saurabh.png";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const personalInfo = {
  name: "Saurabh Sharma",
  title: "Full-Stack Developer",
  email: "saurabshaa@gmail.com",
  phone: "7018154194",
  location: "Mandi, Himachal Pradesh, India",
  linkedin: "https://linkedin.com/in/saurabh-50903a330",
  github: "#",
  image: Saurabh,
  about:
    "Aspiring Full-Stack Developer pursuing MCA at Chandigarh University with hands-on experience in modern web development. Passionate about building scalable, efficient, and user-friendly applications using the MERN stack. Strong foundation in frontend and backend technologies with a continuous learning mindset.",
  highlights: [
    "Building full-stack experiences with the MERN stack and a strong frontend eye.",
    "Focused on scalable architecture, clean code, and smooth user journeys.",
    "Actively growing through hands-on projects, certifications, and modern tooling.",
  ],
  goals: [
    "Contribute to production-grade products that solve real user and business problems.",
    "Deepen expertise in backend systems, APIs, cloud deployment, and performance optimization.",
  ],
};

export const heroStats = [
  { label: "Projects Built", value: "03+" },
  { label: "Core Stack", value: "MERN" },
  { label: "Certifications", value: "02" },
];

export const socialLinks = [
  {
    label: "Email",
    icon: FaEnvelope,
    href: "mailto:saurabshaa@gmail.com",
  },
  {
    label: "Phone",
    icon: FaPhone,
    href: "tel:+917018154194",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/saurabh-50903a330",
  },
  {
    label: "GitHub",
    icon: FaGithub,
    href: "#",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    description: "Crafting polished, responsive interfaces with modern JavaScript tooling.",
    skills: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 87 },
      { name: "Tailwind CSS", level: 84 },
    ],
  },
  {
    title: "Backend",
    description: "Designing APIs and business logic for reliable web applications.",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
    ],
  },
  {
    title: "Database",
    description: "Working with structured and document-based data models.",
    skills: [
      { name: "MongoDB", level: 81 },
      { name: "MySQL", level: 76 },
    ],
  },
  {
    title: "Tools",
    description: "Using practical tools that support development, debugging, and delivery.",
    skills: [
      { name: "Git", level: 83 },
      { name: "GitHub", level: 82 },
      { name: "Postman", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "SQL Workbench", level: 74 },
      { name: "WordPress", level: 72 },
      { name: "Tableau", level: 68 },
    ],
  },
];

export const projects = [
  {
    title: "Rojgar Sathi",
    subtitle: "Job Portal for Unorganized Workers",
    description:
      "A full-stack job platform tailored for unorganized workers with role-based experiences, real-time communication, and multilingual support.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO"],
    features: [
      "Secure authentication",
      "Role-based dashboards",
      "Job posting and management",
      "Real-time chat system",
      "Notifications and file uploads",
      "Multilingual responsive design",
    ],
    github: "https://github.com/Saurabh1750/Rojgarsathi",
    demo: "https://rojgar-sathi-v1hf.vercel.app/",
  },
  {
    title: "Prime Stream",
    subtitle: "Responsive Movie Discovery Experience",
    description:
      "A sleek front-end movie browsing application focused on entertainment discovery, dynamic content rendering, and watchlist interactions.",
    stack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Movie search",
      "Category browsing",
      "Dynamic movie pages",
      "Watchlist functionality",
      "Trailer playback",
      "Responsive UI",
    ],
    github: "https://github.com/Saurabh1750/Amazon-prime",
    demo: "https://amazon-prime-three.vercel.app/",
  },
  {
    title: "Student Management System",
    subtitle: "CRUD Workflow with Reusable React Components",
    description:
      "A React-based student management interface that streamlines CRUD operations while keeping the user experience clear and responsive.",
    stack: ["React.js"],
    features: [
      "Add students",
      "Update students",
      "Delete students",
      "Search and filter",
      "Responsive interface",
      "Reusable components",
    ],
    github: "https://github.com/Saurabh1750/Student-Mangement-System",
    demo: "#",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Chandigarh University",
    duration: "2024 - 2026",
    score: "SGPA: 7.8",
  },
  {
    degree: "Bachelor of Education (B.Ed)",
    institution: "Himachal Pradesh University",
    duration: "2020 - 2022",
    score: "Percentage: 71%",
  },
  {
    degree: "Bachelor of Science (B.Sc)",
    institution: "Himachal Pradesh University",
    duration: "2016 - 2019",
    score: "CGPA: 5.8",
  },
];

export const certifications = [
  {
    title: "ReactJS Certification",
    issuer: "Infosys Springboard",
    summary: "Validated foundation in modern component-based frontend development.",
    Certificate: "/React.pdf"
  },
  {
    title: "Node.js Certification",
    issuer: "Infosys Springboard",
    summary: "Demonstrated backend fundamentals and server-side JavaScript proficiency.",
    Certificate: "/Node.js.pdf"
  },
];

export const softSkills = [
  "Decision Making",
  "Collaboration",
  "Time Management",
  "Quick Learner",
];

export const contactCards = [
  {
    label: "Email",
    value: "saurabshaa@gmail.com",
    href: "mailto:saurabshaa@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: "+91 7018154194",
    href: "tel:+917018154194",
    icon: FaPhone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/saurabh-50903a330",
    href: "https://linkedin.com/in/saurabh-50903a330",
    icon: FaLinkedin,
  },
  {
    label: "Location",
    value: "Mandi, Himachal Pradesh, India",
    href: "https://maps.google.com/?q=Mandi,Himachal+Pradesh,India",
    icon: FaLocationDot,
  },
];
