import achievementA1 from "../assets/achievements/a2-medal.png";
import achievementA2 from "../assets/achievements/a2-medal.png";
import achievementA3 from "../assets/achievements/a3-rocket.png";
import achievementA4 from "../assets/achievements/a4-trophy.png";
import achievementA5 from "../assets/achievements/a5-book.png";
import achievementA6 from "../assets/achievements/a6-alien.png";
import achievementA7 from "../assets/achievements/a7-earth.png";
import achievementA8 from "../assets/achievements/a8-tech-orb.png";
import achievementA9 from "../assets/achievements/a9-coral-world.png";
import achievementA10 from "../assets/achievements/a10-grand-star.png";

const achievementStyles = {
  a1: {
    accent: "from-cyan-300 via-sky-400 to-blue-500",
    glow: "shadow-[0_0_30px_rgba(90,220,255,0.22)]",
    image: achievementA1
  },
  a2: {
    accent: "from-sky-300 via-cyan-400 to-indigo-500",
    glow: "shadow-[0_0_30px_rgba(76,190,255,0.2)]",
    image: achievementA2
  },
  a3: {
    accent: "from-fuchsia-300 via-pink-400 to-violet-500",
    glow: "shadow-[0_0_30px_rgba(236,90,255,0.2)]",
    image: achievementA3
  },
  a4: {
    accent: "from-amber-200 via-orange-300 to-pink-400",
    glow: "shadow-[0_0_30px_rgba(255,174,77,0.22)]",
    image: achievementA4
  },
  a5: {
    accent: "from-lime-200 via-emerald-300 to-cyan-400",
    glow: "shadow-[0_0_30px_rgba(124,255,193,0.18)]",
    image: achievementA5
  },
  a6: {
    accent: "from-rose-200 via-pink-300 to-fuchsia-500",
    glow: "shadow-[0_0_30px_rgba(255,122,210,0.2)]",
    image: achievementA6
  },
  a7: {
    accent: "from-cyan-200 via-teal-300 to-emerald-400",
    glow: "shadow-[0_0_30px_rgba(112,255,228,0.18)]",
    image: achievementA7
  },
  a8: {
    accent: "from-yellow-200 via-amber-300 to-orange-500",
    glow: "shadow-[0_0_30px_rgba(255,183,74,0.22)]",
    image: achievementA8
  },
  a9: {
    accent: "from-indigo-200 via-sky-300 to-cyan-400",
    glow: "shadow-[0_0_30px_rgba(111,204,255,0.2)]",
    image: achievementA9
  },
  a10: {
    accent: "from-cyan-100 via-fuchsia-300 to-violet-500",
    glow: "shadow-[0_0_36px_rgba(164,132,255,0.28)]",
    image: achievementA10
  }
};

const fallbackStyle = {
  accent: "from-slate-300 via-slate-400 to-slate-500",
  glow: "",
  image: achievementA10
};

