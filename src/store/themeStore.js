import { create } from "zustand";

const useThemeStore = create((set) => {
  const savedTheme = localStorage.getItem("portfolio-theme") || "light";

  // ! Initialize theme with saved value from localStorage
  document.documentElement.classList.toggle("dark", savedTheme === "dark");

  return {
    theme: savedTheme,
    setTheme: (newTheme) => {
      set({ theme: newTheme });

      // ? Save Updated theme to localStorage
      localStorage.setItem("portfolio-theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    },
  };
});

export default useThemeStore;
