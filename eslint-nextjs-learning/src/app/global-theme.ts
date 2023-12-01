"use client";

import { useCallback, useEffect, useState } from "react";

export type ThemeStyle = "light" | "dark";
export type ThemeSelectorType = ThemeStyle | "follow";

const initTheme = "follow";
let initFlag = true;
export const useTheme = () => {
  const [themeSelector, toggleTheme] = useState<ThemeSelectorType>(initTheme);
  const [theme, setTheme] = useState<ThemeStyle>("dark");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const followSystem = useCallback(() => {
    const prefers = window.matchMedia("(prefers-color-scheme: dark)");
    followSystemListener(prefers);
    prefers.addEventListener("change", () => followSystemListener(prefers));
    return prefers;
  }, []);
  useEffect(() => {
    toggleTheme(
      (localStorage.getItem("theme") as ThemeSelectorType) || initTheme,
    );
  }, []);
  useEffect(() => {
    setIsLoading(true);
    let prefers: MediaQueryList;
    if (initFlag && themeSelector === "follow") {
      initFlag = false;
      return;
    }
    if (themeSelector === "follow") {
      prefers = followSystem();
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", themeSelector);
      setTheme(themeSelector);
      setIsLoading(false);
    }
    return () => {
      prefers?.removeEventListener("change", () =>
        followSystemListener(prefers),
      );
    };
  }, [followSystem, themeSelector]);
  useEffect(() => {
    if (document.documentElement.getAttribute("data-theme") === theme) return;
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const followSystemListener = (prefers: MediaQueryList) => {
    const theme = prefers.matches ? "dark" : "light";
    setTheme(theme);
    setIsLoading(false);
  };
  return {
    theme,
    isLoading,
    themeSelector,
    toggleTheme,
  };
};
const followSystemListener = (prefers: MediaQueryList) => {
  const theme = prefers.matches ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
};
export const use = () => {
  const a = () => {
    const b = (localStorage.getItem("theme") as ThemeSelectorType) || initTheme;
    const prefers = window.matchMedia("(prefers-color-scheme: dark)");
    followSystemListener(prefers);
    prefers.addEventListener("change", () => followSystemListener(prefers));
  };
  typeof window !== "undefined" && a();
};
console.log("global-theme.ts");
