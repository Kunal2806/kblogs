// components/common/ThemeProvider.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"        // adds .dark class to <html>
      defaultTheme="dark"      // deep dark on first visit
      themes={["light", "dark"]} // "light" = your dim theme, "dark" = deep dark
    >
      {children}
    </NextThemesProvider>
  );
}