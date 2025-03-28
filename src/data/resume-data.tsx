import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Gino D'Aloisio",
  initials: "GD",
  location: "Málaga, Spain",
  locationLink: "https://www.google.com/maps/place/Malaga",
  about:
    "Full Stack Developer focused on building products with extra attention to detail",
  summary:
    "My focus lies in crafting apps that strike a balance between user-friendliness and complexity, as I am deeply committed to incorporating meticulous attention to detail in every project. I currently work with Next.js, TypeScript, and Node.js, accumulating over 4 years of experience in developing both personal and freelance-related applications.",
  avatarUrl: "https://avatars.githubusercontent.com/u/65517605?v=4",
  personalWebsiteUrl: "https://www.ginodaloisio.com",
  contact: {
    email: "ginodaloisio@icloud.com",
    tel: "+34 663 710 865",
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
      company: "Free Lance — Web Application",
      link: "#",
      badges: [],
      title: "Full Stack",
      start: "December 2024",
      end: "today",
      description:
        "Website design and development with Next.js 15. Integration with KeyAuth (license manager) for user administration.",
    },
    {
      company: "Free Lance — Web Application",
      link: "#",
      badges: [],
      title: "Full Stack",
      start: "March 2024",
      end: "today",
      description:
        "Front-end application migration from React 16 to React 18. Seamless integration with existing backend infrastructure. Delivery of updated, efficient and easily maintainable codebase.",
    },
    {
      company: "Free Lance — Web Application",
      link: "#",
      badges: [],
      title: "Full Stack",
      start: "January 2023",
      end: "today",
      description:
        "Complete website development using Next.js 14, TailwindCSS, Prisma, tRPC and React Server Actions. Design and implementation of PostgreSQL database, APIs with queue systems in Node.js, load balancers in Go for multi-VPS socket connections. Development of additional APIs in Go and C scripts for managing various tasks. Administration of VPS and dedicated servers, supervising the deployment and maintenance of infrastructure.",
    },
    {
      company: "Free Lance — Alpha Zone Roleplay",
      link: "https://www.az-rp.com",
      badges: [],
      title: "Full Stack",
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
      description: "Next.JS application designed to keep track of stock",
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
    "Soy una persona organizada y responsable me complemento bien en equipo, soluciono problemas de manera eficaz y eficiente. Tengo una excelente predisposición. Mantenerme siempre bien informado sobre los productos que vendo y que utilizo diariamente en el trabajo es una obligación para mí.",
  avatarUrl: "https://avatars.githubusercontent.com/u/65517605?v=4",
  personalWebsiteUrl: "https://www.ginodaloisio.com/es",
  contact: {
    email: "ginodaloisio@icloud.com",
    tel: "+34 663 710 865",
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
      degree: "Ingeniería de Sistemas — no terminada",
      start: "2020",
      end: "2022",
    },
    {
      school: "Escuela Secundaria Técnica N1",
      degree: "Técnico Superior en Electromecánica",
      start: "2012",
      end: "2019",
    },
  ],
  languages: ["Español", "Inglés"],
  work: [
    {
      company: "Winter Zero S.A",
      link: "https://ar.linkedin.com/company/winterzerosa",
      badges: [],
      title: "Vendedor",
      start: "2016",
      end: "2024",
      description:
        "Atención al publico personalizada, principalmente marca Oakley",
    },
    {
      company: "Free Lance — AlphaZone Roleplay",
      link: "https://www.az-rp.com",
      badges: ["Remoto"],
      title: "Full Stack Developer",
      start: "2023",
      end: "2023",
      description:
        "Desarrollo completo del sitio web copiando al sitio antiguo",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "NestJS",
    "Node.js",
    "C",
    "Cloudflare",
    "Protección Anti-DDoS",
  ],
  projects: [
    {
      title: "create-faith-app",
      techStack: ["Proyecto personal", "TypeScript", "CLI"],
      description: "Herramienta CLI para iniciar un nuevo proyecto con Next.js",
      link: {
        label: "create-faith-app",
        href: "https://github.com/ginodaloisio/create-faith-app",
      },
    },
    {
      title: "T3 Stock Manager",
      techStack: ["Proyecto personal", "TypeScript", "Next.js"],
      description: "App web para controlar stock",
    },
  ],
} as const;
