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
    description:
      "Maintenance d'une application ayant plus de 70 contributeurs. Facilitation de l'ajout de nouvelles fonctionnalités grâce à une migration d'Angular vers React et la mise en place d'architectures réutilisables.",
    description2:
      "Internationalisation de l'interface afin de répondre à la demande des clients de la région APAC.",
    skills: ["React", "Angular", "TypeScript", "NodeJS", "Scala", "Redux"],
    dates: "02/2023 - 08/2023",
  },

  {
    id: 2,
    title: "Migration Front-End",
    company: "Lox Solution",
    image: "lox.png",
    imageAlt: "Lox solution software screenshot",
    description:
      "Mise en place d'une nouvelle architecture front-end grâce à la migration de Vue2 vers Vue3 et l'ajout de TypeScript.",
    description2:
      "Simplification de l'ajout de nouvelles fonctionnalités grâce à une restructuration du code.",
    skills: ["VueJS", "Pinia", "TypeScript", "SCSS"],
    dates: "12/2022 - 02/2023",
  },
  {
    id: 3,
    title: "Assistant de Recherche",
    company: "Helmut Schmidt University",
    image: "hsu.webp",
    imageAlt: "Helmut Schmidt University",
    description:
      "En tant que membre du département des Systèmes Logistiques, j'ai élaboré des scripts Python visant à traiter des données LiDAR pour des robots autonomes.",
    description2:
      "Dans le cadre d'un projet visant à améliorer la circulation en ville grâce à la 5G, j'ai modifié une voiture télécommandée à l'aide d'un Arduino pour suive des trajets marqués au sol.",
    skills: ["Python", "JavaScript", "Arduino"],
    dates: "06/2022 - 08/2022",
  },
  {
    id: 4,
    title: "Amélioration Application Médicale",
    image: "consultation.jpg",
    company: "OncoAssist",
    imageAlt: "Doctor and patient vector art",
    description:
      "Ajout d'un outil permettant de créer des formulaires de suivi pour des patients atteints du cancer. L'outil permet de personnaliser les formulaires en fonction du type de cancer et du patient.",
    description2:
      "L'ajout d'un tableau de bord facilite le suivi en offrant une visualisation optimale des données essentielles.",
    skills: ["React", "NodeJS", "MongoDB"],
    dates: "03/2022 - 05/2022",
  },
];
