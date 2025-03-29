import { lazy } from "react";

const Header = lazy(() => import("./Header"));
const About = lazy(() => import("./About"));

const Skills = lazy(() => import("./Skills"));
const Experience = lazy(() => import("./Experience"));

const Projects = lazy(() => import("./Projects"));
const Footer = lazy(() => import("./Footer"));

export { Header, About, Skills, Experience, Projects, Footer };
