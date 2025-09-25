"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectShowcaseProps {
  name: string;
  category: string;
  description: string;
  impact: string;
  tech: string[];
  link?: string;
  index: number;
}

export function ProjectShowcase({
  name,
  category,
  description,
  impact,
  tech,
  link,
  index,
}: ProjectShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-8 shadow-[0_30px_60px_-40px_rgba(14,116,144,0.4)] transition hover:-translate-y-1 hover:shadow-[0_35px_80px_-50px_rgba(14,116,144,0.55)] dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-950/90 dark:to-slate-900/60"
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400/40 via-violet-500/20 to-transparent blur-2xl transition group-hover:scale-110" />
      <div className="relative flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">
            {category}
          </span>
          {link ? (
            <Link
              href={link}
              className="inline-flex items-center gap-1 text-sm font-medium text-cyan-600 transition hover:text-cyan-400 dark:text-cyan-300"
              target="_blank"
              rel="noreferrer"
            >
              View
              <ExternalLink size={16} />
            </Link>
          ) : null}
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {name}
        </h3>
        <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
        <p className="rounded-2xl bg-slate-900/5 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-50/5 dark:text-slate-200">
          {impact}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-500/30 bg-white/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-600 dark:border-cyan-500/40 dark:bg-slate-950/50 dark:text-cyan-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
