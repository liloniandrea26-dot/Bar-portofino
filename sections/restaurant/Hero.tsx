"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { restaurantConfig, siteImages } from "@/data/config";
import { useOpenNow } from "@/lib/hooks";
import type { Dictionary, Locale } from "@/lib/i18n";

const ThreeStage = dynamic(() => import("@/three/ThreeStage"), { ssr: false });
const SandParticles = dynamic(() => import("@/three/SandParticles"), { ssr: false });

/**
 * Hero a schermo intero come da riferimento UX:
 * foto piatto/ambiente + nome attività in overlay + badge Aperto/Chiuso
 * + i due bottoni principali "Scarica Menu" e "Informazioni".
 */
export default function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const isOpen = useOpenNow(restaurantConfig.weekHours);
  const name = dict.brand.name;

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      data-cursor-zone
      aria-label={name}
    >
      {/* ➜ Sostituisci con la foto reale del piatto forte / dell'ambiente */}
      <Image
        src={siteImages.hero}
        alt={dict.gallery.alts[0]}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/75"
        aria-hidden="true"
      />

      {/* Particelle 3D ambientali (scintille dorate dal forno) */}
      <ThreeStage
        className="pointer-events-none absolute inset-0"
        camera={{ position: [0, 0, 6], fov: 55 }}
      >
        <SandParticles />
      </ThreeStage>

      <div className="relative mx-auto w-full max-w-5xl px-5 pb-24 pt-36 text-center md:px-8">
        {/* Badge Aperto/Chiuso */}
        {isOpen !== null && (
          <motion.p
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold backdrop-blur-sm ${
              isOpen
                ? "bg-sage/20 text-sage ring-1 ring-sage/40"
                : "bg-brass/25 text-white ring-1 ring-brass/50"
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full ${isOpen ? "animate-pulse-slow bg-sage" : "bg-brass"}`}
            />
            {isOpen ? dict.status.open : dict.status.closed}
          </motion.p>
        )}

        {/* Nome attività, parola per parola */}
        <h1
          className="heading-hero text-5xl text-white md:text-7xl lg:text-8xl"
          aria-label={name}
        >
          {name.split(" ").map((word, wi) => (
            <motion.span
              key={wi}
              aria-hidden="true"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + wi * 0.12, duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mr-3 inline-block whitespace-nowrap last:mr-0 md:mr-5"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl"
        >
          {dict.hero.subtitle}
        </motion.p>

        {/* I due bottoni principali */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.7 }}
          className="mt-9 flex flex-wrap justify-center gap-4"
        >
          <a href={restaurantConfig.menuPdf} target="_blank" rel="noopener noreferrer" className="btn-primary">
            📄 {dict.hero.ctaMenu}
          </a>
          <Link href={`/${locale}/informazioni`} className="btn-secondary text-white">
            {dict.hero.ctaInfo}
          </Link>
        </motion.div>
      </div>

      {/* Indicatore di scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/60 p-1.5">
          <motion.div
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2.5 w-1.5 rounded-full bg-champagne"
          />
        </div>
      </motion.div>
    </section>
  );
}
