/**
 * ============================================================
 *  CONTENUTI CENTRALIZZATI — Portofino Beach Bar
 * ============================================================
 *  Tutti i testi, contatti, orari e immagini del sito vivono
 *  in questo file: il gestore (o chi cura il sito) può
 *  modificare qui i contenuti senza toccare i componenti.
 *
 *  ➜ Per sostituire le foto placeholder con quelle reali:
 *    1. carica le foto in /public/images
 *    2. sostituisci gli URL Unsplash qui sotto con "/images/nomefoto.jpg"
 * ============================================================
 */

export const siteConfig = {
  name: "Portofino Beach Bar",
  shortName: "Portofino",
  payoff: "Con i piedi nella sabbia, dal mattino al tramonto.",
  description:
    "Il chiosco Portofino offre ai suoi clienti una zona attrezzata e tranquilla. Potrete mangiare un gustoso panino o una sfiziosa insalatona con i piedi sulla sabbia e concludere la giornata con un aperitivo al tramonto.",
  descriptionEvocativa:
    "Panini gustosi, insalatone fresche e aperitivi al tramonto, con i piedi nella sabbia di Lignano Sabbiadoro.",

  address: {
    street: "Lungomare Trieste, 15/c",
    zip: "33054",
    city: "Lignano Sabbiadoro",
    province: "UD",
    full: "Lungomare Trieste, 15/c - 33054 Lignano Sabbiadoro (UD)",
  },

  phone: {
    display: "+39 0431 71834",
    href: "tel:+39043171834",
  },

  email: {
    display: "portofinolignanobeach@gmail.com",
    href: "mailto:portofinolignanobeach@gmail.com",
  },

  // WhatsApp: aggiorna con il numero mobile del locale se disponibile
  whatsapp: {
    display: "WhatsApp",
    href: "https://wa.me/39043171834",
  },

  hours: {
    display: "Tutti i giorni · 7:30 – 20:00",
    short: "7:30 – 20:00",
    open: { hour: 7, minute: 30 },
    close: { hour: 20, minute: 0 },
  },

  // Link Google Maps per "Indicazioni stradali" e mappa embed
  maps: {
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Lungomare+Trieste+15/c+33054+Lignano+Sabbiadoro+UD",
    embedUrl:
      "https://www.google.com/maps?q=Lungomare+Trieste+15/c,+33054+Lignano+Sabbiadoro+UD&output=embed",
  },

  social: {
    // ➜ Sostituisci con i profili social reali del locale
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },

  nearby: {
    name: "Sabbiadoro 14/15 - Portofino",
    description:
      "Il nostro lido gemello: la spiaggia attrezzata collegata al chiosco, con ombrelloni e lettini a pochi passi dal bancone.",
    // ➜ Aggiorna con il link ufficiale del lido, se disponibile
    url: "https://www.lignanosabbiadoro.it/",
  },

  // Nota nel footer — ➜ sostituisci con il tuo nome / la tua agenzia
  credits: "Sito realizzato da [Il tuo nome / La tua agenzia]",
} as const;

/* ------------------------------------------------------------------ */
/*  NAVIGAZIONE                                                        */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Il Locale", href: "/il-locale" },
  { label: "Menu", href: "/menu" },
  { label: "Spiaggia", href: "/spiaggia" },
  { label: "Galleria", href: "/galleria" },
  { label: "Dove Siamo", href: "/dove-siamo" },
] as const;

/* ------------------------------------------------------------------ */
/*  MENU (solo presentazione, nessun e-commerce)                       */
/* ------------------------------------------------------------------ */

export type MenuCategory = "panini" | "insalatone" | "aperitivo";

export interface MenuItem {
  name: string;
  description: string;
  category: MenuCategory;
  image: string;
  /** Prezzo opzionale, solo informativo (nessun ordine online) */
  price?: string;
}

export const menuCategories: { id: MenuCategory; label: string; anchor: string }[] = [
  { id: "panini", label: "Panini", anchor: "panini" },
  { id: "insalatone", label: "Insalatone", anchor: "insalatone" },
  { id: "aperitivo", label: "Aperitivo al Tramonto", anchor: "aperitivo" },
];

