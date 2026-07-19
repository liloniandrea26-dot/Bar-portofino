"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo } from "react";
import { TwinklingStars } from "@/components/Effects";
import { TOTAL_LEVELS } from "@/lib/store";

/**
 * Sequenza speciale dopo il livello 21: i 21 cuori-ricordo convergono
 * al centro dello schermo e si fondono in un'unica luce, poi si apre
 * il livello finale.
 */
export default function FinaleTransition({ onDone }: { onDone: () => void }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: TOTAL_LEVELS }, (_, i) => {
        const angle = (i / TOTAL_LEVELS) * Math.PI * 2;
        const dist = 46; // % dal centro
        return {
          id: i,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
          delay: 0.6 + i * 0.07,
        };
      }),
    []
  );

  useEffect(() => {
    const t = window.setTimeout(onDone, 5200);
    return () => window.clearTimeout(t);
  }, [onDone]);

  return (
    <div className="sky-bg relative flex min-h-dvh items-center justify-center overflow-hidden">
      <TwinklingStars count={70} />

      <motion.p
        className="absolute top-[18%] px-8 text-center font-romantic text-2xl italic text-amber-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4.5, times: [0, 0.15, 0.75, 1] }}
      >
        21 ricordi. Un'unica storia.
      </motion.p>

      {/* I cuori convergono */}
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          className="absolute text-3xl"
          initial={{ x: `${h.x}vw`, y: `${h.y}vh`, opacity: 0, scale: 0.6 }}
          animate={{
            x: 0,
            y: 0,
            opacity: [0, 1, 1, 0],
            scale: [0.6, 1, 0.3],
          }}
          transition={{ duration: 2.2, delay: h.delay, ease: "easeInOut" }}
        >
          ❤️
        </motion.span>
      ))}

      {/* Esplosione di luce finale */}
      <motion.div
        className="absolute h-4 w-4 rounded-full bg-gradient-to-br from-oro to-rosa"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 60], opacity: [0, 1, 1] }}
        transition={{ duration: 1.6, delay: 3.4, ease: "easeIn" }}
      />

      <motion.span
        className="absolute text-6xl"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.3, 1] }}
        transition={{ delay: 3.0, duration: 0.5 }}
      >
        💌
      </motion.span>
    </div>
  );
}
