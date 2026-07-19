"use client";

import { AnimatePresence, Reorder, motion } from "framer-motion";
import { useState } from "react";
import { config } from "@/content.config";
import { shuffle } from "@/lib/utils";

type Item = { id: number; label: string; date: string };

/** LIVELLO 6 — Riordina la vostra storia (drag & drop) */
export default function Level06({ onWin }: { onWin: () => void }) {
  const [items, setItems] = useState<Item[]>(() => {
    const original = config.level06.events.map((e, id) => ({ id, ...e }));
    let s = shuffle(original);
    while (s.every((it, i) => it.id === i)) s = shuffle(s);
    return s;
  });
  const [solved, setSolved] = useState(false);
  const [wrongTry, setWrongTry] = useState(false);

  function check() {
    if (items.every((it, i) => it.id === i)) {
      setSolved(true);
      window.setTimeout(onWin, 1400);
    } else {
      setWrongTry(true);
      window.setTimeout(() => setWrongTry(false), 1600);
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-center font-game text-sm font-semibold text-vino/70">
        Trascina le tappe nell'ordine in cui sono successe 📜
        <br />
        <span className="text-xs text-vino/50">(dalla più lontana alla più recente)</span>
      </p>

      <Reorder.Group
        axis="y"
        values={items}
        onReorder={(v) => !solved && setItems(v)}
        className="mx-auto max-w-md space-y-2"
      >
        {items.map((item, i) => (
          <Reorder.Item
            key={item.id}
            value={item}
            className={`flex cursor-grab items-center gap-3 rounded-2xl border-2 bg-white p-3.5 shadow-md transition-colors active:cursor-grabbing ${
              solved ? "border-oro bg-amber-50" : "border-teal-200"
            }`}
            whileDrag={{ scale: 1.04, boxShadow: "0 12px 30px rgba(0,0,0,0.18)" }}
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-game text-sm font-extrabold text-white ${
                solved ? "bg-oro" : "bg-teal-400"
              }`}
            >
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-game text-sm font-bold leading-snug text-vino">{item.label}</p>
              <AnimatePresence>
                {solved && (
                  <motion.p
                    className="font-romantic text-xs italic text-oro"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    {item.date}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <span className="text-vino/30">⠿</span>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      {!solved && (
        <div className="text-center">
          <button onClick={check} className="btn-game">
            È andata così! ✅
          </button>
          <AnimatePresence>
            {wrongTry && (
              <motion.p
                className="mt-2 font-game text-sm font-bold text-rosso"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: [0, -6, 6, -4, 4, 0] }}
                exit={{ opacity: 0 }}
              >
                Mmh, la nostra storia non è andata proprio così… 😜
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      )}
      {solved && (
        <motion.p
          className="text-center font-game text-xl font-extrabold text-oro"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          Perfetto: la nostra storia, in ordine 💛
        </motion.p>
      )}
    </div>
  );
}
