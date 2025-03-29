import { motion } from "framer-motion";
import { Globe, Github } from "lucide-react";

import ProjectCard from "./ProjectCard";

import auth from "../assets/auth.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import admin from "../assets/admin.jpg";
import chat from "../assets/chat.jpg";
import gui from "../assets/gui.jpg";
import logistics from "../assets/logistics.jpg";

const projects = [
  {
    title: "MERN Authentication with All Features",
    description:
      "A complete MERN stack authentication system with features like secure login/signup, password strength meter, forgot password functionality, JWT token-based authentication, and welcome email on registration.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcryptjs",
      "MailTrap",
    ],
    links: [
      {
        type: "Website",
        href: "https://steve-mern-auth.onrender.com/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/StevenSriram/MERN_Auth",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: auth,
  },
  {
    title: "ShopSphere - Versatile ECommerce Platform",
    description:
      "ShopSphere is a comprehensive e-commerce platform that connects manufacturers and customers, offering a centralized marketplace for various products. The platform provides seamless B2C transactions with features such as user authentication, product browsing, cart management, order processing, and secure PayPal payments.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Redux Toolkit",
      "PayPal",
    ],
    links: [
      {
        type: "Website",
        href: "https://steve-mern-ecommerce.onrender.com/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/StevenSriram/MERN_Ecommerce",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: ecommerce,
  },
  {
    title: "ShopSphere Admin Dashboard",
    description:
      "A fully functional admin dashboard for the ShopSphere e-commerce platform. It includes product management, order management, banner and discount functionality, allowing admins to control product listings, track orders, and manage promotional offers.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Redux Toolkit",
    ],
    links: [
      {
        type: "Website",
        href: "https://steve-mern-ecommerce.onrender.com/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/StevenSriram/MERN_Ecommerce",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: admin,
  },
  {
    title: "Chatty - Real-Time Chat Application",
    description:
      "A complete MERN stack chat application featuring real-time communication, user profiles, image sharing, and private chat functionality. Built with Socket .IO for live messaging and includes a robust user authentication system.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "Zustand",
      "Node.js",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Cloudinary",
    ],
    links: [
      {
        type: "Website",
        href: "https://steve-mern-chat.onrender.com/",
        icon: <Globe className="w-4 h-4" />,
      },
      {
        type: "Source",
        href: "https://github.com/StevenSriram/MERN_Chat",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: chat,
  },
  {
    title: "LogiFlow – Smart Logistics & Transportation Management",
    description:
      "LogiFlow is a logistics management system designed to optimize transportation by ensuring the availability of suitable vehicles and personnel for efficient loading and unloading. The platform helps organizations manage the movement of goods seamlessly, ensuring timely and secure deliveries.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Leaflet.js",
      "Stripe",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/StevenSriram/MERN_Auth",
        icon: <Github className="w-4 h-4" />,
      },
    ],
    image: logistics,
  },
  {
    title: "FitHub – Workout Guide",
    description:
      "FitHub is a Java desktop application that lets users enter their fitness details and view workout routines based on their selected level (Beginner, Intermediate, Advanced).",
    technologies: ["Java", "Swing", "JDBC", "MySQL Database"],
    links: [],
    image: gui,
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full max-w-6xl">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
        >
          My Projects
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
