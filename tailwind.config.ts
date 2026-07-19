import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./content.config.ts",
  ],
  theme: {
    extend: {
      colors: {
        // Palette calda "Mini Pitbull Quest"
        cream: "#FFF7EE", // sfondo principale caldo
        blush: "#FFE0E6", // rosa chiarissimo, superfici
        rosa: "#FB7185", // rosa acceso, accenti giocosi
        rosso: "#E11D48", // rosso amore, azioni primarie
        vino: "#7F1D3A", // rosso scuro, testi importanti
        oro: "#D9A441", // oro caldo, stelle e premi
        notte: "#2B1B33", // viola notte, mappa/cielo
        nottechiaro: "#3E2A4A", // viola notte più chiaro
        inchiostro: "#3B2430", // testi su fondo chiaro
      },
      fontFamily: {
        romantic: ["'Playfair Display'", "Georgia", "serif"],
        game: ["'Baloo 2'", "'Comic Sans MS'", "system-ui", "sans-serif"],
        body: ["'Quicksand'", "system-ui", "sans-serif"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        twinkle: "twinkle 2.4s ease-in-out infinite",
        heartbeat: "heartbeat 1.4s ease-in-out infinite",
        wiggle: "wiggle 0.4s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.25", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.12)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.12)" },
          "70%": { transform: "scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-8px)" },
          "75%": { transform: "translateX(8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
