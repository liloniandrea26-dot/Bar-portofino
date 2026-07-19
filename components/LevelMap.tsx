"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import ProgressBar from "@/components/ProgressBar";
import { TwinklingStars } from "@/components/Effects";
import { config } from "@/content.config";
import {
  FINALE_LEVEL,
  TOTAL_LEVELS,
  completedCount,
  isUnlocked,
  useProgress,
} from "@/lib/store";

/** Emoji-tema di ogni tappa sulla mappa */
const LEVEL_ICONS: Record<number, string> = {
  1: "❓", 2: "🃏", 3: "🧩", 4: "✏️", 5: "🔤", 6: "📜", 7: "🎟️",
  8: "🔍", 9: "🎵", 10: "🌀", 11: "🔀", 12: "🎡", 13: "✨", 14: "😜",
  15: "🔨", 16: "📷", 17: "⌨️", 18: "📍", 19: "⚖️", 20: "🔢", 21: "💬",
};

const NODE_SPACING = 128; // distanza verticale tra le tappe
const TOP_PAD = 150; // spazio in alto per la vetta (livello 22)
const BOTTOM_PAD = 110;

/** Posizione (x %, y px) della tappa `level` lungo il sentiero serpeggiante */
function nodePos(level: number) {
  const fromTop = FINALE_LEVEL - level; // 22 in cima, 1 in fondo
  const y = TOP_PAD + fromTop * NODE_SPACING;
  const x = level === FINALE_LEVEL ? 50 : 50 + 34 * Math.sin(level * 1.05);
  return { x, y };
}

export default function LevelMap({
  onSelectLevel,
}: {
  onSelectLevel: (level: number) => void;
}) {
  const { completed, resetAll } = useProgress();
  const count = completedCount(completed);
  const allDone = count >= TOTAL_LEVELS;
  const scrollRef = useRef<HTMLDivElement>(null);

  const mapHeight = TOP_PAD + (FINALE_LEVEL - 1) * NODE_SPACING + BOTTOM_PAD;

  // La tappa "attiva" (prossimo livello da giocare)
  const activeLevel = useMemo(() => {
    for (let l = 1; l <= TOTAL_LEVELS; l++) if (!completed.includes(l)) return l;
    return FINALE_LEVEL;
  }, [completed]);

  // All'apertura, scrolla fino alla tappa attiva
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { y } = nodePos(activeLevel);
    el.scrollTop = y - el.clientHeight / 2;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Path SVG che collega le tappe (curve morbide)
  const pathD = useMemo(() => {
    let d = "";
    for (let l = 1; l <= FINALE_LEVEL; l++) {
      const { x, y } = nodePos(l);
      if (l === 1) {
        d = `M ${x} ${y}`;
      } else {
        const prev = nodePos(l - 1);
        const midY = (prev.y + y) / 2;
        d += ` C ${prev.x} ${midY}, ${x} ${midY}, ${x} ${y}`;
      }
    }
    return d;
  }, []);

  return (
    <div className="sky-bg relative flex h-dvh flex-col overflow-hidden">
      <TwinklingStars count={60} />

      <header className="relative z-20 border-b border-white/10 bg-notte/70 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-lg flex-col items-center gap-2">
          <h1 className="font-game text-xl font-extrabold text-shimmer">
            Mini Pitbull Quest
          </h1>
          <ProgressBar count={count} dark />
        </div>
      </header>

      <div ref={scrollRef} className="relative z-10 flex-1 overflow-y-auto">
        <div className="relative mx-auto max-w-lg" style={{ height: mapHeight }}>
          {/* Sentiero */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox={`0 0 100 ${mapHeight}`}
            preserveAspectRatio="none"
          >
            <path
              d={pathD}
              fill="none"
              stroke="#D9A441"
              strokeOpacity={0.35}
              strokeWidth={1.6}
              strokeDasharray="0.5 3"
              strokeLinecap="round"
            />
          </svg>

          {/* Tappe 1-21 */}
          {Array.from({ length: TOTAL_LEVELS }, (_, i) => i + 1).map((level) => {
            const { x, y } = nodePos(level);
            const done = completed.includes(level);
            const unlocked = isUnlocked(level, completed);
            const active = level === activeLevel && !done;
            return (
              <motion.button
                key={level}
                onClick={() => unlocked && onSelectLevel(level)}
                disabled={!unlocked}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: y }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.02 * level, type: "spring", stiffness: 260, damping: 18 }}
                whileHover={unlocked ? { scale: 1.12 } : {}}
                whileTap={unlocked ? { scale: 0.92 } : {}}
              >
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`relative flex h-16 w-16 items-center justify-center rounded-full text-2xl shadow-lg transition-colors ${
                      done
                        ? "bg-gradient-to-br from-oro to-amber-500 ring-4 ring-oro/30"
                        : unlocked
                          ? "bg-gradient-to-br from-rosa to-rosso ring-4 ring-rosa/40"
                          : "bg-white/10 ring-2 ring-white/10"
                    } ${active ? "animate-heartbeat" : ""}`}
                  >
                    <span className={unlocked ? "" : "opacity-40 grayscale"}>
                      {done ? "❤️" : unlocked ? LEVEL_ICONS[level] : "🔒"}
                    </span>
                    <span
                      className={`absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full font-game text-[11px] font-extrabold shadow ${
                        done
                          ? "bg-white text-oro"
                          : unlocked
                            ? "bg-white text-rosso"
                            : "bg-white/20 text-white/50"
                      }`}
                    >
                      {level}
                    </span>
                  </div>
                  {done && (
                    <motion.span
                      className="text-xs"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      ⭐
                    </motion.span>
                  )}
                </div>
              </motion.button>
            );
          })}

          {/* Livello 22 — la vetta */}
          {(() => {
            const { x, y } = nodePos(FINALE_LEVEL);
            const unlocked = isUnlocked(FINALE_LEVEL, completed);
            return (
              <motion.button
                key="finale"
                onClick={() => unlocked && onSelectLevel(FINALE_LEVEL)}
                disabled={!unlocked}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: y }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                whileHover={unlocked ? { scale: 1.1 } : {}}
              >
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-full text-4xl shadow-2xl ${
                      unlocked
                        ? "animate-heartbeat bg-gradient-to-br from-oro via-rosa to-rosso ring-8 ring-oro/30"
                        : "bg-white/10 ring-4 ring-white/10"
                    }`}
                  >
                    <span className={unlocked ? "" : "opacity-40 grayscale"}>💌</span>
                  </div>
                  <span
                    className={`font-romantic text-sm italic ${
                      unlocked ? "text-oro" : "text-white/30"
                    }`}
                  >
                    {unlocked ? "La sorpresa ti aspetta…" : `Completa i ${TOTAL_LEVELS} ricordi…`}
                  </span>
                </div>
              </motion.button>
            );
          })()}
        </div>
      </div>

      <footer className="relative z-20 flex items-center justify-center gap-4 border-t border-white/10 bg-notte/70 px-4 py-2.5 backdrop-blur-md">
        <span className="font-game text-xs text-amber-100/60">
          {allDone
            ? "Tutti i ricordi sbloccati! 💌"
            : `Prossima tappa: livello ${activeLevel}`}
        </span>
        <button
          onClick={() => {
            if (window.confirm("Vuoi davvero ricominciare l'avventura da capo?")) {
              resetAll();
            }
          }}
          className="font-game text-[11px] text-white/30 underline-offset-2 hover:text-white/60 hover:underline"
        >
          ricomincia
        </button>
      </footer>
    </div>
  );
}
