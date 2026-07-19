"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ConfettiBurst } from "@/components/Effects";
import PhotoFrame from "@/components/PhotoFrame";
import { TOTAL_LEVELS } from "@/lib/store";

/**
 * Overlay mostrato alla vittoria di un livello: coriandoli, il "ricordo
 * sbloccato" (testo + eventuale foto) e il bottone per tornare alla mappa.
 * Dopo il livello 21 il bottone porta invece al finale.
 */
export default function WinOverlay({
  open,
  level,
  memory,
  memoryPhoto,
  onContinue,
}: {
  open: boolean;
  level: number;
  memory: string;
  memoryPhoto?: string | null;
  onContinue: () => void;
}) {
  const isLast = level === TOTAL_LEVELS;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-vino/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ConfettiBurst />
          <motion.div
            className="relative w-full max-w-md rounded-3xl bg-cream p-6 text-center shadow-2xl sm:p-8"
            initial={{ scale: 0.7, y: 60, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          >
            <motion.div
              className="text-6xl"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.4, 1] }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {isLast ? "💌" : "💛"}
            </motion.div>
            <h2 className="mt-2 font-game text-2xl font-extrabold text-rosso">
              {isLast ? "Ce l'hai fatta!" : "Livello completato!"}
            </h2>
            <p className="font-game text-sm font-semibold uppercase tracking-widest text-oro">
              Ricordo n. {level} sbloccato ✨
            </p>

            {memoryPhoto !== undefined && memoryPhoto !== null && (
              <div className="mt-4">
                <PhotoFrame src={memoryPhoto} className="mx-auto max-h-52 w-full" />
              </div>
            )}

            <motion.blockquote
              className="mt-4 rounded-2xl bg-blush/60 p-4 font-romantic text-lg italic leading-relaxed text-vino"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              “{memory}”
            </motion.blockquote>

            <motion.button
              onClick={onContinue}
              className="btn-game mt-6 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {isLast ? "Scopri la sorpresa finale ✨" : "Torna alla mappa 🗺️"}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
