import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <p className="uppercase tracking-[0.35em] text-xs font-semibold text-slate-500 dark:text-slate-400">
        {eyebrow}
      </p>
      <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      {lead ? (
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
