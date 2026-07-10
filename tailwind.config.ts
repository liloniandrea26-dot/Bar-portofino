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
        // Palette "Bianco & Ottone" — chiara, neutra, elegante
        ink: "#201D19", // quasi-nero caldo: testi e sezioni scure
        smoke: "#6B6459", // grigio caldo: testi secondari
        sage: "#7D8C72", // verde spento: stato "Aperto"
        stone: "#E7E1D6", // neutro medio: bordi, superfici
        linen: "#F5F2EC", // lino chiaro: sfondi alternati
        brass: "#9A6B3F", // ottone brunito: unico accento
        champagne: "#C9AF8B", // champagne: accento soft su fondi scuri
        cream: "#FDFCF9", // bianco caldo: fondo principale
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
