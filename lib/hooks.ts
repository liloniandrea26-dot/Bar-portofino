"use client";

import { useEffect, useState } from "react";

/** true se l'utente preferisce animazioni ridotte */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

/**
 * Decide se abilitare le scene 3D: disattivate su mobile,
 * su dispositivi poco performanti e con prefers-reduced-motion.
 * In quei casi i componenti mostrano un fallback statico.
 */
export function useThreeEnabled(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const smallScreen = window.matchMedia("(max-width: 767px)").matches;
    const lowDpr = window.devicePixelRatio < 1;
    const lowCores =
      typeof navigator.hardwareConcurrency === "number" &&
      navigator.hardwareConcurrency <= 2;

    setEnabled(!reduced && !smallScreen && !lowDpr && !lowCores);
  }, []);

  return enabled;
}

/** true solo su dispositivi con puntatore preciso (mouse) */
export function useFinePointer(): boolean {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    setFine(window.matchMedia("(pointer: fine)").matches);
  }, []);

  return fine;
}

/**
 * "Aperto ora / Chiuso" calcolato dalla tabella orari settimanale.
 * weekHours[0] = lunedì ... weekHours[6] = domenica;
 * ogni giorno è un elenco di fasce ["HH:MM", "HH:MM"].
 * Ritorna null finché non è calcolato lato client (evita mismatch SSR).
 */
export function useOpenNow(weekHours: readonly (readonly (readonly string[])[])[]): boolean | null {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const toMinutes = (hhmm: string) => {
      const [h, m] = hhmm.split(":").map(Number);
      return h * 60 + m;
    };

    const check = () => {
      const now = new Date();
      const dayIndex = (now.getDay() + 6) % 7; // 0 = lunedì
      const minutes = now.getHours() * 60 + now.getMinutes();
      const open = (weekHours[dayIndex] ?? []).some(
        ([from, to]) => minutes >= toMinutes(from) && minutes < toMinutes(to),
      );
      setIsOpen(open);
    };

    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, [weekHours]);

  return isOpen;
}

/** Indice del giorno corrente (0 = lunedì ... 6 = domenica), null in SSR */
export function useTodayIndex(): number | null {
  const [today, setToday] = useState<number | null>(null);
  useEffect(() => {
    setToday((new Date().getDay() + 6) % 7);
  }, []);
  return today;
}
