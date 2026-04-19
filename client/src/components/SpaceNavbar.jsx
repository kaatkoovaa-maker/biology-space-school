export function SpaceNavbar({ activeView, setActiveView, user }) {
  const items = [
    { id: "dashboard", label: "Дашборд" },
    { id: "map", label: "Карта" },
    { id: "lesson", label: "Урок" },
    { id: "profile", label: "Профиль" }
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <div>
          <p className="font-display text-lg font-semibold text-cyanGlow">БиоЛогика</p>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">ЕГЭ Evolution Map</p>
        </div>
        <nav className="order-3 flex w-full gap-2 overflow-x-auto pb-1 md:order-2 md:w-auto md:pb-0">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveView(item.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${
                activeView === item.id
                  ? "bg-cyanGlow/15 text-cyanGlow shadow-neon"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="order-2 rounded-full border border-cyanGlow/30 px-3 py-2 text-xs text-slate-200 sm:px-4 sm:text-sm md:order-3">
          {user.name} • Уровень {user.level}
        </div>
      </div>
    </header>
  );
}
