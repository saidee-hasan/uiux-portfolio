import { StatItem } from '@/types';
import CountUp from 'react-countup';
import { motion } from "framer-motion";

const stats: StatItem[] = [
  {
    num: 3,
    text: "Years of experience",
  },
  {
    num: 50,
    text: "Successful projects",
  },
  {
    num: 390,
    text: "Client feedbacks",
  },
];

// Animation variants for container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const CountsUp = () => {
  return (
    <section className="py-8">
      <motion.div
        className="border border-gray-800 bg-content/20 backdrop:blur-2xl shadow rounded-lg py-5 px-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="d-grid gap-4">
          {stats.map(({ num, text }, index) => (
            <motion.div
              key={index}
              className="d-flex gap-2 justify-self-center-safe"
              variants={itemVariants}
            >
              <CountUp
                end={num}
                duration={2.5}
                delay={index * 0.3}
                className="hero-title hero-title-color"
              />
              <p className="text-xs sm:text-sm md:text-base leading-tight">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
