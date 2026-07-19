"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { config } from "@/content.config";

/** Lato dello slider: foto reale o segnaposto illustrato */
function Side({ src, emoji, label }: { src: string; emoji: string; label: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-cyan-100 via-blush to-amber-100 p-4 text-center">
        <span className="text-5xl">{emoji}</span>
        <span className="font-game text-sm font-bold text-vino/70">{label}</span>
        <code className="rounded bg-white/70 px-1.5 text-[9px] text-vino/50">{src}</code>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={label} onError={() => setFailed(true)} className="h-full w-full object-cover" />
  );
}

/** LIVELLO 16 — Slider prima/dopo: trascina e guarda quanta strada abbiamo fatto */
export default function Level16({ onWin }: { onWin: () => void }) {
  const cfg = config.level16;
  const [pct, setPct] = useState(50);
  const [seenLeft, setSeenLeft] = useState(false);
  const [seenRight, setSeenRight] = useState(false);
  const [done, setDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const explored = seenLeft && seenRight;

  function updateFromX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPct(p);
    if (p < 8) setSeenLeft(true);
    if (p > 92) setSeenRight(true);
  }

  return (
    <div className="space-y-4">
      <p className="text-center font-game text-sm font-semibold text-vino/70">
        Trascina il cursore da un lato all'altro, fino in fondo ↔️
      </p>

      <div
        ref={containerRef}
        className="relative mx-auto aspect-[4/3] w-full max-w-md touch-none select-none overflow-hidden rounded-3xl shadow-xl ring-4 ring-white"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          updateFromX(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && updateFromX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
      >
        {/* dopo (sotto) */}
        <div className="absolute inset-0">
          <Side src={cfg.afterPhoto} emoji="🥰" label={cfg.afterLabel} />
          <span className="absolute bottom-2 right-2 rounded-full bg-vino/70 px-2.5 py-0.5 font-game text-[10px] font-bold text-white">
            {cfg.afterLabel}
          </span>
        </div>
        {/* prima (sopra, ritagliata) */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
          <Side src={cfg.beforePhoto} emoji="🐣" label={cfg.beforeLabel} />
          <span className="absolute bottom-2 left-2 rounded-full bg-vino/70 px-2.5 py-0.5 font-game text-[10px] font-bold text-white">
            {cfg.beforeLabel}
          </span>
        </div>
        {/* maniglia */}
        <div className="absolute inset-y-0" style={{ left: `${pct}%` }}>
          <div className="absolute inset-y-0 -left-px w-0.5 bg-white shadow" />
          <div className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg shadow-lg ring-2 ring-rosa/50">
            ↔️
          </div>
        </div>
      </div>

      <p className="text-center font-romantic text-lg italic text-vino/80">{cfg.caption}</p>

      {/* progressi di esplorazione */}
      <div className="flex justify-center gap-4 font-game text-xs font-bold">
        <span className={seenLeft ? "text-emerald-600" : "text-vino/40"}>
          {seenLeft ? "✅" : "⬜"} tutto il “prima”
        </span>
        <span className={seenRight ? "text-emerald-600" : "text-vino/40"}>
          {seenRight ? "✅" : "⬜"} tutto il “dopo”
        </span>
      </div>

      {explored && !done && (
        <motion.div className="text-center" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <button
            onClick={() => {
              setDone(true);
              window.setTimeout(onWin, 400);
            }}
            className="btn-game animate-heartbeat"
          >
            Quanta strada insieme 💛
          </button>
        </motion.div>
      )}
    </div>
  );
}
