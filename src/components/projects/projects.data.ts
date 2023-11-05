export interface Project {
  title: string;
  longDescription: string[];
  skills: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "Portfolio",
    longDescription: [
      "Le site sur lequel vous vous trouvez actuellement, codé en React et TypeScript.",
      "Le style et les animations utilisent SCSS et Framer Motion.",
    ],
    link: "https://github.com/radubortan/portfolio",
    skills: ["React", "TypeScript", "SCSS", "Framer Motion"],
  },
  {
    title: "Application recherche d'emploi",
    longDescription: [
      "Application permettant aux utilisateurs de publier des offres d'emploi et de postuler à celles-ci.",
      "L'application est structurée en micro-services comme par exemple l'autentification la gestion des profils ou la gestion des offres d'emploi.",
      "Le back-end est codé en Java Spring Boot avec un front-end React.",
    ],
    skills: ["Java", "Spring Boot", "React", "Micro-services"],
  },
  {
    title: "Application culinaire web et mobile",
    longDescription: [
      "L'application permet de créer des recettes pouvant être réutilisées au sein d'autres recettes.",
      "Un système de gestion des stocks d'ingrédients permet de calculer le coût des repas.",
      "L'application est disponible sous forme d'application web, utilisant React, ainsi que sous forme d'application mobile, développée en utilisant Swift et SwiftUI.",
    ],
    link: "https://github.com/radubortan/swift-project",
    skills: ["React", "Swift", "SwiftUI", "Firebase"],
  },
];
