"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SkillTickerItem {
  label: string;
  icon: LucideIcon;
}

interface SkillTickerProps {
  items: SkillTickerItem[];
}

const LOOP_WIDTH = 100;

export function SkillTicker({ items }: SkillTickerProps) {
  if (items.length === 0) {
    return null;
  }

  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 py-3 backdrop-blur-xl dark:bg-white/5">
      <motion.div
        className="flex min-w-[200%] gap-6"
        animate={{ x: ["0%", `-${LOOP_WIDTH}%`] }}
        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
      >
        {doubled.map(({ icon: Icon, label }, index) => (
          <div
            key={`${label}-${index}`}
            className="flex min-w-[160px] items-center gap-3 rounded-full border border-white/5 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 shadow-[0_12px_40px_-30px_rgba(56,189,248,0.85)] transition hover:border-cyan-300/60 hover:text-cyan-200 dark:bg-white/5"
          >
            <Icon size={18} className="text-cyan-300" />
            <span>{label}</span>
          </div>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent" />
    </div>
  );
}
