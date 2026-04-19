export function ProfileCard({ user, missionTrack }) {
  return (
    <section className="glass-card hover-lift p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-5">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-pinkGlow text-3xl font-semibold text-slate-950 shadow-pink">
          {user.name.slice(0, 1)}
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Профиль БиоЛогики</p>
          <h3 className="mt-2 font-display text-3xl">{user.name}</h3>
          <p className="mt-2 text-slate-300">{user.email}</p>
          <p className="mt-1 text-cyanGlow">{user.title}</p>
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <Meta label="Уровень" value={user.level} />
        <Meta label="Собрано XP" value={user.xp} />
        <Meta label="Серия входов" value={`${user.streak} дней`} />
      </div>
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <MissionCard
          label="Текущая миссия"
          title={missionTrack.current.title}
          description={missionTrack.current.description}
          accent="cyanGlow"
        />
        <MissionCard
          label="Следующая цель"
          title={missionTrack.next?.title || "Финальная форма открыта"}
          description={
            missionTrack.next
              ? `${missionTrack.next.description} До неё осталось ${Math.max(
                  missionTrack.next.minXp - missionTrack.totalXp,
                  0
                )} XP.`
              : "Ты уже на максимальной траектории."
          }
          accent="pinkGlow"
        />
      </div>
    </section>
  );
}

function Meta({ label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[rgba(9,15,34,0.26)] p-4 backdrop-blur-xl">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
    </div>
  );
}

function MissionCard({ label, title, description, accent }) {
  const accents = {
    cyanGlow: "border-cyanGlow/20 bg-cyanGlow/[0.11]",
    pinkGlow: "border-pinkGlow/20 bg-pinkGlow/[0.11]"
  };

  return (
    <div className={`rounded-3xl border p-5 ${accents[accent]}`}>
      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{label}</p>
      <p className="mt-3 font-display text-xl text-white">{title}</p>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </div>
  );
}
