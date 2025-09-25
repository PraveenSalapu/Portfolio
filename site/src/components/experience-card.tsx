"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  company: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
  className?: string;
  badge?: ReactNode;
}

export function ExperienceCard({
  company,
  title,
  period,
  summary,
  highlights,
  tech,
  className,
  badge,
}: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "relative grid gap-6 rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_30px_80px_-50px_rgba(71,49,148,0.55)] transition hover:-translate-y-1 hover:shadow-[0_35px_120px_-60px_rgba(71,49,148,0.65)] dark:border-slate-800 dark:bg-slate-950/90",
        className,
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            {period}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {company}
          </h3>
          <p className="text-lg font-medium text-violet-600 dark:text-violet-300">
            {title}
          </p>
        </div>
        {badge}
      </div>
      <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
        {summary}
      </p>
      <ul className="space-y-3 text-base text-slate-600 dark:text-slate-400">
        {highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              aria-hidden
              className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-emerald-400"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-violet-200/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-violet-600 dark:border-violet-500/40 dark:text-violet-300"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
