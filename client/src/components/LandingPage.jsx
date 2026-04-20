import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Brain,
  Clock3,
  Orbit,
  Rocket,
  ShieldCheck,
  Sparkles,
  Telescope,
  Users
} from "lucide-react";
import { AnimatedSky } from "./AnimatedSky";
import { HeroArt } from "./HeroArt";
import lumenImage from "../assets/lumen-cut.png";
import vitaImage from "../assets/vita-cut.png";
import protosPlanet from "../assets/planets/custom/protos.png";
import citaraPlanet from "../assets/planets/custom/citara.png";
import genezisPlanet from "../assets/planets/custom/genezis.png";
import vitariumPlanet from "../assets/planets/custom/vitarium.png";
import hominisPlanet from "../assets/planets/custom/hominis.png";
import evolusPlanet from "../assets/planets/custom/evolus.png";
import ecospherePlanet from "../assets/planets/custom/ecosphere.png";

const orbitPlanets = [
  {
    name: "Протос",
    subtitle: "Биология как наука",
    description: "Вход в сюжет: ребёнок понимает, как мыслит биология, и перестаёт бояться предмета.",
    image: protosPlanet,
    accent: "from-cyanGlow to-sky-500"
  },
  {
    name: "Цитара",
    subtitle: "Клетка",
    description: "Клетка становится понятной системой, а не набором терминов для зубрёжки.",
    image: citaraPlanet,
    accent: "from-sky-400 to-cyanGlow"
  },
  {
    name: "Генезис",
    subtitle: "Генетика и наследственность",
    description: "Сложные задачи по генетике раскладываются на спокойные, решаемые шаги.",
    image: genezisPlanet,
    accent: "from-fuchsia-400 to-pinkGlow"
  },
  {
    name: "Витариум",
    subtitle: "Многообразие живого мира",
    description: "Появляется Вита, а вместе с ней мотивация учиться не из страха, а из интереса.",
    image: vitariumPlanet,
    accent: "from-violet-400 to-pinkGlow"
  },
  {
    name: "Хоминис",
    subtitle: "Человек и здоровье",
    description: "Тема человека собирается в понятную картину: органы, процессы, здоровье и логика.",
    image: hominisPlanet,
    accent: "from-cyan-300 to-blue-500"
  },
  {
    name: "Эволюс",
    subtitle: "Эволюция",
    description: "Эволюция ощущается как развитие идей, а не как хаотичный список теорий.",
    image: evolusPlanet,
    accent: "from-amber-300 to-pinkGlow"
  },
  {
    name: "Экосфера",
    subtitle: "Экология и системы",
    description: "Финальная планета, где всё сходится в одну целостную картину живого мира.",
    image: ecospherePlanet,
    accent: "from-limeGlow to-cyanGlow"
  }
];

const valueCards = [
  {
    icon: Rocket,
    title: "Продающий первый экран",
    text: "Сразу объясняем, в чём ценность платформы: ребёнок не просто учит биологию, а проходит сюжетную космическую траекторию."
  },
  {
    icon: Brain,
    title: "Материал без перегруза",
    text: "Теория, практика и прогресс собираются в понятный путь, где каждая тема связана с предыдущей."
  },
  {
    icon: BadgeCheck,
    title: "ЕГЭ без сухости",
    text: "Подача остаётся современной и эмоциональной, но не теряет академическую структуру и учебную логику."
  },
  {
    icon: Users,
    title: "Понятно и ребёнку, и родителю",
    text: "Страница продаёт сразу двум аудиториям: подростку хочется зайти, а родитель видит систему и результат."
  }
];

const processSteps = [
  {
    icon: Telescope,
    title: "1. Заходите в демо",
    text: "Родитель и ученик за 2 минуты видят интерфейс, карту планет, уроки и сценарий роста."
  },
  {
    icon: BookOpen,
    title: "2. Выбираете свою планету",
    text: "Начать можно с базовой темы или сразу с блока, который хромает перед экзаменом."
  },
  {
    icon: ShieldCheck,
    title: "3. Ребёнок втягивается в процесс",
    text: "Игровая рамка создаёт интерес, а внутренняя логика уроков переводит его в стабильную учёбу."
  }
];

