export function DashboardHero({ user, missionTrack }) {
  const xpProgress = Math.round((user.xp / user.xpToNext) * 100);
  const statClasses = {
    cyanGlow: "border-cyanGlow/20",
    pinkGlow: "border-pinkGlow/20",
    limeGlow: "border-limeGlow/20"
  };

  return (
    <section className="glass-card hover-lift relative overflow-hidden p-6 sm:p-8">
      <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-cyanGlow/15 blur-3xl" />
      <div className="relative grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyanGlow">Навигационный мостик</p>
          <h2 className="glow-text mt-3 font-display text-3xl font-semibold sm:text-4xl">
            {user.title}, {user.name}
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Текущая миссия: <span className="text-white">{missionTrack.current.title}</span>
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            {missionTrack.current.description}
          </p>
          <div className="mt-6 h-4 overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-pinkGlow"
              style={{ width: `${xpProgress}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
            <span>{user.xp} XP</span>
            <span>До новой формы: {user.xpToNext - user.xp} XP</span>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <Stat label="Форма" value={`${user.level}/7`} borderClass={statClasses.cyanGlow} />
          <Stat label="Серия" value={`${user.streak} дней`} borderClass={statClasses.pinkGlow} />
          <Stat label="Планет" value="7" borderClass={statClasses.limeGlow} />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, borderClass }) {
  return (
    <div className={`rounded-3xl border bg-black/20 p-5 ${borderClass}`}>
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}
