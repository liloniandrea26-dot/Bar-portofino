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

/** "Aperto ora" / "Chiuso" calcolato sull'orario corrente */
export function useOpenStatus(open: { hour: number; minute: number }, close: { hour: number; minute: number }) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const minutes = now.getHours() * 60 + now.getMinutes();
      const openM = open.hour * 60 + open.minute;
      const closeM = close.hour * 60 + close.minute;
      setIsOpen(minutes >= openM && minutes < closeM);
    };
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, [open.hour, open.minute, close.hour, close.minute]);

  return isOpen;
}
