"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { config } from "@/content.config";
import { shuffle } from "@/lib/utils";

const SIZE = 3; // griglia 3x3
const CELLS = SIZE * SIZE;

/** Illustrazione di riserva se la foto non è ancora stata aggiunta */
function fallbackImage(): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FB7185"/><stop offset="0.5" stop-color="#E11D48"/><stop offset="1" stop-color="#D9A441"/>
    </linearGradient></defs>
    <rect width="600" height="600" fill="url(#g)"/>
    <text x="300" y="240" font-size="160" text-anchor="middle">❤️</text>
    <text x="300" y="360" font-size="44" text-anchor="middle" fill="#fff" font-family="Georgia" font-style="italic">${config.me.name.startsWith("[") ? "Noi due" : config.me.name} + ${config.her.name}</text>
    <text x="300" y="430" font-size="26" text-anchor="middle" fill="#ffffffcc" font-family="Georgia">(qui ci andrà la vostra foto)</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/** LIVELLO 3 — Puzzle: tocca due pezzi per scambiarli e ricomponi la foto */
export default function Level03({ onWin }: { onWin: () => void }) {
  const [image, setImage] = useState<string | null>(null);
  const [slots, setSlots] = useState<number[]>(() => {
    let s = shuffle(Array.from({ length: CELLS }, (_, i) => i));
    while (s.every((v, i) => v === i)) s = shuffle(s);
    return s;
  });
  const [selected, setSelected] = useState<number | null>(null);
  const [solved, setSolved] = useState(false);

  // Prova a caricare la foto reale; se manca usa l'illustrazione
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImage(config.level03.photo);
    img.onerror = () => setImage(fallbackImage());
    img.src = config.level03.photo;
  }, []);

  function tap(slotIndex: number) {
    if (solved) return;
    if (selected === null) {
      setSelected(slotIndex);
      return;
    }
    if (selected === slotIndex) {
      setSelected(null);
      return;
    }
    const next = [...slots];
    [next[selected], next[slotIndex]] = [next[slotIndex], next[selected]];
    setSlots(next);
    setSelected(null);
    if (next.every((v, i) => v === i)) {
      setSolved(true);
      window.setTimeout(onWin, 1100);
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-center font-game text-sm font-semibold text-vino/70">
        Tocca due pezzi per scambiarli e ricomponi il ricordo 🧩
      </p>
      <div
        className={`mx-auto grid aspect-square w-full max-w-sm grid-cols-3 overflow-hidden rounded-2xl shadow-xl transition-all ${
          solved ? "gap-0 ring-8 ring-oro/50" : "gap-1"
        }`}
      >
        {slots.map((piece, slotIndex) => (
          <motion.button
            key={slotIndex}
            onClick={() => tap(slotIndex)}
            layout
            className={`relative bg-sky-200 ${
              selected === slotIndex ? "z-10 ring-4 ring-rosso" : ""
            } ${solved ? "" : "rounded-lg"}`}
            whileTap={solved ? {} : { scale: 0.95 }}
            style={
              image
                ? {
                    backgroundImage: `url("${image}")`,
                    backgroundSize: `${SIZE * 100}% ${SIZE * 100}%`,
                    backgroundPosition: `${((piece % SIZE) / (SIZE - 1)) * 100}% ${(Math.floor(piece / SIZE) / (SIZE - 1)) * 100}%`,
                  }
                : {}
            }
          />
        ))}
      </div>
      {solved ? (
        <motion.p
          className="text-center font-romantic text-xl italic text-vino"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {config.level03.photoCaption} 💙
        </motion.p>
      ) : (
        <p className="text-center font-game text-xs text-vino/50">
          {selected !== null ? "Ora tocca il pezzo con cui scambiarlo" : "Suggerimento: parti dagli angoli!"}
        </p>
      )}
    </div>
  );
}
