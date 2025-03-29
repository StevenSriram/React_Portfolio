import { Particles } from "@/components/magicui/particles";

import useThemeStore from "@/store/themeStore";

const ParticlesDemo = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className="absolute inset-0 min-h-screen">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={theme === "dark" ? "#fff" : "#000"}
        refresh
      />
    </div>
  );
};

export default ParticlesDemo;
