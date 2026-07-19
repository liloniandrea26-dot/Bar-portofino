"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { config } from "@/content.config";
import { matchesAnswer } from "@/lib/utils";

/** LIVELLO 14 — Emoji riddle: indovina il ricordo dalle emoji */
export default function Level14({ onWin }: { onWin: () => void }) {
  const { riddles } = config.level14;
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [wrong, setWrong] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [solvedRiddle, setSolvedRiddle] = useState(false);

  const riddle = riddles[index];

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (solvedRiddle) return;
    if (matchesAnswer(input, riddle.answers)) {
      setSolvedRiddle(true);
      window.setTimeout(() => {
        if (index + 1 >= riddles.length) {
          onWin();
        } else {
          setIndex(index + 1);
          setInput("");
          setShowHint(false);
          setSolvedRiddle(false);
        }
      }, 1500);
    } else {
      setWrong(true);
      window.setTimeout(() => setWrong(false), 1500);
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-center font-game text-sm font-semibold text-vino/70">
        Ricordo {index + 1} di {riddles.length} — cosa raccontano queste emoji? 🤔
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="game-card text-center"
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -90 }}
        >
          <div className="flex justify-center gap-2 py-4">
            {[...riddle.emoji].map((e, i) => (
              <motion.span
                key={i}
                className="text-4xl sm:text-5xl"
                initial={{ scale: 0, rotate: -30 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 260 }}
              >
                {e}
              </motion.span>
            ))}
          </div>
          {showHint && (
            <motion.p
              className="font-romantic italic text-vino/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              💡 {riddle.hint}
            </motion.p>
          )}
          {solvedRiddle && (
            <motion.p
              className="font-game text-xl font-extrabold text-oro"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              {riddle.solution} — esatto! 🎉
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>

      {!solvedRiddle && (
        <form onSubmit={submit} className="mx-auto max-w-sm space-y-3">
          <motion.input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Scrivi cosa rappresentano…"
            className="input-game"
            animate={wrong ? { x: [0, -8, 8, -6, 6, 0] } : {}}
          />
          <div className="flex gap-2">
            {!showHint && (
              <button type="button" onClick={() => setShowHint(true)} className="btn-soft flex-1 text-sm">
                Aiutino 💡
              </button>
            )}
            <button type="submit" className="btn-game flex-1">
              Indovina! 😜
            </button>
          </div>
          <AnimatePresence>
            {wrong && (
              <motion.p
                className="text-center font-game text-sm font-bold text-rosso"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                No no… guarda meglio le emoji 👀
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      )}
    </div>
  );
}
