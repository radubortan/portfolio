export interface Experience {
  id: number;
  title: string;
  description: string;
  description2?: string;
  company: string;
  image: string;
  imageAlt: string;
  skills: string[];
  dates: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineer Assistant",
    company: "Teads",
    image: "teads.jpg",
    imageAlt: "Teads' office",
    description: "EXPERIENCE_1_1",
    description2: "EXPERIENCE_1_2",
    skills: ["React", "Angular", "TypeScript", "NodeJS", "Scala", "Redux"],
    dates: "02/2023 - 08/2023",
  },

  {
    id: 2,
    title: "EXPERIENCE_2_TITLE",
    company: "Lox Solution",
    image: "lox.png",
    imageAlt: "Lox solution software screenshot",
    description: "EXPERIENCE_2_1",
    description2: "EXPERIENCE_2_2",
    skills: ["VueJS", "Pinia", "TypeScript", "SCSS"],
    dates: "12/2022 - 02/2023",
  },
  {
    id: 3,
    title: "EXPERIENCE_3_TITLE",
    company: "Helmut Schmidt University",
    image: "hsu.webp",
    imageAlt: "Helmut Schmidt University",
    description: "EXPERIENCE_3_1",
    description2: "EXPERIENCE_3_2",
    skills: ["Python", "JavaScript", "Arduino"],
    dates: "06/2022 - 08/2022",
  },
  {
    id: 4,
    title: "EXPERIENCE_4_TITLE",
    image: "consultation.jpg",
    company: "OncoAssist",
    imageAlt: "Doctor and patient vector art",
    description: "EXPERIENCE_4_1",
    description2: "EXPERIENCE_4_2",
    skills: ["React", "NodeJS", "MongoDB"],
    dates: "03/2022 - 05/2022",
  },
];
