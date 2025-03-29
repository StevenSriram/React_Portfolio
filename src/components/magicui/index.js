import { lazy } from "react";

const Particles = lazy(() => import("./particles"));
const BoxReveal = lazy(() => import("./box-reveal"));

export { Particles, BoxReveal };
