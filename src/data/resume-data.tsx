import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { NSNLogo } from "@/images/logos";

export const RESUME_DATA = {
  name: "Gino Daloisio",
  initials: "GD",
  location: "Buenos Aires, Argentina",
  locationLink: "https://www.google.com/maps/place/BuenosAires",
  about:
    "Full Stack Developer focused on building products with extra attention to detail",
  summary:
    "My focus lies in crafting apps that strike a balance between user-friendliness and complexity, as I am deeply committed to incorporating meticulous attention to detail in every project. I currently work with Next.js, TypeScript, and Node.js, accumulating over 3 years of experience in developing both personal and freelance-related applications.",
  avatarUrl: "https://avatars.githubusercontent.com/u/65517605?v=4",
  personalWebsiteUrl: "https://www.ginodaloisio.com",
  contact: {
    email: "ginodaloisio@icloud.com",
    tel: "+5492254424392",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ginodaloisio",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gino-d%E2%80%99aloisio-a80191263/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ginodaloisio_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Facultad de Ciencias Exactas",
      degree: "Systems Engineer (Ingeniería de Sistemas) — not finished ",
      start: "2019",
      end: "today",
    },
  ],
  work: [
    {
      company: "Free Lance — Alpha Zone Roleplay",
      link: "https://www.az-rp.com",
      badges: [],
      title: "Full Stack Developer",
      logo: NSNLogo,
      start: "2023",
      end: "2023",
      description: "Creating the entire site from an old PHP template",
    },
  ],
  skills: ["JavaScript", "TypeScript", "React/Next.js", "Node.js", "C"],
  projects: [
    {
      title: "create-faith-app",
      techStack: ["Side Project", "TypeScript", "CLI"],
      description: "A CLI to start a new 'faith' app, from t3 stack",
      link: {
        label: "create-faith-app",
        href: "https://github.com/ginodaloisio/create-faith-app",
      },
    },
    {
      title: "T3 Stock Manager",
      techStack: ["Personal Project", "TypeScript", "Next.JS"],
      description: "An Next.JS application designed to keep track of an stock",
    },
  ],
} as const;