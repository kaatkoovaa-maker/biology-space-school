export function DailyChallenges({ items }) {
  return (
    <section className="glass-card p-6">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-display text-2xl">Ежедневные задания</h3>
        <span className="rounded-full border border-limeGlow/30 bg-limeGlow/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-limeGlow">
          Daily loop
        </span>
      </div>
      <div className="space-y-4">
        {items.map((item) => {
          const progress = Math.min(100, Math.round((item.progress / item.total) * 100));

          return (
            <div key={item.id} className="hover-lift rounded-3xl border border-white/10 bg-[rgba(9,15,34,0.26)] p-4 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    {item.progress}/{item.total} • Награда {item.reward} XP
                  </p>
                </div>
                <span className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                  {progress}%
                </span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                <div className="h-full rounded-full bg-gradient-to-r from-limeGlow to-cyanGlow" style={{ width: `${progress}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
