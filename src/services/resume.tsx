import { Icons } from "@/components/icons";
import { BookOpenText, Computer, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanmay Sarkar",
  initials: "TSR",
  url: "https://tanmay.cloud",
  location: "Dhupguri, West Bengal, India",
  locationLink: "https://www.google.com/maps/place/dhupguri",
  description:
    "Professionally software engineer with a passion for product development and explorer across different domains.", 
  summary:
    "Have experience of developing web applications, servers, ci/cd pipelines and AI workflows. I post nonsense on X as well, and share other content across my socials. Other times, I ride motorcycles, make videos, play digital games and help my father in his business.",
  avatarUrl: "/me.jpeg",
  skills: [
    "JavaScript",
    // "TypeScript",
    "Python",
    "Go",
    // "Solidity",
    "React.js",
    "Node.js",
    "Fast API",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Cloud Providers (AWS, GCP, Azure)",
    "Git",
    // "GitHub Actions",
    "Kubernetes",
    // "LangChain",
    // "React Native",
    "Ether.js",
    // "Jest"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "home" },
    { href: "/blogs", icon: NotebookIcon, label: "blogs" },
    { href: "/works", icon: Computer, label: "works" },
    { href: "/notes", icon: BookOpenText, label: "notes" },
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
      // Blog: {
      //   name: "Blog",
      //   url: "https://tanmaysarkar.hashnode.dev",
      //   icon: Icons.globe,
      //   navbar: true,
      // },
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
      company: "Simbian AI",
      href: "https://simbian.ai",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/simbian.png",
      start: "Jan 2025",
      end: "Present",
      description:
        "Revamped the Simbian SaaS platform with a modern UI and dark mode support. Built and deployed a self-hosted CMS for company content. Added RBAC and internationalization (i18n) features to the SaaS product. Technologies: JavaScript, React.js, Django, LangChain, AWS."
    },
    {
      company: "Nirmata",
      href: "https://nirmata.com",
      badges: [],
      location: "Bangalore, Karnataka, India",
      title: "Software Engineer (Frontend)",
      logoUrl: "/nirmata.webp",
      start: "Jul 2024",
      end: "Dec 2024",
      description:
        "Spearheaded the development of Managed Kyverno, enhancing SaaS performance by 15% and improving user satisfaction. Built and deployed the Policy Studio, enabling AI-driven policy generation with a user-friendly interface, reducing manual effort by 25%. Technologies: React.js, Docker, AWS, Go."
    },
    {
      company: "Cheerio AI",
      href: "https://cheerio.in",
      badges: [],
      location: "Bangalore, Karnataka, India",
      title: "Software Engineer Intern",
      logoUrl: "/cheerioai.png",
      start: "Mar 2024",
      end: "Jul 2024",
      description:
        "Overhauled the user interface, resulting in a 30% increase in speed and a smoother onboarding process. Implemented automated email and notification services using AWS SNS and SES, improving communication efficiency by 40%. Technologies: React.js, React Native, Node.js, MongoDB, Redis, AWS."
    },
    {
      company: "Unreal Finance",
      href: "https://unreal.finance",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/unrealfinance.webp",
      start: "Feb 2023",
      end: "Nov 2023",
      description:
        "Delivered a high-conversion landing page using Next.js, boosting user acquisition by 25%. Established a CI/CD pipeline with GitHub Actions and AWS EC2. Integrated secure payment features with Stripe API, ensuring robust transaction handling. Technologies: Next.js, Ether.js, MongoDB, Docker, AWS."
    }
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
      brief: "You are the product of your environment.",
      publishedAt: "2025-06-25",
      title: "",
      url: "",
      cover: "",
    },
    { 
      type: "quote", 
      brief: "Fear is just faith in negative.",
      publishedAt: "2025-06-25",
      title: "",
      url: "",
      cover: "",
    },
    { 
      type: "quote", 
      brief: "You are what you think you are. You are what you do. You are what you want to do. And you are the best thing since sliced bread.",
      publishedAt: "2023-08-18",
      title: "",
      url: "",
      cover: "",
    },
  ]
} as const;