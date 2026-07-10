"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/Reveal";
import { siteConfig, siteImages } from "@/data/content";

const badges = [
  "Aperti tutti i giorni 7:30–20:00",
  "Zona attrezzata e tranquilla",
  "A due passi dal mare",
];

/** Presentazione rapida: testo + composizione fotografica con parallax GSAP */
export default function QuickIntro() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Le tre foto scorrono a velocità diverse (parallax multi-layer)
      gsap.to("[data-parallax='slow']", {
        y: -40,
        ease: "none",
        scrollTrigger: { trigger: scope.current, start: "top bottom", end: "bottom top", scrub: 1 },
      });
      gsap.to("[data-parallax='fast']", {
        y: -110,
        ease: "none",
        scrollTrigger: { trigger: scope.current, start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={scope} className="sand-texture relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        {/* Testo */}
        <div>
          <Reveal>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-coral">Il Locale</p>
            <h2 className="heading-hero text-3xl md:text-5xl">
              Un chiosco sulla sabbia, <span className="text-sea">dal 1° caffè all&apos;ultimo tramonto</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-deep/80">
              {siteConfig.description}
            </p>
            <p className="mt-4 leading-relaxed text-deep/70">
              Niente fretta, niente formalità: al Portofino la giornata scorre al ritmo delle onde,
              tra un panino appena fatto, un&apos;insalatona fresca e uno spritz mentre il sole scende
              sull&apos;Adriatico.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full border border-sea/20 bg-white px-4 py-2 text-sm font-semibold text-sea shadow-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.35}>
            <Link
              href="/il-locale"
              className="group mt-8 inline-flex items-center gap-2 font-bold text-coral"
            >
              Scopri di più
              <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">
                →
              </span>
            </Link>
          </Reveal>
        </div>

        {/* Composizione fotografica asimmetrica con overlap */}
        <div className="relative h-[440px] md:h-[520px]">
          <div data-parallax="slow" className="absolute left-0 top-0 h-[62%] w-[68%] overflow-hidden rounded-3xl shadow-2xl shadow-deep/20">
            <Image
              src={siteImages.spiaggia}
              alt="Ombrelloni e lettini della zona attrezzata del Portofino"
              fill
              sizes="(max-width: 1024px) 68vw, 34vw"
              className="object-cover"
            />
          </div>
          <div data-parallax="fast" className="absolute bottom-6 right-0 h-[55%] w-[58%] overflow-hidden rounded-3xl border-8 border-cream shadow-2xl shadow-deep/25">
            <Image
              src={siteImages.aperitivo}
              alt="Aperitivo al tramonto in riva al mare"
              fill
              sizes="(max-width: 1024px) 58vw, 29vw"
              className="object-cover"
            />
          </div>
          {/* Forma decorativa */}
          <div
            data-parallax="slow"
            aria-hidden="true"
            className="absolute -bottom-4 left-8 h-28 w-28 rounded-full bg-aqua/30 blur-sm"
          />
          <div
            aria-hidden="true"
            className="absolute right-10 top-4 h-16 w-16 rounded-full bg-coral/40"
          />
        </div>
      </div>
    </section>
  );
}
