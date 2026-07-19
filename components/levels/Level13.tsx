"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { config } from "@/content.config";

const DOT_COUNT = 18;

/** Punti di un cuore (curva parametrica classica) numerati in ordine */
function heartDots() {
  return Array.from({ length: DOT_COUNT }, (_, i) => {
    const t = (i / DOT_COUNT) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    return { n: i + 1, x: 100 + x * 4.6, y: 92 - y * 4.6 };
  });
}

/** LIVELLO 13 — Unisci i puntini: appare un cuore con una data segreta */
export default function Level13({ onWin }: { onWin: () => void }) {
  const dots = useMemo(heartDots, []);
  const [next, setNext] = useState(1);
  const [wrongDot, setWrongDot] = useState<number | null>(null);
  const complete = next > DOT_COUNT;

  function tap(n: number) {
    if (complete) return;
    if (n === next) {
      setWrongDot(null);
      const newNext = next + 1;
      setNext(newNext);
      if (newNext > DOT_COUNT) {
        window.setTimeout(onWin, 2600);
      }
    } else if (n > next) {
      setWrongDot(n);
      window.setTimeout(() => setWrongDot(null), 600);
    }
  }

  const connected = dots.slice(0, Math.min(next - 1, DOT_COUNT));
  const points = connected.map((d) => `${d.x},${d.y}`).join(" ");

  return (
    <div className="space-y-4">
      <p className="text-center font-game text-sm font-semibold text-vino/70">
        Tocca i puntini in ordine, dall'1 al {DOT_COUNT} ✨
      </p>

      <svg viewBox="0 0 200 185" className="mx-auto w-full max-w-sm rounded-3xl bg-gradient-to-b from-violet-950 to-indigo-900 shadow-xl">
        {/* stelline di sfondo */}
        {dots.map((d, i) => (
          <circle key={`bg-${i}`} cx={(d.x * 7919) % 200} cy={(d.y * 104729) % 185} r="0.7" fill="#ffffff55" />
        ))}

        {/* linee tracciate */}
        {connected.length > 1 && (
          <polyline
            points={complete ? points + ` ${dots[0].x},${dots[0].y}` : points}
            fill={complete ? "#E11D4855" : "none"}
            stroke="#FB7185"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}

        {/* puntini */}
        {!complete &&
          dots.map((d) => {
            const isDone = d.n < next;
            const isNext = d.n === next;
            return (
              <g key={d.n} onClick={() => tap(d.n)} style={{ cursor: "pointer" }}>
                <circle cx={d.x} cy={d.y} r="9" fill="transparent" />
                <motion.circle
                  cx={d.x}
                  cy={d.y}
                  r={isNext ? 4 : 3}
                  fill={isDone ? "#FB7185" : isNext ? "#D9A441" : "#ffffffbb"}
                  animate={
                    wrongDot === d.n
                      ? { cx: [d.x, d.x - 2, d.x + 2, d.x] }
                      : isNext
                        ? { r: [3.5, 5, 3.5] }
                        : {}
                  }
                  transition={isNext ? { repeat: Infinity, duration: 1 } : { duration: 0.3 }}
                />
                {!isDone && (
                  <text x={d.x} y={d.y - 6} textAnchor="middle" fontSize="6.5" fill={isNext ? "#F0C878" : "#ffffffcc"} fontWeight="bold">
                    {d.n}
                  </text>
                )}
              </g>
            );
          })}

        {/* rivelazione finale */}
        {complete && (
          <g>
            <motion.text
              x="100"
              y="88"
              textAnchor="middle"
              fontSize="15"
              fill="#fff"
              fontWeight="bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {config.level13.revealedText}
            </motion.text>
            <motion.text
              x="100"
              y="102"
              textAnchor="middle"
              fontSize="7"
              fill="#F0C878"
              fontStyle="italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {config.level13.revealedSubtext}
            </motion.text>
          </g>
        )}
      </svg>

      <AnimatePresence>
        {wrongDot !== null && (
          <motion.p
            className="text-center font-game text-sm font-bold text-rosso"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Segui i numeri in ordine! Il prossimo è il {next} 😉
          </motion.p>
        )}
        {complete && (
          <motion.p
            className="text-center font-game text-xl font-extrabold text-oro"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            Un cuore. Ovviamente 💜
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
