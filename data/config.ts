/**
 * ============================================================
 *  CONFIGURAZIONE NON LINGUISTICA — Peperoncino & Co
 * ============================================================
 *  Dati che NON dipendono dalla lingua: contatti, orari,
 *  indirizzo, link, immagini. I testi tradotti vivono invece
 *  nei dizionari in lib/i18n/ (it.ts, en.ts, de.ts).
 *
 *  ➜ I campi ancora marcati [DA CONFERMARE] vanno sostituiti
 *    con i dati reali del cliente.
 * ============================================================
 */

export const restaurantConfig = {
  name: "Peperoncino & Co",

  phone: {
    display: "+39 0431 403099",
    href: "tel:+390431403099",
  },

  /**
   * WhatsApp (l'attività lo espone sulla scheda Google).
   * ➜ [DA CONFERMARE] verifica che il numero WhatsApp coincida col fisso
   */
  whatsapp: {
    display: "WhatsApp",
    href: "https://wa.me/390431403099",
  },

  email: {
    /** [DA CONFERMARE] Email del ristorante */
    display: "info@peperoncinoeco.it",
    href: "mailto:info@peperoncinoeco.it",
  },

  address: "Via Carinzia, 23 - 33054 Lignano Sabbiadoro (UD)",

  /** [DA CONFERMARE] Partita IVA (obbligatoria nel footer) */
  vat: "P.IVA 00000000000",

  /** Fascia di prezzo indicativa (dalla scheda Google) */
  priceRange: "20-30 €",

  maps: {
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Peperoncino+%26+Co+Via+Carinzia+23+33054+Lignano+Sabbiadoro+UD",
    embedUrl:
      "https://www.google.com/maps?q=Via+Carinzia+23,+33054+Lignano+Sabbiadoro+UD&output=embed",
  },

  social: {
    /** [DA CONFERMARE] Profili social reali */
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },

  /**
   * ➜ Carica il PDF reale del menu in /public/menu.pdf
   *   (il bottone "Scarica Menu" punta a questo percorso)
   */
  menuPdf: "/menu.pdf",

  /**
   * [DA CONFERMARE] Orari di apertura per giorno (lunedì → domenica).
   * Ogni giorno è un elenco di fasce ["apertura", "chiusura"] in formato 24h.
   * Un array vuoto = giorno di chiusura.
   * La chiusura alle 23:00 è confermata dalla scheda Google; le altre
   * fasce sono indicative e da verificare col ristorante.
   */
  weekHours: [
    [["12:00", "14:30"], ["18:30", "23:00"]], // Lunedì
    [["12:00", "14:30"], ["18:30", "23:00"]], // Martedì
    [["12:00", "14:30"], ["18:30", "23:00"]], // Mercoledì
    [["12:00", "14:30"], ["18:30", "23:00"]], // Giovedì
    [["12:00", "14:30"], ["18:30", "23:00"]], // Venerdì
    [["12:00", "14:30"], ["18:30", "23:00"]], // Sabato
    [["12:00", "14:30"], ["18:30", "23:00"]], // Domenica
  ] as string[][][],
} as const;

/* ------------------------------------------------------------------ */
/*  IMMAGINI — placeholder Unsplash a tema ristorante                  */
/*  ➜ Sostituisci con le foto reali del locale in /public/images       */
/* ------------------------------------------------------------------ */

export const siteImages = {
  hero: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=2000&q=80",
  about:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
  forno:
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1400&q=80",
  menuPage:
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80",
  interno:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
} as const;

export interface GalleryImage {
  src: string;
  alt: string;
}

/** Foto della galleria (gli alt localizzati arrivano dai dizionari) */
export const galleryImageSrcs: string[] = [
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
];
