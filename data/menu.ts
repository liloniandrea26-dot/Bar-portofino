/**
 * ============================================================
 *  MENU — ⭐ DA COMPILARE ⭐
 * ============================================================
 *  Struttura di esempio per una pizzeria: sostituisci categorie,
 *  piatti, descrizioni (nelle 3 lingue) e prezzi con quelli reali
 *  del cliente. Aggiungi o togli categorie liberamente.
 *  L'asterisco * nei nomi indica prodotti surgelati (se serve).
 * ============================================================
 */

export interface LocalizedText {
  it: string;
  en: string;
  de: string;
}

export interface MenuItem {
  name: string;
  desc?: LocalizedText;
  price: string;
}

export interface MenuCategory {
  id: string;
  label: LocalizedText;
  items: MenuItem[];
}

export const menuNotes = {
  cover: {
    it: "[DA COMPILARE] Coperto € 0,00 · Prezzo medio 00-00 € a persona",
    en: "[TO BE FILLED IN] Cover charge € 0.00 · Average price € 00-00 per person",
    de: "[AUSZUFÜLLEN] Gedeck € 0,00 · Durchschnittspreis 00-00 € pro Person",
  },
  frozen: {
    it: "* prodotti surgelati o congelati (rimuovi se non serve)",
    en: "* frozen products (remove if not needed)",
    de: "* Kühl- und Tiefkühlprodukte (entfernen falls nicht benötigt)",
  },
  flour: {
    it: "[DA COMPILARE] Eventuale nota su impasti e farine (es. lunga lievitazione, farine locali)",
    en: "[TO BE FILLED IN] Optional note about dough and flours",
    de: "[AUSZUFÜLLEN] Optionaler Hinweis zu Teig und Mehlen",
  },
} as const;

export const menuCategories: MenuCategory[] = [
  {
    id: "antipasti",
    label: { it: "Antipasti", en: "Starters", de: "Vorspeisen" },
    items: [
      {
        name: "[DA COMPILARE] Antipasto 1",
        desc: {
          it: "Descrizione degli ingredienti.",
          en: "Description of the ingredients.",
          de: "Beschreibung der Zutaten.",
        },
        price: "€ 0,00",
      },
      {
        name: "[DA COMPILARE] Antipasto 2",
        desc: {
          it: "Descrizione degli ingredienti.",
          en: "Description of the ingredients.",
          de: "Beschreibung der Zutaten.",
        },
        price: "€ 0,00",
      },
    ],
  },
  {
    id: "pizze-classiche",
    label: { it: "Pizze Classiche", en: "Classic Pizzas", de: "Klassische Pizzen" },
    items: [
      {
        name: "Margherita",
        desc: {
          it: "Pomodoro, mozzarella (esempio: sostituisci con le tue pizze).",
          en: "Tomato, mozzarella (example: replace with your pizzas).",
          de: "Tomaten, Mozzarella (Beispiel: durch eigene Pizzen ersetzen).",
        },
        price: "€ 0,00",
      },
      {
        name: "[DA COMPILARE] Pizza 2",
        desc: { it: "Ingredienti.", en: "Toppings.", de: "Belag." },
        price: "€ 0,00",
      },
      {
        name: "[DA COMPILARE] Pizza 3",
        desc: { it: "Ingredienti.", en: "Toppings.", de: "Belag." },
        price: "€ 0,00",
      },
    ],
  },
  {
    id: "pizze-speciali",
    label: { it: "Pizze Speciali", en: "Special Pizzas", de: "Spezial-Pizzen" },
    items: [
      {
        name: "[DA COMPILARE] Speciale 1",
        desc: { it: "Ingredienti.", en: "Toppings.", de: "Belag." },
        price: "€ 0,00",
      },
      {
        name: "[DA COMPILARE] Speciale 2",
        desc: { it: "Ingredienti.", en: "Toppings.", de: "Belag." },
        price: "€ 0,00",
      },
    ],
  },
  {
    id: "dolci",
    label: { it: "Dolci", en: "Desserts", de: "Desserts" },
    items: [
      {
        name: "[DA COMPILARE] Dolce 1",
        desc: { it: "Descrizione.", en: "Description.", de: "Beschreibung." },
        price: "€ 0,00",
      },
    ],
  },
  {
    id: "bevande",
    label: { it: "Bevande", en: "Drinks", de: "Getränke" },
    items: [
      {
        name: "[DA COMPILARE] Bevande e birre",
        desc: {
          it: "Acqua, bibite, birre alla spina e in bottiglia, vini.",
          en: "Water, soft drinks, draft and bottled beers, wines.",
          de: "Wasser, Softdrinks, Bier vom Fass und in Flaschen, Weine.",
        },
        price: "€ 0,00",
      },
    ],
  },
];
