"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { siteImages } from "@/data/content";

const highlights = [
  {
    title: "Panini",
    description: "Gustosi, preparati al momento con ingredienti freschi. Da mangiare con i piedi sulla sabbia.",
    image: siteImages.pranzo,
    href: "/menu#panini",
  },
  {
    title: "Insalatone",
    description: "Sfiziose, colorate e leggere: l'alleato perfetto di una giornata di mare.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    href: "/menu#insalatone",
  },
  {
    title: "Aperitivo al Tramonto",
    description: "Il momento clou della giornata: spritz, hugo e stuzzichini mentre il sole tocca il mare.",
    image: siteImages.aperitivo,
    href: "/menu#aperitivo",
  },
];

/** Anteprima menu: tre card con micro-hover 3D (tilt) */
export default function MenuPreview() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-coral">Il Menu</p>
          <h2 className="heading-hero text-3xl md:text-5xl">Semplice, fresco, di mare</h2>
          <p className="mt-4 text-lg text-deep/70">
            Tre cose fatte bene, tutti i giorni: panini, insalatone e l&apos;aperitivo che chiude la giornata.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.12}>
              <TiltCard className="h-full">
                <Link
                  href={item.href}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-xl shadow-deep/5 ring-1 ring-deep/5"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/30 to-transparent" aria-hidden="true" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-3 flex-1 text-deep/70">{item.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-bold text-coral">
                      Guarda le proposte
                      <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link href="/menu" className="btn-primary">
            Vedi il Menu Completo →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
