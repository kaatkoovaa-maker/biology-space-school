import { lessonCatalog } from "../data/mockData";

export function LearningMap({ planets, onSelectLesson }) {
  return (
    <section className="glass-card p-6 sm:p-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm uppercase tracking-[0.3em] text-pinkGlow">Карта обучения</p>
          <h3 className="mt-2 font-display text-2xl sm:text-3xl">7 планет как карта эволюции</h3>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-400">
          Каждая планета — отдельный этап пути. Проходишь её, и Люмен становится умнее, привлекательнее
          и ближе к своей финальной форме осознанного человека.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {planets.map((planet, index) => (
          <article
            key={planet.id}
            className="hover-lift group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 p-5 hover:border-cyanGlow/30"
          >
            <div className={`planet-ring mx-auto flex h-28 w-28 animate-float items-center justify-center rounded-full bg-gradient-to-br sm:h-36 sm:w-36 ${planet.color}`} style={{ animationDelay: `${index * 0.4}s` }}>
              <div className="animate-shimmer h-20 w-20 rounded-full border border-white/20 bg-slate-950/40 sm:h-24 sm:w-24" />
            </div>
            <div className="mt-5 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{planet.orbit}</p>
              <h4 className="mt-2 font-display text-2xl">{planet.name}</h4>
              <p className="mt-1 text-slate-300">{planet.theme}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-cyanGlow">
                {planet.evolution.form}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-500">
                {planet.levels.filter((item) => item.status === "done").length}/10 занятий
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-400">{planet.summary}</p>
              <p className="mt-3 text-sm italic text-pinkGlow">“{planet.dialogue}”</p>
            </div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${planet.color}`}
                style={{ width: `${planet.progress}%` }}
              />
            </div>
            <div className="mt-6 space-y-3">
              {planet.levels.map((level) => (
                <button
                  key={level.id}
                  type="button"
                  disabled={level.status === "locked"}
                  onClick={() => onSelectLesson(level.id)}
                  className={`flex w-full items-start justify-between gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                    level.status === "locked"
                      ? "cursor-not-allowed border-white/10 bg-white/5 text-slate-500"
                      : level.status === "current"
                        ? "border-cyanGlow/30 bg-cyanGlow/10 text-white shadow-neon"
                        : "border-white/10 bg-black/20 text-slate-200 hover:border-pinkGlow/30 hover:bg-white/5"
                  }`}
                >
                  <span>
                    {level.title}
                    <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-slate-400">
                      {lessonCatalog[level.id]?.quiz?.length || 0} вопросов
                    </span>
                  </span>
                  <span className="shrink-0 text-xs uppercase tracking-[0.2em]">{level.xp} XP</span>
                </button>
              ))}
            </div>
            {!planet.isUnlocked && (
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-400">
                Эта планета откроется после полного прохождения предыдущей.
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
