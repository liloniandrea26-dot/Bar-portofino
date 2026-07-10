"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { siteConfig, siteImages } from "@/data/content";

const ThreeStage = dynamic(() => import("@/three/ThreeStage"), { ssr: false });
const SandParticles = dynamic(() => import("@/three/SandParticles"), { ssr: false });
const CocktailGlass = dynamic(() => import("@/three/CocktailGlass"), { ssr: false });

const TITLE = "Portofino Beach Bar";

/** Hero full-screen: video/foto di sfondo, particelle 3D, titolo animato lettera per lettera */
export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      data-cursor-zone
      aria-label="Portofino Beach Bar — spiaggia di Lignano Sabbiadoro"
    >
      {/* Foto di fallback, sempre presente sotto il video */}
      <Image
        src={siteImages.heroFallback}
        alt="La spiaggia di Lignano Sabbiadoro al tramonto"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/*
        Video di sfondo in loop (muto, autoplay).
        ➜ Aggiungi il file reale in /public/videos/hero.mp4 (onde/spiaggia al tramonto):
          se il file manca, resta visibile la foto qui sopra.
      */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay scuro per leggibilità */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-deep/60 via-deep/35 to-deep/70"
        aria-hidden="true"
      />

      {/* Particelle di sabbia 3D che reagiscono al mouse */}
      <ThreeStage
        className="pointer-events-none absolute inset-0"
        camera={{ position: [0, 0, 6], fov: 55 }}
      >
        <SandParticles />
      </ThreeStage>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-24 pt-36 md:px-8 lg:grid-cols-[1.4fr_1fr]">
        <div>
          {/* Titolo con entrata lettera per lettera (le parole non si spezzano a capo) */}
          <h1 className="heading-hero text-5xl text-white md:text-7xl lg:text-8xl" aria-label={TITLE}>
            {TITLE.split(" ").map((word, wi, words) => {
              const offset = words.slice(0, wi).reduce((n, w) => n + w.length, 0);
              return (
                <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
                  {word.split("").map((char, ci) => (
                    <motion.span
                      key={ci}
                      initial={{ opacity: 0, y: 40, rotate: 6 }}
                      animate={{ opacity: 1, y: 0, rotate: 0 }}
                      transition={{
                        delay: 0.35 + (offset + ci) * 0.035,
                        duration: 0.55,
                        ease: [0.21, 0.47, 0.32, 0.98],
                      }}
                      className={`inline-block ${wi > 0 ? "text-sunset" : ""}`}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wi < words.length - 1 && <span className="inline-block w-4 md:w-7" />}
                </span>
              );
            })}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl"
          >
            {siteConfig.descriptionEvocativa}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link href="/menu" className="btn-primary">
              Scopri il Menu
            </Link>
            <Link href="/dove-siamo" className="btn-secondary text-white">
              Vieni a Trovarci
            </Link>
          </motion.div>
        </div>

        {/* Cocktail 3D decorativo accanto al titolo (solo desktop performante) */}
        <ThreeStage
          className="pointer-events-none hidden h-[420px] lg:block"
          camera={{ position: [0, 1, 6], fov: 40 }}
        >
          <CocktailGlass />
        </ThreeStage>
      </div>

      {/* Indicatore di scroll animato */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/60 p-1.5">
          <motion.div
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2.5 w-1.5 rounded-full bg-sunset"
          />
        </div>
      </motion.div>
    </section>
  );
}
