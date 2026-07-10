import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FinalCTA from "@/sections/home/FinalCTA";
import { siteConfig, siteImages } from "@/data/content";

export const metadata: Metadata = {
  title: "Dove Siamo",
  description:
    "Portofino Beach Bar — Lungomare Trieste 15/c, 33054 Lignano Sabbiadoro (UD). Aperti tutti i giorni 7:30–20:00. Telefono +39 0431 71834. Mappa, contatti e come arrivare.",
};

export default function DoveSiamoPage() {
  return (
    <>
      <PageHero
        title="Dove Siamo"
        breadcrumb="Dove Siamo"
        subtitle="Lungomare Trieste 15/c, Lignano Sabbiadoro: davanti c'è solo il mare."
        image={siteImages.mare}
        imageAlt="Il mare Adriatico davanti al Portofino Beach Bar"
      />

      {/* Mappa grande + card informazioni */}
      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="relative min-h-[420px] overflow-hidden rounded-3xl shadow-2xl shadow-deep/10 ring-1 ring-deep/10 lg:min-h-[560px]">
            <iframe
              src={siteConfig.maps.embedUrl}
              title="Mappa interattiva: Portofino Beach Bar, Lungomare Trieste 15/c, Lignano Sabbiadoro"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Marker decorativo a ombrellone sovrapposto */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
              <span className="absolute -inset-5 animate-ping rounded-full bg-coral/30" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-coral text-xl shadow-xl">
                ⛱️
              </span>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            {/* Card informazioni (equivalente del box "Informazioni" originale) */}
            <Reveal>
              <div className="rounded-3xl bg-white p-8 shadow-xl shadow-deep/5 ring-1 ring-deep/5">
                <h2 className="heading-hero mb-6 text-2xl">Informazioni</h2>
                <dl className="grid gap-5">
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-deep/50">Indirizzo</dt>
                    <dd className="mt-1 font-semibold">{siteConfig.address.full}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-deep/50">Telefono</dt>
                    <dd className="mt-1">
                      <a href={siteConfig.phone.href} className="font-semibold text-sea transition-colors hover:text-coral">
                        {siteConfig.phone.display}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-deep/50">Email</dt>
                    <dd className="mt-1">
                      <a href={siteConfig.email.href} className="break-all font-semibold text-sea transition-colors hover:text-coral">
                        {siteConfig.email.display}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wider text-deep/50">Orari</dt>
                    <dd className="mt-1 font-semibold">{siteConfig.hours.display}</dd>
                  </div>
                </dl>
                <a
                  href={siteConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-7 w-full text-center"
                >
                  Ottieni Indicazioni
                </a>
              </div>
            </Reveal>

            {/* Card "Nelle vicinanze" (equivalente della sezione originale) */}
            <Reveal delay={0.15}>
              <a
                href={siteConfig.nearby.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl bg-sea p-8 text-white shadow-xl shadow-sea/20 transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-aqua">Nelle vicinanze</p>
                <h2 className="mt-2 font-display text-2xl font-semibold">{siteConfig.nearby.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{siteConfig.nearby.description}</p>
                <span className="mt-4 inline-block font-bold text-sunset">Scopri il lido →</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Come arrivare */}
      <section className="sand-texture py-24" aria-labelledby="arrivare-titolo">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 id="arrivare-titolo" className="heading-hero text-3xl md:text-4xl">Come arrivare</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                emoji: "🚗",
                title: "In auto",
                text: "Da Lignano centro segui il Lungomare Trieste in direzione sud: al civico 15/c trovi l'accesso alla spiaggia. Parcheggi pubblici lungo il lungomare.",
              },
              {
                emoji: "🚶",
                title: "A piedi",
                text: "Dal centro di Lignano Sabbiadoro sono circa 10 minuti di passeggiata sul lungomare, con vista mare per tutto il tragitto.",
              },
              {
                emoji: "🚲",
                title: "In bicicletta",
                text: "La pista ciclabile del lungomare passa a due passi dal chiosco: rastrelliere disponibili vicino all'ingresso della spiaggia.",
              },
            ].map((mode, i) => (
              <Reveal key={mode.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl bg-white p-8 shadow-xl shadow-deep/5 ring-1 ring-deep/5">
                  <span className="text-4xl" aria-hidden="true">{mode.emoji}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold">{mode.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-deep/70">{mode.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
