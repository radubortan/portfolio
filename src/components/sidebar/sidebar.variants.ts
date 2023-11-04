export const sidebarVariants = {
  open: {
    clipPath: "circle(2160px at 50px 50px)",
    transition: {
      type: "tween",
      duration: 1,
      delay: 0.1,

      // needed so the sidebar doesn't pop in when the page loads
      opacity: { duration: 0.01 },
    },
    // needed so the sidebar doesn't pop in when the page loads
    opacity: 1,
  },
  closed: {
    clipPath: "circle(0px at 50px 50px)",
    transition: {
      type: "tween",
      duration: 0.5,

      // needed so the sidebar doesn't pop in when the page loads
      opacity: { delay: 5, duration: 0.5 },
    },
    // needed so the sidebar doesn't pop in when the page loads
    opacity: 0,
  },
};
