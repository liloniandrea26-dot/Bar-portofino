"use client";

import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useRef, useState } from "react";
import { config } from "@/content.config";

const COLORS = ["#FB7185", "#D9A441", "#8B5CF6", "#34D399", "#F97316", "#38BDF8"];
const SLICE = 360 / 6;

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
}

function slicePath(i: number): string {
  const [x1, y1] = polar(110, 110, 100, i * SLICE);
  const [x2, y2] = polar(110, 110, 100, (i + 1) * SLICE);
  return `M 110 110 L ${x1} ${y1} A 100 100 0 0 1 ${x2} ${y2} Z`;
}

/** LIVELLO 12 — Ruota della fortuna: gira e rispondi alle domande su di voi */
export default function Level12({ onWin }: { onWin: () => void }) {
  const { segments, winsNeeded } = config.level12;
  const controls = useAnimationControls();
  const rotation = useRef(0);
  const [spinning, setSpinning] = useState(false);
  const [activeSegment, setActiveSegment] = useState<number | null>(null);
  const [answered, setAnswered] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  async function spin() {
    if (spinning || activeSegment !== null || done) return;
    const remaining = segments.map((_, i) => i).filter((i) => !answered.includes(i));
    const target = remaining[Math.floor(Math.random() * remaining.length)];
    // porta il centro dello spicchio target sotto la freccia (in alto)
    const targetAngle = 360 - (target * SLICE + SLICE / 2);
    const current = ((rotation.current % 360) + 360) % 360;
    const delta = 4 * 360 + ((targetAngle - current + 360) % 360);
    rotation.current += delta;
    setSpinning(true);
    await controls.start({
      rotate: rotation.current,
      transition: { duration: 3.2, ease: [0.15, 0.6, 0.15, 1] },
    });
    setSpinning(false);
    setActiveSegment(target);
    setSelected(null);
  }

  function answer(optionIndex: number) {
    if (activeSegment === null || selected !== null) return;
    setSelected(optionIndex);
    const seg = segments[activeSegment];
    if (optionIndex === seg.correct) {
      const next = [...answered, activeSegment];
      window.setTimeout(() => {
        setAnswered(next);
        setActiveSegment(null);
        if (next.length >= winsNeeded) {
          setDone(true);
          window.setTimeout(onWin, 700);
        }
      }, 1000);
    } else {
      window.setTimeout(() => setSelected(null), 900);
    }
  }

  const seg = activeSegment !== null ? segments[activeSegment] : null;

  return (
    <div className="space-y-4">
      <p className="text-center font-game text-sm font-semibold text-vino/70">
        Gira la ruota e rispondi: {answered.length}/{winsNeeded} risposte giuste 🎡
      </p>

      <div className="relative mx-auto w-fit">
        {/* freccia */}
        <div className="absolute -top-1 left-1/2 z-10 -translate-x-1/2 text-3xl drop-shadow">🔻</div>
        <motion.svg
          width="240"
          height="240"
          viewBox="0 0 220 220"
          animate={controls}
          className="drop-shadow-xl"
        >
          {segments.map((s, i) => (
            <g key={i}>
              <path
                d={slicePath(i)}
                fill={COLORS[i]}
                opacity={answered.includes(i) ? 0.3 : 1}
                stroke="#fff"
                strokeWidth="2"
              />
              <text
                x={polar(110, 110, 62, i * SLICE + SLICE / 2)[0]}
                y={polar(110, 110, 62, i * SLICE + SLICE / 2)[1]}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="20"
              >
                {answered.includes(i) ? "✅" : s.emoji}
              </text>
            </g>
          ))}
          <circle cx="110" cy="110" r="20" fill="#fff" />
          <text x="110" y="117" textAnchor="middle" fontSize="18">💞</text>
        </motion.svg>
      </div>

      {activeSegment === null && !done && (
        <div className="text-center">
          <button onClick={spin} disabled={spinning} className="btn-game">
            {spinning ? "Gira gira gira…" : "Gira la ruota! 🎡"}
          </button>
        </div>
      )}

      <AnimatePresence>
        {seg && (
          <motion.div
            className="game-card"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <p className="mb-1 font-game text-xs font-extrabold uppercase tracking-widest text-pink-400">
              {seg.emoji} {seg.label}
            </p>
            <h3 className="mb-4 font-game text-lg font-bold text-vino">{seg.q}</h3>
            <div className="flex flex-col gap-2.5">
              {seg.options.map((opt, i) => {
                const state =
                  selected === null ? "idle" : i === selected ? (i === seg.correct ? "right" : "wrong") : "idle";
                return (
                  <motion.button
                    key={i}
                    onClick={() => answer(i)}
                    animate={state === "wrong" ? { x: [0, -8, 8, -6, 6, 0] } : {}}
                    className={`rounded-2xl border-2 px-4 py-2.5 text-left font-game font-semibold transition-colors ${
                      state === "right"
                        ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                        : state === "wrong"
                          ? "border-rosso bg-red-50 text-rosso"
                          : "border-pink-200 bg-white text-vino hover:bg-blush/40"
                    }`}
                  >
                    {state === "right" && "✅ "}
                    {state === "wrong" && "❌ "}
                    {opt}
                  </motion.button>
                );
              })}
            </div>
            {selected !== null && selected !== seg.correct && (
              <p className="mt-3 text-center font-game text-sm font-bold text-rosso">
                Eh no! Riprova 😜
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {done && (
        <motion.p
          className="text-center font-game text-xl font-extrabold text-oro"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          La ruota ha parlato: ci conosciamo benissimo! 🎉
        </motion.p>
      )}
    </div>
  );
}
