import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

import useThemeStore from "@/store/themeStore";

const ModeToggle = () => {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    const newTheme = theme === "DARK" ? "LIGHT" : "DARK";
    setTheme(newTheme);
  };

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="px-2 pb-2"
      onClick={toggleTheme}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
};

export default ModeToggle;
