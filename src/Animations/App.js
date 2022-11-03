export const AppVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 1,
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      delay: 0.25,
      duration: 1,
      ease: "easeOut",
    },
  },
};
