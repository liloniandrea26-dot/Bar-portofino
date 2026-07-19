"use client";

import { motion } from "framer-motion";
import { TOTAL_LEVELS } from "@/lib/store";

/** Barra "X/21 ricordi sbloccati", sempre visibile in mappa e nei livelli */
export default function ProgressBar({
  count,
  dark = false,
}: {
  count: number;
  dark?: boolean;
}) {
  const pct = Math.round((count / TOTAL_LEVELS) * 100);
  return (
    <div className="flex w-full max-w-xs items-center gap-3">
      <div
        className={`h-3 flex-1 overflow-hidden rounded-full ${
          dark ? "bg-white/15" : "bg-vino/10"
        }`}
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-rosa via-rosso to-oro"
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
        />
      </div>
      <span
        className={`whitespace-nowrap font-game text-xs font-bold ${
          dark ? "text-amber-100/90" : "text-vino/80"
        }`}
      >
        {count}/{TOTAL_LEVELS} ricordi 💛
      </span>
    </div>
  );
}
