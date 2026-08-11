/**
 * ============================================================
 *  CONFIGURAZIONE NON LINGUISTICA — ⭐ DA COMPILARE ⭐
 * ============================================================
 *  Dati che NON dipendono dalla lingua: contatti, orari,
 *  indirizzo, link, immagini. I testi tradotti vivono invece
 *  nei dizionari in lib/i18n/ (it.ts, en.ts, de.ts).
 *
 *  ➜ Sostituisci OGNI campo marcato [DA COMPILARE] con i dati
 *    reali del cliente. Questo file + lib/i18n/ + data/menu.ts
 *    + le foto in public/images/ sono tutto ciò che serve
 *    personalizzare.
 * ============================================================
 */

export const restaurantConfig = {
  /** [DA COMPILARE] Nome dell'attività (uguale in tutte le lingue) */
  name: "Nome Pizzeria",

  phone: {
    /** [DA COMPILARE] Numero visualizzato e link tel: senza spazi */
    display: "+39 000 000 0000",
    href: "tel:+390000000000",
  },

  /** [DA COMPILARE] Numero WhatsApp (o rimuovi i link WhatsApp dai componenti) */
  whatsapp: {
    display: "WhatsApp",
    href: "https://wa.me/390000000000",
  },

  email: {
    /** [DA COMPILARE] Email dell'attività */
    display: "info@nomepizzeria.it",
    href: "mailto:info@nomepizzeria.it",
  },

  /** [DA COMPILARE] Indirizzo completo */
  address: "Via Da Compilare 1 - 00000 Città (XX)",

  /** [DA COMPILARE] Partita IVA (obbligatoria nel footer) */
  vat: "P.IVA 00000000000",

  /** [DA COMPILARE] Fascia di prezzo indicativa (es. "15-25 €") */
  priceRange: "00-00 €",

  maps: {
    /** [DA COMPILARE] Sostituisci l'indirizzo nei due link Google Maps */
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Via+Da+Compilare+1+Citta",
    embedUrl: "https://www.google.com/maps?q=Via+Da+Compilare+1+Citta&output=embed",
  },

  social: {
    /** [DA COMPILARE] Profili social reali */
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },

  /** ➜ Carica il PDF reale del menu in /public/menu.pdf */
  menuPdf: "/menu.pdf",

  /**
   * [DA COMPILARE] Orari di apertura per giorno (lunedì → domenica).
   * Ogni giorno è un elenco di fasce ["apertura", "chiusura"] in formato 24h.
   * Un array vuoto [] = giorno di chiusura.
   * Alimentano tabella orari, footer, card della home e badge Aperto/Chiuso.
   */
  weekHours: [
    [], // Lunedì — esempio: chiuso
    [["12:00", "14:30"], ["18:30", "23:00"]], // Martedì
    [["12:00", "14:30"], ["18:30", "23:00"]], // Mercoledì
    [["12:00", "14:30"], ["18:30", "23:00"]], // Giovedì
    [["12:00", "14:30"], ["18:30", "23:30"]], // Venerdì
    [["12:00", "14:30"], ["18:30", "23:30"]], // Sabato
    [["12:00", "14:30"], ["18:30", "23:00"]], // Domenica
  ] as string[][][],

  /**
   * [DA COMPILARE] Consegna a domicilio: orari e link al servizio.
   * Se il cliente non fa consegne, imposta delivery: null e le righe
   * spariscono automaticamente da orari, footer e home.
   */
  delivery: {
    hours: "00:00 – 00:00",
    url: "https://esempio-servizio-delivery.it",
  } as { hours: string; url: string } | null,
} as const;

/* ------------------------------------------------------------------ */
/*  IMMAGINI — segnaposto eleganti in /public/images                   */
/*  ➜ Sostituisci i file con le foto reali (stessi nomi = zero codice) */
/* ------------------------------------------------------------------ */

export const siteImages = {
  /** Foto principale dell'hero: il piatto forte o l'ambiente */
  hero: "/images/hero.jpg",
  /** Sezione "chi siamo" */
  about: "/images/interno.jpg",
  forno: "/images/piatto-1.jpg",
  /** Intestazione della pagina menu */
  menuPage: "/images/piatto-2.jpg",
  /** Intestazioni pagine interne */
  interno: "/images/interno.jpg",
} as const;

export interface GalleryImage {
  src: string;
  alt: string;
}

/** [DA COMPILARE] Foto della galleria con descrizioni nelle tre lingue */
export const galleryPhotos: { src: string; alt: { it: string; en: string; de: string } }[] = [
  {
    src: "/images/hero.jpg",
    alt: {
      it: "[DA COMPILARE] Descrizione della foto 1",
      en: "[TO BE FILLED IN] Description of photo 1",
      de: "[AUSZUFÜLLEN] Beschreibung von Foto 1",
    },
  },
  {
    src: "/images/piatto-1.jpg",
    alt: {
      it: "[DA COMPILARE] Descrizione della foto 2",
      en: "[TO BE FILLED IN] Description of photo 2",
      de: "[AUSZUFÜLLEN] Beschreibung von Foto 2",
    },
  },
  {
    src: "/images/piatto-2.jpg",
    alt: {
      it: "[DA COMPILARE] Descrizione della foto 3",
      en: "[TO BE FILLED IN] Description of photo 3",
      de: "[AUSZUFÜLLEN] Beschreibung von Foto 3",
    },
  },
  {
    src: "/images/interno.jpg",
    alt: {
      it: "[DA COMPILARE] Descrizione della foto 4",
      en: "[TO BE FILLED IN] Description of photo 4",
      de: "[AUSZUFÜLLEN] Beschreibung von Foto 4",
    },
  },
];
