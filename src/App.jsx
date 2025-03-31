import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { DockDemo, ParticlesDemo } from "./components/custom";

import {
  Header,
  About,
  Skills,
  Experience,
  Projects,
  Footer,
} from "./sections";

// * Custom hook to detect scroll direction
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("down");
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection("up");
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return scrollDirection;
};

// * Animated Section Component to handle scroll animations
const AnimatedSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      y: scrollDirection === "down" ? 50 : -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="w-full my-8 flex justify-center"
    >
      <div className="w-full max-w-6xl">{children}</div>
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <ParticlesDemo />
      <DockDemo />
      <div className="flex flex-col items-center justify-center p-2 w-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <div className="w-full max-w-6xl">
            <Header />
          </div>
        </motion.div>
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Experience />
        </AnimatedSection>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </div>
    </div>
  );
};

export default App;