const proofPoints = [
  "7 сюжетных планет вместо обезличенного списка тем",
  "Герои Люмен и Вита, которые создают эмоциональную привязку к платформе",
  "Один кабинет: теория, задания, прогресс, достижения и текущая миссия",
  "Подходит как для регулярной подготовки, так и для быстрого разгона перед ЕГЭ"
];

const faqItems = [
  {
    question: "Это только красивая обложка или там есть реальная учебная логика?",
    answer:
      "Лендинг продаёт атмосферу, но внутри платформа построена как учебный маршрут: темы идут от базы к сложным блокам, а прогресс виден по шагам."
  },
  {
    question: "Подойдёт тем, кто боится биологии или постоянно откладывает?",
    answer:
      "Да. Вся идея как раз в том, чтобы снять ощущение скуки и перегруза. Сюжет, визуальный мир и короткие ясные блоки помогают зайти в предмет мягче."
  },
  {
    question: "Это больше для школьников или для родителей, которые выбирают платформу?",
    answer:
      "Для обоих. Подросток считывает стиль и приключение, а родитель видит структуру, маршрут, пользу и понятный следующий шаг."
  },
  {
    question: "Что должно быть на следующем шаге после лендинга?",
    answer:
      "Демо-доступ или регистрация. Поэтому весь лендинг сводится к одному действию: зайти в платформу и посмотреть маршрут изнутри."
  }
];

