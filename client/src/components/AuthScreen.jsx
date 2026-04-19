import { HeroArt } from "./HeroArt";

export function AuthScreen({ mode, setMode, form, setForm, onSubmit }) {
  return (
    <div className="auth-space-bg relative flex min-h-screen items-center justify-center overflow-hidden px-3 py-6 sm:px-4 sm:py-10">
      <div className="auth-nebula auth-nebula-a" />
      <div className="auth-nebula auth-nebula-b" />
      <div className="auth-nebula auth-nebula-c" />
      <div className="auth-stars" />
      <div className="auth-crosses" />
      <div className="auth-dust" />
      <div className="auth-rocket auth-rocket-a" />
      <div className="auth-rocket auth-rocket-b" />

      <div className="relative z-10 w-full max-w-6xl overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/55 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:rounded-[2rem]">
        <div className="grid md:grid-cols-[1.1fr_0.9fr]">
          <section className="relative border-b border-white/10 p-5 sm:p-8 md:border-b-0 md:border-r md:p-10">
            <div className="relative">
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <BioLogicLogo />
                <p className="inline-flex rounded-full border border-cyanGlow/30 bg-cyanGlow/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cyanGlow sm:text-xs sm:tracking-[0.3em]">
                  БиоЛогика • космическая траектория
                </p>
              </div>
              <h1 className="max-w-2xl text-balance font-display text-[2rem] font-semibold leading-[1.04] text-white sm:text-5xl xl:text-6xl">
                От инфузории до человека разумного.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8">
                Люмен проходит семь планет, становится умнее, увереннее и в финале приходит к
                осознанности. Биология здесь выглядит как стильное космическое путешествие, а не
                как скучная зубрёжка.
              </p>
              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3">
                <FeatureChip title="7 планет" text="Протос → Экосфера" />
                <FeatureChip title="Люмен и Вита" text="сюжет, рост и характер" />
                <FeatureChip title="ЕГЭ как сериал" text="каждая планета как новая серия подготовки" />
              </div>
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/35 p-4 sm:mt-8 sm:rounded-[2rem] sm:p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-pinkGlow/15 px-3 py-1 text-xs uppercase tracking-[0.28em] text-pinkGlow">
                    Сюжет
                  </span>
                  <span className="text-sm text-slate-300">
                    Протос → Цитара → Генезис → Витариум → Хоминис → Эволюс → Экосфера
                  </span>
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                  Сначала Люмен просто хочет стать умным и привлекательным. Потом встречает Виту,
                  запускает свой бизнес на Эволюсе и в конце становится осознанным человеком.
                </p>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <MiniBadge title="Люмен" text="главный герой" tone="cyan" />
                <MiniBadge title="Вита" text="появляется на 4 планете" tone="pink" />
                <MiniBadge title="Lumen Lab" text="бизнес на Эволюсе" tone="violet" />
              </div>
              <div className="mt-8 hidden lg:block">
                <HeroArt />
              </div>
            </div>
          </section>

          <section className="relative p-5 sm:p-8 md:p-10">
            <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.22em] text-slate-200 sm:right-8 sm:top-8 sm:px-4 sm:text-xs sm:tracking-[0.25em]">
              launch profile
            </div>
            <div className="mb-6 mt-12 flex rounded-full bg-white/5 p-1 sm:mb-8 sm:mt-0">
              {["login", "register"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setMode(item)}
                  className={`flex-1 rounded-full px-3 py-3 text-sm font-medium transition sm:px-4 ${
                    mode === item ? "bg-white text-slate-950" : "text-slate-200 hover:text-white"
                  }`}
                >
                  {item === "login" ? "Вход" : "Регистрация"}
                </button>
              ))}
            </div>

            <form className="space-y-4" onSubmit={onSubmit}>
              {mode === "register" && (
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-200">Имя</span>
                  <input
                    className="w-full rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanGlow"
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    placeholder="Введите имя"
                  />
                </label>
              )}
              <label className="block">
                <span className="mb-2 block text-sm text-slate-200">Email</span>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanGlow"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  placeholder="pilot@biologika.space"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-200">Пароль</span>
                <input
                  type="password"
                  className="w-full rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyanGlow"
                  value={form.password}
                  onChange={(event) => setForm({ ...form, password: event.target.value })}
                  placeholder="••••••••"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-pinkGlow px-4 py-3 font-medium text-slate-950 transition hover:scale-[1.01] hover:shadow-pink"
              >
                {mode === "login" ? "Войти в БиоЛогику" : "Создать профиль"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

function FeatureChip({ title, text }) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-4 sm:rounded-[1.5rem]">
      <p className="font-display text-sm text-white">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function MiniBadge({ title, text, tone }) {
  const tones = {
    cyan: "border-cyanGlow/20 bg-cyanGlow/10 text-cyanGlow",
    pink: "border-pinkGlow/20 bg-pinkGlow/10 text-pinkGlow",
    violet: "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-300"
  };

  return (
    <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4 sm:rounded-[1.4rem]">
      <div className={`inline-flex rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.22em] ${tones[tone]}`}>
        {title}
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function BioLogicLogo() {
  return (
    <div className="flex items-center gap-3 rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-3 py-2.5 sm:rounded-[1.4rem] sm:px-4 sm:py-3">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyanGlow via-sky-400 to-pinkGlow shadow-[0_0_30px_rgba(65,240,255,0.2)] sm:h-12 sm:w-12 sm:rounded-2xl">
        <div className="absolute h-8 w-8 rounded-full border border-white/40" />
        <div className="absolute h-3 w-3 rounded-full bg-white" />
        <div className="absolute h-10 w-10 rounded-full border border-white/20" />
      </div>
      <div>
        <p className="font-display text-base text-white sm:text-lg">БиоЛогика</p>
        <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400 sm:text-xs sm:tracking-[0.25em]">space biology school</p>
      </div>
    </div>
  );
}
