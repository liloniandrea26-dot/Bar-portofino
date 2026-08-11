"use client";

import dynamic from "next/dynamic";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { restaurantConfig } from "@/data/config";
import type { Dictionary, Locale } from "@/lib/i18n";

const ThreeStage = dynamic(() => import("@/three/ThreeStage"), { ssr: false });
const Pizza3D = dynamic(() => import("@/three/Pizza3D"), { ssr: false });

const formatSlots = (slots: readonly (readonly string[])[]) =>
  slots.map(([from, to]) => `${from} – ${to}`).join(" · ");

/**
 * L'unica sezione della home oltre all'hero: le tre informazioni
 * essenziali (orari, indirizzo, contatti) in card pulite, con la
 * pizza 3D come tocco scenografico. Tutto il resto vive nelle
 * pagine dedicate raggiungibili dal menu.
 */
export default function Essentials({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  // Se gli orari sono uguali tutti i giorni mostra una riga sola,
  // altrimenti rimanda alla tabella completa nella pagina Informazioni
  const week = restaurantConfig.weekHours;
  const allSame = week.every((d) => JSON.stringify(d) === JSON.stringify(week[0]));
  const sample = week.find((d) => d.length > 0) ?? [];
  const hoursLines =
    allSame && sample.length > 0
      ? [`${dict.hours.everydayLabel} · ${formatSlots(sample)}`]
      : [formatSlots(sample)];
  if (restaurantConfig.delivery) {
    hoursLines.push(`${dict.hours.deliveryLabel} · ${restaurantConfig.delivery.hours}`);
  }

  const cards = [
    {
      icon: "🕐",
      title: dict.footer.hoursTitle,
      lines: hoursLines,
      href: `/${locale}/informazioni`,
      linkLabel: dict.nav.info,
      external: false,
    },
    {
      icon: "📍",
      title: dict.location.eyebrow,
      lines: [restaurantConfig.address],
      href: restaurantConfig.maps.directionsUrl,
      linkLabel: dict.location.directions,
      external: true,
    },
    {
      icon: "📞",
      title: dict.footer.contacts,
      lines: [restaurantConfig.phone.display],
      href: restaurantConfig.whatsapp.href,
      linkLabel: "WhatsApp",
      external: true,
    },
  ];

  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1} className="h-full">
              <TiltCard className="h-full">
                <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-lg shadow-ink/5 ring-1 ring-ink/5">
                  <span className="text-3xl" aria-hidden="true">
                    {card.icon}
                  </span>
                  <h2 className="mt-3 font-display text-lg font-semibold">{card.title}</h2>
                  {card.lines.map((line) => (
                    <p key={line} className="mt-1.5 text-sm leading-relaxed text-ink/70">
                      {line}
                    </p>
                  ))}
                  {card.href && (
                    <a
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      className="group mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-bold text-brass"
                    >
                      {card.linkLabel}
                      <span
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </a>
                  )}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Pizza 3D: il tocco scenografico della home */}
        <ThreeStage
          className="hidden h-[300px] lg:block"
          camera={{ position: [0, 2.2, 5.5], fov: 42 }}
          fallback={null}
        >
          <Pizza3D />
        </ThreeStage>
      </div>
    </section>
  );
}
