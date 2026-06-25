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

export const SKILLS_CATEGORY = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "HTML", level: 100, color: "bg-orange-500" },
      { name: "CSS", level: 88, color: "bg-blue-500" },
      { name: "JavaScript", level: 90, color: "bg-yellow-400" },
      { name: "TypeScript", level: 75, color: "bg-yellow-600" },
      { name: "React", level: 95, color: "bg-blue-400" },
      { name: "Framer Motion", level: 93, color: "bg-pink-500" },
      { name: "Nextjs", level: 80, color: "bg-red-500" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-500" },
      { name: "Express.js", level: 88, color: "bg-gray-500" },
      { name: "REST APIs", level: 87, color: "bg-yellow-500" },
      { name: "JWT Authentication", level: 86, color: "bg-purple-500" },
      { name: "Session Authentication", level: 80, color: "bg-gray-300" },
      { name: "Nextjs", level: 80, color: "bg-red-500" },
    ],
  },
  {
    title: "Database Management",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 85, color: "bg-green-600" },
      { name: "Mongoose", level: 83, color: "bg-red-500" },
      { name: "PostgreSQL", level: 80, color: "bg-green-500" },
      { name: "SQL", level: 80, color: "bg-blue-500" },
      { name: "Prisma", level: 78, color: "bg-indigo-500" },
      { name: "Firebase", level: 82, color: "bg-yellow-500" },
      { name: "Appwrite", level: 78, color: "bg-pink-500" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Git", level: 90, color: "bg-orange-500" },
      { name: "GitHub", level: 88, color: "bg-gray-700" },
      { name: "Docker", level: 80, color: "bg-blue-500" },
      { name: "Vercel", level: 85, color: "bg-black" },
      { name: "Netlify", level: 83, color: "bg-teal-500" },
      { name: "Cloudinary", level: 82, color: "bg-blue-400" },
      { name: "Azure", level: 80, color: "bg-blue-600" },
      { name: "AWS", level: 75, color: "bg-yellow-500" },
    ],
  },
  {
    title: "AI & Automation",
    icon: Bot,
    skills: [
      { name: "n8n", level: 82, color: "bg-orange-600" },
      { name: "Gemini AI", level: 80, color: "bg-blue-500" },
      { name: "OpenAI API", level: 78, color: "bg-green-500" },
      { name: "LangChain", level: 70, color: "bg-purple-500" },
      { name: "Prompt Engineering", level: 85, color: "bg-pink-500" },
      { name: "AI Agents", level: 72, color: "bg-yellow-500" },
      { name: "Workflow Automation", level: 80, color: "bg-cyan-500" },
    ],
  },
];

