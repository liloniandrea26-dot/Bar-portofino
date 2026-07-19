"use client";

import { motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar";
import { completedCount, useProgress } from "@/lib/store";

/** Temi visivi per livello: sfondo + colore accento dell'header */
const LEVEL_THEMES: Record<number, { bg: string; chip: string }> = {
  1: { bg: "from-blush via-cream to-amber-50", chip: "bg-rosa" },
  2: { bg: "from-purple-100 via-cream to-blush", chip: "bg-purple-400" },
  3: { bg: "from-sky-100 via-cream to-blush", chip: "bg-sky-400" },
  4: { bg: "from-amber-100 via-cream to-orange-50", chip: "bg-oro" },
  5: { bg: "from-rose-100 via-cream to-red-50", chip: "bg-rosso" },
  6: { bg: "from-teal-50 via-cream to-emerald-50", chip: "bg-teal-400" },
  7: { bg: "from-fuchsia-100 via-cream to-pink-50", chip: "bg-fuchsia-400" },
  8: { bg: "from-lime-50 via-cream to-emerald-50", chip: "bg-lime-500" },
  9: { bg: "from-indigo-100 via-cream to-purple-50", chip: "bg-indigo-400" },
  10: { bg: "from-emerald-100 via-cream to-teal-50", chip: "bg-emerald-500" },
  11: { bg: "from-yellow-50 via-cream to-amber-50", chip: "bg-amber-400" },
  12: { bg: "from-pink-100 via-cream to-rose-50", chip: "bg-pink-400" },
  13: { bg: "from-violet-100 via-cream to-indigo-50", chip: "bg-violet-400" },
  14: { bg: "from-orange-50 via-cream to-yellow-50", chip: "bg-orange-400" },
  15: { bg: "from-red-100 via-cream to-orange-50", chip: "bg-red-500" },
  16: { bg: "from-cyan-50 via-cream to-sky-50", chip: "bg-cyan-400" },
  17: { bg: "from-slate-100 via-cream to-blush", chip: "bg-slate-500" },
  18: { bg: "from-green-50 via-cream to-teal-50", chip: "bg-green-500" },
  19: { bg: "from-rose-50 via-cream to-pink-50", chip: "bg-rose-400" },
  20: { bg: "from-stone-100 via-cream to-amber-50", chip: "bg-stone-500" },
  21: { bg: "from-blush via-rose-50 to-amber-50", chip: "bg-rosso" },
};

/**
 * Layout comune di ogni livello: header (numero + titolo + progresso),
 * area di gioco centrale, footer con "torna alla mappa".
 */
export default function LevelShell({
  level,
  title,
  onBack,
  children,
}: {
  level: number;
  title: string;
  onBack: () => void;
  children: React.ReactNode;
}) {
  const completed = useProgress((s) => s.completed);
  const theme = LEVEL_THEMES[level] ?? LEVEL_THEMES[1];

  return (
    <div className={`flex min-h-dvh flex-col bg-gradient-to-b ${theme.bg}`}>
      <header className="sticky top-0 z-30 border-b border-vino/5 bg-white/70 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl items-center gap-3">
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-game text-sm font-extrabold text-white shadow-md ${theme.chip}`}
          >
            {level}
          </span>
          <h1 className="min-w-0 flex-1 truncate font-romantic text-lg font-semibold text-vino sm:text-xl">
            {title}
          </h1>
          <div className="hidden sm:block">
            <ProgressBar count={completedCount(completed)} />
          </div>
        </div>
        <div className="mx-auto mt-2 max-w-2xl sm:hidden">
          <ProgressBar count={completedCount(completed)} />
        </div>
      </header>

      <motion.main
        className="mx-auto w-full max-w-2xl flex-1 px-4 py-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.main>

      <footer className="px-4 pb-6 pt-2 text-center">
        <button onClick={onBack} className="btn-soft">
          🗺️ Torna alla mappa
        </button>
      </footer>
    </div>
  );
}
