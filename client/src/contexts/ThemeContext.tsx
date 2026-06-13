import React, { createContext, useContext, useEffect, useState } from "react";

export type ColorTheme = "light" | "dark" | "blue" | "siri" | "red" | "matcha";

interface ThemeContextType {
  theme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ColorTheme;
}

const THEME_KEY = "ea-color-theme";

export function ThemeProvider({
  children,
  defaultTheme = "dark",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ColorTheme>(() => {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored && ["light", "dark", "blue", "siri", "red", "matcha"].includes(stored)) {
      return stored as ColorTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    // Remove all theme classes
    root.classList.remove("dark", "theme-blue", "theme-siri", "theme-red", "theme-matcha");

    // Apply appropriate classes
    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "blue") {
      root.classList.add("theme-blue");
    } else if (theme === "siri") {
      root.classList.add("dark", "theme-siri");
    } else if (theme === "red") {
      root.classList.add("dark", "theme-red");
    } else if (theme === "matcha") {
      root.classList.add("dark", "theme-matcha");
    }
    // "light" = no extra class

    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const setTheme = (t: ColorTheme) => setThemeState(t);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
