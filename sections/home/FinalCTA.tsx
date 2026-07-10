"use client";

import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/content";

/** Banner CTA finale prima del footer: chiama ora / indicazioni stradali */
export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sunset via-coral to-sunset py-20 text-white md:py-24">
      {/* Cerchi decorativi tipo sole */}
      <div aria-hidden="true" className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
      <div aria-hidden="true" className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-deep/10" />

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="heading-hero text-3xl md:text-5xl">
            Il mare è già pronto. <br className="hidden md:block" /> Ti aspettiamo al Portofino.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
            Nessuna prenotazione online, nessuna coda: vieni quando vuoi, tutti i giorni dalle 7:30 alle 20:00.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href={siteConfig.phone.href} className="btn-liquid bg-white text-coral shadow-xl hover:-translate-y-0.5">
              📞 Chiama Ora
            </a>
            <a
              href={siteConfig.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-white"
            >
              🧭 Indicazioni Stradali
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
