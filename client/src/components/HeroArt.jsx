export function HeroArt() {
  return (
    <div className="pointer-events-none relative h-[250px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/30">
      <svg
        className="absolute left-[2%] top-[4%] h-[92%] w-[46%] opacity-95"
        viewBox="0 0 420 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lumenBody" x1="80" y1="60" x2="320" y2="520" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7DF9FF" />
            <stop offset="1" stopColor="#2C7DF7" />
          </linearGradient>
          <radialGradient id="lumenGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(180 220) rotate(90) scale(250 180)">
            <stop stopColor="#7DF9FF" stopOpacity="0.55" />
            <stop offset="1" stopColor="#7DF9FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="180" cy="220" rx="180" ry="190" fill="url(#lumenGlow)" />
        <path
          d="M181 84C128 84 90 122 90 176C90 219 112 250 140 267C129 278 121 294 121 312C121 360 154 392 181 418C208 392 241 360 241 312C241 294 233 278 222 267C250 250 272 219 272 176C272 122 234 84 181 84Z"
          fill="url(#lumenBody)"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="4"
        />
        <circle cx="154" cy="170" r="20" fill="white" />
        <circle cx="208" cy="170" r="20" fill="white" />
        <circle cx="160" cy="174" r="8" fill="#081129" />
        <circle cx="214" cy="174" r="8" fill="#081129" />
        <path d="M153 225C164 236 176 242 192 242C208 242 222 236 233 225" stroke="#E8FBFF" strokeWidth="8" strokeLinecap="round" />
        <circle cx="125" cy="138" r="10" fill="#9FF7FF" fillOpacity="0.9" />
        <circle cx="250" cy="135" r="7" fill="#FF7BE8" fillOpacity="0.85" />
        <path d="M107 325C121 353 144 381 181 418C221 380 243 352 257 325" stroke="#D5F8FF" strokeOpacity="0.7" strokeWidth="8" strokeLinecap="round" />
        <text x="56" y="470" fill="#D8F8FF" fontSize="24" fontFamily="Manrope, sans-serif">Люмен</text>
        <text x="56" y="500" fill="#86F0FF" fontSize="16" fontFamily="Manrope, sans-serif">от капли воды к осознанности</text>
      </svg>

      <svg
        className="absolute right-[1%] top-[4%] h-[92%] w-[38%] opacity-95"
        viewBox="0 0 360 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="vitaBody" x1="120" y1="90" x2="240" y2="540" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFD7F8" />
            <stop offset="1" stopColor="#7DF9FF" />
          </linearGradient>
          <radialGradient id="vitaGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 260) rotate(90) scale(260 160)">
            <stop stopColor="#FF7BE8" stopOpacity="0.38" />
            <stop offset="1" stopColor="#FF7BE8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="202" cy="250" rx="130" ry="220" fill="url(#vitaGlow)" />
        <circle cx="188" cy="138" r="54" fill="#FFE9FB" fillOpacity="0.95" />
        <path d="M135 150C138 95 173 70 219 78C251 84 269 106 270 144C262 116 244 102 214 98C185 94 160 110 135 150Z" fill="#FF7BE8" fillOpacity="0.85" />
        <path d="M142 212C152 184 172 172 188 172C205 172 224 184 234 212L256 410C259 445 236 472 208 488L188 500L168 488C140 472 117 445 120 410L142 212Z" fill="url(#vitaBody)" stroke="rgba(255,255,255,0.4)" strokeWidth="4" />
        <circle cx="171" cy="136" r="8" fill="#081129" />
        <circle cx="205" cy="136" r="8" fill="#081129" />
        <path d="M172 161C178 167 184 170 190 170C196 170 202 167 208 161" stroke="#6A2B72" strokeWidth="4" strokeLinecap="round" />
        <rect x="154" y="268" width="68" height="18" rx="9" fill="#081129" fillOpacity="0.16" />
        <text x="86" y="540" fill="#FCE6FF" fontSize="24" fontFamily="Manrope, sans-serif">Вита</text>
        <text x="86" y="570" fill="#FF9CF0" fontSize="16" fontFamily="Manrope, sans-serif">спокойная, умная, sci-fi</text>
      </svg>
    </div>
  );
}
