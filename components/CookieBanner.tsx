"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCookieConsent } from "@/lib/consent";
import type { Dictionary, Locale } from "@/lib/i18n";

/**
 * Banner cookie GDPR: compare finché l'utente non sceglie.
 * "Accetta" abilita l'embed di Google Maps; "Rifiuta" lo tiene
 * sostituito da un segnaposto con link esterno.
 */
export default function CookieBanner({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [consent, setConsent] = useCookieConsent();

  return (
    <AnimatePresence>
      {consent === null && (
        <motion.aside
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          role="region"
          aria-label={dict.cookie.title}
          className="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-2xl rounded-3xl bg-ink p-6 text-white shadow-2xl shadow-ink/40 md:inset-x-8"
        >
          <h2 className="font-display text-lg font-semibold">🍪 {dict.cookie.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-white/75">{dict.cookie.text}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setConsent("accepted")}
              className="btn-liquid bg-brass px-6 py-2.5 text-sm text-white hover:-translate-y-0.5"
            >
              {dict.cookie.accept}
            </button>
            <button
              type="button"
              onClick={() => setConsent("rejected")}
              className="btn-liquid border border-white/30 px-6 py-2.5 text-sm text-white/85 hover:border-white/60"
            >
              {dict.cookie.reject}
            </button>
            <Link
              href={`/${locale}/privacy`}
              className="ml-auto text-sm font-semibold text-champagne underline-offset-4 hover:underline"
            >
              {dict.cookie.privacyLink}
            </Link>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
