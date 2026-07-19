"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { config } from "@/content.config";
import { normalize } from "@/lib/utils";

/** LIVELLO 17 — Typing challenge: scrivi la frase prima che scada il tempo */
export default function Level17({ onWin }: { onWin: () => void }) {
  const { phrase, seconds } = config.level17;
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [input, setInput] = useState("");
  const [outcome, setOutcome] = useState<"playing" | "won" | "lost">("playing");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const targetWords = phrase.split(/\s+/);
  const typedWords = input.split(/\s+/);

  useEffect(() => {
    if (!started || outcome !== "playing") return;
    const t = window.setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          setOutcome("lost");
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => window.clearInterval(t);
  }, [started, outcome]);

  useEffect(() => {
    if (outcome !== "playing") return;
    if (normalize(input) === normalize(phrase)) {
      setOutcome("won");
      window.setTimeout(onWin, 1400);
    }
  }, [input, outcome, phrase, onWin]);

  function restart() {
    setInput("");
    setTimeLeft(seconds);
    setOutcome("playing");
    setStarted(true);
    window.setTimeout(() => inputRef.current?.focus(), 50);
  }

  const pct = (timeLeft / seconds) * 100;

  return (
    <div className="space-y-4">
      {!started ? (
        <div className="game-card space-y-3 text-center">
          <div className="text-5xl">⌨️</div>
          <p className="font-game font-bold text-vino">
            Hai {seconds} secondi per scrivere la nostra frase, parola per parola.
            <br />
            <span className="text-sm font-semibold text-vino/60">
              (maiuscole e accenti non contano, il cuore sì)
            </span>
          </p>
          <button onClick={restart} className="btn-game">
            Via! ⏱️
          </button>
        </div>
      ) : (
        <>
          {/* timer */}
          <div className="mx-auto max-w-md">
            <div className="mb-1 flex justify-between font-game text-sm font-bold">
              <span className="text-vino/60">Tempo</span>
              <span className={timeLeft <= 5 ? "animate-pulse text-rosso" : "text-vino"}>
                {timeLeft}s
              </span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-vino/10">
              <motion.div
                className={`h-full rounded-full ${pct < 25 ? "bg-rosso" : "bg-gradient-to-r from-slate-400 to-rosa"}`}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.9, ease: "linear" }}
              />
            </div>
          </div>

          {/* frase da copiare, con evidenziazione delle parole già scritte */}
          <div className="game-card text-center">
            <p className="font-romantic text-xl leading-relaxed">
              {targetWords.map((w, i) => {
                const typed = typedWords[i];
                const ok = typed !== undefined && normalize(typed) === normalize(w) && (i < typedWords.length - 1 || normalize(input).endsWith(normalize(w)));
                return (
                  <span key={i} className={ok ? "text-emerald-600" : "text-vino"}>
                    {w}{" "}
                  </span>
                );
              })}
            </p>
          </div>

          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => outcome === "playing" && setInput(e.target.value)}
            placeholder="Scrivi qui, veloce!"
            rows={3}
            autoFocus
            className="input-game !text-left resize-none"
            disabled={outcome !== "playing"}
          />

          <AnimatePresence>
            {outcome === "won" && (
              <motion.p
                className="text-center font-game text-xl font-extrabold text-oro"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                Fatto con {timeLeft}s di anticipo! Dita da pianista 🎉
              </motion.p>
            )}
            {outcome === "lost" && (
              <motion.div
                className="space-y-2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="font-game font-bold text-rosso">
                  Tempo scaduto! ⏰ Ma un Mini Pitbull non si arrende mai…
                </p>
                <button onClick={restart} className="btn-game">
                  Riprova 💪
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
