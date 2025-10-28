"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingNavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface FloatingNavProps {
  items: FloatingNavItem[];
}

export function FloatingNav({ items }: FloatingNavProps) {
  const [active, setActive] = useState(items[0]?.href ?? "");
  const [isDesktop, setIsDesktop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.2, 0.4, 0.6] },
    );

    items.forEach((item) => {
      const id = item.href.replace(/^#/, "");
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const handleChange = () => {
      const desktop = media.matches;
      setIsDesktop(desktop);
      setIsOpen(false);
    };

    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  if (items.length === 0) {
    return null;
  }

  const showPanel = isDesktop ? isOpen : isOpen;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="pointer-events-none fixed right-4 top-6 z-50"
      aria-label="Section navigation"
    >
      <div className="relative flex flex-col items-end gap-2 pointer-events-auto">
        <div
          onMouseEnter={() => isDesktop && setIsOpen(true)}
          onMouseLeave={() => isDesktop && setIsOpen(false)}
          className="relative"
        >
          <div
            className={cn(
              "glass-panel flex gap-2 transition-all duration-300",
              isDesktop
                ? "rounded-full px-3 py-2"
                : "absolute right-0 top-12 w-48 flex-col gap-2 rounded-3xl px-4 py-4 shadow-xl",
              showPanel
                ? "pointer-events-auto opacity-100 translate-y-0"
                : "pointer-events-none opacity-0 -translate-y-2",
            )}
          >
            {items.map(({ href, icon: Icon, label }) => {
              const isActive = active === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => {
                    if (!isDesktop) {
                      setIsOpen(false);
                    }
                  }}
                  className={cn(
                    "relative flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition",
                    isDesktop ? undefined : "w-full justify-start rounded-2xl text-sm tracking-[0.15em]",
                    isActive
                      ? "bg-gradient-to-r from-violet-500/80 to-cyan-400/80 text-slate-950 shadow-[0_18px_60px_-40px_rgba(56,189,248,0.9)]"
                      : "text-slate-700 hover:text-cyan-600 dark:text-slate-200 dark:hover:text-cyan-200",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon size={16} className="shrink-0" />
                  <span className={isDesktop ? "hidden xl:inline" : "inline"}>{label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/70 bg-white/80 text-slate-700 shadow-lg backdrop-blur-xl transition hover:text-cyan-600 dark:border-white/20 dark:bg-white/10 dark:text-slate-200 dark:hover:text-cyan-200"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={showPanel}
          aria-label="Toggle navigation"
        >
          {showPanel ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </motion.nav>
  );
}
