import { Icons } from "@/components/icons";
import { BookOpenText, Computer, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanmay Sarkar",
  initials: "TSR",
  url: "https://tanmaysarkar.vercel.app",
  location: "Pune, Maharashtra, India",
  locationLink: "https://www.google.com/maps/place/Pune",
  description:
    "Professionally software engineer with a passion for product development and explorer across different domains.",
  summary:
    "Have experience of developing web applications, servers, ci/cd pipelines and AI workflows. I post nonsense on X as well, and share other content across my socials. Other times, I ride motorcycles, make videos, play digital games and help my father in his business.",
  avatarUrl: "/me.webp",
  skills: [
    "TypeScript",
    // "JavaScript",
    "Python",
    "SQL",
    "React.js",
    "Next.js",
    "Angular",
    "Redux",
    // "Storybook",
    "Jest",
    "Node.js",
    "Fast API",
    "REST APIs",
    "GraphQL",
    "PostgreSQL",
    // "Supabase",
    "SQLite",
    "Database Design",
    "Google Cloud",
    "Azure (Serverless)",
    // "AWS",
    "Cloudflare Workers",
    "Docker",
    // "GitHub Actions",
    "Agentic Systems",
    "RAG",
    "MCP",
    // "Anthropic SDK",
    // "OpenAI SDK",
    // "Pinecone",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "home" },
    { href: "/blogs", icon: NotebookIcon, label: "blogs" },
    { href: "/works", icon: Computer, label: "works" },
    { href: "/notes", icon: BookOpenText, label: "notes" }
  ],
  contact: {
    email: "sarkartanmay393@gmail.com",
    tel: "+91-7602649269",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sarkartanmay393",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tanmaysrkr",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/tanmaysrkr",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sarkartanmay393@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      x: {
        name: "X",
        url: "https://x.com/sarkartanmay393",
        icon: Icons.x,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Re-twin Energy",
      href: "https://re-twin.energy",
      location: "Remote",
      title: "Software Engineer (Full-Stack & Platform)",
      start: "Mar 2025",
      end: "Present",
      description:
        "Built an AI assistant and a live energy-trading simulator now used by 60+ paying customers — plus automated reports that save 50+ customers a manual task every morning.",
    },
    {
      company: "Simbian AI",
      href: "https://simbian.ai",
      location: "Remote",
      title: "Software Engineer (Frontend, Contract)",
      start: "Jan 2025",
      end: "Mar 2025",
      description:
        "Built React/TypeScript frontend systems integrated with Django REST APIs for a multi-tenant cybersecurity SaaS, implementing per-customer scoping and role-based access control across 6 enterprise accounts.",
    },
    {
      company: "Nirmata",
      href: "https://nirmata.com",
      location: "Remote",
      title: "Software Development Engineer (Frontend)",
      start: "Mar 2024",
      end: "Jan 2025",
      description:
        "Gave security teams a way to write and test Kubernetes policies without touching raw YAML — now used by 200+ enterprises — and made their policy lists load about 30% faster.",
    },
  ],
  education: [
    {
      school: "Cooch Behar Government Engineering College",
      href: "https://www.cgec.org.in",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/cgec.png",
      start: "2020",
      end: "2024",
      gpa: "8.8/10",
    },
    {
      school: "Dhupguri High School",
      href: "https://physics.mypg.org.in/",
      degree: "Higher Secondary in Science",
      logoUrl: "/dhs.webp",
      start: "2018",
      end: "2020",
    },
  ],
  works: [
    {
      title: "GeoPulse",
      href: "https://geo-pulse.vercel.app",
      links: [
        {
          href: "https://geo-pulse.vercel.app",
          icon: "",
          type: "Website",
        },
        {
          href: "https://github.com/sarkartanmay393/GeoPulse",
          icon: "",
          type: "Github",
        }
      ],
      dates: "Nov 2024 – Present",
      active: true,
      description:
      "GeoPulse offers real-time analysis and visualization of geopolitical relationships across countries. Featuring interactive dashboards and advanced data processing for relation scores, it’s a powerful tool for understanding global dynamics.",
      technologies: ["TypeScript", "Next.js", "Supabase", "OpenAI"],
    },
    {
      title: "Eleza AI",
      href: "https://gen-ai-platform.eleza.ai/",
      links: [
        {
          href: "https://gen-ai-platform.eleza.ai/",
          icon: "",
          type: "Website",
        }
      ],
      dates: "Nov 2024 – Present",
      active: true,
      description:
      "Eleza AI is an AI-driven platform that generates customizable legal and enforcement documents with ease. It offers metadata enrichment and multiple export formats, catering to legal professionals who need precision and flexibility.",
      technologies: ["TypeScript", "Next.js", "Supabase", "OpenAI", "AWS"],
    },
    {
      title: "Article AI",
      href: "https://articleai.vercel.app",
      links: [
        {
          href: "https://articleai.vercel.app",
          icon: '',
          type: "Website",
        },
        {
          href: "https://github.com/sarkartanmay393/article.ai",
          icon: '',
          type: "Github",
        },
      ],
      dates: "Nov 2024 – Present",
      active: true,
      description:
        "Unlock the power of AI for effortless article creation. We’re almost there. Get ready to explore endless possibilities!",
      technologies: ["TypeScript", "Next.js", "Supabase", "OpenAI"],
    },
    
    {
      title: "KanbanFlow",
      href: "https://taskboard.vercel.app/",
      links: [
        {
          href: "https://taskboard.vercel.app/",
          icon: "",
          type: "Website",
        },
        {
          href: "https://github.com/sarkartanmay393/TaskBoard",
          icon: "",
          type: "Github",
        }
      ],
      dates: "March 2024 – Present",
      active: true,
      description:
        "KanbanFlow is a Kanban-style task manager emphasizing local-first functionality, keeping your data secure on your device. Its intuitive interface simplifies task and project organization, blending performance with usability.",
      technologies: ["TypeScript", "React.js", "Express.js", "PostgreSQL", "Prisma"],
    },
    {
      title: "LinkShrink",
      href: "https://github.com/sarkartanmay393/URL-Shortener-Go",
      links: [
        {
          href: "https://github.com/sarkartanmay393/URL-Shortener-Go",
          icon: "",
          type: "Github",
        }
      ],
      dates: "April 2024 – Present",
      active: true,
      description:
        "LinkShrink is a high-performance URL shortening service powered by Go, utilizing Redis for efficient data storage and retrieval, and Docker for seamless deployment. With features like time-based expiration and rate limiting, it’s a secure and scalable solution for developers.",
      technologies: ["Go", "Redis", "Docker"],
    },
    {
      title: "Type Trails",
      href: "https://typetrails.vercel.app/",
      links: [
        {
          href: "https://typetrails.vercel.app/",
          icon: "",
          type: "Website",
        },
        {
          href: "https://github.com/sarkartanmay393/TypeTrails",
          icon: "",
          type: "Github",
        }
      ],
      dates: "June 2024 – Present",
      active: true,
      description:
        "Type Trails is a typing practice tool crafted to boost speed and accuracy, aiming for users to hit 90 words per minute. It includes diverse exercises and progress tracking for an engaging learning experience. Fully developed in TypeScript for a fluid and reliable interface.",
      technologies: ["TypeScript"],
    },
    {
      title: "Frame Flex",
      href: "https://frameflex.vercel.app",
      links: [
        {
          href: "https://frameflex.vercel.app",
          icon: "",
          type: "Website",
        },
        {
          href: "https://github.com/sarkartanmay393/FrameFlex",
          icon: "",
          type: "Github",
        }
      ],
      dates: "August 2024 – Present",
      active: true,
      description:
        "Frame Flex enables users to capture screenshots and create GIFs from targeted webpage sections. Powered by html2canvas, it’s perfect for crafting visual content for presentations or documentation.",
      technologies: ["TypeScript"],
    },
    {
      title: "Crypto Converter",
      href: "https://cryptoconvert.vercel.app",
      links: [
        {
          href: "https://cryptoconvert.vercel.app",
          icon: "",
          type: "Website",
        },
        {
          href: "https://github.com/sarkartanmay393/CryptoConvert",
          icon: "",
          type: "Github",
        }
      ],
      dates: "September 2024 – Present",
      active: true,
      description:
        "Crypto Converter is a sleek web app for converting cryptocurrency values into fiat currencies using real-time exchange rates. Designed for crypto enthusiasts and investors, it offers accuracy and simplicity.",
      technologies: ["TypeScript", "React.js", "Express.js", "ShadcnUI"],
    },
    {
      title: "RoomPay",
      href: "https://roompay.vercel.app",
      links: [
        {
          href: "https://roompay.vercel.app",
          icon: "",
          type: "Website",
        },
        {
          href: "https://github.com/sarkartanmay393/RoomPay-Web",
          icon: "",
          type: "Github",
        }
      ],
      dates: "December 2023 – Present",
      active: true,
      description:
        "RoomPay is a TypeScript-powered app that streamlines expense tracking and settlement among friends. Users can log expenses, calculate dues, and manage group finances effortlessly.",
      technologies: ["TypeScript", "React.js", "Supabase", "Material UI"],
    }
  ],
  hackathons: [],
  notes: [
    {
      type: "quote",
      brief: "you are the product of your environment.",
      publishedAt: "2025-06-25",
      title: "",
      url: "",
      cover: "",
    },
    {
      type: "quote",
      brief: "fear is just faith in negative.",
      publishedAt: "2025-06-25",
      title: "",
      url: "",
      cover: "",
    },
    {
      type: "quote",
      brief: "you are what you think you are.",
      publishedAt: "2023-08-18",
      title: "",
      url: "",
      cover: "",
    },
  ]
} as const;