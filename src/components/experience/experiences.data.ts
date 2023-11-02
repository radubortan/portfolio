export interface Experience {
  id: number;
  title: string;
  description: string;
  company: string;
  image: string;
  imageAlt: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineer Assistant",
    company: "Teads",
    image: "teads.jpg",
    imageAlt: "Teads' office",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vitae officiis error nobis, perferendis rem adipisci sit. Distinctio aliquam tempore eos. Error accusantium unde vitae dolore blanditiis maxime architecto quibusdam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vitae officiis error nobis, perferendis rem adipisci sit. Distinctio aliquam tempore eos. Error accusantium unde vitae dolore blanditiis maxime architecto quibusdam!",
  },

  {
    id: 2,
    title: "Front-End Migration",
    company: "Lox Solution",
    image: "lox.png",
    imageAlt: "Lox solution software screenshot",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vitae officiis error nobis, perferendis rem adipisci sit. Distinctio aliquam tempore eos. Error accusantium unde vitae dolore blanditiis maxime architecto quibusdam!",
  },
  {
    id: 3,
    title: "Research Assistant",
    company: "Helmut Schmidt University",
    image: "/hsu.webp",
    imageAlt: "Helmut Schmidt University",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vitae officiis error nobis, perferendis rem adipisci sit. Distinctio aliquam tempore eos. Error accusantium unde vitae dolore blanditiis maxime architecto quibusdam!",
  },
  {
    id: 4,
    title: "Medical App Enhancement",
    image: "/consultation.jpg",
    company: "OncoAssist",
    imageAlt: "Doctor and patient vector art",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vitae officiis error nobis, perferendis rem adipisci sit. Distinctio aliquam tempore eos. Error accusantium unde vitae dolore blanditiis maxime architecto quibusdam!",
  },
];
