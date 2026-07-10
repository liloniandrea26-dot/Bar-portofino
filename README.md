# 🏖️ Portofino Beach Bar — Sito vetrina

Sito web moderno e interattivo per **Portofino Beach Bar**, chiosco/lido sulla spiaggia di
Lignano Sabbiadoro (UD). È un sito **di presentazione**: nessun e-commerce, nessuna
prenotazione online, nessun pagamento — solo contatti diretti (telefono, email, WhatsApp, mappa).

## Stack

- **Next.js 14** (App Router) + React + TypeScript
- **Tailwind CSS** per lo styling
- **Framer Motion** per animazioni di interfaccia e transizioni tra pagine
- **GSAP + ScrollTrigger** per parallax e animazioni legate allo scroll
- **React Three Fiber + drei** per le scene 3D (particelle di sabbia, cocktail, ombrelloni, onda)
- **Lenis** per lo smooth scroll

## Avvio in locale

```bash
npm install
npm run dev
```

Il sito è raggiungibile su [http://localhost:3000](http://localhost:3000).

Per la build di produzione:

```bash
npm run build
npm start
```

## Struttura del progetto

```
app/                  Pagine (App Router)
  page.tsx            Home
  il-locale/          Chi siamo / filosofia del chiosco
  menu/               Menu (panini, insalatone, aperitivo) — solo presentazione
  spiaggia/           La zona attrezzata e tranquilla
  galleria/           Galleria fotografica con filtri e lightbox
  dove-siamo/         Mappa, contatti, come arrivare, lido vicino
  layout.tsx          Header/Footer globali, font, SEO, dati Schema.org
components/           Componenti riutilizzabili (Header, Footer, Lightbox, ...)
sections/             Sezioni di pagina (home/, menu/, galleria/, ...)
three/                Scene 3D React Three Fiber (con fallback per mobile)
data/content.ts       ⭐ TUTTI i testi, contatti, orari e immagini del sito
public/images/        Foto reali del locale (da caricare)
public/videos/        Video hero.mp4 per l'hero della home (opzionale)
```

## ✏️ Come personalizzare i contenuti

**Quasi tutto si modifica da un solo file: [`data/content.ts`](data/content.ts).**

Lì trovi (già compilati con i dati reali del locale):

- nome, descrizione, payoff
- indirizzo: Lungomare Trieste, 15/c - 33054 Lignano Sabbiadoro (UD)
- telefono: +39 0431 71834 · email: portofinolignanobeach@gmail.com
- orari: tutti i giorni 7:30–20:00
- lido vicino collegato: "Sabbiadoro 14/15 - Portofino"
- voci del menu, foto della galleria, link social e mappa

### Sostituire le foto placeholder

Le immagini attuali sono placeholder da Unsplash a tema spiaggia/beach bar. Per usare
le foto reali del locale:

1. carica le foto in `public/images/` (es. `public/images/chiosco.jpg`);
2. in `data/content.ts` sostituisci gli URL Unsplash con i percorsi locali
   (es. `"/images/chiosco.jpg"`);
3. aggiorna i testi `alt` con descrizioni reali delle foto.

### Aggiungere il video dell'hero

Metti un file `hero.mp4` in `public/videos/` (loop di onde/tramonto, muto,
possibilmente sotto gli 8 MB). Se il file manca, la home mostra automaticamente
la foto di fallback: il sito funziona comunque.

### Altri punti di personalizzazione

- **Social**: aggiorna i link Facebook/Instagram in `data/content.ts` → `siteConfig.social`
- **Dominio**: in `app/layout.tsx` aggiorna `metadataBase` con il dominio reale
- **Credit footer**: `siteConfig.credits` in `data/content.ts`
- **Palette colori**: definita in `tailwind.config.ts` (deep, sea, aqua, sand, coral, sunset)

## Note su performance e accessibilità

- Le scene 3D si disattivano automaticamente su mobile, su dispositivi poco
  performanti e con `prefers-reduced-motion`, sostituite da immagini statiche.
- Tutte le immagini usano `next/image` con lazy loading; i componenti 3D sono
  caricati via `dynamic import` solo quando entrano in viewport.
- Dati strutturati Schema.org `FoodEstablishment` (nome, indirizzo, orari, telefono)
  per la scheda Google.
- HTML semantico, testi alternativi sulle immagini e navigazione da tastiera nel lightbox.
