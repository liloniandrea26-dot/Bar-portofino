"use client";

import { motion } from "framer-motion";
import { FloatingBits, TwinklingStars } from "@/components/Effects";
import { config } from "@/content.config";

const TITLE = "Mini Pitbull Quest";

export default function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="sky-bg relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 text-center">
      <TwinklingStars count={50} />
      <FloatingBits emojis={["❤️", "💛", "🐾", "✨", "🐶"]} count={12} />

      <motion.div
        className="text-7xl"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
      >
        🐶
      </motion.div>

      {/* Titolo animato lettera per lettera */}
      <h1 className="mt-4 flex max-w-full flex-wrap justify-center font-game text-5xl font-extrabold sm:text-6xl">
        {TITLE.split("").map((ch, i) => (
          <motion.span
            key={i}
            className="text-shimmer inline-block"
            initial={{ opacity: 0, y: 30, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.3 + i * 0.05, type: "spring", stiffness: 260, damping: 14 }}
          >
            {ch === " " ? " " : ch}
          </motion.span>
        ))}
      </h1>

      <motion.p
        className="mt-3 font-romantic text-xl italic text-amber-100/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        {config.intro.subtitle}
      </motion.p>

      <motion.p
        className="mt-6 max-w-md whitespace-pre-line rounded-3xl bg-white/10 p-5 font-body text-sm leading-relaxed text-amber-50/90 backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7 }}
      >
        {config.intro.text}
      </motion.p>

      <motion.button
        onClick={onStart}
        className="btn-game mt-8 animate-heartbeat"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.1, type: "spring", stiffness: 200 }}
      >
        {config.intro.buttonLabel} 💛
      </motion.button>

      <motion.p
        className="mt-6 font-game text-xs text-amber-100/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
      >
        Con amore, {config.me.name} {config.me.emoji}
      </motion.p>
    </div>
  );
}
