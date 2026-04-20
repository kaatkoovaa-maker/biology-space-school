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
  { top: "88%", left: "54%", size: 4, delay: "1.2s", duration: "4.9s" },
  { top: "10%", left: "48%", size: 2, delay: "0.6s", duration: "5.4s" },
  { top: "18%", left: "92%", size: 3, delay: "1.6s", duration: "4.4s" },
  { top: "36%", left: "44%", size: 2, delay: "2.2s", duration: "5.7s" },
  { top: "52%", left: "70%", size: 4, delay: "0.3s", duration: "5.1s" },
  { top: "66%", left: "6%", size: 2, delay: "1.9s", duration: "4.7s" },
  { top: "84%", left: "88%", size: 3, delay: "0.8s", duration: "5.9s" },
  { top: "6%", left: "24%", size: 2, delay: "0.5s", duration: "5.1s" },
  { top: "12%", left: "58%", size: 3, delay: "1.4s", duration: "4.9s" },
  { top: "16%", left: "36%", size: 2, delay: "2.4s", duration: "6.1s" },
  { top: "26%", left: "86%", size: 3, delay: "0.2s", duration: "4.5s" },
  { top: "34%", left: "16%", size: 2, delay: "1.7s", duration: "5s" },
  { top: "40%", left: "54%", size: 3, delay: "0.9s", duration: "5.6s" },
  { top: "46%", left: "30%", size: 2, delay: "2.1s", duration: "4.8s" },
  { top: "56%", left: "90%", size: 3, delay: "1.2s", duration: "5.3s" },
  { top: "62%", left: "22%", size: 2, delay: "0.6s", duration: "4.4s" },
  { top: "70%", left: "48%", size: 3, delay: "1.8s", duration: "5.8s" },
  { top: "76%", left: "64%", size: 2, delay: "0.4s", duration: "5.2s" },
  { top: "82%", left: "12%", size: 3, delay: "2.3s", duration: "4.9s" },
  { top: "90%", left: "72%", size: 2, delay: "1s", duration: "5.4s" }
];

const comets = [
  { top: "12%", left: "68%", delay: "0s" },
  { top: "38%", left: "6%", delay: "2.8s" },
  { top: "74%", left: "58%", delay: "4.6s" },
  { top: "20%", left: "84%", delay: "1.6s" },
  { top: "58%", left: "26%", delay: "5.4s" },
  { top: "82%", left: "74%", delay: "3.7s" }
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
