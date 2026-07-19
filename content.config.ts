/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  MINI PITBULL QUEST — CONTENUTI PERSONALIZZATI
 * ═══════════════════════════════════════════════════════════════════════════
 *
 *  👉 QUESTO È L'UNICO FILE CHE DEVI MODIFICARE per personalizzare il gioco.
 *
 *  Cerca tutti i [PLACEHOLDER] e sostituiscili con i vostri contenuti reali.
 *  Le foto vanno messe in /public/photos/ con i nomi indicati qui sotto
 *  (puoi cambiarli, basta aggiornare i path). Se una foto non esiste ancora,
 *  il gioco mostra automaticamente un segnaposto elegante: puoi aggiungere
 *  le foto anche in un secondo momento senza rompere nulla.
 *
 *  Ogni livello ha:
 *   - `title`: il titolo mostrato nell'header del livello
 *   - i dati specifici del minigioco
 *   - `memory`: il testo del ricordo che appare quando il livello è completato
 *   - `memoryPhoto` (opzionale): foto mostrata insieme al ricordo
 * ═══════════════════════════════════════════════════════════════════════════
 */

export const config = {
  // ─── PROTAGONISTI ─────────────────────────────────────────────────────────
  me: {
    name: "[IL TUO NOME]", // es. "Andrea"
    initial: "A", // iniziale usata sulla busta della lettera finale
    emoji: "🧑‍🦱", // il "tuo" emoji (usato nel labirinto, nella mappa, ecc.)
  },
  her: {
    name: "Caterina",
    nickname: "Mini Pitbull",
    emoji: "🐶", // il "suo" emoji
    birthday: "[GG/MM/AAAA]", // data di nascita di lei, es. "26/07/1999"
  },

  // ─── DATE IMPORTANTI ─────────────────────────────────────────────────────
  dates: {
    firstMeeting: "[GG/MM/AAAA]", // primo incontro
    anniversary: "[GG/MM/AAAA]", // anniversario
  },

  // ─── SCHERMATA INIZIALE ──────────────────────────────────────────────────
  intro: {
    subtitle: "Un'avventura in 21 ricordi",
    text: "[PLACEHOLDER_INTRO — scrivi qui la tua introduzione. Es: «Amore mio, per il tuo compleanno ho costruito un piccolo mondo tutto nostro. 21 livelli, 21 ricordi. Alla fine c'è qualcosa per te. Buona avventura, Mini Pitbull.»]",
    buttonLabel: "Inizia l'avventura",
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 1 — QUIZ "QUANTO MI CONOSCI?"
  // ═══════════════════════════════════════════════════════════════════════
  level01: {
    title: "Quanto mi conosci?",
    questions: [
      {
        q: "[PLACEHOLDER — es. «Qual è la cosa che dico sempre quando ho fame?»]",
        options: ["[Risposta A]", "[Risposta B — quella giusta]", "[Risposta C]", "[Risposta D]"],
        correct: 1, // indice (0-3) della risposta corretta
      },
      {
        q: "[PLACEHOLDER — domanda 2 su di te, tono ironico]",
        options: ["[Risposta A — giusta]", "[Risposta B]", "[Risposta C]", "[Risposta D]"],
        correct: 0,
      },
      {
        q: "[PLACEHOLDER — domanda 3]",
        options: ["[Risposta A]", "[Risposta B]", "[Risposta C — giusta]", "[Risposta D]"],
        correct: 2,
      },
      {
        q: "[PLACEHOLDER — domanda 4]",
        options: ["[Risposta A]", "[Risposta B — giusta]", "[Risposta C]", "[Risposta D]"],
        correct: 1,
      },
      {
        q: "[PLACEHOLDER — domanda 5]",
        options: ["[Risposta A]", "[Risposta B]", "[Risposta C]", "[Risposta D — giusta]"],
        correct: 3,
      },
    ],
    memory: "[PLACEHOLDER_RICORDO_01 — un ricordo legato a quanto vi conoscete]",
    memoryPhoto: "/photos/foto-livello-01.jpg", // opzionale, metti null per nessuna foto
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 2 — MEMORY MATCH
  //  6 coppie: ogni carta è un emoji (o una vostra "cosa" ricorrente).
  //  Se vuoi usare foto al posto degli emoji, metti il path in `photo`
  //  (es. photo: "/photos/memory-01.jpg") e lascia l'emoji come fallback.
  // ═══════════════════════════════════════════════════════════════════════
  level02: {
    title: "Le nostre piccole cose",
    pairs: [
      { emoji: "🐶", label: "[es. Mini Pitbull]", photo: null as string | null },
      { emoji: "🍕", label: "[es. la nostra pizza]", photo: null as string | null },
      { emoji: "🌊", label: "[es. il mare]", photo: null as string | null },
      { emoji: "🎬", label: "[es. i nostri film]", photo: null as string | null },
      { emoji: "☕", label: "[es. il caffè insieme]", photo: null as string | null },
      { emoji: "💛", label: "[es. noi]", photo: null as string | null },
    ],
    memory: "[PLACEHOLDER_RICORDO_02]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 3 — PUZZLE (JIGSAW)
  //  Metti una foto importante in /public/photos/foto-livello-03.jpg
  //  (meglio se quadrata o quasi). Finché non c'è, appare un'illustrazione.
  // ═══════════════════════════════════════════════════════════════════════
  level03: {
    title: "Ricomponi il ricordo",
    photo: "/photos/foto-livello-03.jpg",
    photoCaption: "[PLACEHOLDER — didascalia della foto, es. «Il nostro primo viaggio»]",
    memory: "[PLACEHOLDER_RICORDO_03]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 4 — CRUCIVERBA
  //  ⚠️ Le parole devono incastrarsi nella griglia: se cambi le parole,
  //  aggiorna anche riga/colonna/direzione in modo che le lettere condivise
  //  coincidano. Le parole di default sono un esempio funzionante:
  //  sostituiscile con parole vostre della STESSA LUNGHEZZA per andare sul
  //  sicuro (o ridisegna la griglia).
  // ═══════════════════════════════════════════════════════════════════════
  level04: {
    title: "Le parole nostre",
    grid: { rows: 5, cols: 5 },
    entries: [
      { num: 1, word: "PUB", clue: "[PLACEHOLDER — es. «Dove ci siamo visti la prima volta»]", row: 0, col: 0, dir: "across" as const },
      { num: 1, word: "PIZZA", clue: "[PLACEHOLDER — es. «Il nostro cibo del cuore»]", row: 0, col: 0, dir: "down" as const },
      { num: 2, word: "BACIO", clue: "[PLACEHOLDER — es. «Il primo, quella sera…»]", row: 0, col: 2, dir: "down" as const },
      { num: 3, word: "MARE", clue: "[PLACEHOLDER — es. «Dove vorremmo essere sempre»]", row: 1, col: 4, dir: "down" as const },
      { num: 4, word: "AMORE", clue: "[PLACEHOLDER — es. «Quello che siamo»]", row: 4, col: 0, dir: "across" as const },
    ],
    memory: "[PLACEHOLDER_RICORDO_04]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 5 — IMPICCATO (versione dolce: "salva i cuoricini")
  // ═══════════════════════════════════════════════════════════════════════
  level05: {
    title: "Indovina la parola",
    words: [
      {
        word: "[RISTORANTE]", // es. "PEPERONCINO" — solo lettere A-Z, senza spazi
        hint: "[PLACEHOLDER — es. «Il ristorante della nostra prima cena»]",
      },
      {
        word: "[CITTA]", // es. "PORTOFINO"
        hint: "[PLACEHOLDER — es. «La città del nostro primo viaggio»]",
      },
    ],
    maxErrors: 6,
    memory: "[PLACEHOLDER_RICORDO_05]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 6 — TIMELINE DA RIORDINARE
  //  Inserisci le tappe GIÀ in ordine cronologico corretto:
  //  il gioco le mescola da solo.
  // ═══════════════════════════════════════════════════════════════════════
  level06: {
    title: "La nostra storia, in ordine",
    events: [
      { label: "[PLACEHOLDER — es. «Ci siamo conosciuti»]", date: "[data o periodo]" },
      { label: "[PLACEHOLDER — es. «Primo bacio»]", date: "[data]" },
      { label: "[PLACEHOLDER — es. «Primo viaggio insieme»]", date: "[data]" },
      { label: "[PLACEHOLDER — es. «Ti ho detto ti amo»]", date: "[data]" },
      { label: "[PLACEHOLDER — es. «Siamo andati a convivere»]", date: "[data]" },
      { label: "[PLACEHOLDER — es. «Oggi: il tuo compleanno»]", date: "[data]" },
    ],
    memory: "[PLACEHOLDER_RICORDO_06]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 7 — SCRATCH CARD (gratta e scopri)
  //  Metti una foto in /public/photos/foto-livello-07.jpg oppure lascia
  //  solo la frase nascosta.
  // ═══════════════════════════════════════════════════════════════════════
  level07: {
    title: "Gratta e scopri",
    hiddenPhrase: "[PLACEHOLDER — frase nascosta sotto la patina, es. «Sei la mia persona preferita»]",
    photo: "/photos/foto-livello-07.jpg", // opzionale, metti null per solo testo
    memory: "[PLACEHOLDER_RICORDO_07]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 8 — TROVA LE DIFFERENZE
  //  Usa un'illustrazione a tema (un picnic con un cagnolino 🐶) generata
  //  dal gioco: le 5 differenze sono già pronte. Non serve configurare nulla,
  //  ma puoi personalizzare il messaggio.
  // ═══════════════════════════════════════════════════════════════════════
  level08: {
    title: "Trova le 5 differenze",
    subtitle: "[PLACEHOLDER — es. «Il nostro picnic ideale (con pitbull incluso)»]",
    memory: "[PLACEHOLDER_RICORDO_08]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 9 — INDOVINA LA CANZONE
  //  `answers`: tutte le varianti accettate del titolo (minuscole/maiuscole
  //  e accenti non contano).
  // ═══════════════════════════════════════════════════════════════════════
  level09: {
    title: "La nostra canzone",
    clues: [
      "🎵 [PLACEHOLDER — primo indizio, es. «La cantavamo in macchina tornando da…»]",
      "🎤 [PLACEHOLDER — secondo indizio, es. emoji che raccontano il testo: 🌙💃❤️]",
      "💿 [PLACEHOLDER — terzo indizio, es. «L'artista ha lo stesso nome di…»]",
    ],
    answers: ["[TITOLO CANZONE]", "[variante titolo]"],
    revealedTitle: "[TITOLO CANZONE — come apparirà una volta indovinata]",
    memory: "[PLACEHOLDER_RICORDO_09]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 10 — LABIRINTO
  //  Lei (🐶) deve raggiungere te (❤️). Il labirinto si genera da solo.
  // ═══════════════════════════════════════════════════════════════════════
  level10: {
    title: "Trova la strada verso di me",
    playerEmoji: "🐶", // lei
    goalEmoji: "❤️", // te / il cuore
    memory: "[PLACEHOLDER_RICORDO_10]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 11 — ANAGRAMMI
  //  Parole chiave del vostro rapporto (solo lettere, senza spazi).
  // ═══════════════════════════════════════════════════════════════════════
  level11: {
    title: "Lettere in disordine",
    words: [
      { word: "[PAROLA1]", hint: "[PLACEHOLDER — es. «Il tuo soprannome» → MINIPITBULL]" },
      { word: "[PAROLA2]", hint: "[PLACEHOLDER — es. «Il posto del primo appuntamento»]" },
      { word: "[PAROLA3]", hint: "[PLACEHOLDER — es. «La cosa che facciamo sempre la domenica»]" },
    ],
    memory: "[PLACEHOLDER_RICORDO_11]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 12 — RUOTA DELLA FORTUNA
  //  6 spicchi = 6 mini-domande su di voi. Servono 3 risposte giuste.
  // ═══════════════════════════════════════════════════════════════════════
  level12: {
    title: "La ruota di noi due",
    winsNeeded: 3,
    segments: [
      {
        label: "Primi tempi",
        emoji: "🌱",
        q: "[PLACEHOLDER — domanda sui primi tempi]",
        options: ["[A — giusta]", "[B]", "[C]"],
        correct: 0,
      },
      {
        label: "Viaggi",
        emoji: "✈️",
        q: "[PLACEHOLDER — domanda sui viaggi]",
        options: ["[A]", "[B — giusta]", "[C]"],
        correct: 1,
      },
      {
        label: "Cibo",
        emoji: "🍝",
        q: "[PLACEHOLDER — domanda sul cibo]",
        options: ["[A]", "[B]", "[C — giusta]"],
        correct: 2,
      },
      {
        label: "Litigi buffi",
        emoji: "⚡",
        q: "[PLACEHOLDER — domanda su un litigio buffo]",
        options: ["[A — giusta]", "[B]", "[C]"],
        correct: 0,
      },
      {
        label: "Famiglia & amici",
        emoji: "🏡",
        q: "[PLACEHOLDER — domanda su famiglia/amici]",
        options: ["[A]", "[B — giusta]", "[C]"],
        correct: 1,
      },
      {
        label: "Noi due",
        emoji: "💞",
        q: "[PLACEHOLDER — domanda su di voi]",
        options: ["[A]", "[B]", "[C — giusta]"],
        correct: 2,
      },
    ],
    memory: "[PLACEHOLDER_RICORDO_12]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 13 — UNISCI I PUNTINI
  //  Unendo i puntini in ordine appare un cuore con una data al centro.
  // ═══════════════════════════════════════════════════════════════════════
  level13: {
    title: "Unisci i puntini",
    revealedText: "[PLACEHOLDER — testo che appare nel cuore, es. «12.03.2021»]",
    revealedSubtext: "[PLACEHOLDER — es. «Il giorno in cui è iniziato tutto»]",
    memory: "[PLACEHOLDER_RICORDO_13]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 14 — EMOJI RIDDLE
  //  Sequenze di emoji che raccontano un vostro ricordo/frase.
  // ═══════════════════════════════════════════════════════════════════════
  level14: {
    title: "Ricordi in emoji",
    riddles: [
      {
        emoji: "🌧️🚗🎶😂", // [PLACEHOLDER — sostituisci con emoji di un vostro ricordo]
        hint: "[PLACEHOLDER — es. «Quella volta sotto il temporale…»]",
        answers: ["[RISPOSTA]", "[variante risposta]"],
        solution: "[RISPOSTA — come apparirà una volta indovinata]",
      },
      {
        emoji: "🍕🌙🛵💋",
        hint: "[PLACEHOLDER — indizio 2]",
        answers: ["[RISPOSTA]", "[variante]"],
        solution: "[RISPOSTA]",
      },
      {
        emoji: "🐶👑🎂✨",
        hint: "[PLACEHOLDER — indizio 3]",
        answers: ["[RISPOSTA]", "[variante]"],
        solution: "[RISPOSTA]",
      },
    ],
    memory: "[PLACEHOLDER_RICORDO_14]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 15 — WHACK-A-MOLE ROMANTICO
  //  Colpisci le cose che ti fanno arrabbiare, evita le cose belle di noi!
  // ═══════════════════════════════════════════════════════════════════════
  level15: {
    title: "Sfoga il Mini Pitbull!",
    instructions: "Colpisci le cose che ti fanno arrabbiare 😤 — ma non toccare le cose belle di noi! 💘",
    targetScore: 10,
    badThings: [
      // le cose da colpire (che la fanno arrabbiare) — personalizza!
      { emoji: "🧦", label: "[es. calzini in giro]" },
      { emoji: "📵", label: "[es. quando non rispondo]" },
      { emoji: "⏰", label: "[es. i miei ritardi]" },
      { emoji: "🥱", label: "[es. quando mi addormento sul divano]" },
    ],
    goodThings: [
      // le cose da NON colpire (le cose belle di voi)
      { emoji: "💘", label: "noi" },
      { emoji: "🍕", label: "[es. pizza insieme]" },
      { emoji: "🌅", label: "[es. i tramonti]" },
    ],
    memory: "[PLACEHOLDER_RICORDO_15]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 16 — SLIDER PRIMA/DOPO
  //  Due foto da confrontare (es. voi due al primo anno vs oggi).
  // ═══════════════════════════════════════════════════════════════════════
  level16: {
    title: "Prima & dopo",
    beforePhoto: "/photos/foto-livello-16-prima.jpg",
    afterPhoto: "/photos/foto-livello-16-dopo.jpg",
    beforeLabel: "[PLACEHOLDER — es. «2021: i primi giorni»]",
    afterLabel: "[PLACEHOLDER — es. «Oggi: sempre noi»]",
    caption: "[PLACEHOLDER — didascalia romantica sotto lo slider]",
    memory: "[PLACEHOLDER_RICORDO_16]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 17 — TYPING CHALLENGE
  //  Una vostra frase iconica da scrivere prima che scada il tempo.
  // ═══════════════════════════════════════════════════════════════════════
  level17: {
    title: "Scrivila prima che scada!",
    phrase: "[PLACEHOLDER — la vostra frase ricorrente, es. «Sei il mio mini pitbull preferito»]",
    seconds: 30,
    memory: "[PLACEHOLDER_RICORDO_17]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 18 — MAPPA DEI LUOGHI DEL CUORE
  //  Pin su una mappa stilizzata. x,y sono percentuali (0-100) sulla mappa.
  //  Per ogni round c'è un indizio: lei deve cliccare il pin giusto.
  // ═══════════════════════════════════════════════════════════════════════
  level18: {
    title: "I luoghi del cuore",
    pins: [
      { id: "pin1", name: "[Luogo 1 — es. il pub del primo incontro]", emoji: "🍺", x: 22, y: 30, blurb: "[mini-ricordo legato a questo posto]" },
      { id: "pin2", name: "[Luogo 2 — es. la città del primo viaggio]", emoji: "✈️", x: 68, y: 18, blurb: "[mini-ricordo]" },
      { id: "pin3", name: "[Luogo 3 — es. il vostro ristorante]", emoji: "🍝", x: 45, y: 55, blurb: "[mini-ricordo]" },
      { id: "pin4", name: "[Luogo 4 — es. la spiaggia di…]", emoji: "🏖️", x: 80, y: 68, blurb: "[mini-ricordo]" },
      { id: "pin5", name: "[Luogo 5 — es. casa vostra]", emoji: "🏡", x: 30, y: 78, blurb: "[mini-ricordo]" },
    ],
    rounds: [
      { clue: "[PLACEHOLDER — indizio 1, es. «Qui ti ho vista per la prima volta»]", correctPin: "pin1" },
      { clue: "[PLACEHOLDER — indizio 2, es. «Il posto dove abbiamo mangiato la pasta più buona»]", correctPin: "pin3" },
      { clue: "[PLACEHOLDER — indizio 3, es. «Il posto che chiamiamo casa»]", correctPin: "pin5" },
    ],
    memory: "[PLACEHOLDER_RICORDO_18]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 19 — VERO O FALSO
  // ═══════════════════════════════════════════════════════════════════════
  level19: {
    title: "Vero o falso?",
    statements: [
      { text: "[PLACEHOLDER — affermazione buffa 1 sulla vostra storia]", isTrue: true },
      { text: "[PLACEHOLDER — affermazione 2]", isTrue: false },
      { text: "[PLACEHOLDER — affermazione 3]", isTrue: true },
      { text: "[PLACEHOLDER — affermazione 4]", isTrue: false },
      { text: "[PLACEHOLDER — affermazione 5]", isTrue: true },
      { text: "[PLACEHOLDER — affermazione 6]", isTrue: false },
    ],
    memory: "[PLACEHOLDER_RICORDO_19]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 20 — ROMPICAPO MATEMATICO
  //  Tre mini-calcoli i cui risultati compongono una data importante.
  //  Es: se la data è il 12/03/2021 → day: 12, month: 3, year: 2021.
  // ═══════════════════════════════════════════════════════════════════════
  level20: {
    title: "La data segreta",
    intro: "[PLACEHOLDER — es. «Risolvi i calcoli e scopri la data che ha cambiato tutto»]",
    puzzles: {
      day: { expression: "[PLACEHOLDER — es. «(4 × 3) + 0»]", answer: 12 },
      month: { expression: "[PLACEHOLDER — es. «√9»]", answer: 3 },
      year: { expression: "[PLACEHOLDER — es. «43 × 47»]", answer: 2021 },
    },
    revealedMeaning: "[PLACEHOLDER — cosa rappresenta la data, es. «Il nostro primo bacio»]",
    memory: "[PLACEHOLDER_RICORDO_20]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 21 — COSTRUISCI LA FRASE
  //  L'ultima prova prima del finale: ricomponi la frase parola per parola.
  // ═══════════════════════════════════════════════════════════════════════
  level21: {
    title: "Le parole giuste",
    sentence: "[PLACEHOLDER — la frase da ricomporre, es. «Ovunque andremo, ci andremo insieme»]",
    memory: "[PLACEHOLDER_RICORDO_21 — l'ultimo ricordo prima della lettera]",
    memoryPhoto: null as string | null,
  },

  // ═══════════════════════════════════════════════════════════════════════
  //  LIVELLO 22 — LA LETTERA FINALE 💌
  //  Scrivi qui la tua lettera. Puoi usare più paragrafi separandoli con
  //  una riga vuota. Verrà mostrata con effetto macchina da scrivere.
  // ═══════════════════════════════════════════════════════════════════════
  finale: {
    envelopeLabel: "Per Caterina", // scritta sulla busta
    letter: `[PLACEHOLDER_LETTERA]

[Scrivi qui la tua lettera, su più righe.

Ogni paragrafo separato da una riga vuota apparirà
con una piccola pausa, come se stessi scrivendo dal vivo.

Prenditi tutto lo spazio che vuoi: questo è il cuore del regalo.]`,
    closing: "Buon compleanno, Mini Pitbull ❤️",
    signature: "[LA TUA FIRMA — es. «Per sempre tuo, Andrea»]",
    date: "[DATA — es. «26 luglio 2026»]",
  },

  // ─── OPZIONI SVILUPPO ────────────────────────────────────────────────────
  dev: {
    // Metti true per sbloccare tutti i livelli (utile per testare o far
    // vedere il gioco senza rigiocarlo). RIMETTI false prima di regalarlo!
    unlockAll: false,
  },
};

export type GameConfig = typeof config;
