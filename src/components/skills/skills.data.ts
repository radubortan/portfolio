interface Domain {
  title: string;
  image: string;
  imageAlt: string;
  skills: string[];
}

export const domains: Domain[] = [
  {
    title: "SKILL_1_TITLE",
    image: "frontend.png",
    imageAlt: "front-end icon",
    skills: ["React", "Angular", "VueJS", "SCSS", "Bootstrap"],
  },
  {
    title: "SKILL_2_TITLE",
    image: "backend.png",
    imageAlt: "back-end icon",
    skills: ["NodeJS", "ExpressJS", "Java", "TypeScript"],
  },
  {
    title: "SKILL_3_TITLE",
    image: "database.png",
    imageAlt: "database icon",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "SKILL_4_TITLE",
    image: "tools.png",
    imageAlt: "tools icon",
    skills: ["Git", "Docker", "Figma", "Photoshop"],
  },
];
