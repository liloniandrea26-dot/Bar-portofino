"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { config } from "@/content.config";

const HOLES = 9;
const ITEM_LIFETIME = 1300; // ms di permanenza di un item
const SPAWN_EVERY = 750; // ms tra uno spawn e l'altro

type ActiveItem = {
  id: number;
  hole: number;
  bad: boolean;
  emoji: string;
  label: string;
};

/** LIVELLO 15 — Whack-a-mole: colpisci le cose che la fanno arrabbiare! */
export default function Level15({ onWin }: { onWin: () => void }) {
  const { targetScore, badThings, goodThings, instructions } = config.level15;
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [items, setItems] = useState<ActiveItem[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [won, setWon] = useState(false);
  const nextId = useRef(0);
  const wonRef = useRef(false);

  useEffect(() => {
    if (!started || won) return;
    const spawn = window.setInterval(() => {
      setItems((current) => {
        if (wonRef.current) return current;
        const freeHoles = Array.from({ length: HOLES }, (_, i) => i).filter(
          (h) => !current.some((it) => it.hole === h)
        );
        if (freeHoles.length === 0) return current;
        const hole = freeHoles[Math.floor(Math.random() * freeHoles.length)];
        const bad = Math.random() < 0.65;
        const pool = bad ? badThings : goodThings;
        const thing = pool[Math.floor(Math.random() * pool.length)];
        const id = nextId.current++;
        // auto-rimozione dopo la lifetime
        window.setTimeout(() => {
          setItems((cur) => cur.filter((it) => it.id !== id));
        }, ITEM_LIFETIME);
        return [...current, { id, hole, bad, emoji: thing.emoji, label: thing.label }];
      });
    }, SPAWN_EVERY);
    return () => window.clearInterval(spawn);
  }, [started, won, badThings, goodThings]);

  function whack(item: ActiveItem) {
    if (won) return;
    setItems((cur) => cur.filter((it) => it.id !== item.id));
    if (item.bad) {
      const s = score + 1;
      setScore(s);
      setFeedback(`💥 ${item.label}`);
      if (s >= targetScore) {
        setWon(true);
        wonRef.current = true;
        setItems([]);
        window.setTimeout(onWin, 900);
      }
    } else {
      setScore((s) => Math.max(0, s - 1));
      setFeedback(`🙈 No! Quello era "${item.label}"… -1`);
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-center font-game text-sm font-semibold text-vino/70">{instructions}</p>

      {!started ? (
        <div className="game-card space-y-3 text-center">
          <div className="text-5xl">😤</div>
          <p className="font-game font-bold text-vino">
            Colpisci {targetScore} cose fastidiose per vincere.
            <br />
            <span className="text-sm font-semibold text-vino/60">
              Ma attenta: se colpisci le cose belle di noi, perdi un punto!
            </span>
          </p>
          <button onClick={() => setStarted(true)} className="btn-game">
            Scatena il Mini Pitbull! 🐶
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center gap-3">
            <span className="font-game text-lg font-extrabold text-rosso">
              Punti: {score}/{targetScore}
            </span>
            <div className="h-2.5 w-32 overflow-hidden rounded-full bg-vino/10">
              <motion.div
                className="h-full bg-gradient-to-r from-rosa to-rosso"
                animate={{ width: `${(score / targetScore) * 100}%` }}
              />
            </div>
          </div>

          <div className="mx-auto grid max-w-sm grid-cols-3 gap-3">
            {Array.from({ length: HOLES }, (_, h) => {
              const item = items.find((it) => it.hole === h);
              return (
                <div
                  key={h}
                  className="relative flex aspect-square items-end justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-orange-100 to-amber-200 shadow-inner ring-2 ring-amber-300/50"
                >
                  <div className="absolute bottom-1.5 h-3 w-4/5 rounded-[50%] bg-amber-900/30" />
                  <AnimatePresence>
                    {item && (
                      <motion.button
                        key={item.id}
                        onPointerDown={() => whack(item)}
                        className="relative z-10 flex flex-col items-center pb-2"
                        initial={{ y: 60, scale: 0.6 }}
                        animate={{ y: 0, scale: 1 }}
                        exit={{ y: 60, scale: 0.4, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 26 }}
                      >
                        <span className="text-4xl drop-shadow">{item.emoji}</span>
                        <span
                          className={`mt-0.5 max-w-[5.5rem] truncate rounded-full px-1.5 font-game text-[8px] font-bold ${
                            item.bad ? "bg-rosso/90 text-white" : "bg-emerald-400/90 text-white"
                          }`}
                        >
                          {item.label}
                        </span>
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {feedback && !won && (
              <motion.p
                key={feedback + score}
                className="text-center font-game text-sm font-bold text-vino"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {feedback}
              </motion.p>
            )}
          </AnimatePresence>
          {won && (
            <motion.p
              className="text-center font-game text-xl font-extrabold text-oro"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              Rabbia sfogata! Restano solo le cose belle 💘
            </motion.p>
          )}
        </>
      )}
    </div>
  );
}
