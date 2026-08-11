/**
 * Dizionario ITALIANO — fonte di verità per la struttura dei testi.
 * Tutti i campi [DA COMPILARE] vanno sostituiti con i dati reali del cliente.
 */
export const it = {
  langName: "Italiano",
  meta: {
    title: "[DA COMPILARE] Nome Pizzeria — Pizzeria a Città",
    description:
      "[DA COMPILARE] Descrizione SEO della pizzeria: specialità, zona, orari. Max ~155 caratteri.",
  },
  brand: {
    name: "Nome Pizzeria",
    tagline: "Pizzeria",
  },
  nav: {
    home: "Home",
    info: "Informazioni",
    call: "Chiamaci",
    menu: "Menu",
    allergens: "Allergeni",
    privacy: "Privacy Policy",
    gallery: "Galleria",
    faq: "FAQ",
    language: "Lingua",
    openMenu: "Apri il menu di navigazione",
    closeMenu: "Chiudi il menu di navigazione",
  },
  status: {
    open: "Aperto ora",
    closed: "Chiuso ora",
  },
  hero: {
    subtitle:
      "[DA COMPILARE] Una frase accattivante che presenta la pizzeria in una riga: specialità, atmosfera, cosa la rende unica.",
    ctaMenu: "Apri il Menu",
    ctaInfo: "Informazioni",
  },
  about: {
    eyebrow: "Chi siamo",
    title: "La nostra storia, un piatto alla volta",
    p1: "[DA COMPILARE] Prima parte del racconto: da quanto esiste la pizzeria, chi la guida, cosa la rende speciale.",
    p2: "[DA COMPILARE] Seconda parte: la filosofia in cucina, gli ingredienti, il legame col territorio.",
    badges: ["[DA COMPILARE] Punto di forza 1", "[DA COMPILARE] Punto di forza 2", "[DA COMPILARE] Punto di forza 3"],
  },
  menuSection: {
    eyebrow: "Il Menu",
    title: "Dal forno alla tavola",
    intro:
      "Scarica il menu completo in PDF oppure sfoglia le categorie qui sul sito. Nessun ordine online: il menu è solo da gustare al tavolo.",
    download: "Apri il Menu (PDF)",
    downloadNote: "[DA COMPILARE] Carica il PDF reale del menu in public/menu.pdf",
    viewOnline: "Sfoglia il menu sul sito",
    allergensLink: "Consulta la tabella allergeni",
  },
  menuPage: {
    title: "Il Menu",
    breadcrumb: "Menu",
    subtitle:
      "[DA COMPILARE] Sottotitolo della pagina menu: specialità e fascia prezzo.",
    note: "Menu soggetto a variazioni stagionali. Per allergie e intolleranze consulta la pagina Allergeni o chiedi al personale di sala.",
  },
  gallery: {
    eyebrow: "La Galleria",
    title: "Uno sguardo alla nostra cucina",
    subtitle: "I piatti, la sala, le serate: il ristorante raccontato per immagini.",
    alts: Array(8).fill("Foto del locale — da sostituire") as string[],
  },
  hours: {
    eyebrow: "Orari",
    title: "Quando siamo aperti",
    closedLabel: "Chiuso",
    note: "[DA COMPILARE] Nota sugli orari (es. orario continuato, chiusure stagionali).",
    days: ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"],
    everydayLabel: "Tutti i giorni",
    deliveryLabel: "Consegna a domicilio",
    todayLabel: "oggi",
  },
  location: {
    eyebrow: "Dove ci troviamo",
    title: "Vieni a trovarci",
    addressLabel: "Indirizzo",
    phoneLabel: "Telefono",
    emailLabel: "Email",
    vatLabel: "Partita IVA",
    directions: "Indicazioni stradali",
    mapTitle: "Mappa: dove si trova il ristorante",
  },
  infoPage: {
    title: "Informazioni",
    breadcrumb: "Informazioni",
    subtitle: "Chi siamo, orari, contatti e come raggiungerci.",
  },
  allergensPage: {
    title: "Allergeni",
    breadcrumb: "Allergeni",
    subtitle:
      "Elenco delle 14 sostanze o prodotti che provocano allergie o intolleranze ai sensi del Reg. UE 1169/2011 (Allegato II).",
    intro:
      "Alcuni piatti del nostro menu possono contenere uno o più dei seguenti allergeni. Le informazioni dettagliate piatto per piatto sono disponibili in sala: chiedi al personale prima di ordinare.",
    disclaimer:
      "Nonostante l'attenzione nella preparazione, non è possibile escludere contaminazioni crociate tra alimenti. In caso di allergia grave, segnalalo sempre al personale.",
    items: [
      { icon: "🌾", name: "Cereali contenenti glutine", examples: "grano, segale, orzo, avena, farro, kamut" },
      { icon: "🦐", name: "Crostacei", examples: "gamberi, scampi, granchi e prodotti derivati" },
      { icon: "🥚", name: "Uova", examples: "uova e prodotti a base di uova" },
      { icon: "🐟", name: "Pesce", examples: "pesce e prodotti a base di pesce" },
      { icon: "🥜", name: "Arachidi", examples: "arachidi e prodotti derivati" },
      { icon: "🫘", name: "Soia", examples: "soia e prodotti a base di soia" },
      { icon: "🥛", name: "Latte", examples: "latte e derivati, incluso lattosio" },
      { icon: "🌰", name: "Frutta a guscio", examples: "mandorle, nocciole, noci, pistacchi, anacardi" },
      { icon: "🥬", name: "Sedano", examples: "sedano e prodotti derivati" },
      { icon: "🟡", name: "Senape", examples: "senape e prodotti derivati" },
      { icon: "⚪", name: "Semi di sesamo", examples: "semi di sesamo e prodotti derivati" },
      { icon: "🍷", name: "Anidride solforosa e solfiti", examples: "in concentrazioni superiori a 10 mg/kg o 10 mg/l" },
      { icon: "🌼", name: "Lupini", examples: "lupini e prodotti a base di lupini" },
      { icon: "🦪", name: "Molluschi", examples: "cozze, vongole, calamari e prodotti derivati" },
    ],
  },
  faqPage: {
    title: "Domande Frequenti",
    breadcrumb: "FAQ",
    subtitle: "Tutto quello che c'è da sapere prima di venirci a trovare: orari, prenotazioni, consegne, allergie e molto altro.",
    items: [
      {
        q: "Quali sono gli orari di apertura?",
        a: "[DA COMPILARE] Risposta da inserire.",
      },
      {
        q: "Serve prenotare?",
        a: "[DA COMPILARE] Risposta da inserire.",
      },
      {
        q: "Fate asporto e consegna a domicilio?",
        a: "[DA COMPILARE] Risposta da inserire.",
      },
      {
        q: "Avete piatti vegetariani?",
        a: "[DA COMPILARE] Risposta da inserire.",
      },
      {
        q: "Come gestite allergie e intolleranze?",
        a: "[DA COMPILARE] Risposta da inserire.",
      },
      {
        q: "Avete tavoli all'aperto?",
        a: "[DA COMPILARE] Risposta da inserire.",
      },
      {
        q: "C'è musica dal vivo?",
        a: "[DA COMPILARE] Risposta da inserire.",
      },
      {
        q: "Siete adatti ai bambini?",
        a: "[DA COMPILARE] Risposta da inserire.",
      },
      {
        q: "Quanto si spende in media?",
        a: "[DA COMPILARE] Risposta da inserire.",
      },
      {
        q: "Si può pagare con carta?",
        a: "[DA COMPILARE] Risposta da inserire.",
      },
      {
        q: "Gli animali sono ammessi?",
        a: "[DA COMPILARE] Risposta da inserire.",
      },
      {
        q: "C'è parcheggio nelle vicinanze?",
        a: "[DA COMPILARE] Risposta da inserire.",
      },
    ],
  },
  privacyPage: {
    title: "Privacy Policy",
    breadcrumb: "Privacy Policy",
    subtitle: "Informativa sul trattamento dei dati personali ai sensi del Reg. UE 2016/679 (GDPR).",
    updated: "[DA COMPILARE] Ultimo aggiornamento",
    sections: [
      {
        h: "Titolare del trattamento",
        p: "[DA COMPILARE] Ragione sociale, indirizzo, P.IVA e contatti del titolare del trattamento dei dati.",
      },
      {
        h: "Dati trattati",
        p: "Questo sito non richiede registrazione e non raccoglie dati personali tramite form. Durante la navigazione possono essere trattati dati tecnici (indirizzo IP, log del server) necessari al funzionamento del sito.",
      },
      {
        h: "Cookie e servizi di terze parti",
        p: "Il sito incorpora una mappa di Google Maps che può impostare cookie di terze parti. Per i dettagli consulta la privacy policy di Google. [DA COMPILARE] Integra qui l'elenco completo dei servizi effettivamente utilizzati (es. statistiche).",
      },
      {
        h: "Diritti dell'interessato",
        p: "In qualità di interessato puoi esercitare i diritti previsti dagli artt. 15-22 del GDPR (accesso, rettifica, cancellazione, limitazione, opposizione) scrivendo ai contatti del titolare indicati sopra.",
      },
    ],
  },
  footer: {
    quickLinks: "Esplora",
    contacts: "Contatti",
    follow: "Seguici",
    hoursTitle: "Orari",
    credits: "[DA COMPILARE] Sito realizzato da — nome/agenzia",
  },
  cookie: {
    title: "Questo sito usa cookie di terze parti",
    text: "Usiamo solo i cookie tecnici necessari e, previo tuo consenso, quelli di Google Maps per mostrarti la mappa del ristorante. Nessun cookie di profilazione pubblicitaria.",
    accept: "Accetta",
    reject: "Rifiuta",
    privacyLink: "Leggi la Privacy Policy",
    mapBlockedTitle: "Mappa disattivata",
    mapBlockedText: "La mappa di Google Maps è disattivata finché non accetti i cookie di terze parti.",
    mapBlockedButton: "Accetta e mostra la mappa",
    mapExternal: "Apri in Google Maps",
  },
  common: {
    backHome: "Torna alla home",
  },
};
