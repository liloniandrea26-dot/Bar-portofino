"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { config } from "@/content.config";
import { shuffle } from "@/lib/utils";

type Card = { id: number; pairId: number; emoji: string; label: string };

/** LIVELLO 2 — Memory match con le vostre "piccole cose" */
export default function Level02({ onWin }: { onWin: () => void }) {
  const [cards] = useState<Card[]>(() =>
    shuffle(
      config.level02.pairs.flatMap((p, pairId) => [
        { id: pairId * 2, pairId, emoji: p.emoji, label: p.label },
        { id: pairId * 2 + 1, pairId, emoji: p.emoji, label: p.label },
      ])
    )
  );
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [busy, setBusy] = useState(false);

  function flip(card: Card) {
    if (busy || flipped.includes(card.id) || matched.includes(card.pairId)) return;
    const next = [...flipped, card.id];
    setFlipped(next);
    if (next.length === 2) {
      setBusy(true);
      setMoves((m) => m + 1);
      const [a, b] = next.map((id) => cards.find((c) => c.id === id)!);
      if (a.pairId === b.pairId) {
        window.setTimeout(() => {
          const nextMatched = [...matched, a.pairId];
          setMatched(nextMatched);
          setFlipped([]);
          setBusy(false);
          if (nextMatched.length === config.level02.pairs.length) {
            window.setTimeout(onWin, 700);
          }
        }, 500);
      } else {
        window.setTimeout(() => {
          setFlipped([]);
          setBusy(false);
        }, 900);
      }
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-center font-game text-sm font-semibold text-vino/70">
        Trova le coppie delle nostre piccole cose 💞 — Mosse: {moves}
      </p>
      <div className="mx-auto grid max-w-sm grid-cols-3 gap-2.5 sm:gap-3">
        {cards.map((card) => {
          const isUp = flipped.includes(card.id) || matched.includes(card.pairId);
          const isMatched = matched.includes(card.pairId);
          return (
            <button
              key={card.id}
              onClick={() => flip(card)}
              className="aspect-[3/4] [perspective:600px]"
              aria-label={isUp ? card.label : "carta coperta"}
            >
              <motion.div
                className="relative h-full w-full [transform-style:preserve-3d]"
                animate={{ rotateY: isUp ? 180 : 0 }}
                transition={{ duration: 0.45 }}
              >
                {/* retro */}
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-rosa text-3xl shadow-md ring-2 ring-white/50 [backface-visibility:hidden]">
                  🐾
                </div>
                {/* fronte */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-2xl bg-white p-1 shadow-md ring-2 [backface-visibility:hidden] [transform:rotateY(180deg)] ${
                    isMatched ? "ring-oro" : "ring-rosa/40"
                  }`}
                >
                  <span className="text-3xl">{card.emoji}</span>
                  {isMatched && (
                    <motion.span
                      className="px-1 text-center font-game text-[9px] font-bold leading-tight text-vino/60"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {card.label}
                    </motion.span>
                  )}
                </div>
              </motion.div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