export const TECH_STACK = [
  // Programming Languages
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
  "Framer Motion",
  "Nextjs",

  // Backend
  "Node.js",
  "Express.js",
  "REST APIs",
  "JWT Authentication",
  "Google Auth",

  // Database & ORM
  "MongoDB",
  "Mongoose",
  "SQL",
  "SQL Server",
  "Prisma",

  // BaaS
  "Firebase",
  "Appwrite",

  // Cloud & DevOps
  "Git",
  "GitHub",
  "Docker",
  "Vercel",
  "Netlify",
  "Cloudinary",
  "Azure",
  "AWS",

  // AI & Automation
  "n8n",
  "Gemini AI",
  "OpenAI API",
  "LangChain",
  "Prompt Engineering",
  "AI Agents",
  "Workflow Automation",
  "Make (Integromat)",

  // Tools & Software
  "VS Code",
  "Postman",
  "MS Office",
  "Multisim",
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
      "A real-time collaborative code editor that enables multiple users to write and edit code simultaneously with instant synchronization using Yjs CRDTs, Socket.IO, Docker, and AWS cloud deployment.",
    image: CollaborativeEditorProject,
    tags: [
      "React",
      "Node.js",
      "Express",
      "Socket.IO",
      "Yjs",
      "Monaco Editor",
      "Docker",
      "AWS ECS",
      "AWS ECR",
      "ALB",
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
      "An AI-powered interview preparation and resume optimization platform that analyzes resumes against job descriptions, generates personalized interview questions, provides detailed feedback, and helps candidates improve their job readiness.",
    image: HireCraftProject,
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini AI",
      "Tailwind CSS",
    ],
    liveUrl: "https://github.com/Ahmadnaveedofficial/HireCraft-AI",
    githubUrl: "https://github.com/Ahmadnaveedofficial/HireCraft-AI",
    featured: true,
    category: "AI Full Stack",
  },
  {
    id: 3,
    title: "Harmony Music Academy",
    description:
      "A modern music academy website built with Next.js featuring dynamic course pages, instructor profiles, webinar management, responsive UI, and optimized performance.",
    image: HarmonyMusicAcademyProject,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
    liveUrl: "https://harmony-music-academy-five.vercel.app/",
    githubUrl: "https://github.com/Ahmadnaveedofficial/Harmony-Music-Academy",
    featured: true,
    category: "Frontend",
  },
  {
    id: 4,
    title: "Car Rental System",
    description:
      "A full-stack car rental application with booking system, authentication, and admin features.",
    image: CarProject,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://car-rental-roan-nu.vercel.app/",
    githubUrl: "https://github.com/Ahmadnaveedofficial/CarRental",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 5,
    title: "AN Blog",
    description:
      "A full-stack blogging platform with authentication, post management, and responsive UI.",
    image: ANBlogProject,
    tags: ["React", "Appwrite", "Tailwind CSS"],
    liveUrl: "https://anblog-sage.vercel.app/",
    githubUrl: "https://github.com/Ahmadnaveedofficial/AN-Blog",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Chat Application",
    description:
      "Real-time chat application using WebSockets with authentication and messaging features.",
    image: ChatProject,
    tags: ["React", "Node.js", "Socket.io"],
    liveUrl: "",
    githubUrl: "https://github.com/Ahmadnaveedofficial/Quick-Chat",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 7,
    title: "VibeTube Backend",
    description:
      "Backend system for a video platform with authentication, uploads, and API handling.",
    image: VibeTubeBackendProject,
    tags: ["Node.js", "Express", "MongoDB"],
    liveUrl: "https://github.com/Ahmadnaveedofficial/VibeTube-Backend",
    githubUrl: "https://github.com/Ahmadnaveedofficial/VibeTube-Backend",
    featured: false,
    category: "Backend",
  },
  {
    id: 8,
    title: "Doctor Appointment (n8n)",
    description:
      "Automation-based doctor appointment system using n8n workflows and integrations.",
    image: DoctorAppUsingn8n,
    tags: ["n8n", "Automation", "API"],
    liveUrl: "",
    githubUrl: "",
    featured: false,
    category: "Automation",
  },
  {
    id: 9,
    title: "Route Finder",
    description:
      "A pathfinding application implementing shortest path algorithms like Dijkstra.",
    image: RouteFinderProject,
    tags: ["C++", "Algorithms", "DSA"],
    liveUrl: "https://github.com/Ahmadnaveedofficial/Route-Finder",
    githubUrl: "https://github.com/Ahmadnaveedofficial/Route-Finder",
    featured: false,
    category: "Algorithm",
  },
  {
    id: 10,
    title: "Ludo Game",
    description:
      "A fun interactive Ludo game with custom UI and gameplay logic.",
    image: LudoProject,
    tags: ["Java", "Java Swing", "Java Awt"],
    liveUrl: "https://github.com/Ahmadnaveedofficial/LudoGame-Java",
    githubUrl: "https://github.com/Ahmadnaveedofficial/LudoGame-Java",
    featured: false,
    category: "Game",
  },
  {
    id: 11,
    title: "Quran App",
    description:
      "A web app for reading Quran with clean UI and user-friendly navigation.",
    image: QuranProject,
    tags: ["Mit", "App Inventor"],
    liveUrl: "",
    githubUrl: "https://github.com/Ahmadnaveedofficial/Software-Engineering",
    featured: false,
    category: "Mobile App",
  },
  {
    id: 12,
    title: "DLD Project",
    description:
      "Digital Logic Design project implemented using simulation tools.",
    image: DLDProject,
    tags: ["Multisim", "Electronics"],
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
    title: "Started Learning Programming",
    company: "Self-Employed",
    description:
      "Began my journey with programming fundamentals using C++ and explored core concepts like OOP and problem solving.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    id: 2,
    year: "2022",
    title: "Explored Web Development",
    company: "Self-Employed",
    description:
      "Learned HTML, CSS, and JavaScript to build responsive and interactive web interfaces.",
    icon: BookOpen,
    color: "bg-green-500",
  },
  {
    id: 3,
    year: "2023",
    title: "Frontend Development",
    company: "Self-Employed",
    description:
      "Worked with React and Tailwind CSS to build modern, dynamic, and user-friendly web applications.",
    icon: Zap,
    color: "bg-yellow-500",
  },
  {
    id: 4,
    year: "2023",
    title: "Backend Development",
    company: "Self-Employed",
    description:
      "Built scalable backend systems using Node.js and Express, including REST APIs and authentication.",
    icon: Server,
    color: "bg-purple-500",
  },
  {
    id: 5,
    year: "2024",
    title: "Database & Cloud Integration",
    company: "Self-Employed",
    description:
      "Integrated databases like MongoDB and SQL, and worked with Firebase, Appwrite, and Cloudinary.",
    icon: Database,
    color: "bg-pink-500",
  },
  {
    id: 6,
    year: "2024",
    title: "Full Stack Projects",
    company: "Self-Employed",
    description:
      "Developed full-stack applications like Car Rental System and Chat App with real-world features.",
    icon: Briefcase,
    color: "bg-orange-500",
  },
  {
    id: 7,
    year: "2025",
    title: "DevOps & Cloud Deployment",
    company: "Self-Employed",
    description:
      "Deployed applications using Vercel, Netlify, Docker, and explored cloud platforms like Azure and AWS ECS.",
    icon: Cloud,
    color: "bg-cyan-500",
  },
  {
    id: 8,
    year: "2025",
    title: "AI & Automation",
    company: "Self-Employed",
    description:
      "Dived into AI integration and workflow automation using n8n, Gemini AI, OpenAI API, and LangChain to build intelligent, automated applications.",
    icon: Bot,
    color: "bg-violet-500",
  },
  {
    id: 9,
    year: "2026",
    title: "Continuous Learning",
    company: "Self-Employed",
    description:
      "Continuously improving skills by exploring AI Agents, advanced prompt engineering, and cutting-edge backend and cloud-native concepts.",
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
      "Obsessed with writing readable, maintainable, and scalable code that stands the test of time.",
  },
  {
    icon: Globe,
    title: "Open Source",
    description:
      "Love contributing to the developer community by sharing knowledge and collaborating on open source projects.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Driven to build lightning-fast applications by optimizing every layer of the stack.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Fascinated by the power of AI and automation to solve real-world problems, building intelligent workflows and AI-powered applications.",
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