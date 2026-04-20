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
    title: "Не про зубрёжку, а про путь",
    text: "Ребёнок заходит не в очередной каталог уроков, а в мир, где у каждой темы есть своё место, настроение и следующий шаг."
  },
  {
    icon: Brain,
    title: "Сложное становится собранным",
    text: "Клетка, генетика, человек, экология не висят в воздухе. Платформа связывает их в одну траекторию, и материал перестаёт распадаться в голове."
  },
  {
    icon: BadgeCheck,
    title: "Эмоция без пустого шума",
    text: "Здесь нет инфоцыганской мотивации и школьной казёнщины. Есть стиль, ритм и нормальная учебная опора."
  },
  {
    icon: Users,
    title: "Одинаково читается двумя взглядами",
    text: "Подросток видит атмосферу и характер. Родитель видит структуру, прозрачность и понятную причину доверять продукту."
  }
];

const processSteps = [
  {
    icon: Telescope,
    title: "1. Открываете демо",
    text: "Без долгих созвонов и навязчивых форм. За пару минут становится понятно, как выглядит обучение изнутри."
  },
  {
    icon: BookOpen,
    title: "2. Видите маршрут, а не свалку тем",
    text: "Планеты, миссии и уроки сразу показывают, где стартовать, что уже закрыто и куда двигаться дальше."
  },
  {
    icon: ShieldCheck,
    title: "3. Интерес закрепляется системой",
    text: "Визуальный мир привлекает внимание, но удерживает не он, а ясная структура, нормальный прогресс и ощущение движения."
  }
];

const proofPoints = [
  "Семь планет вместо безликого каталога из карточек и вкладок",
  "Герои Люмен и Вита, которые делают продукт узнаваемым, а не просто красивым",
  "Один кабинет, где теория, задания, прогресс и миссия собраны в одну логику",
  "Формат, который подходит и для долгой подготовки, и для периода, когда нужно быстро собраться"
];

const faqItems = [
  {
    question: "Это только красивая обложка или там есть реальная учебная логика?",
    answer:
      "Обложка здесь нужна не ради вау-эффекта. Она помогает быстро считать идею продукта, а внутри всё опирается на учебный маршрут: от базы к сложным блокам, с понятным прогрессом и следующими действиями."
  },
  {
    question: "Подойдёт тем, кто боится биологии или постоянно откладывает?",
    answer:
      "Да. БиоЛогика снижает порог входа: вместо чувства, что тебя сейчас завалят терминами, появляется ощущение понятного начала. Это особенно важно для тех, кто уже успел решить, что биология не для него."
  },
  {
    question: "Это больше для школьников или для родителей, которые выбирают платформу?",
    answer:
      "Для обоих сразу. И это принципиально: подростка цепляет эстетика и сюжет, родителя успокаивает внятная архитектура продукта и отсутствие дешёвых манипуляций."
  },
  {
    question: "Что должно быть на следующем шаге после лендинга?",
    answer:
      "Демо-доступ. Лендинг не должен уговаривать слишком долго. Его задача — вызвать доверие, передать настроение продукта и мягко перевести человека внутрь платформы."
  }
];

