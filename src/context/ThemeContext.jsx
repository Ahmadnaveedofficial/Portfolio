import { useContext, createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") || "light",
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", isDarkMode);
  }, [isDarkMode]);
  const toggleTheme = () =>
    setIsDarkMode((prev) => (prev === "dark" ? "light" : "dark"));
  return (
    <ThemeContext.Provider
      value={{ isDarkMode: isDarkMode === "dark", toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
