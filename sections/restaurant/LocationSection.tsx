"use client";

import Reveal from "@/components/Reveal";
import { restaurantConfig } from "@/data/config";
import type { Dictionary } from "@/lib/i18n";

/** Sezione "Dove ci troviamo": mappa Google embed + box contatti */
export default function LocationSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-cream py-24 md:py-32" aria-labelledby="dove-titolo">
      <div className="mx-auto grid max-w-7xl items-stretch gap-10 px-5 md:px-8 lg:grid-cols-[1.2fr_1fr]">
        {/* Mappa con marker pulsante */}
        <Reveal className="relative min-h-[380px] overflow-hidden rounded-3xl shadow-2xl shadow-deep/10 ring-1 ring-deep/10">
          <iframe
            src={restaurantConfig.maps.embedUrl}
            title={dict.location.mapTitle}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          >
            <span className="absolute -inset-4 animate-ping rounded-full bg-coral/40" />
            <span className="relative block h-5 w-5 rounded-full border-4 border-white bg-coral shadow-lg" />
          </div>
        </Reveal>

        {/* Box contatti */}
        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="mb-1 text-sm font-bold uppercase tracking-[0.25em] text-coral">
              {dict.location.eyebrow}
            </p>
            <h2 id="dove-titolo" className="heading-hero text-3xl md:text-4xl">
              {dict.location.title}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid gap-4 rounded-3xl bg-white p-7 shadow-xl shadow-deep/5 ring-1 ring-deep/5">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-deep/50">
                  {dict.location.addressLabel}
                </dt>
                <dd className="mt-1 font-semibold">{restaurantConfig.address}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-deep/50">
                  {dict.location.phoneLabel}
                </dt>
                <dd className="mt-1">
                  <a
                    href={restaurantConfig.phone.href}
                    className="font-semibold text-sea transition-colors hover:text-coral"
                  >
                    {restaurantConfig.phone.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-deep/50">
                  {dict.location.emailLabel}
                </dt>
                <dd className="mt-1">
                  <a
                    href={restaurantConfig.email.href}
                    className="break-all font-semibold text-sea transition-colors hover:text-coral"
                  >
                    {restaurantConfig.email.display}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-deep/50">
                  {dict.location.vatLabel}
                </dt>
                <dd className="mt-1 font-semibold">{restaurantConfig.vat}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href={restaurantConfig.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center"
            >
              🧭 {dict.location.directions}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