export function LandingPage({ onStartDemo }) {
  return (
    <div className="star-field relative min-h-screen overflow-hidden bg-grid">
      <AnimatedSky />
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(65,240,255,0.16),_transparent_38%),radial-gradient(circle_at_18%_18%,_rgba(255,79,216,0.14),_transparent_24%)]" />
      <div className="absolute left-[6%] top-28 h-40 w-40 rounded-full border border-white/10 bg-white/[0.02] blur-3xl" />
      <div className="absolute bottom-[12%] right-[4%] h-52 w-52 rounded-full bg-pinkGlow/10 blur-3xl" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <LandingLogo />
          <div className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            <a href="#benefits" className="transition hover:text-white">
              Подход
            </a>
            <a href="#world" className="transition hover:text-white">
              Планеты
            </a>
            <a href="#faq" className="transition hover:text-white">
              Вопросы
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
              Онлайн-платформа по биологии с собственным миром
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.02] text-white sm:text-6xl xl:text-7xl">
              Биология может выглядеть так, будто её наконец делали люди со вкусом.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              БиоЛогика превращает подготовку к ЕГЭ в цельное путешествие по семи планетам. Здесь
              предмет не распадается на случайные уроки, а собирается в историю: с героем,
              прогрессом, понятным маршрутом и ощущением, что ты не тонешь в материале, а
              постепенно начинаешь им владеть.
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
                  title="Сразу ясно, что это за продукт"
                  text="Не нужно продираться через абстрактные обещания. За первый экран видно, как платформа думает, выглядит и чем отличается."
                />
                <FeaturePanel
                  icon={Sparkles}
                  title="Стиль есть, кринжа нет"
                  text="Космическая тема здесь не для блёсток. Она помогает собрать характер продукта и удержать внимание без ощущения искусственности."
                />
              </div>
            </div>

          <div className="relative">
            <div className="absolute inset-x-[12%] top-[6%] h-44 rounded-full bg-cyanGlow/20 blur-3xl" />
            <div className="glass-card relative overflow-hidden rounded-[2rem] border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 sm:p-6">
              <div className="absolute right-5 top-5 rounded-full border border-pinkGlow/20 bg-pinkGlow/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-pinkGlow">
                new landing
              </div>
              <HeroArt />
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <MiniSignal
                  title="Траектория вместо хаоса"
                  text="Пользователь видит не просто набор блоков, а понятный маршрут с логикой и темпом."
                />
                <MiniSignal
                  title="История вместо шаблона"
                  text="Каждая планета ощущается как глава, а не как очередная плитка из типового LMS."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6" id="benefits">
          <div className="glass-card rounded-[2rem] border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-6 sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyanGlow">Подход</p>
                <h2 className="mt-3 max-w-3xl font-display text-3xl text-white sm:text-4xl">
                  Это не “ещё один лендинг онлайн-школы”. Здесь есть позиция.
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                БиоЛогика не пытается казаться “современной” за счёт клише. Она продаёт через
                ясную идею: ребёнку нужен не только контент, ему нужен мир, в который хочется
                возвращаться, и система, которой можно доверять.
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
          <div className="mb-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-pinkGlow">Манифест</p>
            <p className="mt-4 max-w-5xl font-display text-2xl leading-[1.3] text-white sm:text-3xl">
              Мы не делаем вид, что детям достаточно “просто объяснить тему попроще”. Им нужен
              продукт, который уважает их вкус, внимание и желание чувствовать рост.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {processSteps.map(({ icon: Icon, title, text }) => (
              <div key={title} className="glass-card rounded-[1.8rem] border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6">
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
          <div className="glass-card rounded-[2rem] border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-pinkGlow">Мир платформы</p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
              Семь планет, из-за которых маршрут хочется листать дальше.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Обычные платформы прячут смысл за интерфейсом. Здесь наоборот: сама навигация
              становится частью идеи. Поэтому мир работает не как декор, а как способ сделать
              обучение более ясным и цепким.
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
                className="hover-lift rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-4"
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
            <div className="glass-card overflow-hidden rounded-[2rem] border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-cyanGlow">Герои</p>
              <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                Люмен и Вита нужны не для милоты. Они удерживают внимание и собирают тон продукта.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Хороший бренд в образовании запоминается не только логотипом. Персонажи создают
                внутреннее напряжение, тепло и узнаваемость. За счёт этого БиоЛогика ощущается как
                самостоятельная вселенная, а не как ещё одна версия чужого шаблона.
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

            <div className="glass-card rounded-[2rem] border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-pinkGlow">Что получает семья</p>
              <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                Внешне это красиво. По сути это удобно, честно и понятно.
              </h2>
              <div className="mt-6 space-y-4">
                <BenefitRow
                  title="Подросток"
                  text="Не чувствует, что его опять пытаются заманить скучной школьной риторикой. Он видит продукт, в который действительно можно зайти."
                />
                <BenefitRow
                  title="Родитель"
                  text="Быстро понимает, за что здесь платят: маршрут, ясность, дисциплина подачи и ощущение, что платформа собрана с головой."
                />
                <BenefitRow
                  title="Платформа"
                  text="Получает входной экран, который не просит доверия авансом, а сначала честно показывает характер продукта."
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6" id="faq">
          <div className="glass-card rounded-[2rem] border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] p-6 sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyanGlow">FAQ</p>
                <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                  Нормальные вопросы перед тем, как нажать “попробовать”.
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
                  Если продукт про рост, уверенность и движение вперёд, первый экран должен это чувствоваться сразу.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                  Открой демо, посмотри, как устроен маршрут Люмена и Виты, и оцени не только
                  визуал, но и то ощущение собранности, которого так не хватает большинству
                  образовательных платформ.
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
