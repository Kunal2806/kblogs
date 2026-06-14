"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blogs" },
  { label: "Projects", href: "/projects" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[var(--background)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-[var(--foreground)]"
        >
          <span className="text-[var(--primary)]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </span>
          Kunal Goswami
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm transition-colors duration-200 ${isActive
                      ? "text-[var(--foreground)]"
                      : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-[var(--primary)]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <button
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--foreground-muted)] transition-colors hover:bg-white/5 hover:text-[var(--foreground)]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Theme Toggle — only renders after mount to avoid hydration mismatch */}
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              className="flex h-9 items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 text-[var(--foreground-muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {/* Sun — highlighted in dim (light) mode */}
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${!isDark
                    ? "bg-white/10 text-[var(--foreground)]"
                    : "text-[var(--foreground-muted)]"
                  }`}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </span>

              {/* Moon — highlighted in dark mode */}
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors ${isDark
                    ? "bg-white/10 text-[var(--foreground)]"
                    : "text-[var(--foreground-muted)]"
                  }`}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </span>
            </button>
          )}

          {/* Mobile Hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--foreground-muted)] transition-colors hover:bg-white/5 hover:text-[var(--foreground)] md:hidden"
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/[0.06] bg-[var(--background-secondary)] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${isActive
                        ? "bg-[var(--primary)]/10 text-[var(--foreground)]"
                        : "text-[var(--foreground-muted)] hover:bg-white/5 hover:text-[var(--foreground)]"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}