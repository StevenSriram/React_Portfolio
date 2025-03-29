import React from "react";
import { motion } from "framer-motion";

import profile from "../assets/me.jpg";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="md:w-1/3 mb-4 md:mb-0" variants={imageVariants}>
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-lg"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <img
            src={profile}
            alt="Sriram"
            className="w-full h-full object-cover object-left-top"
          />
        </motion.div>
      </motion.div>

      <div className="md:w-2/3 md:pl-6">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center md:text-left"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-sm md:text-base text-gray-600 dark:text-gray-400 text-center md:text-left mb-4"
          variants={itemVariants}
        >
          I'm a freelance MERN stack developer passionate about creating
          innovative web solutions. Specializing in MongoDB, Express.js,
          React.js, and Node.js, I bring ideas to life through robust and
          scalable applications.
        </motion.p>

        <motion.p
          className="text-sm md:text-base text-gray-600 dark:text-gray-400 text-center md:text-left mb-4"
          variants={itemVariants}
        >
          My commitment to continuous learning ensures cutting-edge solutions
          for every project.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
