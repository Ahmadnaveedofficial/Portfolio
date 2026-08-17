import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
  Globe,
  Bot,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import ANBlogProject from "../assets/ANBlogProject.png";
import CarProject from "../assets/CarProject.png";
import ChatProject from "../assets/ChatProject.png";
import DLDProject from "../assets/DLDProject.jpg";
import DoctorAppUsingn8n from "../assets/DoctorAppUsingn8n.jpg";
import LudoProject from "../assets/LudoProject.png";
import QuranProject from "../assets/QuranProject.jpeg";
import RouteFinderProject from "../assets/RouteFinderProject.png";
import VibeTubeBackendProject from "../assets/VibeTubeBackendProject.jpg";
import HarmonyMusicAcademyProject from "../assets/HarmonyMusicAcademyProject.png";
import HireCraftProject from "../assets/HireCraftProject.png";
import CollaborativeEditorProject from "../assets/CollaborativeEditorProject.png";
import MysteryMessageProject from "../assets/MysteryMessageProject.png";


export const SKILLS_CATEGORY = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "HTML", level: 95, color: "bg-[#E34F26]" },
      { name: "CSS", level: 90, color: "bg-[#1572B6]" },
      { name: "JavaScript", level: 90, color: "bg-[#F7DF1E]" },
      { name: "TypeScript", level: 85, color: "bg-[#3178C6]" },
      { name: "React", level: 92, color: "bg-[#61DAFB]" },
      { name: "Next.js", level: 85, color: "bg-[#000000]" },
      { name: "Tailwind CSS", level: 90, color: "bg-[#06B6D4]" },
      { name: "Framer Motion", level: 88, color: "bg-[#0055FF]" },
    ],
  },

  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90, color: "bg-[#339933]" },
      { name: "Express.js", level: 88, color: "bg-[#000000]" },
      { name: "NestJS", level: 85, color: "bg-[#E0234E]" },
      { name: "REST APIs", level: 92, color: "bg-[#FF6C37]" },
      { name: "GraphQL", level: 75, color: "bg-[#E10098]" },
      { name: "JWT Authentication", level: 88, color: "bg-[#000000]" },
      { name: "Google OAuth", level: 82, color: "bg-[#4285F4]" },
      { name: "Session Authentication", level: 80, color: "bg-[#6B7280]" },
    ],
  },

  {
    title: "Database & ORM",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 88, color: "bg-[#47A248]" },
      { name: "Mongoose", level: 85, color: "bg-[#880000]" },
      { name: "PostgreSQL", level: 82, color: "bg-[#4169E1]" },
      { name: "SQL", level: 85, color: "bg-[#CC2927]" },
      { name: "SQL Server", level: 78, color: "bg-[#CC2927]" },
      { name: "Prisma", level: 80, color: "bg-[#2D3748]" },
      { name: "Firebase", level: 82, color: "bg-[#FFCA28]" },
      { name: "Appwrite", level: 78, color: "bg-[#FD366E]" },
    ],
  },

  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Git", level: 92, color: "bg-[#F05032]" },
      { name: "GitHub", level: 90, color: "bg-[#181717]" },
      { name: "Docker", level: 82, color: "bg-[#2496ED]" },
      { name: "AWS", level: 78, color: "bg-[#FF9900]" },
      { name: "Vercel", level: 88, color: "bg-[#000000]" },
      { name: "Netlify", level: 82, color: "bg-[#00C7B7]" },
      { name: "Azure", level: 75, color: "bg-[#0078D4]" },
      { name: "Cloudinary", level: 82, color: "bg-[#3448C5]" },
    ],
  },

  {
    title: "AI & Automation",
    icon: Bot,
    skills: [
      { name: "Gemini AI", level: 82, color: "bg-[#4285F4]" },
      { name: "OpenAI API", level: 80, color: "bg-[#10A37F]" },
      { name: "LangChain", level: 72, color: "bg-[#1C3C3C]" },
      { name: "n8n", level: 82, color: "bg-[#EA4B71]" },
      { name: "AI Agents", level: 72, color: "bg-[#8B5CF6]" },
      { name: "Prompt Engineering", level: 85, color: "bg-[#EC4899]" },
      { name: "Workflow Automation", level: 82, color: "bg-[#06B6D4]" },
    ],
  },
];

