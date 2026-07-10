import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./three/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette "Adriatico al tramonto"
        deep: "#0A3153", // blu Adriatico profondo
        sea: "#14557E", // blu mare medio
        aqua: "#4EC5C1", // turchese acqua bassa
        sand: "#EAD9BE", // sabbia calda
        "sand-light": "#F7F1E3", // sabbia chiarissima / crema
        coral: "#FF7A59", // corallo tramonto (accento)
        sunset: "#F5A25D", // arancio tramonto
        cream: "#FDFBF6", // bianco caldo di respiro
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
