import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { AlphaZoneLogo, WinterZeroLogo } from "@/images/logos";

export const RESUME_DATA = {
  name: "Gino D'Aloisio",
  initials: "GD",
  location: "Málaga, España",
  locationLink: "https://www.google.com/maps/place/Malaga",
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
      company: "Winter Zero S.A",
      link: "https://ar.linkedin.com/company/winterzerosa",
      badges: [],
      title: "Salesman",
      logo: WinterZeroLogo,
      start: "2016",
      end: "2024",
      description: "Worked on temporary contract during summer vacations",
    },
    {
      company: "Free Lance — Alpha Zone Roleplay",
      link: "https://www.az-rp.com",
      badges: [],
      title: "Full Stack Developer",
      logo: AlphaZoneLogo,
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

export const ES_RESUME_DATA = {
  name: "Gino D'Aloisio",
  initials: "GD",
  location: "Málaga, España",
  locationLink: "https://www.google.com/maps/place/Malaga",
  about: "Desarrollador Full Stack, Vendedor",
  summary:
    "Soy una persona organizada y responsable, me complemento bien en equipo, soluciono problemas de manera eficaz y eficiente, tengo una excelente predisposición, estar siempre bien informado sobre los productos que vendo y que utilizo diariamente en el trabajo es una obligación para mi.",
  avatarUrl: "https://avatars.githubusercontent.com/u/65517605?v=4",
  personalWebsiteUrl: "https://www.ginodaloisio.com/es",
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
      degree: "Ingeniería de Sistemas — actualmente cursando",
      start: "2019",
      end: "2024",
    },
  ],
  languages: ["Español", "Inglés"],
  work: [
    {
      company: "Winter Zero S.A",
      link: "https://ar.linkedin.com/company/winterzerosa",
      badges: [],
      title: "Vendedor",
      logo: WinterZeroLogo,
      start: "2016",
      end: "2024",
      description:
        "Atención al publico personalizada, principalmente marca Oakley",
    },
    {
      company: "Free Lance — Alpha Zone Roleplay",
      link: "https://www.az-rp.com",
      badges: ["Remoto"],
      title: "Full Stack Developer",
      logo: AlphaZoneLogo,
      start: "2023",
      end: "2023",
      description:
        "Desarrollo completo del sitio web copiando al sitio antiguo",
    },
  ],
  skills: ["JavaScript", "TypeScript", "React/Next.js", "Node.js", "C"],
  projects: [
    {
      title: "create-faith-app",
      techStack: ["Side Project", "TypeScript", "CLI"],
      description: "Herramienta CLI para iniciar un nuevo proyecto con Next.js",
      link: {
        label: "create-faith-app",
        href: "https://github.com/ginodaloisio/create-faith-app",
      },
    },
    {
      title: "T3 Stock Manager",
      techStack: ["Personal Project", "TypeScript", "Next.JS"],
      description: "App web para controlar stock",
    },
  ],
} as const;
