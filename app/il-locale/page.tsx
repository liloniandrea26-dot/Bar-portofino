import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import DayTimeline from "@/sections/il-locale/DayTimeline";
import FinalCTA from "@/sections/home/FinalCTA";
import { siteConfig, siteImages } from "@/data/content";

export const metadata: Metadata = {
  title: "Il Locale",
  description:
    "La storia e la filosofia del Portofino Beach Bar: cibo semplice e fresco, atmosfera familiare e il mare di Lignano Sabbiadoro a due passi dal bancone.",
};

const ambientPhotos = [
  { src: siteImages.chiosco, alt: "Il bancone del chiosco Portofino" },
  { src: siteImages.colazione, alt: "Colazione al chiosco con vista mare" },
  { src: siteImages.mare, alt: "Il mare Adriatico davanti al chiosco" },
];

export default function IlLocalePage() {
  return (
    <>
      <PageHero
        title="Il Locale"
        breadcrumb="Il Locale"
        subtitle="Un chiosco sulla sabbia, una filosofia semplice: fare bene poche cose, ogni giorno."
        image={siteImages.chiosco}
        imageAlt="L'atmosfera del chiosco Portofino a Lignano Sabbiadoro"
      />

      {/* Racconto esteso della filosofia */}
      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-14 px-5 md:px-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-deep/80">
            <Reveal>
              <h2 className="heading-hero mb-6 text-3xl text-deep md:text-4xl">
                Cibo semplice, mare vero
              </h2>
              <p>{siteConfig.description}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Il Portofino nasce come chiosco di spiaggia, e chiosco di spiaggia vuole restare:
                niente menù chilometrici, niente formalità. Solo materie prime fresche, panini
                preparati al momento, insalatone di stagione e la voglia di far stare bene chi
                si siede ai nostri tavoli — o su un lettino, con il piatto sulle ginocchia e i piedi
                nella sabbia.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Siamo sul Lungomare Trieste, nella zona più tranquilla della spiaggia di Lignano
                Sabbiadoro. Qui la giornata ha un ritmo suo: il caffè del mattino, il pranzo senza
                orologio, e il momento che aspettiamo tutti — l&apos;aperitivo, quando il sole cala
                e il mare si accende di arancio.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="rounded-3xl bg-sand-light p-6 font-medium text-deep">
                🏖️ La nostra spiaggia attrezzata, il lido{" "}
                <strong>{siteConfig.nearby.name}</strong>, è collegata al chiosco: ombrellone,
                lettino e pranzo senza mai perdere di vista il mare.
              </p>
            </Reveal>
          </div>

          {/* Colonna foto ambiente */}
          <div className="flex flex-col gap-5">
            {ambientPhotos.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 0.12}>
                <div className={`relative overflow-hidden rounded-3xl shadow-xl shadow-deep/10 ${i === 1 ? "ml-10 h-52" : "h-64"}`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DayTimeline />
      <FinalCTA />
    </>
  );
}
