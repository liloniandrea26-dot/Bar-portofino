"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export type QuizQuestion = {
  q: string;
  options: string[];
  correct: number;
};

const WRONG_MESSAGES = [
  "Mmh, no! Il Mini Pitbull può fare di meglio 🐶",
  "Riprova, amore… era quasi giusta! 😜",
  "Nope! Ma ti perdono perché sei carina 💘",
  "Eh no! Concentrati, c'è in ballo un ricordo ✨",
];

/**
 * Quiz generico riutilizzabile (usato dai livelli 1, 12 e 19).
 * Non si può "perdere": una risposta sbagliata fa solo riprovare,
 * con un messaggio giocoso.
 */
export default function GenericQuiz({
  questions,
  onComplete,
  optionsLayout = "column",
}: {
  questions: QuizQuestion[];
  onComplete: () => void;
  optionsLayout?: "column" | "row";
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [wrongMsg, setWrongMsg] = useState<string | null>(null);

  const question = questions[index];
  const isCorrect = selected !== null && selected === question.correct;

  function pick(i: number) {
    if (isCorrect) return;
    setSelected(i);
    if (i === question.correct) {
      setWrongMsg(null);
      window.setTimeout(() => {
        if (index + 1 >= questions.length) {
          onComplete();
        } else {
          setIndex(index + 1);
          setSelected(null);
        }
      }, 900);
    } else {
      setWrongMsg(WRONG_MESSAGES[Math.floor(Math.random() * WRONG_MESSAGES.length)]);
    }
  }

  return (
    <div className="game-card">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-game text-sm font-bold text-rosa">
          Domanda {index + 1} di {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-colors ${
                i < index ? "bg-oro" : i === index ? "bg-rosso" : "bg-vino/15"
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="mb-5 font-game text-xl font-bold leading-snug text-vino">
            {question.q}
          </h2>
          <div
            className={
              optionsLayout === "row" ? "grid grid-cols-2 gap-3" : "flex flex-col gap-3"
            }
          >
            {question.options.map((opt, i) => {
              const state =
                selected === null
                  ? "idle"
                  : i === selected
                    ? i === question.correct
                      ? "right"
                      : "wrong"
                    : "idle";
              return (
                <motion.button
                  key={i}
                  onClick={() => pick(i)}
                  animate={state === "wrong" ? { x: [0, -8, 8, -6, 6, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  className={`rounded-2xl border-2 px-4 py-3 text-left font-game font-semibold transition-colors ${
                    state === "right"
                      ? "border-emerald-400 bg-emerald-50 text-emerald-700"
                      : state === "wrong"
                        ? "border-rosso bg-red-50 text-rosso"
                        : "border-rosa/30 bg-white text-vino hover:border-rosa hover:bg-blush/40"
                  } ${optionsLayout === "row" ? "text-center" : ""}`}
                >
                  {state === "right" && "✅ "}
                  {state === "wrong" && "❌ "}
                  {opt}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {wrongMsg && !isCorrect && (
          <motion.p
            className="mt-4 rounded-xl bg-blush px-4 py-2 text-center font-game text-sm font-bold text-vino"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {wrongMsg}
          </motion.p>
        )}
        {isCorrect && (
          <motion.p
            className="mt-4 text-center font-game text-lg font-bold text-emerald-600"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            Esatto! 🎉
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
