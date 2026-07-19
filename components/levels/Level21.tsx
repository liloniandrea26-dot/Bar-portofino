"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { config } from "@/content.config";
import { shuffle } from "@/lib/utils";

type Chip = { id: number; word: string };

/** LIVELLO 21 — Costruisci la frase: l'ultima prova prima del finale */
export default function Level21({ onWin }: { onWin: () => void }) {
  const targetWords = useMemo(() => config.level21.sentence.split(/\s+/).filter(Boolean), []);
  const [pool, setPool] = useState<Chip[]>(() => {
    const chips = targetWords.map((word, id) => ({ id, word }));
    let s = shuffle(chips);
    while (s.every((c, i) => c.id === i) && chips.length > 1) s = shuffle(chips);
    return s;
  });
  const [picked, setPicked] = useState<Chip[]>([]);
  const [wrong, setWrong] = useState(false);
  const [solved, setSolved] = useState(false);

  function pick(chip: Chip) {
    if (solved) return;
    const nextPicked = [...picked, chip];
    setPicked(nextPicked);
    setPool(pool.filter((c) => c.id !== chip.id));
    if (nextPicked.length === targetWords.length) {
      if (nextPicked.every((c, i) => c.word === targetWords[i])) {
        setSolved(true);
        window.setTimeout(onWin, 2800);
      } else {
        setWrong(true);
        window.setTimeout(() => setWrong(false), 1500);
      }
    }
  }

  function unpick(chip: Chip) {
    if (solved) return;
    setPicked(picked.filter((c) => c.id !== chip.id));
    setPool([...pool, chip]);
    setWrong(false);
  }

  return (
    <div className="space-y-6">
      <p className="text-center font-romantic text-lg italic text-vino/80">
        Un'ultima cosa, {config.her.nickname}.
        <br />
        Rimetti in ordine le parole… e poi tieniti pronta. 💫
      </p>

      {/* frase in costruzione */}
      <motion.div
        className={`mx-auto flex min-h-[6rem] max-w-lg flex-wrap items-center justify-center gap-2 rounded-3xl border-2 border-dashed p-4 transition-colors ${
          solved ? "border-oro bg-amber-50/80" : wrong ? "border-rosso bg-red-50/60" : "border-rosa/40 bg-white/60"
        }`}
        animate={wrong ? { x: [0, -8, 8, -6, 6, 0] } : {}}
      >
        {picked.length === 0 && (
          <span className="font-game text-sm text-vino/40">Tocca le parole qui sotto…</span>
        )}
        {picked.map((chip) => (
          <motion.button
            key={chip.id}
            layoutId={`chip-${chip.id}`}
            onClick={() => unpick(chip)}
            className={`rounded-2xl px-3.5 py-2 font-romantic text-lg font-semibold shadow-md ${
              solved ? "bg-gradient-to-br from-oro to-amber-500 text-white" : "bg-rosso text-white"
            }`}
            whileTap={{ scale: 0.92 }}
          >
            {chip.word}
          </motion.button>
        ))}
      </motion.div>

      {/* parole disponibili */}
      {!solved && (
        <div className="mx-auto flex max-w-lg flex-wrap justify-center gap-2">
          {pool.map((chip) => (
            <motion.button
              key={chip.id}
              layoutId={`chip-${chip.id}`}
              onClick={() => pick(chip)}
              className="rounded-2xl bg-white px-3.5 py-2 font-romantic text-lg font-semibold text-vino shadow-md ring-2 ring-rosa/30"
              whileHover={{ scale: 1.06, rotate: 1.5 }}
              whileTap={{ scale: 0.92 }}
            >
              {chip.word}
            </motion.button>
          ))}
        </div>
      )}

      <AnimatePresence>
        {wrong && (
          <motion.p
            className="text-center font-game text-sm font-bold text-rosso"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Quasi… tocca una parola per rimetterla giù e riprova 💭
          </motion.p>
        )}
        {solved && (
          <motion.div
            className="space-y-2 text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.p
              className="font-romantic text-2xl font-semibold italic text-shimmer"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              “{config.level21.sentence}”
            </motion.p>
            <p className="font-game text-sm font-bold text-vino/60">
              Sta per succedere qualcosa… ✨
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
