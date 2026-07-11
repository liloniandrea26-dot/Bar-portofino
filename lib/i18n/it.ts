/**
 * Dizionario ITALIANO — fonte di verità per la struttura dei testi.
 * Tutti i campi [DA CONFERMARE] vanno sostituiti con i dati reali del cliente.
 */
export const it = {
  langName: "Italiano",
  meta: {
    title: "Peperoncino & Co — Ristorante a Lignano Sabbiadoro",
    description:
      "Ristorante a Lignano Sabbiadoro: cucina italiana, piatti vegetariani, tavoli all'aperto e musica dal vivo. In Via Carinzia 23, aperti fino alle 23. Scarica il menu e vieni a trovarci.",
  },
  brand: {
    name: "Peperoncino & Co",
    tagline: "Ristorante · Lignano Sabbiadoro",
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
      "Pizza, pesce fresco e cucina italiana a due passi dal mare: tavoli all'aperto, musica dal vivo e serate che sanno d'estate. Tutti i giorni, dalle 11 alle 23.",
    ctaMenu: "Apri il Menu",
    ctaInfo: "Informazioni",
  },
  about: {
    eyebrow: "Chi siamo",
    title: "La nostra storia, un piatto alla volta",
    p1: "[DA CONFERMARE - testo proposto] Nel cuore di Lignano Sabbiadoro, Peperoncino & Co è il posto dove la cucina italiana incontra l'atmosfera della vacanza: tavoli all'aperto, piatti preparati con cura e serate che si allungano con la musica dal vivo.",
    p2: "[DA CONFERMARE - testo proposto] La nostra carta accontenta tutti, con un'attenzione vera ai piatti vegetariani e agli ingredienti di stagione. E i numeri parlano da soli: 4,3 stelle su Google con quasi mille recensioni.",
    badges: ["Tavoli all'aperto", "Piatti vegetariani", "Musica dal vivo", "★ 4,3 su Google"],
  },
  menuSection: {
    eyebrow: "Il Menu",
    title: "Dal forno alla tavola",
    intro:
      "Scarica il menu completo in PDF oppure sfoglia le categorie qui sul sito. Nessun ordine online: il menu è solo da gustare al tavolo.",
    download: "Apri il Menu (PDF)",
    downloadNote: "Menu Summer ufficiale in PDF — italiano, inglese e tedesco",
    viewOnline: "Sfoglia il menu sul sito",
    allergensLink: "Consulta la tabella allergeni",
  },
  menuPage: {
    title: "Il Menu",
    breadcrumb: "Menu",
    subtitle:
      "Il menu Summer: cucina di mare e di terra, pizze con farine 100% del Friuli Venezia Giulia. Prezzo medio 20-30 € a persona.",
    note: "Menu soggetto a variazioni stagionali e alla disponibilità del pescato. Per allergie e intolleranze consulta la pagina Allergeni o chiedi al personale di sala.",
  },
  gallery: {
    eyebrow: "La Galleria",
    title: "Uno sguardo alla nostra cucina",
    subtitle: "I piatti, la sala, le serate: il ristorante raccontato per immagini.",
    alts: [
      "Pizza appena sfornata con pomodoro e basilico",
      "Il forno a legna del ristorante",
      "Piatto di pasta fresca fatta in casa",
      "Tavolo apparecchiato del ristorante",
      "Dolce del giorno servito al tavolo",
      "La sala interna del locale",
      "La cucina al lavoro durante il servizio",
      "Calici di vino al bancone",
    ],
  },
  hours: {
    eyebrow: "Orari",
    title: "Quando siamo aperti",
    closedLabel: "Chiuso",
    note: "[DA CONFERMARE] Orari indicativi: verifica e aggiorna le fasce reali di apertura.",
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
      "Caro ospite, se hai allergie e/o intolleranze alimentari chiedi pure informazioni sui nostri piatti: siamo preparati per consigliarti nel migliore dei modi. Qui sotto trovi le 14 sostanze individuate dalla normativa europea; le informazioni piatto per piatto sono disponibili in sala.",
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
        a: "Siamo aperti tutti i giorni dalle 11:00 alle 23:00, con orario continuato: cucina e pizzeria sempre a disposizione, dal pranzo alla sera.",
      },
      {
        q: "Serve prenotare?",
        a: "La prenotazione non è obbligatoria, ma è consigliata nei weekend e nelle sere d'estate. Chiamaci o scrivici su WhatsApp al +39 0431 403099.",
      },
      {
        q: "Fate asporto e consegna a domicilio?",
        a: "Sì. L'asporto si ordina telefonicamente; la consegna a domicilio è attiva tutti i giorni dalle 12:00 alle 23:00 tramite il servizio deliveryco.it.",
      },
      {
        q: "Avete piatti vegetariani?",
        a: "Sì: piatto vegetariano con formaggio Dobbiaco DOP alla piastra e verdure grigliate, panino vegetariano, pizze con verdure, insalatone e molte altre proposte senza carne né pesce.",
      },
      {
        q: "Come gestite allergie e intolleranze?",
        a: "Il nostro personale è preparato per consigliarti nel migliore dei modi: consulta la pagina Allergeni con le 14 sostanze del Reg. UE 1169/2011 e segnala sempre le tue esigenze prima di ordinare.",
      },
      {
        q: "Avete tavoli all'aperto?",
        a: "Sì, il locale dispone di tavoli all'aperto: perfetti per pranzi e cene nelle giornate estive.",
      },
      {
        q: "C'è musica dal vivo?",
        a: "Sì, organizziamo serate con musica dal vivo. [DA CONFERMARE] Il calendario aggiornato viene pubblicato sui nostri canali social.",
      },
      {
        q: "Siete adatti ai bambini?",
        a: "Certo! Abbiamo un menu baby dedicato: pennette, tortellini, cordon bleu, nuggets e persino la pizza Mickey Mouse con würstel e patatine.",
      },
      {
        q: "Quanto si spende in media?",
        a: "Indicativamente 20-30 € a persona. Il coperto è di € 3,50. Le pizze partono da € 6,80 e i piatti del giorno variano con il pescato.",
      },
      {
        q: "Si può pagare con carta?",
        a: "[DA CONFERMARE] Accettiamo i principali metodi di pagamento (contanti, carte e bancomat).",
      },
      {
        q: "Gli animali sono ammessi?",
        a: "[DA CONFERMARE] Chiedi conferma al momento della prenotazione.",
      },
      {
        q: "C'è parcheggio nelle vicinanze?",
        a: "[DA CONFERMARE] Il ristorante è in Via Carinzia 23, a Lignano Sabbiadoro: indica qui le possibilità di parcheggio della zona.",
      },
    ],
  },
  privacyPage: {
    title: "Privacy Policy",
    breadcrumb: "Privacy Policy",
    subtitle: "Informativa sul trattamento dei dati personali ai sensi del Reg. UE 2016/679 (GDPR).",
    updated: "[DA CONFERMARE] Ultimo aggiornamento",
    sections: [
      {
        h: "Titolare del trattamento",
        p: "[DA CONFERMARE] Ragione sociale, indirizzo, P.IVA e contatti del titolare del trattamento dei dati.",
      },
      {
        h: "Dati trattati",
        p: "Questo sito non richiede registrazione e non raccoglie dati personali tramite form. Durante la navigazione possono essere trattati dati tecnici (indirizzo IP, log del server) necessari al funzionamento del sito.",
      },
      {
        h: "Cookie e servizi di terze parti",
        p: "Il sito incorpora una mappa di Google Maps che può impostare cookie di terze parti. Per i dettagli consulta la privacy policy di Google. [DA CONFERMARE] Integra qui l'elenco completo dei servizi effettivamente utilizzati (es. statistiche).",
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
    credits: "[DA CONFERMARE] Sito realizzato da — nome/agenzia",
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
