'use client';

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg bg-white/5 dark:bg-white/10" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="group relative flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 transition-all hover:bg-white/10 dark:bg-white/10 dark:hover:bg-white/15"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 text-yellow-500 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 text-blue-400 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}
