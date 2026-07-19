"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { config } from "@/content.config";

/**
 * LIVELLO 8 — Trova le 5 differenze.
 * La scena (un picnic con il pitbull 🐶) è un'illustrazione SVG disegnata
 * qui: la versione B ha 5 piccole differenze cliccabili.
 */

const DIFFS = [
  { id: "balloon", cx: 168, cy: 26, r: 14, label: "il palloncino" },
  { id: "cloud", cx: 52, cy: 22, r: 16, label: "la nuvola" },
  { id: "collar", cx: 143, cy: 96, r: 10, label: "il collare del cane" },
  { id: "flower", cx: 22, cy: 112, r: 10, label: "il fiore" },
  { id: "heart", cx: 82, cy: 92, r: 10, label: "il cuore sul cestino" },
];

function Scene({
  variant,
  found,
  onHit,
  onMiss,
}: {
  variant: "A" | "B";
  found: string[];
  onHit: (id: string) => void;
  onMiss: () => void;
}) {
  const B = variant === "B";
  return (
    <svg
      viewBox="0 0 200 140"
      className="w-full rounded-2xl shadow-lg ring-4 ring-white"
      onClick={onMiss}
    >
      {/* cielo e prato */}
      <rect width="200" height="140" fill="#CDEBFA" />
      <rect y="80" width="200" height="60" fill="#A8D883" />
      <circle cx="100" cy="150" r="60" fill="#B9E29A" />
      {/* sole */}
      <circle cx="24" cy="24" r="12" fill="#F7CE46" />
      {/* nuvola — differenza: manca in B */}
      {!B && (
        <g fill="#ffffff">
          <ellipse cx="52" cy="22" rx="14" ry="7" />
          <ellipse cx="62" cy="19" rx="9" ry="6" />
        </g>
      )}
      <g fill="#ffffff">
        <ellipse cx="120" cy="15" rx="13" ry="6" />
        <ellipse cx="130" cy="12" rx="8" ry="5" />
      </g>
      {/* albero */}
      <rect x="172" y="62" width="7" height="26" rx="2" fill="#8B5A2B" />
      <circle cx="176" cy="52" r="17" fill="#6FA84F" />
      {/* palloncino — differenza: rosso in A, oro in B */}
      <line x1="168" y1="36" x2="164" y2="58" stroke="#7F1D3A" strokeWidth="1" />
      <ellipse cx="168" cy="26" rx="8" ry="10" fill={B ? "#D9A441" : "#E11D48"} />
      {/* coperta picnic */}
      <g transform="rotate(-4 100 108)">
        <rect x="58" y="98" width="60" height="26" rx="3" fill="#F45B69" />
        <path d="M58 106 h60 M58 114 h60 M72 98 v26 M88 98 v26 M104 98 v26" stroke="#ffffffaa" strokeWidth="1.5" />
      </g>
      {/* cestino */}
      <rect x="72" y="84" width="20" height="13" rx="2" fill="#B67B3F" />
      <path d="M74 84 a8 8 0 0 1 16 0" fill="none" stroke="#8B5A2B" strokeWidth="2" />
      {/* cuore sul cestino — differenza: manca in B */}
      {!B && (
        <text x="82" y="95" fontSize="9" textAnchor="middle">❤️</text>
      )}
      {/* pitbull 🐶 */}
      <g>
        <ellipse cx="143" cy="106" rx="14" ry="9" fill="#B9BCC4" />
        <circle cx="132" cy="98" r="8" fill="#B9BCC4" />
        <circle cx="129.5" cy="96.5" r="1.3" fill="#2B1B33" />
        <circle cx="134.5" cy="96.5" r="1.3" fill="#2B1B33" />
        <ellipse cx="132" cy="100.5" rx="2" ry="1.4" fill="#2B1B33" />
        <path d="M126 92 l-2 -5 l5 2 z" fill="#9DA0A8" />
        <path d="M138 92 l2 -5 l-5 2 z" fill="#9DA0A8" />
        <path d="M155 104 q6 -2 4 -8" fill="none" stroke="#B9BCC4" strokeWidth="3" strokeLinecap="round" />
        {/* collare — differenza: rosso in A, assente in B */}
        {!B && <rect x="127" y="103" width="11" height="3" rx="1.5" fill="#E11D48" />}
      </g>
      {/* fiori */}
      <text x="40" y="132" fontSize="10">🌼</text>
      <text x="185" y="120" fontSize="10">🌼</text>
      {/* fiore — differenza: manca in B */}
      {!B && <text x="16" y="116" fontSize="10">🌷</text>}

      {/* marker differenze trovate */}
      {DIFFS.filter((d) => found.includes(d.id)).map((d) => (
        <circle
          key={d.id}
          cx={d.cx}
          cy={d.cy}
          r={d.r}
          fill="none"
          stroke="#E11D48"
          strokeWidth="2.5"
          strokeDasharray="4 2"
        />
      ))}

      {/* hotspot cliccabili */}
      {DIFFS.map((d) => (
        <circle
          key={`hit-${d.id}`}
          cx={d.cx}
          cy={d.cy}
          r={d.r + 4}
          fill="transparent"
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.stopPropagation();
            onHit(d.id);
          }}
        />
      ))}
    </svg>
  );
}

export default function Level08({ onWin }: { onWin: () => void }) {
  const [found, setFound] = useState<string[]>([]);
  const [missWiggle, setMissWiggle] = useState(0);
  const [lastFound, setLastFound] = useState<string | null>(null);

  function hit(id: string) {
    if (found.includes(id)) return;
    const next = [...found, id];
    setFound(next);
    setLastFound(id);
    if (next.length === DIFFS.length) {
      window.setTimeout(onWin, 900);
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-center font-game text-sm font-semibold text-vino/70">
        {config.level08.subtitle}
        <br />
        Tocca le differenze in una delle due immagini 🔍
      </p>

      <motion.div
        className="mx-auto grid max-w-xl gap-3 sm:grid-cols-2"
        animate={{ x: missWiggle % 2 === 0 ? 0 : [0, -6, 6, -4, 4, 0] }}
        key={missWiggle}
      >
        <Scene variant="A" found={found} onHit={hit} onMiss={() => setMissWiggle((m) => m + 1)} />
        <Scene variant="B" found={found} onHit={hit} onMiss={() => setMissWiggle((m) => m + 1)} />
      </motion.div>

      <div className="flex items-center justify-center gap-2">
        {DIFFS.map((d, i) => (
          <motion.span
            key={d.id}
            className="text-2xl"
            animate={found.includes(d.id) ? { scale: [0, 1.4, 1] } : { opacity: 0.25 }}
          >
            {found.includes(d.id) ? "💚" : "🤍"}
          </motion.span>
        ))}
      </div>
      {lastFound && found.length < DIFFS.length && (
        <p className="text-center font-game text-sm font-bold text-emerald-600">
          Trovata: {DIFFS.find((d) => d.id === lastFound)?.label}! Ne mancano {DIFFS.length - found.length} 🎯
        </p>
      )}
      {found.length === DIFFS.length && (
        <motion.p
          className="text-center font-game text-xl font-extrabold text-oro"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          Occhio di lince! Tutte e 5 trovate 🎉
        </motion.p>
      )}
    </div>
  );
}
