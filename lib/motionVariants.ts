//lib/motionVariants.ts

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: (delay = 0) => ({
    duration: 0.8,
    delay,
    ease: "easeOut",
  }),
};

export const fadeLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: (delay = 0) => ({
    duration: 1,
    delay,
    ease: "easeOut",
  }),
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: (delay = 0) => ({
    duration: 0.8,
    delay,
    ease: "easeOut",
  }),
};
