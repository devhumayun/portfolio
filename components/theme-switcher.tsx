"use client";
import { useThemeContext } from "@/context/theme-context";
import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = "light" | "dark";

const ThemeSwitcher = () => {
  const { theme, toogleTheme } = useThemeContext()
  
  return (
    <button
      className="fixed bottom-[1.7rem] right-[1.7rem] text-xl bg-opacity-80 text-gay-950 shadow-xl h-12 w-12 rounded-full flex justify-center items-center backdrop-blur-[.5rem] border border-opacity-30 hover:scale-[1.15] active:scale-110 transition-all"
      onClick={toogleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitcher;
