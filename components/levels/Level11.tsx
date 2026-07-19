"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { config } from "@/content.config";
import { shuffle } from "@/lib/utils";

function cleanWord(w: string): string {
  return w.toUpperCase().replace(/[^A-ZÀ-Ù]/g, "");
}

/** LIVELLO 11 — Anagrammi: tocca le lettere nell'ordine giusto */
export default function Level11({ onWin }: { onWin: () => void }) {
  const words = useMemo(
    () => config.level11.words.map((w) => ({ hint: w.hint, word: cleanWord(w.word) })),
    []
  );
  const [wordIndex, setWordIndex] = useState(0);
  const [letters, setLetters] = useState<{ ch: string; id: number }[]>(() => {
    const w = words[0].word;
    let s = shuffle(w.split("").map((ch, id) => ({ ch, id })));
    while (s.map((l) => l.ch).join("") === w && w.length > 1) s = shuffle(s);
    return s;
  });
  const [picked, setPicked] = useState<{ ch: string; id: number }[]>([]);
  const [wrong, setWrong] = useState(false);
  const [wonWord, setWonWord] = useState(false);

  const target = words[wordIndex].word;

  function startWord(index: number) {
    const w = words[index].word;
    let s = shuffle(w.split("").map((ch, id) => ({ ch, id })));
    while (s.map((l) => l.ch).join("") === w && w.length > 1) s = shuffle(s);
    setWordIndex(index);
    setLetters(s);
    setPicked([]);
    setWonWord(false);
    setWrong(false);
  }

  function pick(letter: { ch: string; id: number }) {
    if (wonWord) return;
    const nextPicked = [...picked, letter];
    setPicked(nextPicked);
    setLetters(letters.filter((l) => l.id !== letter.id));
    if (nextPicked.length === target.length) {
      if (nextPicked.map((l) => l.ch).join("") === target) {
        setWonWord(true);
        window.setTimeout(() => {
          if (wordIndex + 1 >= words.length) onWin();
          else startWord(wordIndex + 1);
        }, 1300);
      } else {
        setWrong(true);
        window.setTimeout(() => {
          setWrong(false);
          setLetters(shuffle(target.split("").map((ch, id) => ({ ch, id }))));
          setPicked([]);
        }, 900);
      }
    }
  }

  function unpick(letter: { ch: string; id: number }) {
    if (wonWord || wrong) return;
    setPicked(picked.filter((l) => l.id !== letter.id));
    setLetters([...letters, letter]);
  }

  return (
    <div className="space-y-5">
      <div className="text-center">
        <span className="font-game text-xs font-bold uppercase tracking-widest text-amber-500">
          Parola {wordIndex + 1} di {words.length}
        </span>
        <p className="mt-1 font-romantic text-lg italic text-vino">💡 {words[wordIndex].hint}</p>
      </div>

      {/* Slot risposta */}
      <motion.div
        className="flex min-h-[3.5rem] flex-wrap items-center justify-center gap-1.5"
        animate={wrong ? { x: [0, -8, 8, -6, 6, 0] } : {}}
      >
        {Array.from({ length: target.length }, (_, i) => {
          const letter = picked[i];
          return letter ? (
            <motion.button
              key={letter.id}
              onClick={() => unpick(letter)}
              layoutId={`letter-${letter.id}`}
              className={`flex h-12 w-10 items-center justify-center rounded-xl font-game text-xl font-extrabold text-white shadow-md ${
                wonWord ? "bg-oro" : wrong ? "bg-rosso" : "bg-amber-400"
              }`}
            >
              {letter.ch}
            </motion.button>
          ) : (
            <span key={`empty-${i}`} className="h-12 w-10 rounded-xl border-2 border-dashed border-amber-300 bg-white/50" />
          );
        })}
      </motion.div>

      {/* Lettere disponibili */}
      <div className="flex flex-wrap justify-center gap-2">
        {letters.map((letter) => (
          <motion.button
            key={letter.id}
            onClick={() => pick(letter)}
            layoutId={`letter-${letter.id}`}
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-12 w-10 items-center justify-center rounded-xl bg-white font-game text-xl font-extrabold text-vino shadow-md ring-2 ring-amber-200"
          >
            {letter.ch}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {wonWord && (
          <motion.p
            className="text-center font-game text-xl font-extrabold text-oro"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0 }}
          >
            {target}! Esatto 🎉
          </motion.p>
        )}
        {wrong && (
          <motion.p
            className="text-center font-game text-sm font-bold text-rosso"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Quasi… rimescolo tutto! 🔀
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
