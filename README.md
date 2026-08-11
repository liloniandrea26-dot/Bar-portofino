# 🍕 TEMPLATE — Sito vetrina per pizzeria/ristorante (IT · EN · DE)

Template completo e funzionante di sito vetrina per pizzeria o ristorante:
trilingue, GDPR, allergeni, FAQ, menu digitale + PDF, **senza e-commerce**
(niente carrello, ordini o pagamenti online — solo contatti diretti).

> ⭐ **Come si usa:** tutti i punti da personalizzare sono marcati
> `[DA COMPILARE]` (EN: `[TO BE FILLED IN]`, DE: `[AUSZUFÜLLEN]`).
> Cerca il marcatore nel progetto e sostituisci con i dati del cliente:
> quando non ci sono più marcatori, il sito è pronto.

## Dove si personalizza (4 posti in tutto)

| File | Cosa contiene |
|---|---|
| `data/config.ts` | ⭐ Nome, telefono, WhatsApp, email, indirizzo, P.IVA, social, link mappa, **orari per giorno**, consegna a domicilio (o `null`), percorsi foto |
| `data/menu.ts` | ⭐ Il menu: categorie e piatti con prezzi e descrizioni IT/EN/DE |
| `lib/i18n/it.ts` + `en.ts` + `de.ts` | ⭐ Tutti i testi: titoli SEO, frase hero, chi siamo, risposte FAQ, privacy |
| `public/` | ⭐ `menu.pdf` (il menu reale) e `images/` (le foto: stessi nomi = zero modifiche al codice) |

Tutto il resto (pagine, componenti, stile, animazioni) funziona senza toccarlo.

## Cosa include

- **Home essenziale**: hero full-screen con badge Aperto/Chiuso calcolato
  dagli orari + card orari/indirizzo/contatti + pizza 3D decorativa
- **Pagine**: Menu (PDF apribile + menu sfogliabile a categorie), Galleria
  con lightbox, Allergeni (14 sostanze Reg. UE 1169/2011, testo fisso già
  tradotto), FAQ con accordion e dati strutturati, Informazioni, Privacy
- **Trilingue IT/EN/DE** con redirect automatico dalla lingua del browser
- **GDPR**: banner cookie, mappa Google caricata solo dopo il consenso
- **SEO**: meta per pagina, Schema.org Restaurant + FAQPage, hreflang,
  sitemap, robots, immagine Open Graph generata dal nome
- **Orari flessibili**: fasce diverse per giorno, giorni di chiusura (`[]`),
  consegna a domicilio opzionale (`delivery: null` per nasconderla ovunque)

## Stack e avvio

Next.js 14 + Tailwind CSS + Framer Motion + React Three Fiber (3D con
fallback automatico su mobile) + Lenis.

```bash
npm install
npm run dev       # http://localhost:3000 → redirect su /it, /en o /de
npm run build     # build di produzione
```

Deploy consigliato: Vercel (import del repository, zero configurazione).

## Checklist di consegna per un nuovo cliente

1. [ ] `data/config.ts` — dati attività, orari, delivery, P.IVA
2. [ ] `data/menu.ts` — menu reale con prezzi
3. [ ] `lib/i18n/*.ts` — nome, frase hero, chi siamo, FAQ (×3 lingue)
4. [ ] `public/menu.pdf` — PDF reale del menu (< 5 MB consigliato)
5. [ ] `public/images/` — foto reali (hero, interno, piatto-1, piatto-2)
6. [ ] Dominio in `app/[locale]/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`
7. [ ] `npm run build` senza errori e ricerca di `DA COMPILARE` → zero risultati
8. [ ] Al lancio: aggiornare il sito su Google Business Profile del cliente
