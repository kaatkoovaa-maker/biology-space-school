/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        space: "#070816",
        nebula: "#0f1535",
        cyanGlow: "#41f0ff",
        pinkGlow: "#ff4fd8",
        limeGlow: "#8fff7a"
      },
      boxShadow: {
        neon: "0 0 25px rgba(65, 240, 255, 0.25)",
        pink: "0 0 30px rgba(255, 79, 216, 0.22)"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at top, rgba(65,240,255,0.08), transparent 32%), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)"
      },
      fontFamily: {
        display: ["Unbounded", "sans-serif"],
        body: ["Manrope", "sans-serif"]
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulseSlow 3.4s ease-in-out infinite",
        twinkle: "twinkle 4.5s ease-in-out infinite",
        drift: "drift 18s linear infinite",
        shimmer: "shimmer 7s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseSlow: {
          "0%, 100%": { opacity: 0.7, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.03)" }
        },
        twinkle: {
          "0%, 100%": { opacity: 0.25, transform: "scale(0.95)" },
          "50%": { opacity: 1, transform: "scale(1.35)" }
        },
        drift: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(30px, -20px, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" }
        },
        shimmer: {
          "0%, 100%": { opacity: 0.45, transform: "scale(1)" },
          "50%": { opacity: 0.85, transform: "scale(1.08)" }
        }
      }
    }
  },
  plugins: []
};
