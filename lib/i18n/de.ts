import type { Dictionary } from "./index";

/** DEUTSCHES Wörterbuch. [AUSZUFÜLLEN]-Felder warten auf die echten Kundendaten. */
export const de: Dictionary = {
  langName: "Deutsch",
  meta: {
    title: "[AUSZUFÜLLEN] Pizzeria-Name — Pizzeria in Stadt",
    description:
      "[AUSZUFÜLLEN] SEO-Beschreibung der Pizzeria: Spezialitäten, Lage, Öffnungszeiten. Max. ~155 Zeichen.",
  },
  brand: {
    name: "Nome Pizzeria",
    tagline: "Pizzeria",
  },
  nav: {
    home: "Home",
    info: "Informationen",
    call: "Anrufen",
    menu: "Speisekarte",
    allergens: "Allergene",
    privacy: "Datenschutz",
    gallery: "Galerie",
    faq: "FAQ",
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
      "[AUSZUFÜLLEN] Ein einprägsamer Satz, der die Pizzeria vorstellt: Spezialitäten, Atmosphäre, das Besondere.",
    ctaMenu: "Speisekarte öffnen",
    ctaInfo: "Informationen",
  },
  about: {
    eyebrow: "Über uns",
    title: "Unsere Geschichte, Gericht für Gericht",
    p1: "[AUSZUFÜLLEN] Erster Teil: seit wann es die Pizzeria gibt, wer sie führt, was sie besonders macht.",
    p2: "[AUSZUFÜLLEN] Zweiter Teil: die Philosophie in der Küche, die Zutaten, die Verbindung zur Region.",
    badges: ["[AUSZUFÜLLEN] Stärke 1", "[AUSZUFÜLLEN] Stärke 2", "[AUSZUFÜLLEN] Stärke 3"],
  },
  menuSection: {
    eyebrow: "Die Speisekarte",
    title: "Vom Ofen auf den Tisch",
    intro:
      "Laden Sie die vollständige Speisekarte als PDF herunter oder blättern Sie hier auf der Website durch die Kategorien. Keine Online-Bestellung: Die Karte genießt man am Tisch.",
    download: "Speisekarte öffnen (PDF)",
    downloadNote: "[AUSZUFÜLLEN] Echte Speisekarte als PDF in public/menu.pdf hochladen",
    viewOnline: "Speisekarte online ansehen",
    allergensLink: "Zur Allergen-Tabelle",
  },
  menuPage: {
    title: "Die Speisekarte",
    breadcrumb: "Speisekarte",
    subtitle:
      "[AUSZUFÜLLEN] Untertitel der Menü-Seite: Spezialitäten und Preisspanne.",
    note: "Die Karte kann sich saisonal ändern. Bei Allergien und Unverträglichkeiten siehe die Seite Allergene oder fragen Sie unser Personal.",
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Ein Blick in unsere Küche",
    subtitle: "Die Gerichte, der Gastraum, die Abende: das Restaurant in Bildern.",
    alts: Array(8).fill("Foto des Lokals — zu ersetzen") as string[],
  },
  hours: {
    eyebrow: "Öffnungszeiten",
    title: "Wann wir geöffnet haben",
    closedLabel: "Ruhetag",
    note: "[AUSZUFÜLLEN] Hinweis zu den Öffnungszeiten (z. B. durchgehend geöffnet, Saisonpausen).",
    days: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
    everydayLabel: "Täglich",
    deliveryLabel: "Lieferservice",
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
  faqPage: {
    title: "Häufige Fragen",
    breadcrumb: "FAQ",
    subtitle: "Alles, was Sie vor Ihrem Besuch wissen sollten: Öffnungszeiten, Reservierungen, Lieferung, Allergien und mehr.",
    items: [
      {
        q: "Wie sind die Öffnungszeiten?",
        a: "[AUSZUFÜLLEN] Antwort einfügen.",
      },
      {
        q: "Muss ich reservieren?",
        a: "[AUSZUFÜLLEN] Antwort einfügen.",
      },
      {
        q: "Bieten Sie Abholung und Lieferung an?",
        a: "[AUSZUFÜLLEN] Antwort einfügen.",
      },
      {
        q: "Gibt es vegetarische Gerichte?",
        a: "[AUSZUFÜLLEN] Antwort einfügen.",
      },
      {
        q: "Wie gehen Sie mit Allergien und Unverträglichkeiten um?",
        a: "[AUSZUFÜLLEN] Antwort einfügen.",
      },
      {
        q: "Gibt es Tische im Freien?",
        a: "[AUSZUFÜLLEN] Antwort einfügen.",
      },
      {
        q: "Gibt es Live-Musik?",
        a: "[AUSZUFÜLLEN] Antwort einfügen.",
      },
      {
        q: "Sind Sie familienfreundlich?",
        a: "[AUSZUFÜLLEN] Antwort einfügen.",
      },
      {
        q: "Wie viel kostet ein Essen im Durchschnitt?",
        a: "[AUSZUFÜLLEN] Antwort einfügen.",
      },
      {
        q: "Kann ich mit Karte zahlen?",
        a: "[AUSZUFÜLLEN] Antwort einfügen.",
      },
      {
        q: "Sind Haustiere erlaubt?",
        a: "[AUSZUFÜLLEN] Antwort einfügen.",
      },
      {
        q: "Gibt es Parkplätze in der Nähe?",
        a: "[AUSZUFÜLLEN] Antwort einfügen.",
      },
    ],
  },
  privacyPage: {
    title: "Datenschutzerklärung",
    breadcrumb: "Datenschutz",
    subtitle: "Informationen zur Verarbeitung personenbezogener Daten gemäß EU-Verordnung 2016/679 (DSGVO).",
    updated: "[AUSZUFÜLLEN] Letzte Aktualisierung",
    sections: [
      {
        h: "Verantwortlicher",
        p: "[AUSZUFÜLLEN] Firmenname, Adresse, USt-IdNr. und Kontaktdaten des Verantwortlichen.",
      },
      {
        h: "Verarbeitete Daten",
        p: "Diese Website erfordert keine Registrierung und erhebt keine personenbezogenen Daten über Formulare. Beim Surfen können technische Daten (IP-Adresse, Server-Logs) verarbeitet werden, die für den Betrieb der Website erforderlich sind.",
      },
      {
        h: "Cookies und Dienste Dritter",
        p: "Die Website bindet eine Google-Maps-Karte ein, die Cookies von Drittanbietern setzen kann. Details finden Sie in der Datenschutzerklärung von Google. [AUSZUFÜLLEN] Ergänzen Sie hier die vollständige Liste der tatsächlich genutzten Dienste (z. B. Statistik).",
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
    credits: "[AUSZUFÜLLEN] Website erstellt von — Name/Agentur",
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
