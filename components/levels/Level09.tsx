"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { config } from "@/content.config";
import { matchesAnswer } from "@/lib/utils";

/** LIVELLO 9 — Indovina la canzone: indizi progressivi + risposta scritta */
export default function Level09({ onWin }: { onWin: () => void }) {
  const { clues, answers, revealedTitle } = config.level09;
  const [cluesShown, setCluesShown] = useState(1);
  const [input, setInput] = useState("");
  const [wrong, setWrong] = useState(false);
  const [solved, setSolved] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (solved) return;
    if (matchesAnswer(input, answers)) {
      setSolved(true);
      window.setTimeout(onWin, 1600);
    } else {
      setWrong(true);
      window.setTimeout(() => setWrong(false), 1500);
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-center font-game text-sm font-semibold text-vino/70">
        C'è una canzone che è nostra. Indovina qual è 🎧
      </p>

      <div className="space-y-2.5">
        {clues.slice(0, cluesShown).map((clue, i) => (
          <motion.div
            key={i}
            className="game-card !p-4 font-body text-sm leading-relaxed text-vino"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="mr-2 font-game text-xs font-extrabold uppercase text-indigo-400">
              Indizio {i + 1}
            </span>
            {clue}
          </motion.div>
        ))}
      </div>

      {cluesShown < clues.length && !solved && (
        <div className="text-center">
          <button onClick={() => setCluesShown((c) => c + 1)} className="btn-soft text-sm">
            Mi serve un altro indizio 🙏
          </button>
        </div>
      )}

      {!solved ? (
        <form onSubmit={submit} className="mx-auto max-w-sm space-y-3">
          <motion.input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Il titolo della canzone…"
            className="input-game"
            animate={wrong ? { x: [0, -8, 8, -6, 6, 0] } : {}}
          />
          <button type="submit" className="btn-game w-full">
            È questa! 🎵
          </button>
          <AnimatePresence>
            {wrong && (
              <motion.p
                className="text-center font-game text-sm font-bold text-rosso"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No… ripensa a quando la cantavamo insieme 🎤
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      ) : (
        <motion.div
          className="game-card text-center"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
        >
          <div className="flex items-end justify-center gap-1 pb-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                className="w-2 rounded-full bg-gradient-to-t from-indigo-400 to-rosa"
                animate={{ height: [8, 22 + i * 4, 8] }}
                transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.12 }}
              />
            ))}
          </div>
          <p className="font-game text-xl font-extrabold text-indigo-500">🎶 {revealedTitle}</p>
          <p className="mt-1 font-romantic italic text-vino/70">La nostra canzone, per sempre.</p>
        </motion.div>
      )}
    </div>
  );
}