// ➜ Sostituisci nomi, descrizioni e foto con il menu reale del chiosco
export const menuItems: MenuItem[] = [
  {
    name: "Panino Portofino",
    description:
      "Prosciutto crudo, stracciatella, pomodorini e basilico su pane croccante. Il nostro classico.",
    category: "panini",
    image:
      "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Panino del Marinaio",
    description: "Tonno, olive taggiasche, pomodoro e maionese al limone.",
    category: "panini",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Caprese in Riva",
    description: "Mozzarella di bufala, pomodoro cuore di bue, origano e olio EVO.",
    category: "panini",
    image:
      "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Vegetariano di Sabbia",
    description: "Verdure grigliate, hummus di ceci e rucola fresca.",
    category: "panini",
    image:
      "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Insalatona Adriatica",
    description:
      "Misticanza, gamberetti, avocado, pomodorini e citronette agli agrumi.",
    category: "insalatone",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Insalatona del Bagnino",
    description: "Pollo grigliato, mais, carote, uovo sodo e scaglie di grana.",
    category: "insalatone",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Greca al Tramonto",
    description: "Feta, olive kalamata, cetrioli, cipolla rossa e origano.",
    category: "insalatone",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Spritz Portofino",
    description:
      "Il nostro aperitivo simbolo, servito quando il sole tocca il mare.",
    category: "aperitivo",
    image:
      "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hugo di Lignano",
    description: "Prosecco, sciroppo di sambuco, menta fresca e lime.",
    category: "aperitivo",
    image:
      "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tagliere del Chiosco",
    description:
      "Selezione di salumi, formaggi e stuzzichini da condividere in due (o quasi).",
    category: "aperitivo",
    image:
      "https://images.unsplash.com/photo-1541014741259-de529411b96a?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tramonto Analcolico",
    description: "Frutta fresca frullata, ghiaccio e vista mare inclusa.",
    category: "aperitivo",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=900&q=80",
  },
];

/* ------------------------------------------------------------------ */
/*  GALLERIA                                                           */
/* ------------------------------------------------------------------ */

export type GalleryCategory = "cibo" | "spiaggia" | "tramonti" | "atmosfera";

export interface GalleryImage {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const galleryCategories: { id: GalleryCategory | "tutti"; label: string }[] = [
  { id: "tutti", label: "Tutti" },
  { id: "cibo", label: "Cibo" },
  { id: "spiaggia", label: "Spiaggia" },
  { id: "tramonti", label: "Tramonti" },
  { id: "atmosfera", label: "Atmosfera" },
];

// ➜ Sostituisci con le foto reali del locale (in /public/images)
export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    alt: "La spiaggia di Lignano Sabbiadoro con il mare Adriatico",
    category: "spiaggia",
  },
  {
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    alt: "Ombrelloni e lettini della zona attrezzata",
    category: "spiaggia",
  },
  {
    src: "https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=1200&q=80",
    alt: "Spritz servito al bancone del chiosco",
    category: "cibo",
  },
  {
    src: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?auto=format&fit=crop&w=1200&q=80",
    alt: "Tramonto arancione sul mare Adriatico",
    category: "tramonti",
  },
  {
    src: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=1200&q=80",
    alt: "Panino fresco preparato al momento",
    category: "cibo",
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    alt: "L'atmosfera rilassata del beach bar",
    category: "atmosfera",
  },
  {
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    alt: "Insalatona fresca con verdure di stagione",
    category: "cibo",
  },
  {
    src: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?auto=format&fit=crop&w=1200&q=80",
    alt: "Aperitivo al tramonto con vista sul mare",
    category: "tramonti",
  },
  {
    src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    alt: "Il mare calmo della sera a Lignano",
    category: "tramonti",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    alt: "Caffè del mattino al chiosco",
    category: "atmosfera",
  },
  {
    src: "https://images.unsplash.com/photo-1476673160081-cf065607f449?auto=format&fit=crop&w=1200&q=80",
    alt: "Onde che accarezzano la riva al tramonto",
    category: "spiaggia",
  },
  {
    src: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1200&q=80",
    alt: "Cocktail colorati pronti per l'aperitivo",
    category: "atmosfera",
  },
];

/* ------------------------------------------------------------------ */
/*  IMMAGINI PRINCIPALI DEL SITO                                       */
/* ------------------------------------------------------------------ */

// ➜ Sostituisci con le foto reali del chiosco
export const siteImages = {
  heroFallback:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80",
  chiosco:
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
  spiaggia:
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=80",
  tramonto:
    "https://images.unsplash.com/photo-1495954484750-af469f2f9be5?auto=format&fit=crop&w=1600&q=80",
  aperitivo:
    "https://images.unsplash.com/photo-1507400492013-162706c8c05e?auto=format&fit=crop&w=1200&q=80",
  colazione:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  pranzo:
    "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=1200&q=80",
  mare: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1600&q=80",
} as const;
