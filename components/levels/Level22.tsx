"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { FloatingBits } from "@/components/Effects";
import { config } from "@/content.config";

type Stage = "envelope" | "opening" | "letter";

/** LIVELLO 22 — Il finale: la busta, la lettera, l'effetto typewriter */
export default function Level22({ onDone }: { onDone: () => void }) {
  const [stage, setStage] = useState<Stage>("envelope");

  return (
    <div className="relative min-h-dvh overflow-hidden bg-gradient-to-b from-[#3E1F35] via-[#6B2242] to-[#8A2C48]">
      <FloatingBits emojis={["🌸", "❤️", "✨", "🌺", "💛"]} count={16} />

      <AnimatePresence mode="wait">
        {stage !== "letter" ? (
          <Envelope
            key="envelope"
            opening={stage === "opening"}
            onOpen={() => {
              setStage("opening");
              window.setTimeout(() => setStage("letter"), 1700);
            }}
          />
        ) : (
          <Letter key="letter" onDone={onDone} />
        )}
      </AnimatePresence>
    </div>
  );
}

function Envelope({ opening, onOpen }: { opening: boolean; onOpen: () => void }) {
  return (
    <motion.div
      className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6"
      exit={{ opacity: 0, scale: 1.15 }}
      transition={{ duration: 0.6 }}
    >
      <motion.p
        className="mb-8 text-center font-romantic text-2xl italic text-amber-100"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        C'è una lettera per te.
      </motion.p>

      <motion.button
        onClick={() => !opening && onOpen()}
        className="relative"
        initial={{ y: 60, opacity: 0, rotate: -4 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.7 }}
        whileHover={opening ? {} : { scale: 1.04, rotate: 1 }}
        whileTap={opening ? {} : { scale: 0.97 }}
      >
        <div className="relative h-48 w-72 sm:h-56 sm:w-96" style={{ perspective: 800 }}>
          {/* corpo busta */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#FDF3E3] to-[#F3E2C8] shadow-2xl" />
          {/* foglio che sbuca */}
          <motion.div
            className="letter-paper absolute inset-x-4 top-3 bottom-3 rounded-lg"
            initial={{ y: 0 }}
            animate={opening ? { y: -90, transition: { delay: 0.7, duration: 0.8, ease: "easeOut" } } : {}}
          />
          {/* pieghe laterali */}
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <div className="absolute left-0 top-0 h-full w-full bg-[#F7E9D2] shadow-inner" style={{ clipPath: "polygon(0 0, 55% 50%, 0 100%)" }} />
            <div className="absolute right-0 top-0 h-full w-full bg-[#F7E9D2]" style={{ clipPath: "polygon(100% 0, 45% 50%, 100% 100%)" }} />
            <div className="absolute bottom-0 h-1/2 w-full bg-[#FAEEDB]" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }} />
          </div>
          {/* linguetta superiore, si apre */}
          <motion.div
            className="absolute top-0 z-10 h-1/2 w-full origin-top"
            style={{ transformStyle: "preserve-3d" }}
            animate={opening ? { rotateX: 180, transition: { duration: 0.7, ease: "easeInOut" } } : {}}
          >
            <div
              className="absolute inset-0 rounded-t-xl bg-gradient-to-b from-[#F0DFC0] to-[#E8D2AC] shadow"
              style={{ clipPath: "polygon(0 0, 50% 96%, 100% 0)", backfaceVisibility: "hidden" }}
            />
          </motion.div>
          {/* sigillo */}
          <motion.div
            className="absolute left-1/2 top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-rosso to-vino font-romantic text-2xl font-bold text-amber-100 shadow-lg ring-4 ring-vino/30"
            animate={opening ? { scale: 0, rotate: 180 } : { scale: [1, 1.06, 1] }}
            transition={opening ? { duration: 0.4 } : { repeat: Infinity, duration: 2 }}
          >
            {config.me.initial}
          </motion.div>
          {/* destinatario */}
          <p className="absolute bottom-4 w-full text-center font-romantic text-lg italic text-vino/70">
            {config.finale.envelopeLabel}
          </p>
        </div>
      </motion.button>

      {!opening && (
        <motion.p
          className="mt-8 font-game text-sm font-semibold text-amber-100/70"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Tocca la busta per aprirla 💌
        </motion.p>
      )}
    </motion.div>
  );
}

function Letter({ onDone }: { onDone: () => void }) {
  const fullText = config.finale.letter;
  const [chars, setChars] = useState(0);
  const [skipped, setSkipped] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const finished = chars >= fullText.length;

  // Effetto macchina da scrivere, con pause più lunghe su punteggiatura
  useEffect(() => {
    if (skipped || finished) return;
    const ch = fullText[chars];
    const delay = ch === "\n" ? 220 : /[.!?…]/.test(ch) ? 300 : /[,;:]/.test(ch) ? 140 : 34;
    const t = window.setTimeout(() => setChars((c) => c + 1), delay);
    return () => window.clearTimeout(t);
  }, [chars, skipped, finished, fullText]);

  useEffect(() => {
    if (skipped) setChars(fullText.length);
  }, [skipped, fullText.length]);

  // auto-scroll mentre il testo cresce
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [chars]);

  const visible = fullText.slice(0, chars);

  return (
    <motion.div
      className="relative z-10 flex min-h-dvh flex-col items-center px-4 py-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div
        ref={scrollRef}
        className="letter-paper w-full max-w-xl flex-1 overflow-y-auto rounded-2xl p-6 sm:p-10"
        style={{ maxHeight: "calc(100dvh - 9rem)" }}
      >
        <p className="mb-6 text-right font-romantic italic text-vino/60">{config.finale.date}</p>
        <div
          className={`whitespace-pre-wrap font-romantic text-lg leading-relaxed text-[#4A2B35] sm:text-xl ${
            finished ? "" : "typewriter-caret"
          }`}
        >
          {visible}
        </div>

        <AnimatePresence>
          {finished && (
            <motion.div
              className="mt-10 space-y-3 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="font-game text-2xl font-extrabold text-shimmer">
                {config.finale.closing}
              </p>
              <p className="font-romantic text-xl italic text-vino">{config.finale.signature}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4 flex gap-3">
        {!finished ? (
          <button onClick={() => setSkipped(true)} className="btn-soft text-sm">
            Mostra tutta la lettera
          </button>
        ) : (
          <motion.button
            onClick={onDone}
            className="btn-game"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            ❤️ Per sempre noi
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
