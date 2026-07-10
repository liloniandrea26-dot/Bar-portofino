"use client";

import { useCookieConsent } from "@/lib/consent";
import { restaurantConfig } from "@/data/config";
import type { Dictionary } from "@/lib/i18n";

/**
 * Mappa Google con blocco consenso GDPR: l'iframe viene caricato solo
 * dopo l'accettazione dei cookie di terze parti; in caso contrario mostra
 * un segnaposto con la possibilità di acconsentire o aprire la mappa
 * direttamente su Google Maps (link esterno, nessun cookie sul sito).
 */
export default function ConsentMap({ dict }: { dict: Dictionary }) {
  const [consent, setConsent] = useCookieConsent();

  if (consent === "accepted") {
    return (
      <>
        <iframe
          src={restaurantConfig.maps.embedUrl}
          title={dict.location.mapTitle}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        >
          <span className="absolute -inset-4 animate-ping rounded-full bg-brass/40" />
          <span className="relative block h-5 w-5 rounded-full border-4 border-white bg-brass shadow-lg" />
        </div>
      </>
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-linen p-8 text-center">
      <span className="text-5xl" aria-hidden="true">
        🗺️
      </span>
      <div>
        <p className="font-display text-xl font-semibold">{dict.cookie.mapBlockedTitle}</p>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-smoke">
          {dict.cookie.mapBlockedText}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setConsent("accepted")}
          className="btn-primary px-6 py-2.5 text-sm"
        >
          {dict.cookie.mapBlockedButton}
        </button>
        <a
          href={restaurantConfig.maps.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary px-6 py-2.5 text-sm text-ink"
        >
          {dict.cookie.mapExternal}
        </a>
      </div>
    </div>
  );
}
