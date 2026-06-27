"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--bg-surface)] flex items-center justify-center transition-all hover:border-[var(--accent)] hover:shadow-[var(--accent-glow)]"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-[var(--text-muted)]" />
      ) : (
        <Sun className="w-4 h-4 text-[var(--gold)]" />
      )}
    </button>
  );
}
