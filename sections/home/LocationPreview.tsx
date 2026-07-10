"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/content";

/** Anteprima "Dove siamo": mappa con marker pulsante + box informazioni */
export default function LocationPreview() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-5 md:px-8 lg:grid-cols-[1.2fr_1fr]">
        {/* Mappa con marker animato */}
        <Reveal className="relative min-h-[380px] overflow-hidden rounded-3xl shadow-2xl shadow-deep/10 ring-1 ring-deep/10">
          <iframe
            src={siteConfig.maps.embedUrl}
            title="Mappa: Portofino Beach Bar, Lungomare Trieste 15/c, Lignano Sabbiadoro"
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Marker decorativo pulsante sovrapposto */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
            <span className="absolute -inset-4 animate-ping rounded-full bg-coral/40" />
            <span className="relative block h-5 w-5 rounded-full border-4 border-white bg-coral shadow-lg" />
          </div>
        </Reveal>

        {/* Box informazioni (stessa logica della scheda originale) */}
        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="mb-1 text-sm font-bold uppercase tracking-[0.25em] text-coral">Dove Siamo</p>
            <h2 className="heading-hero text-3xl md:text-4xl">Sul Lungomare Trieste, davanti al mare</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid gap-4 rounded-3xl bg-white p-7 shadow-xl shadow-deep/5 ring-1 ring-deep/5">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-deep/50">Indirizzo</dt>
                <dd className="mt-1 font-semibold">{siteConfig.address.full}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-deep/50">Telefono</dt>
                <dd className="mt-1">
                  <a href={siteConfig.phone.href} className="font-semibold text-sea hover:text-coral">
                    {siteConfig.phone.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-deep/50">Email</dt>
                <dd className="mt-1">
                  <a href={siteConfig.email.href} className="break-all font-semibold text-sea hover:text-coral">
                    {siteConfig.email.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-deep/50">Orari</dt>
                <dd className="mt-1 font-semibold">{siteConfig.hours.display}</dd>
              </div>
            </dl>
          </Reveal>

          {/* Lido gemello nelle vicinanze */}
          <Reveal delay={0.2}>
            <a
              href={siteConfig.nearby.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl bg-sea p-6 text-white shadow-xl shadow-sea/20 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-aqua">Nelle vicinanze — lido gemello</p>
              <p className="mt-2 font-display text-xl font-semibold">{siteConfig.nearby.name}</p>
              <p className="mt-1 text-sm text-white/75">{siteConfig.nearby.description}</p>
            </a>
          </Reveal>

          <Reveal delay={0.3}>
            <Link href="/dove-siamo" className="group inline-flex items-center gap-2 font-bold text-coral">
              Tutte le informazioni e come arrivare
              <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
