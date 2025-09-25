import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  tone?: "blue" | "purple" | "teal" | "amber";
}

const toneMap: Record<Required<GlowCardProps>["tone"], string> = {
  blue: "from-sky-500/25 via-sky-400/10 to-transparent border-sky-500/30 hover:border-sky-400/70",
  purple:
    "from-violet-500/25 via-violet-400/10 to-transparent border-violet-500/30 hover:border-violet-400/70",
  teal: "from-emerald-500/25 via-emerald-400/10 to-transparent border-emerald-500/30 hover:border-emerald-400/70",
  amber:
    "from-amber-500/25 via-amber-400/10 to-transparent border-amber-500/30 hover:border-amber-400/70",
};

export function GlowCard({
  children,
  className,
  tone = "purple",
}: GlowCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border bg-gradient-to-br p-[1px] transition-transform duration-500 hover:-translate-y-1",
        toneMap[tone],
        className,
      )}
    >
      <div className="relative flex h-full w-full flex-col gap-4 rounded-[calc(1.5rem-1px)] bg-slate-50/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-sm transition group-hover:bg-slate-50/95 dark:bg-slate-900/90 dark:group-hover:bg-slate-900/95">
        {children}
      </div>
      <div className="pointer-events-none absolute -inset-[120%] animate-[spin_16s_linear_infinite] bg-[conic-gradient(from_var(--angle),rgba(255,255,255,0)_0%,rgba(255,255,255,0.55)_40%,rgba(255,255,255,0)_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </div>
  );
}
