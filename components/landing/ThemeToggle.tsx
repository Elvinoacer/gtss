"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text)]"
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={theme === "dark"}
    >
      {mounted ? (
        theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />
      ) : (
        <span className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
