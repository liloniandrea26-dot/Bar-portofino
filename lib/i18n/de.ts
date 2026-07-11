import type { Dictionary } from "./index";

/** DEUTSCHES Wörterbuch. [ZU BESTÄTIGEN]-Felder warten auf die echten Kundendaten. */
export const de: Dictionary = {
  langName: "Deutsch",
  meta: {
    title: "Peperoncino & Co — Restaurant in Lignano Sabbiadoro",
    description:
      "Restaurant in Lignano Sabbiadoro: italienische Küche, vegetarische Gerichte, Außenterrasse und Live-Musik. Via Carinzia 23, geöffnet bis 23 Uhr. Speisekarte herunterladen und vorbeikommen.",
  },
  brand: {
    name: "Peperoncino & Co",
    tagline: "Restaurant · Lignano Sabbiadoro",
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
      "Pizza, frischer Fisch und italienische Küche nur wenige Schritte vom Meer: Tische im Freien, Live-Musik und echte Sommerabende. Täglich von 11 bis 23 Uhr.",
    ctaMenu: "Speisekarte öffnen",
    ctaInfo: "Informationen",
  },
  about: {
    eyebrow: "Über uns",
    title: "Unsere Geschichte, Gericht für Gericht",
    p1: "[ZU BESTÄTIGEN - Textvorschlag] Im Herzen von Lignano Sabbiadoro trifft bei Peperoncino & Co italienische Küche auf Urlaubsstimmung: Tische im Freien, mit Sorgfalt zubereitete Gerichte und Abende mit Live-Musik.",
    p2: "[ZU BESTÄTIGEN - Textvorschlag] Unsere Karte bietet für alle etwas — mit echter Aufmerksamkeit für vegetarische Gerichte und saisonale Zutaten. Und die Zahlen sprechen für sich: 4,3 Sterne bei Google mit fast tausend Bewertungen.",
    badges: ["Außenterrasse", "Vegetarische Gerichte", "Live-Musik", "★ 4,3 bei Google"],
  },
  menuSection: {
    eyebrow: "Die Speisekarte",
    title: "Vom Ofen auf den Tisch",
    intro:
      "Laden Sie die vollständige Speisekarte als PDF herunter oder blättern Sie hier auf der Website durch die Kategorien. Keine Online-Bestellung: Die Karte genießt man am Tisch.",
    download: "Speisekarte öffnen (PDF)",
    downloadNote: "Offizielle Sommer-Speisekarte als PDF — Italienisch, Englisch und Deutsch",
    viewOnline: "Speisekarte online ansehen",
    allergensLink: "Zur Allergen-Tabelle",
  },
  menuPage: {
    title: "Die Speisekarte",
    breadcrumb: "Speisekarte",
    subtitle:
      "Die Sommer-Karte: Fisch- und Fleischgerichte, Pizzen aus 100% Mehl aus Friaul-Julisch Venetien. Durchschnittspreis 20-30 € pro Person.",
    note: "Die Karte kann sich saisonal und je nach Fang des Tages ändern. Bei Allergien und Unverträglichkeiten siehe die Seite Allergene oder fragen Sie unser Personal.",
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Ein Blick in unsere Küche",
    subtitle: "Die Gerichte, der Gastraum, die Abende: das Restaurant in Bildern.",
    alts: [
      "Fisch-Vorspeise: gratinierte Jakobsmuscheln, Mies- und Venusmuscheln",
      "Maccheroni 'Gran Scogliera' in der Pfanne mit Muscheln und Riesengarnelen",
      "Spaghetti alla Carbonara am Tisch serviert",
      "Der Gastraum des Restaurants mit gedeckten Tischen",
      "Gourmet-Pizza mit Pistazien, Speck und Burrata",
      "Der Gastraum von Peperoncino & Co",
      "Frisch gebackene Gourmet-Pizza",
      "Die Fischgerichte des Restaurants",
    ],
  },
  hours: {
    eyebrow: "Öffnungszeiten",
    title: "Wann wir geöffnet haben",
    closedLabel: "Ruhetag",
    note: "Durchgehend geöffnet: Küche und Pizzeria immer offen.",
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
      "Lieber Gast, wenn Sie Allergien und/oder Unverträglichkeiten haben, fragen Sie uns gerne zu unseren Gerichten: Wir beraten Sie bestmöglich. Nachfolgend die 14 von der EU-Verordnung erfassten Stoffe; Informationen zu jedem Gericht erhalten Sie im Restaurant.",
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
        a: "Wir haben täglich von 11 bis 23 Uhr durchgehend geöffnet: Küche und Pizzeria stehen vom Mittag bis zum Abend zur Verfügung.",
      },
      {
        q: "Muss ich reservieren?",
        a: "Eine Reservierung ist nicht erforderlich, wird aber an Wochenenden und Sommerabenden empfohlen. Rufen Sie uns an oder schreiben Sie uns auf WhatsApp: +39 0431 403099.",
      },
      {
        q: "Bieten Sie Abholung und Lieferung an?",
        a: "Ja. Abholung kann telefonisch bestellt werden; die Lieferung nach Hause läuft täglich von 12 bis 23 Uhr über den Dienst deliveryco.it.",
      },
      {
        q: "Gibt es vegetarische Gerichte?",
        a: "Ja: ein vegetarisches Gericht mit gegrilltem Dobbiaco-DOP-Käse und Grillgemüse, ein vegetarisches Sandwich, Gemüsepizzen, große Salate und viele weitere fleisch- und fischfreie Optionen.",
      },
      {
        q: "Wie gehen Sie mit Allergien und Unverträglichkeiten um?",
        a: "Unser Personal berät Sie gerne: Siehe die Seite Allergene mit den 14 Stoffen gemäß EU-Verordnung 1169/2011 und teilen Sie uns Ihre Bedürfnisse immer vor der Bestellung mit.",
      },
      {
        q: "Gibt es Tische im Freien?",
        a: "Ja, das Restaurant verfügt über eine Außenterrasse: perfekt für Mittag- und Abendessen an Sommertagen.",
      },
      {
        q: "Gibt es Live-Musik?",
        a: "Ja, wir veranstalten Abende mit Live-Musik. [ZU BESTÄTIGEN] Der aktuelle Kalender wird auf unseren Social-Media-Kanälen veröffentlicht.",
      },
      {
        q: "Sind Sie familienfreundlich?",
        a: "Natürlich! Wir haben eine eigene Kinderkarte: Pennette, Tortellini, Cordon Bleu, Nuggets und sogar die Mickey-Mouse-Pizza mit Würstchen und Pommes.",
      },
      {
        q: "Wie viel kostet ein Essen im Durchschnitt?",
        a: "Etwa 20-30 € pro Person. Das Gedeck kostet € 3,50. Pizzen ab € 6,80; Tagesgerichte variieren je nach Fang.",
      },
      {
        q: "Kann ich mit Karte zahlen?",
        a: "[ZU BESTÄTIGEN] Wir akzeptieren die gängigen Zahlungsmethoden (Bargeld und Karten).",
      },
      {
        q: "Sind Haustiere erlaubt?",
        a: "[ZU BESTÄTIGEN] Bitte fragen Sie bei der Reservierung nach.",
      },
      {
        q: "Gibt es Parkplätze in der Nähe?",
        a: "[ZU BESTÄTIGEN] Das Restaurant liegt in der Via Carinzia 23, Lignano Sabbiadoro: Beschreiben Sie hier die Parkmöglichkeiten.",
      },
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
