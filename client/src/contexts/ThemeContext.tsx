import React, { createContext, useContext, useEffect, useState } from "react";

export type ColorTheme = "classic" | "light" | "dark" | "blue" | "siri" | "red" | "matcha";

const THEMES: ColorTheme[] = ["classic", "light", "dark", "blue", "siri", "red", "matcha"];

interface ThemeContextType {
  theme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ColorTheme;
}

// Bumped to -v2 for the 2026 nostalgia relaunch so returning visitors, who may
// have an older theme saved, get reset to the new "classic" default once.
const THEME_KEY = "ea-color-theme-v2";

export function ThemeProvider({
  children,
  defaultTheme = "classic",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ColorTheme>(() => {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored && THEMES.includes(stored as ColorTheme)) {
      return stored as ColorTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    // Remove all theme classes
    root.classList.remove("dark", "theme-classic", "theme-blue", "theme-siri", "theme-red", "theme-matcha");

    // Apply appropriate classes
    if (theme === "classic") {
      root.classList.add("theme-classic");
    } else if (theme === "dark") {
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