export const TECH_STACK = [
  // Languages
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",

  // Frontend
  "HTML",
  "CSS",
  "Tailwind CSS",
  "React",
  "Next.js",
  "Framer Motion",
  "Redux Toolkit",
  "Shadcn UI",

  // Backend
  "Node.js",
  "Express.js",
  "NestJS",
  "REST APIs",
  "JWT Authentication",
  "Google OAuth",
  "Socket.IO",

  // Database & ORM
  "MongoDB",
  "Mongoose",
  "PostgreSQL",
  "SQL",
  "SQL Server",
  "Prisma",

  // Backend Services
  "Firebase",
  "Appwrite",
  "Cloudinary",

  // Cloud & DevOps
  "Git",
  "GitHub",
  "Docker",
  "AWS",
  "AWS ECS",
  "AWS ECR",
  "Vercel",
  "Netlify",
  "Azure",

  // AI & Automation
  "n8n",
  "Gemini AI",
  "OpenAI API",
  "LangChain",
  "Prompt Engineering",
  "AI Agents",
  "Workflow Automation",

  // Tools
  "VS Code",
  "Postman",
];

export const STATS = [
  { number: "10+", label: "Projects Completed" },
  { number: "1.5+", label: "Years of Experience" },
  { number: "20+", label: "Technologies" },
  { number: "3+", label: "Certifications" },
  { number: "100%", label: "Client Satisfaction" },
];



