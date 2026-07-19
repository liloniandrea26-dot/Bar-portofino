"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { config } from "@/content.config";

/** LIVELLO 20 — Rompicapo matematico: i risultati compongono una data */
export default function Level20({ onWin }: { onWin: () => void }) {
  const { intro, puzzles, revealedMeaning } = config.level20;
  const [values, setValues] = useState({ day: "", month: "", year: "" });
  const [wrong, setWrong] = useState(false);
  const [solved, setSolved] = useState(false);

  const fields = [
    { key: "day" as const, label: "Giorno", puzzle: puzzles.day, max: 2 },
    { key: "month" as const, label: "Mese", puzzle: puzzles.month, max: 2 },
    { key: "year" as const, label: "Anno", puzzle: puzzles.year, max: 4 },
  ];

  function check() {
    const ok =
      parseInt(values.day, 10) === puzzles.day.answer &&
      parseInt(values.month, 10) === puzzles.month.answer &&
      parseInt(values.year, 10) === puzzles.year.answer;
    if (ok) {
      setSolved(true);
      window.setTimeout(onWin, 2200);
    } else {
      setWrong(true);
      window.setTimeout(() => setWrong(false), 1500);
    }
  }

  const pad = (n: number, len: number) => String(n).padStart(len, "0");

  return (
    <div className="space-y-5">
      <p className="text-center font-romantic text-lg italic text-vino/80">🔢 {intro}</p>

      <div className="space-y-3">
        {fields.map((f) => (
          <div key={f.key} className="game-card !p-4">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <p className="font-game text-xs font-extrabold uppercase tracking-widest text-stone-500">
                  {f.label}
                </p>
                <p className="mt-0.5 font-game text-lg font-bold text-vino">{f.puzzle.expression}</p>
              </div>
              <motion.input
                inputMode="numeric"
                maxLength={f.max}
                value={values[f.key]}
                onChange={(e) =>
                  setValues((v) => ({ ...v, [f.key]: e.target.value.replace(/\D/g, "") }))
                }
                disabled={solved}
                placeholder={"?".repeat(f.max)}
                className="input-game !w-24"
                animate={wrong ? { x: [0, -6, 6, -4, 4, 0] } : {}}
              />
            </div>
          </div>
        ))}
      </div>

      {!solved ? (
        <div className="text-center">
          <button
            onClick={check}
            disabled={!values.day || !values.month || !values.year}
            className="btn-game"
          >
            Sblocca la data 🗝️
          </button>
          <AnimatePresence>
            {wrong && (
              <motion.p
                className="mt-2 font-game text-sm font-bold text-rosso"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                I conti non tornano… ricontrolla! 🤓
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div
          className="game-card text-center"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
        >
          <p className="font-game text-3xl font-extrabold tracking-wider text-shimmer">
            {pad(puzzles.day.answer, 2)} · {pad(puzzles.month.answer, 2)} · {puzzles.year.answer}
          </p>
          <motion.p
            className="mt-2 font-romantic text-lg italic text-vino"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {revealedMeaning} 💛
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
