"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { config } from "@/content.config";

export const TOTAL_LEVELS = 21; // livelli-gioco; il 22 è il finale
export const FINALE_LEVEL = 22;

export type Screen = "intro" | "map" | "level" | "finale-transition";

type ProgressState = {
  /** Livelli completati (1-22) */
  completed: number[];
  /** True se l'intro è già stata vista */
  introSeen: boolean;
  /** True se la transizione finale è già stata mostrata */
  finaleTransitionSeen: boolean;
  markCompleted: (level: number) => void;
  markIntroSeen: () => void;
  markFinaleTransitionSeen: () => void;
  resetAll: () => void;
};

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      completed: [],
      introSeen: false,
      finaleTransitionSeen: false,
      markCompleted: (level) =>
        set((s) =>
          s.completed.includes(level) ? s : { completed: [...s.completed, level] }
        ),
      markIntroSeen: () => set({ introSeen: true }),
      markFinaleTransitionSeen: () => set({ finaleTransitionSeen: true }),
      resetAll: () =>
        set({ completed: [], introSeen: false, finaleTransitionSeen: false }),
    }),
    { name: "mini-pitbull-quest-progress" }
  )
);

/** Quanti dei 21 livelli-ricordo sono stati completati */
export function completedCount(completed: number[]): number {
  return completed.filter((l) => l >= 1 && l <= TOTAL_LEVELS).length;
}

/** Un livello è giocabile se è il primo, o se il precedente è completato */
export function isUnlocked(level: number, completed: number[]): boolean {
  if (config.dev.unlockAll) return true;
  if (level === 1) return true;
  if (level === FINALE_LEVEL) return completedCount(completed) >= TOTAL_LEVELS;
  return completed.includes(level - 1);
}
