export const sidebarVariants = {
  open: {
    clipPath: "circle(2160px at 50px 50px)",
    transition: {
      type: "tween",
      duration: 1,
      delay: 0.1,
    },
  },
  closed: {
    clipPath: "circle(0px at 50px 50px)",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};
