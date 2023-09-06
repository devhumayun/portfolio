"use client"
import { type } from "os";
import React, { useEffect, useState, createContext, useContext } from "react";
type Theme = "light" | "dark";
type ThemeProps = {
    children: React.ReactNode 
}

type ThemeContextTypes= {
    theme: Theme
    toogleTheme : () => void
}

export const ThemeContext = createContext<ThemeContextTypes | null>(null)

const ThemeContextProvider = ({
    children
}:ThemeProps) => {
 
  const [theme, setTheme] = useState<Theme>("light");

  const toogleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(perfers-color-schema: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return <ThemeContext.Provider value={{
    theme,
    toogleTheme
  }}>
    {children}
  </ThemeContext.Provider>
};

export default ThemeContextProvider;

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if(context === null){
      throw new Error("useThemeContext must be use in ThemeContextProvider")
  }
  return context
}


