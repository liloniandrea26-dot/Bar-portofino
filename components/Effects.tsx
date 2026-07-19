"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * Esplosione di particelle emoji (cuori/stelle/coriandoli) dal centro.
 * Usata come feedback di vittoria nei minigiochi.
 */
export function ConfettiBurst({
  emojis = ["❤️", "💛", "✨", "⭐", "🎉"],
  count = 36,
}: {
  emojis?: string[];
  count?: number;
}) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2 + Math.random() * 0.5;
        const dist = 120 + Math.random() * 220;
        return {
          id: i,
          emoji: emojis[i % emojis.length],
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist - 60,
          rotate: Math.random() * 360 - 180,
          scale: 0.7 + Math.random() * 0.9,
          delay: Math.random() * 0.15,
          duration: 1.2 + Math.random() * 0.9,
        };
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute left-1/2 top-1/2 text-2xl"
          initial={{ x: 0, y: 0, opacity: 1, scale: 0.3, rotate: 0 }}
          animate={{
            x: p.x,
            y: p.y + 140,
            opacity: [1, 1, 0],
            scale: p.scale,
            rotate: p.rotate,
          }}
          transition={{ duration: p.duration, delay: p.delay, ease: "easeOut" }}
        >
          {p.emoji}
        </motion.span>
      ))}
    </div>
  );
}

/**
 * Elementi fluttuanti di sottofondo (cuori, petali, stelle) — leggeri e
 * non invadenti. Usati nell'intro e nel finale.
 */
export function FloatingBits({
  emojis = ["❤️", "💛", "🐾", "✨"],
  count = 14,
  className = "",
}: {
  emojis?: string[];
  count?: number;
  className?: string;
}) {
  const bits = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        emoji: emojis[i % emojis.length],
        left: Math.random() * 100,
        size: 14 + Math.random() * 18,
        duration: 9 + Math.random() * 10,
        delay: Math.random() * 12,
        drift: Math.random() * 60 - 30,
        opacity: 0.25 + Math.random() * 0.4,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {bits.map((b) => (
        <motion.span
          key={b.id}
          className="absolute"
          style={{ left: `${b.left}%`, fontSize: b.size, opacity: b.opacity }}
          initial={{ y: "105vh" }}
          animate={{ y: "-10vh", x: [0, b.drift, 0] }}
          transition={{
            y: { duration: b.duration, delay: b.delay, repeat: Infinity, ease: "linear" },
            x: { duration: b.duration / 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {b.emoji}
        </motion.span>
      ))}
    </div>
  );
}

/** Stelline fisse che brillano (per il cielo della mappa) */
export function TwinklingStars({ count = 40 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 3,
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute animate-twinkle rounded-full bg-amber-100"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
