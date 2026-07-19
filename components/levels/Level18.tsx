"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { config } from "@/content.config";

/** LIVELLO 18 — Mappa dei luoghi del cuore: trova il posto giusto per ogni indizio */
export default function Level18({ onWin }: { onWin: () => void }) {
  const { pins, rounds } = config.level18;
  const [round, setRound] = useState(0);
  const [openPin, setOpenPin] = useState<string | null>(null);
  const [correctFlash, setCorrectFlash] = useState(false);
  const [done, setDone] = useState(false);
  const [foundPins, setFoundPins] = useState<string[]>([]);

  const current = rounds[round];

  function tapPin(id: string) {
    if (done) return;
    setOpenPin(id);
    if (id === current.correctPin) {
      setCorrectFlash(true);
      const nextFound = [...foundPins, id];
      setFoundPins(nextFound);
      window.setTimeout(() => {
        setCorrectFlash(false);
        setOpenPin(null);
        if (round + 1 >= rounds.length) {
          setDone(true);
          window.setTimeout(onWin, 700);
        } else {
          setRound(round + 1);
        }
      }, 1800);
    }
  }

  const pin = openPin ? pins.find((p) => p.id === openPin) : null;

  return (
    <div className="space-y-4">
      <div className="game-card !p-4 text-center">
        <p className="font-game text-xs font-extrabold uppercase tracking-widest text-green-600">
          Indizio {round + 1} di {rounds.length}
        </p>
        <p className="mt-1 font-romantic text-lg italic text-vino">🧭 {current.clue}</p>
      </div>

      {/* mappa stilizzata */}
      <div className="relative mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl shadow-xl ring-4 ring-white">
        <svg viewBox="0 0 200 150" className="absolute inset-0 h-full w-full">
          <rect width="200" height="150" fill="#BFE3D0" />
          {/* "mare" e "strade" decorative */}
          <path d="M0 150 Q 40 110 20 70 Q 5 40 30 0 L 0 0 Z" fill="#8FCBEA" />
          <path d="M200 0 Q 170 40 185 80 Q 195 115 170 150 L 200 150 Z" fill="#8FCBEA" />
          <path d="M30 140 Q 80 100 60 60 Q 45 30 80 10" fill="none" stroke="#F5EFE0" strokeWidth="7" strokeLinecap="round" />
          <path d="M40 20 Q 100 50 150 35" fill="none" stroke="#F5EFE0" strokeWidth="5" strokeLinecap="round" />
          <path d="M70 130 Q 120 110 160 125" fill="none" stroke="#F5EFE0" strokeWidth="5" strokeLinecap="round" />
          {/* alberelli */}
          <text x="52" y="48" fontSize="9">🌳</text>
          <text x="140" y="100" fontSize="9">🌳</text>
          <text x="100" y="28" fontSize="8">⛰️</text>
          <text x="12" y="100" fontSize="8">⛵</text>
        </svg>

        {pins.map((p) => {
          const found = foundPins.includes(p.id);
          return (
            <motion.button
              key={p.id}
              onClick={() => tapPin(p.id)}
              className="absolute -translate-x-1/2 -translate-y-full"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              animate={found ? { scale: [1, 1.3, 1] } : { y: [0, -3, 0] }}
              transition={found ? { duration: 0.5 } : { duration: 1.6, repeat: Infinity }}
            >
              <span className="relative flex flex-col items-center">
                <span className={`flex h-9 w-9 items-center justify-center rounded-full text-lg shadow-lg ring-2 ${found ? "bg-oro ring-white" : "bg-white ring-rosa/40"}`}>
                  {found ? "💛" : p.emoji}
                </span>
                <span className="-mt-0.5 h-2.5 w-2.5 rotate-45 bg-white shadow" style={found ? { background: "#D9A441" } : {}} />
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* popup del pin toccato */}
      <AnimatePresence>
        {pin && (
          <motion.div
            key={pin.id + String(correctFlash)}
            className={`game-card !p-4 text-center ${correctFlash ? "ring-4 !ring-oro" : ""}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <p className="font-game font-extrabold text-vino">
              {pin.emoji} {pin.name}
            </p>
            <p className="mt-1 font-romantic text-sm italic text-vino/70">{pin.blurb}</p>
            {correctFlash ? (
              <motion.p
                className="mt-2 font-game text-lg font-extrabold text-oro"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                È proprio questo! 🎯
              </motion.p>
            ) : (
              <p className="mt-2 font-game text-sm font-bold text-rosso">
                Bel posto, ma l'indizio parla di un altro… 🧐
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {done && (
        <motion.p
          className="text-center font-game text-xl font-extrabold text-oro"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          Conosci a memoria la nostra geografia 🗺️💛
        </motion.p>
      )}
    </div>
  );
}
