import { motion } from "framer-motion";
import useThemeStore from "@/store/themeStore";

const ProjectCard = ({ project }) => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 bg-white dark:bg-gray-800"
    >
      {/* Glass effect with dynamic opacity, blur, and text styling */}
      <div
        className={`absolute inset-0 bg-opacity-60 backdrop-blur flex flex-col justify-center items-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ${
          theme === "dark"
            ? "bg-gradient-to-r from-gray-900 via-black to-gray-800"
            : "bg-gradient-to-r from-gray-200 via-white to-gray-200"
        }`}
      >
        <h3
          className={`text-2xl text-center font-bold mb-4 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-sm mb-4 text-center ${
            theme === "dark" ? "text-gray-300" : "text-gray-900"
          }`}
        >
          {project.description}
        </p>
        <div className="flex space-x-4">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                theme === "dark"
                  ? "text-white hover:text-gray-200"
                  : "text-gray-900 hover:text-gray-600"
              }  transition-colors text-2xl`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h4
          className={`text-lg font-semibold mb-2 ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          {project.title}
        </h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`text-xs px-2 py-1 border rounded-full ${
                theme === "dark"
                  ? "border-gray-600 text-gray-200"
                  : "border-gray-300 text-gray-700"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
