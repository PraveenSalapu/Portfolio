interface SkillClusterProps {
  title: string;
  caption: string;
  items: string[];
}

export function SkillCluster({ title, caption, items }: SkillClusterProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-[0_20px_40px_-40px_rgba(15,23,42,1)] transition hover:-translate-y-1 hover:shadow-[0_35px_80px_-60px_rgba(15,23,42,0.6)] dark:border-slate-800/80 dark:bg-slate-900/80">
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-violet-400/30 via-sky-400/20 to-transparent blur-2xl" />
      <div className="relative space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{caption}</p>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200/70 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600 dark:border-slate-700/80 dark:bg-slate-800 dark:text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
