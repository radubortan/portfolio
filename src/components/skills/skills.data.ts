interface Domain {
  title: string;
  image: string;
  imageAlt: string;
  skills: string[];
}

export const domains: Domain[] = [
  {
    title: "Front-End",
    image: "frontend.png",
    imageAlt: "front-end icon",
    skills: ["React", "Angular", "VueJS", "SCSS", "Bootstrap"],
  },
  {
    title: "Back-End",
    image: "backend.png",
    imageAlt: "back-end icon",
    skills: ["NodeJS", "ExpressJS", "Java", "TypeScript"],
  },
  {
    title: "Bases de Données",
    image: "database.png",
    imageAlt: "database icon",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Outils",
    image: "tools.png",
    imageAlt: "tools icon",
    skills: ["Git", "Docker", "Figma", "Photoshop"],
  },
];
