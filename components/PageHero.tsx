"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Hero secondario per le pagine interne: più basso della home,
 * con titolo pagina e breadcrumb (Home / Nome pagina) localizzati.
 */
export default function PageHero({
  title,
  breadcrumb,
  homeLabel,
  homeHref,
  subtitle,
  image,
  imageAlt,
}: {
  title: string;
  breadcrumb: string;
  homeLabel: string;
  homeHref: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden pb-14 pt-36" data-cursor-zone>
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-deep/30"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 flex items-center gap-2 text-sm font-medium text-white/70"
        >
          <Link href={homeHref} className="transition-colors hover:text-sunset">
            {homeLabel}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-sunset">{breadcrumb}</span>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="heading-hero text-4xl text-white md:text-6xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-4 max-w-2xl text-lg text-white/85"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