export const PROJECTS = [
  {
    id: 1,
    title: "Real-Time Collaborative Code Editor",
    description:
      "Built a real-time collaborative code editor where multiple users can write and edit code together without conflicts. It uses Yjs CRDTs and Socket.IO for instant synchronization, Monaco Editor for a VS Code-like coding experience, and Docker for containerization. The application is deployed on AWS ECS with ECR and an Application Load Balancer, making it scalable and production-ready.",
    image: CollaborativeEditorProject,
    tags: [
      "React",
      "Node.js",
      "Express",
      "Socket.IO",
      "Yjs",
      "CRDT",
      "Monaco Editor",
      "Docker",
      "AWS ECS",
      "AWS ECR",
      "Application Load Balancer",
      "Real-Time Collaboration",
    ],
    liveUrl:
      "http://editor-ecs-abl-886231062.ap-northeast-1.elb.amazonaws.com",
    githubUrl:
      "https://github.com/Ahmadnaveedofficial/Real-Time-Collaborative-Editor",
    featured: true,
    category: "Cloud Full Stack",
  },

  {
    id: 2,
    title: "HireCraft AI",
    description:
      "Built an AI-powered platform that helps job seekers improve their resumes and prepare for interviews. Users can compare their resume with a job description, receive AI suggestions, generate personalized interview questions, and get detailed feedback using Google's Gemini AI to improve their chances of landing a job.",
    image: HireCraftProject,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini AI",
      "Tailwind CSS",
      "JWT",
      "REST API",
      "Resume Analysis",
      "Interview Preparation",
      "AI",
    ],
    liveUrl: "https://github.com/Ahmadnaveedofficial/HireCraft-AI",
    githubUrl: "https://github.com/Ahmadnaveedofficial/HireCraft-AI",
    featured: true,
    category: "AI Full Stack",
  },

  {
    id: 3,
    title: "Mystery Message",
    description:
      "A full-stack anonymous messaging platform where users can receive honest feedback without revealing the sender's identity. It includes secure authentication, email verification, AI-powered message suggestions, and a personal dashboard to manage incoming messages through a clean and responsive interface.",
    image: MysteryMessageProject,
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "MongoDB",
      "NextAuth",
      "Tailwind CSS",
      "Shadcn UI",
      "Zod",
      "Gemini AI",
      "Authentication",
    ],
    liveUrl: "https://mstry-message-roan.vercel.app",
    githubUrl: "https://github.com/Ahmadnaveedofficial/nextApp",
    featured: true,
    category: "Full Stack",
  },

  {
    id: 4,
    title: "Harmony Music Academy",
    description:
      "Developed a modern music academy website using Next.js and TypeScript. The platform showcases music courses, instructor profiles, and upcoming webinars with a responsive design, smooth user experience, and fast performance optimized for both desktop and mobile devices.",
    image: HarmonyMusicAcademyProject,
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Vercel",
    ],
    liveUrl: "https://harmony-music-academy-five.vercel.app/",
    githubUrl: "https://github.com/Ahmadnaveedofficial/Harmony-Music-Academy",
    featured: true,
    category: "Frontend",
  },

  {
    id: 5,
    title: "Car Rental System",
    description:
      "Built a full-stack car rental application where users can browse available cars, make bookings, and manage their reservations. It also includes secure authentication and an admin dashboard for managing vehicles, bookings, and customer information.",
    image: CarProject,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "REST API",
      "Tailwind CSS",
      "Authentication",
    ],
    liveUrl: "https://car-rental-roan-nu.vercel.app/",
    githubUrl: "https://github.com/Ahmadnaveedofficial/CarRental",
    featured: true,
    category: "Full Stack",
  },

  {
    id: 6,
    title: "AN Blog",
    description:
      "A full-stack blogging platform that allows users to create, edit, publish, and manage blog posts with ease. Built using React and Appwrite, it features secure authentication, image uploads, a rich text editor, and a responsive interface for a smooth writing experience.",
    image: ANBlogProject,
    tags: [
      "React",
      "Appwrite",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
      "TinyMCE",
      "Authentication",
    ],
    liveUrl: "https://anblog-sage.vercel.app/",
    githubUrl: "https://github.com/Ahmadnaveedofficial/AN-Blog",
    featured: true,
    category: "Full Stack",
  },

  {
    id: 7,
    title: "Chat Application",
    description:
      "A real-time chat application built with Socket.IO that enables users to exchange messages instantly. It supports secure authentication, private conversations, online user status, and a responsive interface designed for smooth and reliable communication.",
    image: ChatProject,
    tags: [
      "React",
      "Node.js",
      "Express",
      "Socket.IO",
      "MongoDB",
      "JWT",
      "WebSockets",
      "Real-Time Chat",
    ],
    liveUrl: "https://github.com/Ahmadnaveedofficial/Quick-Chat",
    githubUrl: "https://github.com/Ahmadnaveedofficial/Quick-Chat",
    featured: true,
    category: "Full Stack",
  },
    {
    id: 8,
    title: "VibeTube Backend",
    description:
      "Developed the backend for a video-sharing platform using Node.js, Express, and MongoDB. It provides secure authentication, video uploads, playlist management, likes, comments, subscriptions, and RESTful APIs designed to support a scalable frontend application.",
    image: VibeTubeBackendProject,
    tags: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "REST API",
      "Cloudinary",
      "Backend Development",
    ],
    liveUrl: "https://github.com/Ahmadnaveedofficial/VibeTube-Backend",
    githubUrl: "https://github.com/Ahmadnaveedofficial/VibeTube-Backend",
    featured: false,
   category: "Backend API"
  },

  {
    id: 9,
    title: "Doctor Appointment (n8n)",
    description:
      "Built an automated doctor appointment workflow using n8n to simplify the booking process. The workflow connects multiple APIs and services to handle appointment requests, confirmations, reminders, and notifications without requiring manual intervention.",
    image: DoctorAppUsingn8n,
    tags: [
      "n8n",
      "Automation",
      "Workflow Automation",
      "API Integration",
      "Webhook",
      "No-Code",
    ],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    category: "Automation & AI"
  },

  {
    id: 10,
    title: "Route Finder",
    description:
      "Developed a C++ route-finding application that uses Dijkstra's algorithm to calculate the shortest path between cities. The project demonstrates graph data structures, pathfinding algorithms, and problem-solving techniques commonly used in navigation systems.",
    image: RouteFinderProject,
    tags: [
      "C++",
      "Data Structures",
      "Algorithms",
      "Dijkstra",
      "Graphs",
      "DSA",
    ],
    liveUrl: "https://github.com/Ahmadnaveedofficial/Route-Finder",
    githubUrl: "https://github.com/Ahmadnaveedofficial/Route-Finder",
    featured: false,
    category: "Algorithm",
  },

  {
    id: 11,
    title: "Ludo Game",
    description:
      "Created a desktop-based Ludo game using Java Swing and AWT. It includes dice rolling, player movement, turn-based gameplay, and a custom graphical interface, demonstrating object-oriented programming concepts and event-driven application development.",
    image: LudoProject,
    tags: [
      "Java",
      "Java Swing",
      "Java AWT",
      "OOP",
      "Desktop Application",
      "Game Development",
    ],
    liveUrl: "https://github.com/Ahmadnaveedofficial/LudoGame-Java",
    githubUrl: "https://github.com/Ahmadnaveedofficial/LudoGame-Java",
    featured: false,
    category: "Game",
  },

  {
    id: 12,
    title: "Quran App",
    description:
      "Built a mobile Quran application using MIT App Inventor that provides offline Quran reading with simple navigation and an easy-to-use interface. The app was designed to make Quran reading accessible for users of all ages with a clean and lightweight experience.",
    image: QuranProject,
    tags: [
      "MIT App Inventor",
      "Android",
      "Mobile Development",
      "UI Design",
      "Offline App",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Ahmadnaveedofficial/Software-Engineering",
    featured: false,
    category: "Mobile App",
  },

  {
    id: 13,
    title: "DLD Project",
    description:
      "Designed and simulated digital circuits using Multisim as part of a Digital Logic Design project. The project demonstrates logic gates, combinational and sequential circuits, and practical circuit analysis to strengthen core electronics and computer engineering concepts.",
    image: DLDProject,
    tags: [
      "Digital Logic Design",
      "Multisim",
      "Logic Gates",
      "Digital Circuits",
      "Electronics",
    ],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    category: "Academic",
  },
];

