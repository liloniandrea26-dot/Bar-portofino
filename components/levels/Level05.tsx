"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { config } from "@/content.config";

const KEYBOARD = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

function cleanWord(w: string): string {
  return w.toUpperCase().replace(/[^A-Z]/g, "");
}

/** LIVELLO 5 — Impiccato dolce: sbaglia e perdi un cuoricino */
export default function Level05({ onWin }: { onWin: () => void }) {
  const words = useMemo(
    () => config.level05.words.map((w) => ({ ...w, word: cleanWord(w.word) })),
    []
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [errors, setErrors] = useState(0);
  const [lost, setLost] = useState(false);
  const [wonWord, setWonWord] = useState(false);

  const { word, hint } = words[wordIndex];
  const maxErrors = config.level05.maxErrors;
  const letters = word.split("");
  const isComplete = letters.every((l) => guessed.has(l));

  function guess(letter: string) {
    if (lost || wonWord || guessed.has(letter)) return;
    const next = new Set(guessed).add(letter);
    setGuessed(next);
    if (!word.includes(letter)) {
      const e = errors + 1;
      setErrors(e);
      if (e >= maxErrors) setLost(true);
    } else if (letters.every((l) => next.has(l))) {
      setWonWord(true);
      window.setTimeout(() => {
        if (wordIndex + 1 >= words.length) {
          onWin();
        } else {
          setWordIndex(wordIndex + 1);
          setGuessed(new Set());
          setErrors(0);
          setWonWord(false);
        }
      }, 1200);
    }
  }

  function retry() {
    setGuessed(new Set());
    setErrors(0);
    setLost(false);
  }

  return (
    <div className="space-y-5">
      <div className="text-center">
        <span className="font-game text-xs font-bold uppercase tracking-widest text-rosa">
          Parola {wordIndex + 1} di {words.length}
        </span>
        <p className="mt-1 font-romantic text-lg italic text-vino">💡 {hint}</p>
      </div>

      {/* Cuoricini-vita */}
      <div className="flex justify-center gap-1.5 text-2xl">
        {Array.from({ length: maxErrors }, (_, i) => (
          <motion.span
            key={i}
            animate={i < maxErrors - errors ? { scale: 1 } : { scale: [1, 1.4, 0.8], opacity: 0.25 }}
            transition={{ duration: 0.4 }}
          >
            {i < maxErrors - errors ? "❤️" : "💔"}
          </motion.span>
        ))}
      </div>

      {/* Parola */}
      <div className="flex flex-wrap justify-center gap-1.5">
        {letters.map((l, i) => (
          <motion.span
            key={i}
            className={`flex h-11 w-9 items-center justify-center rounded-lg border-b-4 font-game text-xl font-extrabold ${
              guessed.has(l)
                ? "border-oro bg-white text-vino"
                : "border-rosa/40 bg-white/60 text-transparent"
            }`}
            animate={guessed.has(l) ? { y: [8, 0], opacity: [0, 1] } : {}}
          >
            {guessed.has(l) ? l : "·"}
          </motion.span>
        ))}
      </div>

      {/* Tastiera */}
      <div className="space-y-1.5">
        {KEYBOARD.map((row) => (
          <div key={row} className="flex justify-center gap-1">
            {row.split("").map((k) => {
              const used = guessed.has(k);
              const inWord = word.includes(k);
              return (
                <button
                  key={k}
                  onClick={() => guess(k)}
                  disabled={used || lost || wonWord}
                  className={`h-10 w-8 rounded-lg font-game text-sm font-bold shadow-sm transition-all active:scale-90 sm:w-9 ${
                    used
                      ? inWord
                        ? "bg-oro text-white"
                        : "bg-vino/15 text-vino/30"
                      : "bg-white text-vino hover:bg-blush"
                  }`}
                >
                  {k}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {lost && (
          <motion.div
            className="game-card text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <p className="font-game text-lg font-bold text-vino">
              I cuoricini sono finiti! 💔 Ma il Mini Pitbull non molla mai…
            </p>
            <button onClick={retry} className="btn-game mt-3">
              Riprova 🐶
            </button>
          </motion.div>
        )}
        {wonWord && (
          <motion.p
            className="text-center font-game text-xl font-extrabold text-oro"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            {word} — esatto! 🎉
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
