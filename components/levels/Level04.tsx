"use client";

import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { config } from "@/content.config";

type CellDef = { letter: string; num?: number };

/** LIVELLO 4 — Cruciverba personalizzato */
export default function Level04({ onWin }: { onWin: () => void }) {
  const { grid, entries } = config.level04;

  // Costruisce la griglia risolta a partire dalle definizioni
  const cells = useMemo(() => {
    const map = new Map<string, CellDef>();
    for (const e of entries) {
      const word = e.word.toUpperCase().replace(/[^A-ZÀ-Ù]/g, "");
      for (let i = 0; i < word.length; i++) {
        const r = e.dir === "down" ? e.row + i : e.row;
        const c = e.dir === "across" ? e.col + i : e.col;
        const key = `${r},${c}`;
        const existing = map.get(key);
        map.set(key, {
          letter: word[i],
          num: i === 0 ? e.num : existing?.num,
        });
      }
    }
    return map;
  }, [entries]);

  const [values, setValues] = useState<Record<string, string>>({});
  const [wrong, setWrong] = useState<Set<string>>(new Set());
  const [solved, setSolved] = useState(false);
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const keys = useMemo(() => [...cells.keys()], [cells]);

  function focusNext(fromKey: string) {
    const idx = keys.indexOf(fromKey);
    for (let i = idx + 1; i < keys.length; i++) {
      const el = inputRefs.current[keys[i]];
      if (el && !values[keys[i]]) {
        el.focus();
        return;
      }
    }
  }

  function setLetter(key: string, v: string) {
    const letter = v.slice(-1).toUpperCase().replace(/[^A-ZÀ-Ù]/g, "");
    setValues((prev) => ({ ...prev, [key]: letter }));
    setWrong(new Set());
    if (letter) focusNext(key);
  }

  function check() {
    const bad = new Set<string>();
    for (const [key, def] of cells) {
      if ((values[key] ?? "") !== def.letter) bad.add(key);
    }
    if (bad.size === 0) {
      setSolved(true);
      window.setTimeout(onWin, 800);
    } else {
      setWrong(bad);
    }
  }

  const across = entries.filter((e) => e.dir === "across");
  const down = entries.filter((e) => e.dir === "down");

  return (
    <div className="space-y-5">
      <div className="mx-auto w-fit rounded-2xl bg-vino/90 p-2 shadow-xl">
        <div
          className="grid gap-1"
          style={{ gridTemplateColumns: `repeat(${grid.cols}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: grid.rows * grid.cols }, (_, i) => {
            const r = Math.floor(i / grid.cols);
            const c = i % grid.cols;
            const key = `${r},${c}`;
            const def = cells.get(key);
            if (!def) {
              return <div key={key} className="h-12 w-12 rounded-md bg-vino/40 sm:h-14 sm:w-14" />;
            }
            return (
              <motion.div
                key={key}
                className="relative"
                animate={wrong.has(key) ? { x: [0, -4, 4, -3, 3, 0] } : {}}
              >
                {def.num && (
                  <span className="pointer-events-none absolute left-0.5 top-0 z-10 font-game text-[9px] font-bold text-oro">
                    {def.num}
                  </span>
                )}
                <input
                  ref={(el) => {
                    inputRefs.current[key] = el;
                  }}
                  value={values[key] ?? ""}
                  onChange={(e) => setLetter(key, e.target.value)}
                  maxLength={2}
                  disabled={solved}
                  autoCapitalize="characters"
                  autoComplete="off"
                  className={`h-12 w-12 rounded-md text-center font-game text-xl font-extrabold uppercase outline-none transition-colors sm:h-14 sm:w-14 ${
                    solved
                      ? "bg-oro/90 text-white"
                      : wrong.has(key)
                        ? "bg-red-100 text-rosso"
                        : "bg-cream text-vino focus:bg-blush"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="game-card grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="mb-2 font-game text-sm font-extrabold uppercase tracking-wider text-oro">
            → Orizzontali
          </h3>
          {across.map((e) => (
            <p key={`a${e.num}`} className="mb-1.5 text-sm text-vino">
              <b className="font-game">{e.num}.</b> {e.clue}
            </p>
          ))}
        </div>
        <div>
          <h3 className="mb-2 font-game text-sm font-extrabold uppercase tracking-wider text-oro">
            ↓ Verticali
          </h3>
          {down.map((e) => (
            <p key={`d${e.num}`} className="mb-1.5 text-sm text-vino">
              <b className="font-game">{e.num}.</b> {e.clue}
            </p>
          ))}
        </div>
      </div>

      {!solved && (
        <div className="text-center">
          <button onClick={check} className="btn-game">
            Controlla ✏️
          </button>
          {wrong.size > 0 && (
            <p className="mt-2 font-game text-sm font-bold text-rosso">
              Qualche lettera non torna… riprova! 🐶
            </p>
          )}
        </div>
      )}
      {solved && (
        <motion.p
          className="text-center font-game text-xl font-extrabold text-oro"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          Cruciverba completato! 🎉
        </motion.p>
      )}
    </div>
  );
}
