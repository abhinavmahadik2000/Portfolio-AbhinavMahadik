import { useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";

function read(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = window.localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") return stored;
  } catch {
    /* storage blocked, fall through to the default */
  }
  return "dark";
}

/** Theme lives on <html>; the inline script in index.html applies it before paint. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(read);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      /* non-fatal */
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);

  return { theme, toggle, isDark: theme === "dark" };
}