export function LandingPage({ onStartDemo }) {
  return (
    <div className="star-field relative min-h-screen overflow-hidden bg-grid">
      <AnimatedSky />
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(65,240,255,0.16),_transparent_38%),radial-gradient(circle_at_18%_18%,_rgba(255,79,216,0.14),_transparent_24%)]" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <LandingLogo />
          <div className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            <a href="#benefits" className="transition hover:text-white">
              Почему работает
            </a>
            <a href="#world" className="transition hover:text-white">
              Мир платформы
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </div>
          <button
            type="button"
            onClick={onStartDemo}
            className="inline-flex items-center gap-2 rounded-full border border-cyanGlow/30 bg-cyanGlow/10 px-4 py-2 text-sm font-medium text-cyanGlow transition hover:border-cyanGlow/60 hover:bg-cyanGlow/15"
          >
            Смотреть демо
            <ArrowRight size={16} />
          </button>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyanGlow">
              <Orbit size={16} />
              Биология как космическая история роста
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.02] text-white sm:text-6xl xl:text-7xl">
              Лендинг, после которого хочется не читать про платформу, а сразу войти внутрь.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              БиоЛогика превращает подготовку по биологии в маршрут по семи планетам: с героями,
              ясной драматургией, понятным прогрессом и ощущением, что предмет наконец начал
              собираться в цельную картину.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onStartDemo}
                className="inline-flex items-center justify-center gap-2 rounded-[1.4rem] bg-gradient-to-r from-cyanGlow via-sky-400 to-pinkGlow px-6 py-4 font-semibold text-slate-950 transition hover:scale-[1.01] hover:shadow-pink"
              >
                Открыть демо-доступ
                <ArrowRight size={18} />
              </button>
              <a
                href="#world"
                className="inline-flex items-center justify-center rounded-[1.4rem] border border-white/10 bg-white/5 px-6 py-4 font-medium text-white transition hover:bg-white/10"
              >
                Посмотреть мир платформы
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <StatPill value="7 планет" label="от базы до экологии" />
              <StatPill value="2 героя" label="Люмен и Вита" />
              <StatPill value="1 кабинет" label="уроки, прогресс и миссии" />
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <FeaturePanel
                icon={Clock3}
                title="Демо без длинных объяснений"
                text="Родитель не читает километровые описания. Он сразу понимает формат и может перейти к просмотру платформы."
              />
              <FeaturePanel
                icon={Sparkles}
                title="Эмоция без инфантилизма"
                text="Космическая тема работает как стильный визуальный мир, а не как детская декорация ради декорации."
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-[12%] top-[6%] h-44 rounded-full bg-cyanGlow/20 blur-3xl" />
            <div className="glass-card relative overflow-hidden p-4 sm:p-6">
              <div className="absolute right-5 top-5 rounded-full border border-pinkGlow/20 bg-pinkGlow/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-pinkGlow">
                launch demo
              </div>
              <HeroArt />
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <MiniSignal
                  title="Карта роста"
                  text="Ребёнок видит, куда он идёт дальше, а не теряется в наборе тем."
                />
                <MiniSignal
                  title="Живой сюжет"
                  text="Каждый блок ощущается как новая глава, поэтому вовлечение держится дольше."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6" id="benefits">
          <div className="glass-card p-6 sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyanGlow">Почему это продаёт</p>
                <h2 className="mt-3 max-w-3xl font-display text-3xl text-white sm:text-4xl">
                  Страница объясняет ценность платформы за первые 15 секунд.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Вдохновение взято из сильных образовательных лендингов, но подано в собственной
                вселенной БиоЛогики: меньше штампов, больше характера, визуальной драматургии и
                ясного оффера.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {valueCards.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="hover-lift rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyanGlow/10 text-cyanGlow">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid gap-4 lg:grid-cols-3">
            {processSteps.map(({ icon: Icon, title, text }) => (
              <div key={title} className="glass-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-cyanGlow">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-xl text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.88fr_1.12fr]" id="world">
          <div className="glass-card p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-pinkGlow">Мир платформы</p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
              Семь планет, которые заменяют скучную линейку тем.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Вместо сухого каталога предметных блоков пользователь видит маршрут. Это сразу
              повышает понятность, визуальную память и ощущение прогресса.
            </p>

            <div className="mt-6 space-y-3">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-[1.3rem] border border-white/10 bg-white/[0.03] px-4 py-4"
                >
                  <BadgeCheck size={18} className="mt-1 shrink-0 text-cyanGlow" />
                  <p className="text-sm leading-7 text-slate-200">{point}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={onStartDemo}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyanGlow/30 bg-cyanGlow/10 px-5 py-3 text-sm font-medium text-cyanGlow transition hover:bg-cyanGlow/15"
            >
              Перейти к демо
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {orbitPlanets.map((planet, index) => (
              <article
                key={planet.name}
                className="hover-lift rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                    Планета {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`h-2.5 w-16 rounded-full bg-gradient-to-r ${planet.accent}`} />
                </div>
                <div className="relative mt-4 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_52%),linear-gradient(180deg,_rgba(10,14,31,0.92),_rgba(7,9,20,0.96))] p-4">
                  <div className="absolute inset-x-8 top-3 h-16 rounded-full bg-white/10 blur-2xl" />
                  <img
                    src={planet.image}
                    alt={planet.name}
                    className="relative mx-auto h-36 w-36 object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.45)]"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg text-white">{planet.name}</h3>
                <p className="mt-1 text-sm text-cyanGlow">{planet.subtitle}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{planet.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="glass-card overflow-hidden p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-cyanGlow">Герои</p>
              <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                Люмен и Вита делают платформу узнаваемой с первого экрана.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Герои нужны не просто для красоты. Они помогают создать внутреннюю драматургию,
                чтобы ребёнок эмоционально цеплялся за путь, а лендинг сразу запоминался среди
                типовых школьных сайтов.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <CharacterCard
                  image={lumenImage}
                  name="Люмен"
                  role="главный герой"
                  text="Проходит путь от хаоса и неуверенности к пониманию, силе и осознанности."
                  accent="cyan"
                />
                <CharacterCard
                  image={vitaImage}
                  name="Вита"
                  role="точка притяжения"
                  text="Добавляет в историю тепло, смысл и мотивацию становиться сильнее по-настоящему."
                  accent="pink"
                />
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-pinkGlow">Что получает семья</p>
              <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                Красиво снаружи, структурно внутри.
              </h2>
              <div className="mt-6 space-y-4">
                <BenefitRow
                  title="Подросток"
                  text="Видит стильную космическую подачу, карту, персонажей и ощущение игры без ощущения детсадовщины."
                />
                <BenefitRow
                  title="Родитель"
                  text="Считывает академическую структуру, логичный путь тем и понятный следующий шаг: демо или регистрация."
                />
                <BenefitRow
                  title="Платформа"
                  text="Получает полноценный маркетинговый вход, который подводит пользователя к продукту, а не заставляет сразу логиниться."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6" id="faq">
          <div className="glass-card p-6 sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyanGlow">FAQ</p>
                <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                  Вопросы, которые возникают перед входом в платформу.
                </h2>
              </div>
              <button
                type="button"
                onClick={onStartDemo}
                className="inline-flex items-center gap-2 rounded-full bg-white text-slate-950 px-5 py-3 text-sm font-semibold transition hover:scale-[1.01]"
              >
                Попробовать сейчас
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="font-display text-lg text-white">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6">
          <div className="relative overflow-hidden rounded-[2rem] border border-cyanGlow/20 bg-[linear-gradient(135deg,rgba(65,240,255,0.14),rgba(10,18,42,0.92)_30%,rgba(255,79,216,0.12))] p-8 shadow-neon sm:p-10">
            <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-pinkGlow/20 blur-3xl" />
            <div className="absolute -left-12 bottom-0 h-56 w-56 rounded-full bg-cyanGlow/20 blur-3xl" />
            <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyanGlow">Финальный CTA</p>
                <h2 className="mt-3 max-w-3xl font-display text-3xl text-white sm:text-5xl">
                  Если платформа продаёт мечту о росте, первый экран тоже должен продавать именно её.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                  Открой демо, посмотри маршрут Люмена и Виты и проверь, как БиоЛогика ощущается
                  изнутри уже сейчас.
                </p>
              </div>
              <button
                type="button"
                onClick={onStartDemo}
                className="inline-flex items-center justify-center gap-2 rounded-[1.4rem] bg-white px-6 py-4 text-base font-semibold text-slate-950 transition hover:scale-[1.01]"
              >
                Перейти к регистрации
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function LandingLogo() {
  return (
    <div className="flex items-center gap-3 rounded-[1.1rem] border border-white/10 bg-white/[0.04] px-3 py-2.5 sm:px-4">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyanGlow via-sky-400 to-pinkGlow">
        <div className="absolute h-8 w-8 rounded-full border border-white/40" />
        <div className="h-3 w-3 rounded-full bg-white" />
      </div>
      <div>
        <p className="font-display text-base text-white">БиоЛогика</p>
        <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">space biology school</p>
      </div>
    </div>
  );
}

function StatPill({ value, label }) {
  return (
    <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] px-4 py-4">
      <p className="font-display text-xl text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-300">{label}</p>
    </div>
  );
}

function FeaturePanel({ icon: Icon, title, text }) {
  return (
    <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-cyanGlow">
        <Icon size={20} />
      </div>
      <p className="mt-4 font-display text-lg text-white">{title}</p>
      <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function MiniSignal({ title, text }) {
  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
      <p className="font-display text-sm text-white">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function CharacterCard({ accent, image, name, role, text }) {
  const palette = {
    cyan: "border-cyanGlow/20 bg-cyanGlow/10 text-cyanGlow",
    pink: "border-pinkGlow/20 bg-pinkGlow/10 text-pinkGlow"
  };

  return (
    <article className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center gap-4">
        <div className="relative flex h-24 w-24 shrink-0 items-end justify-center overflow-hidden rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_56%),linear-gradient(180deg,rgba(10,14,31,0.95),rgba(6,9,20,0.95))]">
          <img src={image} alt={name} className="h-[94%] w-auto object-contain" />
        </div>
        <div>
          <div className={`inline-flex rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.22em] ${palette[accent]}`}>
            {role}
          </div>
          <h3 className="mt-3 font-display text-xl text-white">{name}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-300">{text}</p>
        </div>
      </div>
    </article>
  );
}

function BenefitRow({ title, text }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
      <p className="text-sm uppercase tracking-[0.24em] text-cyanGlow">{title}</p>
      <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
    </div>
  );
}
