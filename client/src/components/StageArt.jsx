import lumenImage from "../assets/lumen-cut.png";
import vitaImage from "../assets/vita-cut.png";
import protosPlanet from "../assets/planets/custom/protos.png";
import citaraPlanet from "../assets/planets/custom/citara.png";
import genezisPlanet from "../assets/planets/custom/genezis.png";
import vitariumPlanet from "../assets/planets/custom/vitarium.png";
import hominisPlanet from "../assets/planets/custom/hominis.png";
import evolusPlanet from "../assets/planets/custom/evolus.png";
import ecospherePlanet from "../assets/planets/custom/ecosphere.png";

const stageVisuals = {
  хаос: {
    src: protosPlanet,
    alt: "Протос",
    glow: "#FF9A3D",
    shadow: "drop-shadow(0 6px 12px rgba(255,140,40,0.35))"
  },
  структура: {
    src: citaraPlanet,
    alt: "Цитара",
    glow: "#58C6FF",
    shadow: "drop-shadow(0 6px 12px rgba(88,198,255,0.35))"
  },
  гены: {
    src: genezisPlanet,
    alt: "Генезис",
    glow: "#4F8DFF",
    shadow: "drop-shadow(0 6px 12px rgba(86,138,255,0.32))"
  },
  импульс: {
    src: vitariumPlanet,
    alt: "Витариум",
    glow: "#FF7BE8",
    shadow: "drop-shadow(0 6px 12px rgba(255,123,232,0.3))"
  },
  сборка: {
    src: hominisPlanet,
    alt: "Хоминис",
    glow: "#69F0AE",
    shadow: "drop-shadow(0 6px 12px rgba(105,240,174,0.28))"
  },
  рывок: {
    src: evolusPlanet,
    alt: "Эволюс",
    glow: "#C8FF5A",
    shadow: "drop-shadow(0 6px 12px rgba(180,255,120,0.28))"
  },
  профи: {
    src: ecospherePlanet,
    alt: "Экосфера",
    glow: "#9DF7D2",
    shadow: "drop-shadow(0 6px 12px rgba(125,255,210,0.28))"
  }
};

export function StageArt() {
  return (
    <div className="mb-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyanGlow/12 via-transparent to-pinkGlow/10 p-5">
        <p className="text-xs uppercase tracking-[0.3em] text-cyanGlow">Траектория роста</p>
        <svg className="mt-4 h-48 w-full" viewBox="0 0 620 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="evolutionLine" x1="34" y1="164" x2="586" y2="58" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7DF9FF" />
              <stop offset="0.5" stopColor="#B285FF" />
              <stop offset="1" stopColor="#9DF7D2" />
            </linearGradient>
          </defs>
          <path d="M34 164C98 114 164 90 226 102C282 112 326 152 384 157C447 163 501 128 586 58" stroke="url(#evolutionLine)" strokeWidth="4" strokeDasharray="8 10" />
          {[
            { x: 42, y: 162, r: 18, c: "#7DF9FF", t: "хаос" },
            { x: 128, y: 126, r: 20, c: "#58C6FF", t: "структура" },
            { x: 216, y: 108, r: 22, c: "#FF7BE8", t: "гены" },
            { x: 312, y: 138, r: 24, c: "#B285FF", t: "импульс" },
            { x: 406, y: 154, r: 26, c: "#7DFFB2", t: "сборка" },
            { x: 494, y: 122, r: 28, c: "#FFC36A", t: "рывок" },
            { x: 586, y: 58, r: 30, c: "#9DF7D2", t: "профи" }
          ].map((item) => (
            <g key={item.t}>
              {stageVisuals[item.t] ? (
                <>
                  <circle
                    cx={item.x}
                    cy={item.y}
                    r={item.r + 16}
                    fill={stageVisuals[item.t].glow}
                    fillOpacity="0.18"
                  />
                  <image
                    href={stageVisuals[item.t].src}
                    x={item.x - 28}
                    y={item.y - 28}
                    width="56"
                    height="56"
                    preserveAspectRatio="xMidYMid meet"
                    style={{ filter: stageVisuals[item.t].shadow }}
                  />
                </>
              ) : (
                <>
                  <circle cx={item.x} cy={item.y} r={item.r + 10} fill={item.c} fillOpacity="0.12" />
                  <circle cx={item.x} cy={item.y} r={item.r} fill={item.c} fillOpacity="0.9" />
                  <circle cx={item.x - 5} cy={item.y - 6} r={4} fill="white" fillOpacity="0.7" />
                </>
              )}
              <text x={item.x - 20} y={item.y + 42} fill="white" fontSize="14" fontFamily="Manrope, sans-serif">{item.t}</text>
            </g>
          ))}
        </svg>
        <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
          <p>Протос, Цитара и Генезис вытаскивают Люмена из полного хаоса в понимание клетки, генов и устройства жизни.</p>
          <p>На Витариуме появляется Вита и даёт тот самый импульс, после которого Люмен уже не играет в умного, а реально растёт.</p>
          <p>Хоминис, Эволюс и Экосфера собирают его в человека, который понимает биологию системно и выходит в финал уже как профи.</p>
        </div>
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-[rgba(8,14,34,0.26)] p-5 backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.3em] text-pinkGlow">Ключевые фигуры</p>
        <div className="mt-4 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/6 via-transparent to-white/4 p-4">
          <div className="grid items-center gap-4 sm:grid-cols-[0.9fr_1.1fr]">
            <CharacterScene />
            <div>
              <p className="font-display text-xl text-white">Люмен и Вита</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Вита появляется не как случайная романтическая сцена, а как точка перелома.
                Рядом с ней Люмен перестаёт просто позировать умным и начинает реально взрослеть.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Card
            title="Люмен"
            text="Начинает с амбиций, проходит через знание и в финале становится человеком, который понимает связи между всем живым."
            accent="cyanGlow"
            portrait="lumen"
          />
          <Card
            title="Вита"
            text="Появляется на Витариуме и задаёт Люмену более взрослую и честную планку роста."
            accent="pinkGlow"
            portrait="vita"
          />
        </div>
      </div>
    </div>
  );
}

