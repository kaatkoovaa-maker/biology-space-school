const dots = [
  { top: "8%", left: "12%", size: 3, delay: "0s", duration: "4.2s" },
  { top: "14%", left: "78%", size: 2, delay: "1.1s", duration: "5.5s" },
  { top: "22%", left: "28%", size: 4, delay: "0.4s", duration: "4.8s" },
  { top: "30%", left: "66%", size: 2, delay: "1.8s", duration: "6.2s" },
  { top: "42%", left: "10%", size: 3, delay: "0.9s", duration: "4.6s" },
  { top: "48%", left: "84%", size: 4, delay: "1.5s", duration: "5.8s" },
  { top: "60%", left: "38%", size: 2, delay: "0.1s", duration: "4.1s" },
  { top: "72%", left: "18%", size: 3, delay: "2s", duration: "5.2s" },
  { top: "78%", left: "74%", size: 2, delay: "0.7s", duration: "6s" },
  { top: "88%", left: "54%", size: 4, delay: "1.2s", duration: "4.9s" }
];

const comets = [
  { top: "12%", left: "68%", delay: "0s" },
  { top: "38%", left: "6%", delay: "2.8s" },
  { top: "74%", left: "58%", delay: "4.6s" }
];

export function AnimatedSky() {
  return (
    <div className="aurora-layer">
      {dots.map((dot, index) => (
        <span
          key={index}
          className="sparkle-dot"
          style={{
            top: dot.top,
            left: dot.left,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            animationDelay: dot.delay,
            animationDuration: dot.duration
          }}
        />
      ))}
      {comets.map((comet, index) => (
        <span
          key={index}
          className="shooting-star"
          style={{
            top: comet.top,
            left: comet.left,
            animationDelay: comet.delay
          }}
        />
      ))}
    </div>
  );
}
