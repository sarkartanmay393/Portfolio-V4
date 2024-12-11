import { Icons } from "@/components/icons";
import { BookOpenText, Computer, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanmay Sarkar",
  initials: "TSR",
  url: "https://tanmaysarkar.vercel.app",
  location: "Dhupguri, West Bengal, India",
  locationLink: "https://www.google.com/maps/place/dhupguri",
  description:
    "Software Engineer with a passion for Web3, AI and, full-stack development, and building impactful applications that solve real-world problems.",
  summary:
    "I am a dedicated Software Engineer with over a year of experience developing user-focused web applications. Currently, I’m working as a Software Engineer at Nirmata, where I’ve contributed to CNCF ecosystem projects and user interface redesigns. My experience includes internships at Cheerio AI, CoRider, and Unreal Finance, where I improved user engagement, optimized performance, and implemented key functionalities. I am pursuing a B.Tech in Computer Science at Cooch Behar Government Engineering College, with a focus on JavaScript, Go, React.js, Docker, and AWS.",
  avatarUrl: "/me.jpeg",
  skills: [
    "JavaScript",
    "Python",
    "Go",
    "Solidy",
    "React.js",
    "Node.js",
    "Next.js",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "Git",
    "GitHub Actions",
    "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "about" },
    { href: "/blogs", icon: NotebookIcon, label: "blogs" },
    { href: "/projects", icon: Computer, label: "projects" },
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
      Blog: {
        name: "Blog",
        url: "https://tanmaysarkar.hashnode.dev",
        icon: Icons.globe,
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
      company: "Nirmata",
      href: "https://nirmata.com",
      badges: [],
      location: "Bangalore, Karnataka, India",
      title: "Software Engineer",
      logoUrl: "/nirmata.webp",
      start: "Jul 2024",
      end: "Present",
      description:
        "Developed advanced tools for the Cloud Native ecosystem, resulting in a 15% improvement in performance and an increase in user satisfaction. Developed Policy Studio that generates AI policies and provides a UI. Redesigned and implemented a new user interface using the MVC model, improving user engagement and simplifying navigation.",
    },
    {
      company: "Cheerio",
      href: "https://cheerio.in",
      badges: [],
      location: "Bangalore, Karnataka, India",
      title: "Software Engineer",
      logoUrl: "/cheerioai.png",
      start: "Mar",
      end: "Jul 2024",
      description:
        "Revamped the user interface, leading to an increase in user engagement and on-boarding new users. Developed and integrated automated email and notification services using AWS SNS and SES, improving communication efficiency for users.",
    },
    {
      company: "CoRider",
      href: "https://corider.in",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/corider.webp",
      start: "Dec",
      end: "Mar 2024",
      description:
        "Designed and built a Progressive Web App (PWA) using React.js, resulting in a 30% improvement in loading speed and increased user satisfaction. Developed real-time routing and socket functionality for the Flask backend, enhancing the application’s communication capabilities. Maintained the two codebases on EC2 Instances with Docker.",
    },
    {
      company: "Unreal Finance",
      href: "https://unreal.finance",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/unrealfinance.webp",
      start: "Feb",
      end: "Nov 2023",
      description:
        "Attracted new users by developing a high-conversion landing page using Next.js. Created CI/CD pipeline with GitHub Actions, EC2 Instance. Developed and integrated secure payment features using Stripe API and web-hooks, streamlining transactions, and improving user trust.",
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
  projects: [
    {
      title: "ArticleAI",
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
    {
      title: "GeoPulse",
      href: "https://geo-pulse.vercel.app",
      links: [
        {
          href: "https://geo-pulse.vercel.app",
          icon: '',
          type: "Website",
        },
        {
          href: "https://github.com/sarkartanmay393/GeoPulse",
          icon: '',
          type: "Github",
        }
      ],
      dates: "August 2024 – Present",
      active: true,
      description:
        "Analyze and compare geopolitical relations between countries using the latest data based on few factors. You will see a calculated score also. Increased user engagement by 20%.",
      technologies: ["TypeScript", "Next.js", "Supabase", "OpenAI"],
    },
    {
      title: "TaskManager-Kanban",
      href: "https://tsmk-dnd.vercel.app/",
      links: [
        {
          href: "https://tsmk-dnd.vercel.app/",
          icon: '',
          type: "Website",
        },
        {
          href: "https://github.com/sarkartanmay393/tsmk-dnd",
          icon: '',
          type: "Github",
        }
      ],
      dates: "March 2024 – Present",
      active: true,
      description:
        "Simple task manager with core functionalities. Streamlines task management and organization.",
      technologies: ["TypeScript", "React.js", "Express.js", "PostgreSQL", "Prisma"],
    },
    {
      title: "URL-Shortener-Go",
      href: "https://github.com/sarkartanmay393/URL-Shortener-Go",
      links: [
        {
          href: "https://github.com/sarkartanmay393/URL-Shortener-Go",
          icon: '',
          type: "Github",
        }
      ],
      dates: "April 2024 – Present",
      active: true,
      description:
        "Go-based URL shortener service with Redis and Docker integration for efficient and scalable performance.",
      technologies: ["Go", "Redis", "Docker"],
    },
    {
      title: "TypeTrails",
      href: "https://typetrails.vercel.app/",
      links: [
        {
          href: "https://typetrails.vercel.app/",
          icon: '',
          type: "Website",
        },
        {
          href: "https://github.com/sarkartanmay393/TypeTrails",
          icon: '',
          type: "Github",
        }
      ],
      dates: "June 2024 – Present",
      active: true,
      description:
        "A typing practice tool aimed at increasing typing speed. Current goal: 90 words per minute.",
      technologies: ["TypeScript"],
    },
    {
      title: "FrameFlex",
      href: "https://frameflex.vercel.app",
      links: [
        {
          href: "https://frameflex.vercel.app",
          icon: '',
          type: "Website",
        },
        {
          href: "https://github.com/sarkartanmay393/FrameFlex",
          icon: '',
          type: "Github",
        }
      ],
      dates: "August 2024 – Present",
      active: true,
      description:
        "A tool to capture screenshots and create GIFs from specific areas on a webpage using html2canvas.",
      technologies: ["TypeScript"],
    },
    {
      title: "CryptoConvert",
      href: "https://cryptoconvert.vercel.app",
      links: [
        {
          href: "https://cryptoconvert.vercel.app",
          icon: '',
          type: "Website",
        },
        {
          href: "https://github.com/sarkartanmay393/CryptoConvert",
          icon: '',
          type: "Github",
        }
      ],
      dates: "September 2024 – Present",
      active: true,
      description:
        "A web application allowing users to convert cryptocurrency to fiat currencies. Enhances user experience for crypto conversions.",
      technologies: ["TypeScript", "React.js", "Express.js", "ShadcnUI"],
    },
    {
      title: "RoomPay-Web",
      href: "https://roompay.vercel.app",
      links: [
        {
          href: "https://roompay.vercel.app",
          icon: '',
          type: "Website",
        },
        {
          href: "https://github.com/sarkartanmay393/RoomPay-Web",
          icon: '',
          type: "Github",
        }
      ],
      dates: "December 2023 – Present",
      active: true,
      description:
        "A TypeScript-based web application to track expenses and due money between friends. It simplifies expense management for groups.",
      technologies: ["TypeScript", "React.js", "Supabase", "Material UI"],
    }
  ],
  hackathons: [],
  notes: [
    { 
      type: 'quote', 
      brief: "You are what think you are. You are what you do. You are what you want to do. And you are the best thing since sliced bread.",
      publishedAt: "2023-08-18",
      title: "",
      url: "",
      cover: "",
    },
  ]
} as const;
