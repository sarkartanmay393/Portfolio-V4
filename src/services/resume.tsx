import { Icons } from "@/components/icons";
import { BookOpenText, Computer, HomeIcon, NotebookIcon } from "lucide-react";
import { cache } from "react";
import { getKVBulk } from "@/lib/kv";

const NAVBAR_ICONS: Record<string, any> = {
  home: HomeIcon,
  blogs: NotebookIcon,
  works: Computer,
  notes: BookOpenText,
};

const SOCIAL_ICONS: Record<string, any> = {
  GitHub: Icons.github,
  LinkedIn: Icons.linkedin,
  Instagram: Icons.instagram,
  email: Icons.email,
  x: Icons.x,
};

const RESUME_KEYS = [
  "name",
  "initials",
  "url",
  "location",
  "locationLink",
  "description",
  "summary",
  "avatarUrl",
  "skills",
  "navbar",
  "contact",
  "work",
  "education",
  "works",
  "hackathons",
  "notes",
  "highlightWork",
  "showHighlightWork",
] as const;

export interface ResumeData {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  navbar: { href: string; label: string; icon: any }[];
  contact: {
    email: string;
    tel: string;
    social: Record<string, { name: string; url: string; navbar: boolean; icon: any }>;
  };
  work: any[];
  education: any[];
  works: any[];
  hackathons: any[];
  notes: any[];
  highlightWork: string;
  showHighlightWork: boolean;
}

export const getResumeData = cache(async (): Promise<ResumeData> => {
  const values = await getKVBulk([...RESUME_KEYS]);

  const data: any = {};
  for (const key of RESUME_KEYS) {
    const raw = values[key];
    if (raw == null) {
      data[key] = null;
      continue;
    }
    try {
      data[key] = JSON.parse(raw);
    } catch {
      const ifBoolean = raw.toLowerCase().trim() === "true" || raw.toLowerCase().trim() === "false";
      data[key] = ifBoolean ? raw.toLowerCase().trim() === "true" : raw;
    }
  }

  data.navbar = data.navbar.map((item: any) => ({
    ...item,
    icon: NAVBAR_ICONS[item.label] ?? HomeIcon,
  }));

  for (const key of Object.keys(data.contact.social)) {
    data.contact.social[key].icon = SOCIAL_ICONS[key] ?? Icons.x;
  }

  return data as ResumeData;
});
