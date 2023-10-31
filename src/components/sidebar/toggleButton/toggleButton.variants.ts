const BACKGROUND_COLOR_ON_OPEN = 0.7;
const BACKGROUND_COLOR_ON_CLOSE = 0.5;
const GENERAL_ANIMATION_ON_OPEN = 0.4;

export const topLineVariants = {
  open: {
    rotate: 45,
    translateY: 7,
    backgroundColor: "rgb(0,0,0)",
    transition: {
      duration: GENERAL_ANIMATION_ON_OPEN,
      backgroundColor: {
        duration: BACKGROUND_COLOR_ON_OPEN,
      },
    },
  },
  closed: {
    rotate: 0,
    translateY: 0,
    transition: { duration: BACKGROUND_COLOR_ON_CLOSE },
  },
};

export const bottomLineVariants = {
  open: {
    rotate: -45,
    translateY: -7,
    backgroundColor: "rgb(0,0,0)",
    transition: {
      duration: GENERAL_ANIMATION_ON_OPEN,
      backgroundColor: {
        duration: BACKGROUND_COLOR_ON_OPEN,
      },
    },
  },
  closed: {
    rotate: 0,
    translateY: 0,
    transition: { duration: BACKGROUND_COLOR_ON_CLOSE },
  },
};

export const middleLineVariants = {
  open: {
    translateX: 20,
    opacity: 0,
  },
};
