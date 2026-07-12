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
   * Orari di apertura per giorno (lunedì → domenica), confermati:
   * tutti i giorni 11:00–23:00 con orario continuato.
   * Ogni giorno è un elenco di fasce ["apertura", "chiusura"] in formato 24h.
   */
  weekHours: [
    [["11:00", "23:00"]], // Lunedì
    [["11:00", "23:00"]], // Martedì
    [["11:00", "23:00"]], // Mercoledì
    [["11:00", "23:00"]], // Giovedì
    [["11:00", "23:00"]], // Venerdì
    [["11:00", "23:00"]], // Sabato
    [["11:00", "23:00"]], // Domenica
  ] as string[][][],

  /** Consegna a domicilio (servizio esterno deliveryco.it, come sul menu) */
  delivery: {
    hours: "12:00 – 23:00",
    url: "https://deliveryco.it",
  },
} as const;

/* ------------------------------------------------------------------ */
/*  IMMAGINI — foto reali del ristorante (in /public/images)           */
/* ------------------------------------------------------------------ */

export const siteImages = {
  hero: "/images/antipasto-mare.jpg",
  about: "/images/sala.jpg",
  forno: "/images/gran-scogliera.jpg",
  menuPage: "/images/pizza-gourmet.jpg",
  interno: "/images/sala.jpg",
} as const;

export interface GalleryImage {
  src: string;
  alt: string;
}

/** Foto reali della galleria, con descrizioni nelle tre lingue */
export const galleryPhotos: { src: string; alt: { it: string; en: string; de: string } }[] = [
  {
    src: "/images/antipasto-mare.jpg",
    alt: {
      it: "Antipasto di mare: capesante e canestrelli gratinati con sauté di cozze e vongole",
      en: "Seafood appetizer: scallops au gratin with sautéed mussels and clams",
      de: "Fisch-Vorspeise: gratinierte Jakobsmuscheln mit sautierten Mies- und Venusmuscheln",
    },
  },
  {
    src: "/images/gran-scogliera.jpg",
    alt: {
      it: "Maccheroni gran scogliera serviti in padella con cozze e gamberoni",
      en: "'Gran scogliera' maccheroni served in a pan with mussels and king prawns",
      de: "Maccheroni 'Gran Scogliera' in der Pfanne mit Miesmuscheln und Riesengarnelen",
    },
  },
  {
    src: "/images/carbonara.jpg",
    alt: {
      it: "Spaghetti alla carbonara serviti al tavolo",
      en: "Spaghetti alla carbonara served at the table",
      de: "Spaghetti alla Carbonara am Tisch serviert",
    },
  },
  {
    src: "/images/pizza-gourmet.jpg",
    alt: {
      it: "Pizza gourmet con granella di pistacchi, pancetta, melanzane e burrata",
      en: "Gourmet pizza with chopped pistachios, bacon, aubergines and burrata",
      de: "Gourmet-Pizza mit Pistazien, Speck, Auberginen und Burrata",
    },
  },
  {
    src: "/images/sala.jpg",
    alt: {
      it: "La sala del ristorante Peperoncino & Co con i tavoli apparecchiati",
      en: "The Peperoncino & Co dining room with its set tables",
      de: "Der Gastraum von Peperoncino & Co mit gedeckten Tischen",
    },
  },
];
