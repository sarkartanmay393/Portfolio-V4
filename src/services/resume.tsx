import { Icons } from "@/components/icons";
import { BookOpenText, Computer, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanmay Sarkar",
  initials: "TSX",
  url: "https://tanmaysarkar.vercel.app",
  location: "Dhupguri, West Bengal, India",
  locationLink: "https://www.google.com/maps/place/dhupguri",
  description:
    "Software Engineer with a passion for AI, full-stack development, and building impactful applications that solve real-world problems.",
  summary:
    "I am a dedicated Software Engineer with over a year of experience in developing user-focused web applications. Currently, I’m working as a Software Engineer Intern at Nirmata, where I’ve contributed to CNCF ecosystem projects and user interface redesigns. My experience includes internships at Cheerio AI, CoRider, and Unreal Finance, where I improved user engagement, optimized performance, and implemented key functionalities. I am pursuing a B.Tech in Computer Science at Cooch Behar Government Engineering College, with a focus on JavaScript, React.js, Docker, and AWS.",
  avatarUrl: "/me.jpeg",
  skills: [
    "JavaScript",
    "TypeScript",
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
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Nirmata",
      href: "https://nirmata.com",
      badges: [],
      location: "Bangalore, Karnataka, India",
      title: "Software Engineer Intern",
      logoUrl: "/nirmata.png",
      start: "July 2024",
      end: "Present",
      description:
        "Developed tools for the CNCF ecosystem, improved performance by 20%, and enhanced user satisfaction by 15%. Redesigned the user interface using JavaScript, React.js, Docker, and AWS.",
    },
    {
      company: "Cheerio",
      href: "https://cheerio.in",
      badges: [],
      location: "Bangalore, Karnataka, India",
      title: "Software Engineer",
      logoUrl: "/cheerio.png",
      start: "March 2024",
      end: "July 2024",
      description:
        "Revamped UI, leading to a 25% increase in user engagement, and implemented email and notification services using AWS SNS and SES for over 5,000 users.",
    },
    {
      company: "CoRider",
      href: "https://corider.in",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/corider.png",
      start: "December 2023",
      end: "March 2024",
      description:
        "Developed a PWA using React.js, improving loading speed by 30%, and enhanced real-time functionality using Flask and AWS.",
    },
    {
      company: "Unreal Finance",
      href: "https://unreal.finance",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/unrealfinance.png",
      start: "February 2023",
      end: "November 2023",
      description:
        "Contributed to user acquisition by developing a landing page with Next.js, increasing users by 50%. Integrated payment features using Stripe API and built a CI/CD pipeline.",
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
      gpa: "8.3/10",
    },
    {
      school: "Dhupguri High School",
      href: "#",
      degree: "Higher Secondary in Science",
      logoUrl: "/dhsh.png",
      start: "2018",
      end: "2020",
    },
  ],
  projects: [
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
      href: "https://geo-pulse.vercel.app",
      links: [
        {
          href: "https://geo-pulse.vercel.app",
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
      brief: "A note on the importance of having a strong foundation in computer science.", title: "Computer Science Foundations", publishedAt: "2024-06-18", slug: "computer-science-foundations"
    },
  ]
} as const;
