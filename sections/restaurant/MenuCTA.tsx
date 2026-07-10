"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import Reveal from "@/components/Reveal";
import { restaurantConfig } from "@/data/config";
import type { Dictionary, Locale } from "@/lib/i18n";

const ThreeStage = dynamic(() => import("@/three/ThreeStage"), { ssr: false });
const Pizza3D = dynamic(() => import("@/three/Pizza3D"), { ssr: false });

/**
 * Sezione menu della home: bottone "Scarica Menu" (PDF) in evidenza,
 * link al menu sfogliabile online e alla tabella allergeni.
 * A fianco, la pizza 3D low-poly che ruota (fallback emoji su mobile).
 */
export default function MenuCTA({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    // Unica sezione scura del sito: dà profondità all'identità chiara
    <section className="grain-texture-dark relative overflow-hidden py-24 text-white md:py-32">
      <div
        className="absolute inset-0 bg-gradient-to-br from-ink/0 via-[#2b2620]/60 to-ink/0"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-champagne">
              {dict.menuSection.eyebrow}
            </p>
            <h2 className="heading-hero text-3xl md:text-5xl">{dict.menuSection.title}</h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-white/85">{dict.menuSection.intro}</p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={restaurantConfig.menuPdf} download className="btn-primary">
                📄 {dict.menuSection.download}
              </a>
              <Link href={`/${locale}/menu`} className="btn-secondary text-white">
                {dict.menuSection.viewOnline}
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/50">{dict.menuSection.downloadNote}</p>
          </Reveal>

          <Reveal delay={0.35}>
            <Link
              href={`/${locale}/allergeni`}
              className="group mt-6 inline-flex items-center gap-2 font-bold text-champagne"
            >
              ⚠️ {dict.menuSection.allergensLink}
              <span
                className="transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </Reveal>
        </div>

        {/* Pizza 3D decorativa */}
        <ThreeStage
          className="h-[340px] md:h-[420px]"
          camera={{ position: [0, 2.2, 5.5], fov: 42 }}
          fallback={
            <div
              className="flex h-full items-center justify-center text-[10rem] md:text-[12rem]"
              aria-hidden="true"
            >
              🍕
            </div>
          }
        >
          <Pizza3D />
        </ThreeStage>
      </div>
    </section>
  );
}
