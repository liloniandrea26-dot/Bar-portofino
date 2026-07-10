# 🍕 Sito Ristorante/Pizzeria — vetrina trilingue (IT · EN · DE)

Sito web moderno per un ristorante/pizzeria italiano di fascia media-alta.
È un sito **di presentazione**: nessun e-commerce, nessun carrello, nessun ordine
o pagamento online — solo contatti diretti (telefono click-to-call, email, mappa).

> ⚠️ **I contenuti sono placeholder**: tutti i campi segnati `[DA CONFERMARE]`
> (nome, contatti, orari, menu, testi) vanno sostituiti con i dati reali del
> cliente. L'elenco completo è in fondo a questo README.

## Stack

- **Next.js 14** (App Router) + React + TypeScript
- **Tailwind CSS** — palette "Bianco & Ottone": chiara, neutra, elegante
- **Framer Motion** — micro-animazioni, reveal allo scroll, transizioni pagina
- **React Three Fiber + drei** — particelle nell'hero e pizza 3D low-poly (fallback statico su mobile)
- **Lenis** — smooth scroll
- **i18n custom** — dizionari tipizzati in `lib/i18n/` con middleware di redirect lingua

## Avvio in locale

```bash
npm install
npm run dev       # http://localhost:3000 → redirect su /it, /en o /de
```

Build di produzione: `npm run build && npm start`.

## Struttura

```
app/[locale]/         Pagine per lingua (it/en/de)
  page.tsx            Home: hero + chi siamo + menu + galleria + orari + mappa
  informazioni/       Chi siamo, orari, contatti, mappa
  menu/               Bottone PDF + menu testuale a 7 categorie
  allergeni/          14 allergeni Reg. UE 1169/2011 (testo normativo, tradotto)
  privacy/            Privacy Policy con struttura GDPR
  layout.tsx          Header/Footer, font, SEO, Schema.org, banner cookie
app/robots.ts         robots.txt
app/sitemap.ts        sitemap.xml (tutte le pagine × 3 lingue)
middleware.ts         Redirect / → /it|/en|/de dalla lingua del browser
lib/i18n/             ⭐ Dizionari IT/EN/DE: TUTTI i testi del sito
data/config.ts        ⭐ Dati non linguistici: contatti, orari, P.IVA, link, foto
components/           Header, Footer, CookieBanner, ConsentMap, Lightbox, ...
sections/restaurant/  Sezioni di pagina
three/                Scene 3D (particelle, pizza) con gate performance
public/menu.pdf       Segnaposto: sostituire col PDF reale del menu
public/images/        Foto reali del locale (da caricare)
```

## GDPR / Cookie

- **Banner cookie trilingue** al primo accesso (accetta/rifiuta, scelta salvata in
  `localStorage`).
- La **mappa Google** viene caricata **solo dopo il consenso**: prima mostra un
  segnaposto con link esterno a Google Maps (nessun cookie di terze parti senza consenso).
- Pagina **Privacy Policy** con struttura GDPR da completare con i dati del titolare.

## ✏️ Dove sostituire i contenuti `[DA CONFERMARE]`

### 1. `data/config.ts` — dati dell'attività
| Campo | Cosa inserire |
|---|---|
| `name` | Nome dell'attività |
| `phone` | Telefono reale (display + href `tel:`) |
| `email` | Email reale |
| `address` | Indirizzo completo |
| `vat` | Partita IVA (obbligatoria nel footer) |
| `maps.directionsUrl` / `maps.embedUrl` | Link Google Maps con l'indirizzo reale |
| `social.facebook` / `social.instagram` | Profili social reali |
| `weekHours` | Orari reali per giorno (fasce; `[]` = chiuso) |

### 2. `lib/i18n/it.ts`, `en.ts`, `de.ts` — testi (in tutte e 3 le lingue)
- `brand.name` — nome mostrato in logo e hero
- `meta.title` / `meta.description` — SEO
- `hero.subtitle` — sottotitolo dell'hero
- `about.p1` / `about.p2` — racconto "chi siamo"
- `menuPage.categories[...]` — nomi, descrizioni e prezzi dei piatti (7 categorie)
- `hours.note` — nota orari
- `privacyPage` — titolare del trattamento, servizi terzi, data aggiornamento
- `footer.credits` — chi ha realizzato il sito

### 3. File
- `public/menu.pdf` — sostituire col PDF reale del menu
- `public/images/` — caricare le foto reali e aggiornare gli URL in `data/config.ts`
  (ora placeholder Unsplash)

### 4. Dominio
- `app/[locale]/layout.tsx` → `metadataBase`
- `app/robots.ts` e `app/sitemap.ts` → `BASE_URL`

## Note performance/accessibilità

- Scene 3D disattivate automaticamente su mobile, dispositivi lenti e
  `prefers-reduced-motion` (sostituite da fallback statici)
- Immagini con `next/image` e lazy loading; 3D montato solo in viewport
- HTML semantico, focus ring visibile, lightbox navigabile da tastiera,
  tabella orari con markup `<table>` corretto
- Dati strutturati Schema.org `Restaurant` + `hreflang` per le 3 lingue