function Card({ title, text, accent, portrait }) {
  const accents = {
    cyanGlow: "border-cyanGlow/20",
    pinkGlow: "border-pinkGlow/20"
  };

  return (
    <div className={`rounded-[1.5rem] border bg-white/[0.03] p-4 backdrop-blur-xl ${accents[accent]}`}>
      <div className="mb-3">
        <MiniPortrait type={portrait} />
      </div>
      <p className="font-display text-lg text-white">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function CharacterScene() {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[rgba(8,17,41,0.35)]">
      <div className="absolute inset-y-0 left-0 w-1/2">
        <div className="absolute inset-[14%_12%_14%_10%] rounded-[1.5rem] bg-cyanGlow/15 blur-2xl" />
        <img
          src={lumenImage}
          alt="Люмен"
          className="absolute bottom-2 left-1/2 h-[88%] w-auto -translate-x-1/2 object-contain drop-shadow-[0_16px_28px_rgba(125,249,255,0.35)]"
        />
        <p className="absolute bottom-3 left-4 text-sm text-cyan-100">Люмен</p>
      </div>
      <div className="absolute inset-y-0 right-0 w-1/2">
        <div className="absolute inset-[10%_12%_8%_14%] rounded-[1.5rem] bg-pinkGlow/[0.09] blur-2xl" />
        <img
          src={vitaImage}
          alt="Вита"
          className="absolute bottom-2 left-[56%] h-[88%] w-auto -translate-x-1/2 object-contain drop-shadow-[0_16px_28px_rgba(255,123,232,0.24)]"
        />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 68C32 70 48 72 60 75" stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeDasharray="6 6" />
          <text x="70" y="158" fill="#FFD5FA" fontSize="16" fontFamily="Manrope, sans-serif">Вита</text>
        </svg>
      </div>
    </div>
  );
}

function MiniPortrait({ type }) {
  if (type === "vita") {
    return (
      <div className="relative h-20 w-20 overflow-hidden rounded-full border border-pinkGlow/20 bg-pinkGlow/[0.09]">
        <img src={vitaImage} alt="Вита" className="h-full w-full object-cover object-[52%_18%] scale-125" />
      </div>
    );
  }

  return (
    <div className="relative h-20 w-20 overflow-hidden rounded-full border border-cyanGlow/20 bg-cyanGlow/[0.09]">
      <img src={lumenImage} alt="Люмен" className="h-full w-full object-cover object-center scale-110" />
    </div>
  );
}
