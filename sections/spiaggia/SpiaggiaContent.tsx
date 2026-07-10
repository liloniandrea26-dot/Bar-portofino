"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { siteConfig, siteImages } from "@/data/content";

const ThreeStage = dynamic(() => import("@/three/ThreeStage"), { ssr: false });
const BeachScene = dynamic(() => import("@/three/BeachScene"), { ssr: false });

const reasons = [
  {
    title: "Tranquillità",
    description: "Una zona della spiaggia lontana dal caos, dove il suono più forte è quello delle onde.",
    emoji: "🌊",
  },
  {
    title: "Comodità",
    description: "Lettini e ombrelloni ordinati, con spazio vero tra una fila e l'altra.",
    emoji: "⛱️",
  },
  {
    title: "Vista mare",
    description: "L'Adriatico davanti, il tramonto ogni sera: lo spettacolo è incluso.",
    emoji: "🌅",
  },
  {
    title: "Servizio attento",
    description: "Il chiosco è a due passi: panino, insalatona o spritz arrivano senza muoverti.",
    emoji: "🍹",
  },
];

/** Contenuto pagina spiaggia: descrizione, scena 3D, motivi + foto full-width */
export default function SpiaggiaContent() {
  return (
    <>
      {/* Descrizione estesa + scena 3D con parallax camera */}
      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-deep/80">
            <Reveal>
              <h2 className="heading-hero mb-4 text-3xl text-deep md:text-4xl">
                Il tuo posto al sole, senza pensieri
              </h2>
              <p>
                La nostra è una <strong>zona attrezzata e tranquilla</strong>: file ordinate di
                ombrelloni, lettini comodi e la sabbia fine di Lignano Sabbiadoro. Perfetta per le
                famiglie, per chi legge un libro dall&apos;inizio alla fine e per chi il mare vuole
                soprattutto ascoltarlo.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                La spiaggia è collegata al lido gemello <strong>{siteConfig.nearby.name}</strong> e
                al chiosco: qualunque cosa ti serva — un&apos;acqua fresca, un caffè, il pranzo — è
                sempre a pochi metri dal tuo ombrellone.
              </p>
            </Reveal>
          </div>

          {/* Fila di ombrelloni 3D con parallax al movimento del mouse */}
          <ThreeStage
            className="h-[380px] md:h-[460px]"
            camera={{ position: [0, 1.2, 6.5], fov: 42 }}
            fallback={
              <div className="relative h-full overflow-hidden rounded-3xl">
                <Image
                  src={siteImages.spiaggia}
                  alt="La fila di ombrelloni della spiaggia del Portofino"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            }
          >
            <BeachScene />
          </ThreeStage>
        </div>
      </section>

      {/* Perché scegliere la nostra spiaggia */}
      <section className="sand-texture py-24" aria-labelledby="perche-titolo">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 id="perche-titolo" className="heading-hero text-3xl md:text-4xl">
              Perché scegliere la nostra spiaggia
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 0.1}>
                <TiltCard className="h-full">
                  <div className="flex h-full flex-col items-center rounded-3xl bg-white p-8 text-center shadow-xl shadow-deep/5 ring-1 ring-deep/5">
                    <span className="text-4xl" aria-hidden="true">{reason.emoji}</span>
                    <h3 className="mt-4 font-display text-xl font-semibold">{reason.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-deep/70">{reason.description}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Foto full-width della spiaggia in diverse ore del giorno */}
      <section aria-label="La spiaggia nelle diverse ore del giorno">
        {[
          { src: siteImages.mare, alt: "Il mare del mattino, calmo e trasparente", label: "Mattina" },
          { src: siteImages.spiaggia, alt: "La spiaggia attrezzata nel pieno del pomeriggio", label: "Pomeriggio" },
          { src: siteImages.tramonto, alt: "Il tramonto arancione sul mare Adriatico", label: "Sera" },
        ].map((photo) => (
          <div key={photo.label} className="relative h-[45vh] w-full overflow-hidden md:h-[60vh]">
            <Image src={photo.src} alt={photo.alt} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-deep/50 to-transparent p-8">
              <p className="font-display text-2xl font-semibold text-white md:text-3xl">{photo.label}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
