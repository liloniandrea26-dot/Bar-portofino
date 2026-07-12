"use client";

import { useEffect, useState } from "react";

export type Consent = "accepted" | "rejected" | null;

const STORAGE_KEY = "cookie-consent";
const EVENT = "cookie-consent-changed";

/**
 * Stato condiviso del consenso cookie (localStorage + evento custom,
 * così banner e mappa restano sincronizzati senza context provider).
 */
export function useCookieConsent(): [Consent, (value: Exclude<Consent, null>) => void] {
  const [consent, setConsentState] = useState<Consent>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const read = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      setConsentState(stored === "accepted" || stored === "rejected" ? stored : null);
    };
    read();
    setLoaded(true);
    window.addEventListener(EVENT, read);
    return () => window.removeEventListener(EVENT, read);
  }, []);

  const setConsent = (value: Exclude<Consent, null>) => {
    localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event(EVENT));
  };

  // Prima dell'idratazione non mostriamo nulla (evita flash del banner)
  return [loaded ? consent : "rejected", setConsent];
}
