import React from "react";
import { motion } from "framer-motion";

import { DockDemo, ParticlesDemo } from "./components/custom";

import {
  Header,
  About,
  Skills,
  Experience,
  Projects,
  Footer,
} from "./sections";

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
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default App;
