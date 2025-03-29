import { lazy } from "react";

const ParticlesDemo = lazy(() => import("./ParticleDemo"));
const DockDemo = lazy(() => import("./DockDemo"));

export { ParticlesDemo, DockDemo };
