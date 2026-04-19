import { StageArt } from "./StageArt";

export function MascotJourney({ stages, currentStageId }) {
  return (
    <section className="glass-card p-6 sm:p-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyanGlow">Эволюция Люмена</p>
          <h3 className="mt-2 font-display text-3xl">От капли света до человека разумного</h3>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-slate-400">
          Люмен не просто проходит темы ЕГЭ, а буквально собирает себя заново. Сначала он учится
          мыслить, потом понимать жизнь изнутри, затем встречает Виту, запускает свой проект и в
          финале дорастает до осознанного человека.
        </p>
      </div>

      <StageArt />

      <div className="grid gap-4 lg:grid-cols-7">
        {stages.map((stage, index) => {
          const isCurrent = stage.id === currentStageId;

          return (
            <article
              key={stage.id}
              className={`hover-lift rounded-[1.75rem] border p-4 ${
                isCurrent
                  ? "border-cyanGlow/40 bg-cyanGlow/[0.11] shadow-neon"
                  : "border-white/10 bg-[rgba(8,14,34,0.24)] hover:border-pinkGlow/30 hover:bg-white/[0.04]"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Этап {index + 1}</p>
              <h4 className="mt-3 font-display text-lg text-white">{stage.form}</h4>
              <p className="mt-2 text-sm text-cyanGlow">{stage.block}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{stage.subtitle}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-pinkGlow">
                {stage.progressLabel}
              </p>
              <p className="mt-3 text-sm italic text-slate-400">“{stage.motto}”</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