export const JOURNEY_STEPS = [
  {
    id: 1,
    year: "2022",
    title: "Started Programming",
    company: "Self-Learning",
    description:
      "Started programming with C++, focusing on programming fundamentals, object-oriented programming, data structures, and problem-solving.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    id: 2,
    year: "2022",
    title: "Started Web Development",
    company: "Self-Learning",
    description:
      "Learned HTML, CSS, and JavaScript and started building responsive and interactive web interfaces.",
    icon: BookOpen,
    color: "bg-green-500",
  },
  {
    id: 3,
    year: "2023",
    title: "Frontend Development",
    company: "Self-Learning",
    description:
      "Started working with React, Tailwind CSS, and modern frontend tools to build dynamic and user-friendly applications.",
    icon: Zap,
    color: "bg-yellow-500",
  },
  {
    id: 4,
    year: "2023",
    title: "Backend Development",
    company: "Self-Learning",
    description:
      "Expanded into backend development with Node.js and Express.js, building REST APIs, authentication systems, and server-side applications.",
    icon: Server,
    color: "bg-purple-500",
  },
  {
    id: 5,
    year: "2024",
    title: "Full-Stack Development",
    company: "Personal Projects",
    description:
      "Started building complete full-stack applications by combining React, Node.js, Express.js, MongoDB, SQL, and third-party services.",
    icon: Briefcase,
    color: "bg-orange-500",
  },
  {
    id: 6,
    year: "2024",
    title: "Cloud & Backend Services",
    company: "Personal Projects",
    description:
      "Worked with MongoDB, PostgreSQL, Firebase, Appwrite, Cloudinary, and other backend services to build production-oriented applications.",
    icon: Database,
    color: "bg-pink-500",
  },
  {
    id: 7,
    year: "2025",
    title: "DevOps & Cloud Deployment",
    company: "Personal Projects",
    description:
      "Started working with Docker and cloud deployment while exploring platforms and services including Vercel, Netlify, AWS, and Azure.",
    icon: Cloud,
    color: "bg-cyan-500",
  },
  {
    id: 8,
    year: "2025",
    title: "AI & Automation",
    company: "Personal Projects",
    description:
      "Explored AI-powered applications and workflow automation using Gemini AI, OpenAI APIs, n8n, and LangChain.",
    icon: Bot,
    color: "bg-violet-500",
  },
  {
    id: 9,
    year: "2026",
    title: "Software Development",
    company: "10Pearls",
    description:
      "Joined the 10Pearls Internship Cohort 9 and worked with the MERN stack, TypeScript, Git, MongoDB, Express.js, React.js, MySQL, testing, logging, and code quality practices.",
    icon: Briefcase,
    color: "bg-indigo-500",
  },
  {
    id: 10,
    year: "2026",
    title: "Advanced Full-Stack Development",
    company: "Continuous Learning",
    description:
      "Continuing to strengthen full-stack engineering skills with Next.js, NestJS, TypeScript, PostgreSQL, Prisma, Docker, cloud technologies, AI agents, and scalable backend architecture.",
    icon: Rocket,
    color: "bg-red-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description:
      "Passionate about creating intuitive and engaging user experiences through thoughtful design and development.",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description:
      "Enthusiastic about tackling complex problems and finding efficient solutions through logical thinking and creativity.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Dedicated to lifelong learning and staying updated with the latest technologies and industry trends.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Focused on writing readable, maintainable, and scalable code that is easy to understand and evolve.",
  },
  {
    icon: Globe,
    title: "Open Source",
    description:
      "Interested in contributing to the developer community through knowledge sharing, collaboration, and open source projects.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Driven to build fast and efficient applications by optimizing performance across the entire stack.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Fascinated by AI and automation, building intelligent workflows and AI-powered applications to solve real-world problems.",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      "Passionate about designing robust APIs, scalable backend systems, authentication flows, and maintainable application architectures.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Interested in containerization, cloud deployment, CI/CD, and building reliable infrastructure for modern applications.",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/Ahmadnaveedofficial",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/ahmad-naveed-7b539521a/",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-500/10",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "",
    color: "hover:text-sky-400",
    bgColor: "hover:bg-sky-500/10",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:ahmadnaveedofficial05@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 323 9942960",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ahmadnaveedofficial05@gmail.com",
  },
];