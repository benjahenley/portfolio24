"use client";

import { useTheme } from "./ThemeProvider";

export const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      className="px-3 py-2 cursor-pointer text-3xl rounded-full bg-white  dark:bg-gray-800 hover:bg-gray-200">
      {theme === "light" ? "🌞" : "🌝"}
    </div>
  );
};
