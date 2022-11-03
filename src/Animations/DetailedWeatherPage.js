export const DetailedWeatherPageVariant = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duation: 1,
      ease: "easeOut",
    },
  },
  exit: {
    y: "100vh",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
