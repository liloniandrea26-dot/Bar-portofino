"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import { siteImages } from "@/data/config";
import type { Dictionary } from "@/lib/i18n";

/** Sezione "Chi siamo": racconto breve + composizione fotografica */
export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section className="grain-texture relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-brass">
              {dict.about.eyebrow}
            </p>
            <h2 className="heading-hero text-3xl md:text-5xl">{dict.about.title}</h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-ink/80">{dict.about.p1}</p>
            <p className="mt-4 leading-relaxed text-ink/70">{dict.about.p2}</p>
          </Reveal>

          <Reveal delay={0.25}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {dict.about.badges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full border border-smoke/20 bg-white px-4 py-2 text-sm font-semibold text-smoke shadow-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Composizione fotografica asimmetrica */}
        <div className="relative h-[440px] md:h-[520px]">
          <Reveal className="absolute left-0 top-0 h-[62%] w-[68%] overflow-hidden rounded-3xl shadow-2xl shadow-ink/20">
            <Image
              src={siteImages.about}
              alt={dict.gallery.alts[5]}
              fill
              sizes="(max-width: 1024px) 68vw, 34vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </Reveal>
          <Reveal
            delay={0.15}
            className="absolute bottom-6 right-0 h-[55%] w-[58%] overflow-hidden rounded-3xl border-8 border-cream shadow-2xl shadow-ink/25"
          >
            <Image
              src={siteImages.forno}
              alt={dict.gallery.alts[1]}
              fill
              sizes="(max-width: 1024px) 58vw, 29vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
