import type { Dictionary } from "./index";

/** DEUTSCHES Wörterbuch. [ZU BESTÄTIGEN]-Felder warten auf die echten Kundendaten. */
export const de: Dictionary = {
  langName: "Deutsch",
  meta: {
    title: "[ZU BESTÄTIGEN] Restaurantname — Restaurant & Pizzeria",
    description:
      "[ZU BESTÄTIGEN] Italienisches Restaurant und Pizzeria: Pizza aus dem Holzofen und saisonale Zutaten. Laden Sie die Speisekarte herunter und besuchen Sie uns.",
  },
  brand: {
    name: "Restaurantname",
    tagline: "Restaurant · Pizzeria",
  },
  nav: {
    home: "Home",
    info: "Informationen",
    call: "Anrufen",
    menu: "Speisekarte",
    allergens: "Allergene",
    privacy: "Datenschutz",
    language: "Sprache",
    openMenu: "Navigationsmenü öffnen",
    closeMenu: "Navigationsmenü schließen",
  },
  status: {
    open: "Jetzt geöffnet",
    closed: "Derzeit geschlossen",
  },
  hero: {
    subtitle:
      "[ZU BESTÄTIGEN] Italienische Küche und Pizza im Herzen der Stadt: frische Zutaten, Holzofen und herzliche Gastfreundschaft.",
    ctaMenu: "Speisekarte herunterladen",
    ctaInfo: "Informationen",
  },
  about: {
    eyebrow: "Über uns",
    title: "Unsere Geschichte, Gericht für Gericht",
    p1: "[ZU BESTÄTIGEN] Kurze Vorstellung des Lokals: seit wann es besteht, wer es führt, was es besonders macht.",
    p2: "[ZU BESTÄTIGEN] Zweiter Teil: die Philosophie in der Küche, die Auswahl der Zutaten, die Verbindung zur Region.",
    badges: ["Holzofen", "Saisonale Zutaten", "Lang gereifter Teig"],
  },
  menuSection: {
    eyebrow: "Die Speisekarte",
    title: "Vom Ofen auf den Tisch",
    intro:
      "Laden Sie die vollständige Speisekarte als PDF herunter oder blättern Sie hier auf der Website durch die Kategorien. Keine Online-Bestellung: Die Karte genießt man am Tisch.",
    download: "Speisekarte herunterladen (PDF)",
    downloadNote: "Aktuelles PDF — [ZU BESTÄTIGEN] echte Speisekarte hochladen",
    viewOnline: "Speisekarte online ansehen",
    allergensLink: "Zur Allergen-Tabelle",
  },
  menuPage: {
    title: "Die Speisekarte",
    breadcrumb: "Speisekarte",
    subtitle: "Unsere Gerichte aus Küche und Ofen. Gerichte und Preise [ZU BESTÄTIGEN].",
    note: "Die Karte kann sich saisonal ändern. Bei Allergien und Unverträglichkeiten siehe die Seite Allergene oder fragen Sie unser Personal.",
    priceLabel: "Preis",
    categories: [
      {
        id: "antipasti",
        label: "Vorspeisen",
        items: [
          { name: "[ZU BESTÄTIGEN] Vorspeise 1", desc: "Beschreibung der Zutaten.", price: "€ 0,00" },
          { name: "[ZU BESTÄTIGEN] Vorspeise 2", desc: "Beschreibung der Zutaten.", price: "€ 0,00" },
          { name: "[ZU BESTÄTIGEN] Vorspeise 3", desc: "Beschreibung der Zutaten.", price: "€ 0,00" },
        ],
      },
      {
        id: "primi",
        label: "Erste Gänge",
        items: [
          { name: "[ZU BESTÄTIGEN] Erster Gang 1", desc: "Beschreibung der Zutaten.", price: "€ 0,00" },
          { name: "[ZU BESTÄTIGEN] Erster Gang 2", desc: "Beschreibung der Zutaten.", price: "€ 0,00" },
          { name: "[ZU BESTÄTIGEN] Erster Gang 3", desc: "Beschreibung der Zutaten.", price: "€ 0,00" },
        ],
      },
      {
        id: "pizze",
        label: "Pizzen",
        items: [
          { name: "[ZU BESTÄTIGEN] Pizza 1", desc: "Beschreibung des Belags.", price: "€ 0,00" },
          { name: "[ZU BESTÄTIGEN] Pizza 2", desc: "Beschreibung des Belags.", price: "€ 0,00" },
          { name: "[ZU BESTÄTIGEN] Pizza 3", desc: "Beschreibung des Belags.", price: "€ 0,00" },
          { name: "[ZU BESTÄTIGEN] Pizza 4", desc: "Beschreibung des Belags.", price: "€ 0,00" },
        ],
      },
      {
        id: "secondi",
        label: "Hauptgerichte",
        items: [
          { name: "[ZU BESTÄTIGEN] Hauptgericht 1", desc: "Beschreibung der Zutaten.", price: "€ 0,00" },
          { name: "[ZU BESTÄTIGEN] Hauptgericht 2", desc: "Beschreibung der Zutaten.", price: "€ 0,00" },
        ],
      },
      {
        id: "contorni",
        label: "Beilagen",
        items: [
          { name: "[ZU BESTÄTIGEN] Beilage 1", desc: "Beschreibung der Beilage.", price: "€ 0,00" },
          { name: "[ZU BESTÄTIGEN] Beilage 2", desc: "Beschreibung der Beilage.", price: "€ 0,00" },
        ],
      },
      {
        id: "dolci",
        label: "Desserts",
        items: [
          { name: "[ZU BESTÄTIGEN] Dessert 1", desc: "Beschreibung des Desserts.", price: "€ 0,00" },
          { name: "[ZU BESTÄTIGEN] Dessert 2", desc: "Beschreibung des Desserts.", price: "€ 0,00" },
        ],
      },
      {
        id: "bevande",
        label: "Getränke",
        items: [
          { name: "[ZU BESTÄTIGEN] Getränk 1", desc: "Wasser, Softdrinks, Bier und Wein.", price: "€ 0,00" },
          { name: "[ZU BESTÄTIGEN] Getränk 2", desc: "Wasser, Softdrinks, Bier und Wein.", price: "€ 0,00" },
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Ein Blick in unsere Küche",
    alts: [
      "Frisch gebackene Pizza mit Tomaten und Basilikum",
      "Der Holzofen des Restaurants",
      "Teller mit hausgemachter frischer Pasta",
      "Gedeckter Tisch im Restaurant",
      "Dessert des Tages am Tisch serviert",
      "Der Gastraum des Lokals",
      "Die Küche während des Service",
      "Weingläser an der Theke",
    ],
  },
  hours: {
    eyebrow: "Öffnungszeiten",
    title: "Wann wir geöffnet haben",
    closedLabel: "Ruhetag",
    note: "[ZU BESTÄTIGEN] Unverbindliche Zeiten: bitte die echten Öffnungszeiten prüfen und aktualisieren.",
    days: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
    todayLabel: "heute",
  },
  location: {
    eyebrow: "Wo Sie uns finden",
    title: "Besuchen Sie uns",
    addressLabel: "Adresse",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
    vatLabel: "USt-IdNr.",
    directions: "Route planen",
    mapTitle: "Karte: Standort des Restaurants",
  },
  infoPage: {
    title: "Informationen",
    breadcrumb: "Informationen",
    subtitle: "Über uns, Öffnungszeiten, Kontakt und Anfahrt.",
  },
  allergensPage: {
    title: "Allergene",
    breadcrumb: "Allergene",
    subtitle:
      "Liste der 14 Stoffe oder Erzeugnisse, die Allergien oder Unverträglichkeiten auslösen können, gemäß EU-Verordnung 1169/2011 (Anhang II).",
    intro:
      "Einige Gerichte unserer Karte können einen oder mehrere der folgenden Allergene enthalten. Detaillierte Informationen zu jedem Gericht erhalten Sie im Restaurant: Bitte fragen Sie unser Personal vor der Bestellung.",
    disclaimer:
      "Trotz größter Sorgfalt bei der Zubereitung können Kreuzkontaminationen nicht ausgeschlossen werden. Bei schweren Allergien informieren Sie bitte immer unser Personal.",
    items: [
      { icon: "🌾", name: "Glutenhaltiges Getreide", examples: "Weizen, Roggen, Gerste, Hafer, Dinkel, Kamut" },
      { icon: "🦐", name: "Krebstiere", examples: "Garnelen, Kaisergranat, Krabben und daraus gewonnene Erzeugnisse" },
      { icon: "🥚", name: "Eier", examples: "Eier und Eierzeugnisse" },
      { icon: "🐟", name: "Fisch", examples: "Fisch und Fischerzeugnisse" },
      { icon: "🥜", name: "Erdnüsse", examples: "Erdnüsse und daraus gewonnene Erzeugnisse" },
      { icon: "🫘", name: "Soja", examples: "Sojabohnen und Sojaerzeugnisse" },
      { icon: "🥛", name: "Milch", examples: "Milch und Milcherzeugnisse, einschließlich Laktose" },
      { icon: "🌰", name: "Schalenfrüchte", examples: "Mandeln, Haselnüsse, Walnüsse, Pistazien, Cashewnüsse" },
      { icon: "🥬", name: "Sellerie", examples: "Sellerie und daraus gewonnene Erzeugnisse" },
      { icon: "🟡", name: "Senf", examples: "Senf und daraus gewonnene Erzeugnisse" },
      { icon: "⚪", name: "Sesamsamen", examples: "Sesamsamen und daraus gewonnene Erzeugnisse" },
      { icon: "🍷", name: "Schwefeldioxid und Sulfite", examples: "in Konzentrationen über 10 mg/kg bzw. 10 mg/l" },
      { icon: "🌼", name: "Lupinen", examples: "Lupinen und daraus gewonnene Erzeugnisse" },
      { icon: "🦪", name: "Weichtiere", examples: "Muscheln, Venusmuscheln, Tintenfisch und daraus gewonnene Erzeugnisse" },
    ],
  },
  privacyPage: {
    title: "Datenschutzerklärung",
    breadcrumb: "Datenschutz",
    subtitle: "Informationen zur Verarbeitung personenbezogener Daten gemäß EU-Verordnung 2016/679 (DSGVO).",
    updated: "[ZU BESTÄTIGEN] Letzte Aktualisierung",
    sections: [
      {
        h: "Verantwortlicher",
        p: "[ZU BESTÄTIGEN] Firmenname, Adresse, USt-IdNr. und Kontaktdaten des Verantwortlichen.",
      },
      {
        h: "Verarbeitete Daten",
        p: "Diese Website erfordert keine Registrierung und erhebt keine personenbezogenen Daten über Formulare. Beim Surfen können technische Daten (IP-Adresse, Server-Logs) verarbeitet werden, die für den Betrieb der Website erforderlich sind.",
      },
      {
        h: "Cookies und Dienste Dritter",
        p: "Die Website bindet eine Google-Maps-Karte ein, die Cookies von Drittanbietern setzen kann. Details finden Sie in der Datenschutzerklärung von Google. [ZU BESTÄTIGEN] Ergänzen Sie hier die vollständige Liste der tatsächlich genutzten Dienste (z. B. Statistik).",
      },
      {
        h: "Ihre Rechte",
        p: "Als betroffene Person können Sie die Rechte gemäß Art. 15-22 DSGVO (Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch) ausüben, indem Sie sich an die oben genannten Kontaktdaten des Verantwortlichen wenden.",
      },
    ],
  },
  footer: {
    quickLinks: "Entdecken",
    contacts: "Kontakt",
    follow: "Folgen Sie uns",
    hoursTitle: "Öffnungszeiten",
    credits: "[ZU BESTÄTIGEN] Website erstellt von — Name/Agentur",
  },
  cookie: {
    title: "Diese Website verwendet Cookies von Drittanbietern",
    text: "Wir verwenden nur technisch notwendige Cookies und — mit Ihrer Zustimmung — Google-Maps-Cookies, um Ihnen die Karte des Restaurants anzuzeigen. Keine Werbe- oder Profiling-Cookies.",
    accept: "Akzeptieren",
    reject: "Ablehnen",
    privacyLink: "Datenschutzerklärung lesen",
    mapBlockedTitle: "Karte deaktiviert",
    mapBlockedText: "Die Google-Maps-Karte bleibt deaktiviert, bis Sie Cookies von Drittanbietern akzeptieren.",
    mapBlockedButton: "Akzeptieren und Karte anzeigen",
    mapExternal: "In Google Maps öffnen",
  },
  common: {
    backHome: "Zurück zur Startseite",
  },
};
