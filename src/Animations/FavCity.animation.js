export const FavCitiesVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    backgroundColor: "hsl(0, 0%, 80%)",
    transition: {
      duration: 0.25,
      ease: "linear",
    },
  },
};
