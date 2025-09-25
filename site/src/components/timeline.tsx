"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItem {
  title: string;
  subTitle?: string;
  description: ReactNode;
  meta?: string;
  icon?: ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-300/70 to-transparent dark:via-slate-700" />
      <ul className="space-y-10 pl-0">
        {items.map((item, index) => (
          <motion.li
            key={`${item.title}-${index}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="relative flex gap-6 pl-14"
          >
            <div className="absolute left-0 top-1.5 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
              {item.icon ?? (
                <div className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-violet-500 via-sky-400 to-emerald-400" />
              )}
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>
                {item.subTitle ? (
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                    {item.subTitle}
                  </span>
                ) : null}
              </div>
              {item.meta ? (
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {item.meta}
                </p>
              ) : null}
              <div className="text-base leading-7 text-slate-600 dark:text-slate-300">
                {item.description}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
