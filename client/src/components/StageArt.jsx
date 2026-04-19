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
              <circle cx={item.x} cy={item.y} r={item.r + 10} fill={item.c} fillOpacity="0.12" />
              <circle cx={item.x} cy={item.y} r={item.r} fill={item.c} fillOpacity="0.9" />
              <circle cx={item.x - 5} cy={item.y - 6} r={4} fill="white" fillOpacity="0.7" />
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
      <div className="rounded-[2rem] border border-white/10 bg-black/20 p-5">
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
    <div className={`rounded-[1.5rem] border bg-white/5 p-4 ${accents[accent]}`}>
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
    <svg className="h-40 w-full" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="312" height="172" rx="28" fill="rgba(8,17,41,0.35)" stroke="rgba(255,255,255,0.08)" />
      <circle cx="84" cy="82" r="42" fill="#7DF9FF" fillOpacity="0.9" />
      <circle cx="82" cy="77" r="10" fill="white" />
      <circle cx="100" cy="77" r="10" fill="white" />
      <circle cx="85" cy="80" r="4" fill="#081129" />
      <circle cx="103" cy="80" r="4" fill="#081129" />
      <path d="M82 98C87 103 92 106 98 106C103 106 109 103 113 98" stroke="#E8FBFF" strokeWidth="4" strokeLinecap="round" />
      <circle cx="230" cy="72" r="34" fill="#FFE8FA" />
      <path d="M197 80C202 43 223 28 250 34C271 38 284 52 286 77C278 58 264 50 245 49C224 48 210 58 197 80Z" fill="#FF7BE8" />
      <path d="M206 108C213 90 225 84 240 84C254 84 266 91 273 108L286 144C291 156 280 170 266 170H214C200 170 189 156 194 144L206 108Z" fill="url(#vitaFill)" />
      <path d="M146 84C170 86 186 88 198 91" stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeDasharray="6 6" />
      <text x="50" y="150" fill="#D8F8FF" fontSize="16" fontFamily="Manrope, sans-serif">Люмен</text>
      <text x="220" y="150" fill="#FFD5FA" fontSize="16" fontFamily="Manrope, sans-serif">Вита</text>
      <defs>
        <linearGradient id="vitaFill" x1="210" y1="84" x2="270" y2="170" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD7F8" />
          <stop offset="1" stopColor="#7DF9FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MiniPortrait({ type }) {
  if (type === "vita") {
    return (
      <svg className="h-20 w-20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="38" fill="rgba(255,123,232,0.16)" />
        <circle cx="40" cy="28" r="14" fill="#FFE8FA" />
        <path d="M24 31C25 17 34 11 47 13C58 15 64 23 64 34C59 25 53 22 45 21C36 20 30 23 24 31Z" fill="#FF7BE8" />
        <path d="M30 45C33 38 37 35 40 35C43 35 47 38 50 45L58 64H22L30 45Z" fill="url(#miniVita)" />
        <defs>
          <linearGradient id="miniVita" x1="26" y1="36" x2="54" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFD7F8" />
            <stop offset="1" stopColor="#7DF9FF" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <svg className="h-20 w-20" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="rgba(125,249,255,0.16)" />
      <path d="M40 18C26 18 16 28 16 42C16 54 22 62 30 66C29 70 34 76 40 76C46 76 51 70 50 66C58 62 64 54 64 42C64 28 54 18 40 18Z" fill="url(#miniLumen)" />
      <circle cx="33" cy="39" r="7" fill="white" />
      <circle cx="47" cy="39" r="7" fill="white" />
      <circle cx="35" cy="40" r="3" fill="#081129" />
      <circle cx="49" cy="40" r="3" fill="#081129" />
      <path d="M33 50C36 53 39 55 43 55C47 55 50 53 53 50" stroke="#E8FBFF" strokeWidth="3" strokeLinecap="round" />
      <defs>
        <linearGradient id="miniLumen" x1="20" y1="22" x2="56" y2="72" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7DF9FF" />
          <stop offset="1" stopColor="#2C7DF7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
