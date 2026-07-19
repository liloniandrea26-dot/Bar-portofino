"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { config } from "@/content.config";
import PhotoFrame from "@/components/PhotoFrame";

const REVEAL_THRESHOLD = 0.55; // % di superficie grattata per vincere

/** LIVELLO 7 — Scratch card: gratta la patina e scopri cosa c'è sotto */
export default function Level07({ onWin }: { onWin: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scratching = useRef(false);
  const [revealed, setRevealed] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const { width, height } = container.getBoundingClientRect();
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    // Patina dorata da grattare
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, "#D9A441");
    grad.addColorStop(0.5, "#F0C878");
    grad.addColorStop(1, "#C08A2E");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#7F1D3A";
    ctx.font = "bold 22px 'Baloo 2', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ Gratta qui ✨", width / 2, height / 2 - 8);
    ctx.font = "16px 'Baloo 2', sans-serif";
    ctx.fillText("(col dito, come un gratta e vinci)", width / 2, height / 2 + 20);
  }, []);

  function scratch(clientX: number, clientY: number) {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d")!;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(clientX - rect.left, clientY - rect.top, 26, 0, Math.PI * 2);
    ctx.fill();
  }

  function measure() {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const ctx = canvas.getContext("2d")!;
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let cleared = 0;
    const total = data.length / 4;
    // campiona 1 pixel ogni 16 per performance
    for (let i = 3; i < data.length; i += 64) {
      if (data[i] === 0) cleared += 16;
    }
    const ratio = cleared / total;
    setProgress(Math.min(1, ratio / REVEAL_THRESHOLD));
    if (ratio >= REVEAL_THRESHOLD) {
      setRevealed(true);
      window.setTimeout(onWin, 1600);
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-center font-game text-sm font-semibold text-vino/70">
        Sotto la patina d'oro c'è qualcosa per te… 🎟️
      </p>

      <div
        ref={containerRef}
        className="relative mx-auto aspect-[4/3] w-full max-w-sm select-none overflow-hidden rounded-3xl shadow-xl ring-4 ring-white"
      >
        {/* Contenuto nascosto */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-fuchsia-100 via-blush to-amber-50 p-4">
          {config.level07.photo && (
            <PhotoFrame src={config.level07.photo} className="max-h-[55%] w-auto" />
          )}
          <p className="text-center font-romantic text-xl font-semibold italic leading-snug text-vino">
            “{config.level07.hiddenPhrase}”
          </p>
        </div>

        {/* Patina */}
        <motion.canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full touch-none"
          animate={revealed ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ pointerEvents: revealed ? "none" : "auto" }}
          onPointerDown={(e) => {
            scratching.current = true;
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
            scratch(e.clientX, e.clientY);
          }}
          onPointerMove={(e) => {
            if (scratching.current) scratch(e.clientX, e.clientY);
          }}
          onPointerUp={() => {
            scratching.current = false;
            measure();
          }}
        />
      </div>

      <div className="mx-auto h-2 w-full max-w-sm overflow-hidden rounded-full bg-vino/10">
        <motion.div
          className="h-full bg-gradient-to-r from-oro to-rosa"
          animate={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
      {revealed && (
        <motion.p
          className="text-center font-game text-xl font-extrabold text-oro"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          Sorpresa rivelata! ✨
        </motion.p>
      )}
    </div>
  );
}
