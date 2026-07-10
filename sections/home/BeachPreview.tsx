"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Reveal from "@/components/Reveal";
import { siteImages } from "@/data/content";

const ThreeStage = dynamic(() => import("@/three/ThreeStage"), { ssr: false });
const BeachScene = dynamic(() => import("@/three/BeachScene"), { ssr: false });

/** Anteprima spiaggia: full-width con scena 3D di ombrelloni e lettini */
export default function BeachPreview() {
  return (
    <section className="relative overflow-hidden bg-sea py-24 text-white md:py-32">
      {/* Foto di sfondo attenuata */}
      <Image
        src={siteImages.spiaggia}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/85 to-sea/60" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sunset">La Spiaggia</p>
            <h2 className="heading-hero text-3xl md:text-5xl">
              Una zona attrezzata e tranquilla, tutta per te
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              Lettini comodi, ombrelloni ordinati e il rumore delle onde come sottofondo. La nostra
              spiaggia è pensata per chi cerca relax vero: spazio per le famiglie, angoli di quiete
              e il bar sempre a due passi.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <ul className="mt-7 grid grid-cols-2 gap-3 text-sm font-semibold">
              {["Lettini e ombrelloni", "Atmosfera rilassata", "Family friendly", "Bar a due passi"].map(
                (feature) => (
                  <li key={feature} className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3">
                    <span className="text-aqua" aria-hidden="true">✦</span> {feature}
                  </li>
                ),
              )}
            </ul>
          </Reveal>
          <Reveal delay={0.35}>
            <Link href="/spiaggia" className="btn-liquid mt-9 bg-sunset text-deep shadow-lg shadow-sunset/25 hover:-translate-y-0.5">
              Scopri la Spiaggia →
            </Link>
          </Reveal>
        </div>

        {/* Scena 3D: ombrelloni + lettini (fallback foto su mobile) */}
        <ThreeStage
          className="h-[360px] md:h-[440px]"
          camera={{ position: [0, 1.2, 6.5], fov: 42 }}
          fallback={
            <div className="relative h-full overflow-hidden rounded-3xl">
              <Image
                src={siteImages.spiaggia}
                alt="Fila di ombrelloni sulla spiaggia del Portofino"
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
  );
}
