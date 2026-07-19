"use client";

import GenericQuiz from "@/components/GenericQuiz";
import { config } from "@/content.config";

/** LIVELLO 19 — Vero o falso sulla vostra storia */
export default function Level19({ onWin }: { onWin: () => void }) {
  const questions = config.level19.statements.map((s) => ({
    q: s.text,
    options: ["Vero ✅", "Falso ❌"],
    correct: s.isTrue ? 0 : 1,
  }));

  return (
    <div className="space-y-4">
      <p className="text-center font-romantic text-lg italic text-vino/80">
        Storia nostra o leggenda metropolitana? 🤨
      </p>
      <GenericQuiz questions={questions} onComplete={onWin} optionsLayout="row" />
    </div>
  );
}
