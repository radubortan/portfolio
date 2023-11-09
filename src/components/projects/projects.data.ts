export interface Project {
  title: string;
  longDescription: string[];
  skills: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "PROJECT_1_TITLE",
    longDescription: ["PROJECT_1_1", "PROJECT_1_2"],
    link: "https://github.com/radubortan/portfolio",
    skills: ["React", "TypeScript", "SCSS", "Framer Motion"],
  },
  {
    title: "PROJECT_2_TITLE",
    longDescription: ["PROJECT_2_1", "PROJECT_2_2", "PROJECT_2_3"],
    skills: ["Java", "Spring Boot", "React", "Micro-services"],
  },
  {
    title: "PROJECT_3_TITLE",
    longDescription: ["PROJECT_3_1", "PROJECT_3_2", "PROJECT_3_3"],
    link: "https://github.com/radubortan/swift-project",
    skills: ["React", "Swift", "SwiftUI", "Firebase"],
  },
];
