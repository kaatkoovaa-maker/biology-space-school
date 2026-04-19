import lumenImage from "../assets/lumen-cut.png";
import vitaImage from "../assets/vita-cut.png";

export function HeroArt() {
  return (
    <div className="pointer-events-none relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 px-5 pb-5 pt-5">
      <div className="grid h-full grid-cols-2 gap-5">
        <div className="relative min-h-[360px]">
          <div className="absolute inset-[4%_6%_20%_4%] rounded-[2rem] bg-cyanGlow/20 blur-3xl" />
          <img
            src={lumenImage}
            alt="Люмен"
            className="absolute bottom-16 left-[46%] h-[86%] w-auto -translate-x-1/2 object-contain drop-shadow-[0_20px_40px_rgba(125,249,255,0.35)]"
          />
          <div className="absolute bottom-0 left-0 z-10 max-w-[72%] rounded-[1.1rem] border border-cyanGlow/25 bg-black/45 px-3 py-2 backdrop-blur">
            <p className="text-sm text-cyan-50">Люмен</p>
            <p className="mt-1 text-[11px] leading-4 text-slate-300">
              Из хаоса к ясности.
            </p>
          </div>
        </div>

        <div className="relative min-h-[360px]">
          <div className="absolute inset-[6%_2%_20%_16%] rounded-[2rem] bg-pinkGlow/12 blur-3xl" />
          <img
            src={vitaImage}
            alt="Вита"
            className="absolute bottom-16 left-[58%] h-[78%] w-auto -translate-x-1/2 object-contain drop-shadow-[0_20px_40px_rgba(255,123,232,0.22)]"
          />
          <div className="absolute bottom-0 right-0 z-10 ml-auto max-w-[68%] rounded-[1.1rem] border border-pinkGlow/20 bg-black/45 px-3 py-2 backdrop-blur">
            <p className="text-sm text-pink-50">Вита</p>
            <p className="mt-1 text-[11px] leading-4 text-slate-300">
              Спокойствие и опора.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
