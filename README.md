# 🐶💛 Mini Pitbull Quest

Un'avventura a livelli fatta a mano per il compleanno di **Caterina** ("Mini Pitbull"):
**21 minigiochi** — uno per ogni ricordo della vostra storia — che sbloccano il
**livello 22 finale**, dove una busta animata rivela una lettera scritta da te,
con effetto macchina da scrivere.

## 🚀 Avvio

```bash
npm install
npm run dev
```

Poi apri [http://localhost:3000](http://localhost:3000) (funziona benissimo anche da telefono).

## ✍️ Personalizzare i contenuti — `content.config.ts`

**Tutto** quello che c'è da personalizzare sta in un unico file: **`content.config.ts`**
nella root del progetto. Cerca i `[PLACEHOLDER]` e sostituiscili:

1. **Nomi e date** — il tuo nome, l'iniziale sulla busta, le date importanti.
2. **Intro** — il testo di benvenuto sulla schermata iniziale.
3. **Livelli 1–21** — per ogni livello: titolo, contenuti del minigioco
   (domande, parole, indizi, frasi…) e il **ricordo** mostrato a fine livello.
4. **La lettera finale** — `finale.letter`: scrivi qui la tua lettera
   (paragrafi separati da riga vuota), più chiusura, firma e data.

### ⚠️ Note su alcuni livelli

- **Livello 4 (cruciverba)**: le parole devono incastrarsi nella griglia.
  Il modo più semplice è sostituire le parole di esempio con parole vostre
  della **stessa lunghezza** (PUB→3 lettere, PIZZA→5, BACIO→5, MARE→4, AMORE→5).
- **Livello 5 e 11 (impiccato/anagrammi)**: solo lettere, senza spazi.
- **Livello 9 e 14 (canzone/emoji)**: in `answers` metti tutte le varianti
  accettate della risposta (maiuscole e accenti non contano).
- **Livello 20 (data segreta)**: i tre calcoli devono dare giorno, mese e anno
  della vostra data.

### 📷 Foto

Mettile in `public/photos/` — vedi `public/photos/README.md` per i nomi
suggeriti. Se una foto manca, appare un segnaposto elegante: niente si rompe.

### 🧪 Testare tutto velocemente

In fondo a `content.config.ts` c'è `dev.unlockAll`: mettilo a `true` per
sbloccare tutti i livelli e provarli in qualsiasi ordine.
**Rimettilo a `false` prima di regalarlo!**

## 🎮 Com'è fatto

- **Next.js 14** (App Router) + **TypeScript** + **Tailwind CSS**
- **Framer Motion** per animazioni e transizioni
- **Zustand + localStorage** per la progressione: se chiude il browser,
  riprende da dove era rimasta
- Ogni livello è un componente in `components/levels/LevelXX.tsx`,
  orchestrato da `components/GameEngine.tsx`

| Livello | Minigioco |
|---|---|
| 1 | Quiz "Quanto mi conosci?" |
| 2 | Memory match |
| 3 | Puzzle jigsaw di una foto |
| 4 | Cruciverba personalizzato |
| 5 | Impiccato (versione dolce: salva i cuoricini) |
| 6 | Timeline da riordinare (drag & drop) |
| 7 | Scratch card digitale |
| 8 | Trova le 5 differenze |
| 9 | Indovina la canzone |
| 10 | Labirinto |
| 11 | Anagrammi |
| 12 | Ruota della fortuna con trivia |
| 13 | Unisci i puntini (a forma di cuore) |
| 14 | Emoji riddle |
| 15 | Whack-a-mole romantico |
| 16 | Slider prima/dopo |
| 17 | Typing challenge a tempo |
| 18 | Mappa cliccabile dei luoghi del cuore |
| 19 | Vero o falso |
| 20 | Rompicapo matematico → data segreta |
| 21 | Costruisci la frase |
| 22 | 💌 La lettera finale |