export function AchievementGrid({ achievements }) {
  const unlockedCount = achievements.filter((item) => item.unlocked).length;

  return (
    <section className="glass-card p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="font-display text-2xl">Достижения</h3>
        <span className="text-sm text-slate-400">{unlockedCount} открыто</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((achievement) => {
          const style = achievementStyles[achievement.id] || fallbackStyle;

          return (
            <article
              key={achievement.id}
              className={`hover-lift rounded-3xl border p-4 transition ${
                achievement.unlocked
                  ? `border-white/10 bg-white/[0.06] ${style.glow}`
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.4rem] border ${
                    achievement.unlocked
                      ? `border-white/15 bg-gradient-to-br ${style.accent}`
                      : "border-white/10 bg-slate-900/70"
                  }`}
                >
                  <AchievementBadge
                    src={style.image}
                    title={achievement.title}
                    locked={!achievement.unlocked}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-white">{achievement.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{achievement.description}</p>
                  <p
                    className={`mt-3 text-xs uppercase tracking-[0.2em] ${
                      achievement.unlocked ? "text-cyanGlow" : "text-slate-500"
                    }`}
                  >
                    {achievement.unlocked ? "Unlocked" : "Locked"}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function AchievementBadge({ src, title, locked = false }) {
  return (
    <img
      src={src}
      alt={title}
      className={`h-12 w-12 object-contain transition ${locked ? "opacity-45 grayscale" : "opacity-100"}`}
    />
  );
}

function IconShell({ children, locked = false }) {
  return (
    <svg className="h-9 w-9" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity={locked ? "0.45" : "1"}>{children}</g>
    </svg>
  );
}

function DropBadge({ locked }) {
  return (
    <IconShell locked={locked}>
      <path d="M24 6C18 13 11 19 11 27C11 34.18 16.82 40 24 40C31.18 40 37 34.18 37 27C37 19 30 13 24 6Z" fill="rgba(255,255,255,0.9)" />
      <circle cx="20" cy="22" r="3" fill="#0A1630" />
      <circle cx="28" cy="22" r="3" fill="#0A1630" />
      <path d="M19 28C20.6 30.2 22.13 31 24 31C25.87 31 27.4 30.2 29 28" stroke="#0A1630" strokeWidth="2.6" strokeLinecap="round" />
    </IconShell>
  );
}

function PlanetBadge({ locked }) {
  return (
    <IconShell locked={locked}>
      <circle cx="24" cy="24" r="10" fill="rgba(255,255,255,0.92)" />
      <ellipse cx="24" cy="24" rx="18" ry="6.5" stroke="white" strokeWidth="2.6" />
      <circle cx="18" cy="21" r="2.2" fill="#0A1630" />
      <circle cx="28" cy="27" r="1.8" fill="#0A1630" />
    </IconShell>
  );
}

function LaunchBadge({ locked }) {
  return (
    <IconShell locked={locked}>
      <path d="M24 8C18 10 15 16 15 23V31L24 27L33 31V23C33 16 30 10 24 8Z" fill="rgba(255,255,255,0.92)" />
      <circle cx="24" cy="18" r="4" fill="#0A1630" />
      <path d="M15 31L11 36" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M33 31L37 36" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M24 27V39" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
    </IconShell>
  );
}

function StarBadge({ locked }) {
  return (
    <IconShell locked={locked}>
      <path d="M24 8L27.8 18.2L39 24L27.8 29.8L24 40L20.2 29.8L9 24L20.2 18.2L24 8Z" fill="rgba(255,255,255,0.92)" />
      <circle cx="24" cy="24" r="3.5" fill="#0A1630" />
    </IconShell>
  );
}

function GeneBadge({ locked }) {
  return (
    <IconShell locked={locked}>
      <path d="M16 11C25 11 23 20 32 20" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M16 37C25 37 23 28 32 28" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M16 11C25 11 23 20 32 20" stroke="white" strokeWidth="2.6" strokeLinecap="round" transform="rotate(180 24 24)" />
      <path d="M16 19H32M16 29H32" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
    </IconShell>
  );
}

function OrbitBadge({ locked }) {
  return (
    <IconShell locked={locked}>
      <circle cx="24" cy="24" r="6.5" fill="rgba(255,255,255,0.92)" />
      <ellipse cx="24" cy="24" rx="16" ry="7.5" stroke="white" strokeWidth="2.2" />
      <ellipse cx="24" cy="24" rx="7.5" ry="16" stroke="white" strokeWidth="2.2" />
      <circle cx="37" cy="24" r="2.5" fill="white" />
    </IconShell>
  );
}

function HumanBadge({ locked }) {
  return (
    <IconShell locked={locked}>
      <circle cx="24" cy="12.5" r="5.5" fill="rgba(255,255,255,0.92)" />
      <path d="M24 19V32" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M15 23L24 27L33 23" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M18 39L24 32L30 39" stroke="white" strokeWidth="2.8" strokeLinecap="round" />
    </IconShell>
  );
}

function RocketBadge({ locked }) {
  return (
    <IconShell locked={locked}>
      <path d="M27 9C18 12 15 20 15 28V32L24 29L33 32V28C33 20 30 12 27 9Z" fill="rgba(255,255,255,0.92)" />
      <circle cx="24" cy="20" r="3.5" fill="#0A1630" />
      <path d="M15 32L11 36" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M33 32L37 36" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M24 29L20 39H28L24 29Z" fill="white" />
    </IconShell>
  );
}

function CosmosBadge({ locked }) {
  return (
    <IconShell locked={locked}>
      <circle cx="24" cy="24" r="11" stroke="white" strokeWidth="2.6" />
      <path d="M24 9V14M24 34V39M9 24H14M34 24H39" stroke="white" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M15 15L18 18M30 30L33 33M33 15L30 18M18 30L15 33" stroke="white" strokeWidth="2.1" strokeLinecap="round" />
    </IconShell>
  );
}

function CrownBadge({ locked }) {
  return (
    <IconShell locked={locked}>
      <path d="M10 34L14 15L24 24L34 15L38 34H10Z" fill="rgba(255,255,255,0.92)" />
      <path d="M16 34V39H32V34" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="14" cy="14" r="2.4" fill="white" />
      <circle cx="24" cy="12" r="2.4" fill="white" />
      <circle cx="34" cy="14" r="2.4" fill="white" />
    </IconShell>
  );
}
