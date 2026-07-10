"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/Reveal";
import { galleryImages } from "@/data/content";

const ThreeStage = dynamic(() => import("@/three/ThreeStage"), { ssr: false });
const SunsetWave = dynamic(() => import("@/three/SunsetWave"), { ssr: false });

// Foto per la galleria orizzontale trascinabile
const sunsetPhotos = galleryImages.filter(
  (img) => img.category === "tramonti" || img.category === "atmosfera",
);

/**
 * Sezione emozionale del tramonto: il gradiente di sfondo vira
 * dal blu Adriatico all'arancio corallo legato allo scroll (GSAP).
 */
export default function SunsetSection() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Interpolazione dei colori del gradiente in base allo scroll
      gsap.fromTo(
        section.current,
        { background: "linear-gradient(180deg, #0A3153 0%, #14557E 100%)" },
        {
          background: "linear-gradient(180deg, #14557E 0%, #F5A25D 60%, #FF7A59 100%)",
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top 80%",
            end: "bottom 40%",
            scrub: 1.2,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={section}
      className="relative overflow-hidden py-28 text-white md:py-36"
      style={{ background: "linear-gradient(180deg, #0A3153 0%, #14557E 100%)" }}
    >
      {/* Onda 3D animata sullo sfondo */}
      <ThreeStage
        className="pointer-events-none absolute inset-0 opacity-60"
        camera={{ position: [0, 1.5, 5], fov: 50 }}
      >
        <SunsetWave />
      </ThreeStage>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-sand">L&apos;ora d&apos;oro</p>
          <blockquote className="heading-hero text-3xl md:text-5xl">
            “Concludi la giornata come merita: un aperitivo al tramonto,
            <span className="text-sand"> con i piedi ancora nella sabbia.”</span>
          </blockquote>
        </Reveal>

        {/* Galleria orizzontale trascinabile (drag/swipe) */}
        <div className="mt-16 overflow-hidden" aria-label="Foto di aperitivi al tramonto">
          <motion.div
            drag="x"
            dragConstraints={{ left: -((sunsetPhotos.length - 1) * 320), right: 0 }}
            className="flex cursor-grab gap-6 active:cursor-grabbing"
          >
            {sunsetPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative h-72 w-72 shrink-0 overflow-hidden rounded-3xl shadow-2xl shadow-deep/40 md:h-80 md:w-80"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="320px"
                  className="pointer-events-none object-cover"
                />
              </div>
            ))}
          </motion.div>
          <p className="mt-5 text-center text-sm text-white/60" aria-hidden="true">
            ← trascina per sfogliare →
          </p>
        </div>
      </div>
    </section>
  );
}
