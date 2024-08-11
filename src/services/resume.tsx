import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Tanmay Sarkar",
  initials: "TSX",
  url: "https://tanmaysarkar.vercel.app",
  location: "Dhupguri, West Bengal, India",
  locationLink: "https://www.google.com/maps/place/dhupguri",
  description:
    "Software Engineer with a passion for AI and full-stack development. I love building impactful web applications and staying updated with the latest technologies.",
  summary:
    "I am a dedicated Software Engineer with over a year of experience in developing user-focused web applications. Currently, I’m working as a Software Engineer Intern at Nirmata, where I leverage JavaScript to drive impactful solutions across the user interface of their Cloud Native solutions. Previously, I have interned at Cheerio AI, CoRider, and Unreal Finance, where I contributed to various aspects such as UI features, backend logic, Progressive Web App development, and frontend design. I am pursuing a B.Tech in Computer Science at Cooch Behar Government Engineering College, with a strong foundation in JavaScript, TypeScript, Python, and Java, and a growing expertise in Docker, Git, GitHub Actions, and AWS.",
  avatarUrl: "/me.png",
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "AWS",
    "Docker",
    "Git",
    "GitHub Actions",
    "Redis",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "about" },
    { href: "/now", icon: NotebookIcon, label: "now" },
    { href: "/blog", icon: NotebookIcon, label: "blog" },
    { href: "/arts", icon: NotebookIcon, label: "arts" },
    { href: "/projects", icon: NotebookIcon, label: "projects" },
    { href: "/workexperience", icon: NotebookIcon, label: "work experience" },
    { href: "/elsewhere", icon: NotebookIcon, label: "elsewhere" },
    { href: "/readings", icon: NotebookIcon, label: "readings" },
  ],
  contact: {
    email: "sarkartanmay393@gmail.com",
    tel: "+91-1234567890",
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
    // TODO: add more
    {
      company: "Nirmata",
      href: "https://nirmata.com",
      badges: [],
      location: "San Jose, California, United States",
      title: "Software Engineer Intern",
      logoUrl: "/nirmata.png",
      start: "July 2024",
      end: "Present",
      description:
        "Leveraging JavaScript to drive impactful solutions across the user interface of this Cloud Native solution.",
    },
    {
      company: "Cheerio AI",
      href: "#",
      badges: [],
      location: "Bengaluru, Karnataka, India",
      title: "Software Engineer Intern",
      logoUrl: "/cheerio.png",
      start: "April 2024",
      end: "June 2024",
      description:
        "Implemented various UI features and backend logic, fixed urgent product bugs, and developed Email and Notification services using AWS.",
    },
    {
      company: "CoRider",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/corider.png",
      start: "December 2023",
      end: "March 2024",
      description:
        "Helped launch the early beta of CoRider's platform, improving UI, PWA functionalities, and chat features.",
    },
    {
      company: "Unreal Finance",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/unrealfinance.png",
      start: "July 2023",
      end: "November 2023",
      description:
        "Contributed to user growth by developing a new landing page, advanced financial chart components, and a CI/CD pipeline.",
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
      title: "Project 1",
      href: "#",
      dates: "Month Year - Month Year",
      active: true,
      description:
        "Description of the project. This could be something you’ve worked on during your internships or a personal project.",
      technologies: ["Technology1", "Technology2", "Technology3"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    // TODO: add more
  ],
  hackathons: [
    // {
    //   title: "Hack Western 5",
    //   dates: "November 23rd - 25th, 2018",
    //   location: "London, Ontario",
    //   description:
    //     "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
    //   links: [],
    // },
  ],
} as const;
