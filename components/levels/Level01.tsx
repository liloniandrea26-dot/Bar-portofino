"use client";

import GenericQuiz from "@/components/GenericQuiz";
import { config } from "@/content.config";

/** LIVELLO 1 — Quiz "Quanto mi conosci?" */
export default function Level01({ onWin }: { onWin: () => void }) {
  return (
    <div className="space-y-4">
      <p className="text-center font-romantic text-lg italic text-vino/80">
        Vediamo se mi conosci davvero, {config.her.nickname}… 🧐
      </p>
      <GenericQuiz questions={config.level01.questions} onComplete={onWin} />
    </div>
  );
}
