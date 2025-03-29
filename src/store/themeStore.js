import { create } from "zustand";

const useThemeStore = create((set) => {
  const savedTheme = localStorage.getItem("theme") || "LIGHT"; // Fallback to LIGHT theme if nothing is saved

  // ! Initialize theme with saved value from localStorage
  document.documentElement.classList.toggle("DARK", savedTheme === "DARK");

  return {
    theme: savedTheme,
    setTheme: (newTheme) => {
      set({ theme: newTheme });

      // ? Save Updated theme to localStorage
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("DARK", newTheme === "DARK");
    },
  };
});

export default useThemeStore;
