"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { restaurantConfig } from "@/data/config";
import { menuCategories, menuNotes } from "@/data/menu";
import type { Dictionary, Locale } from "@/lib/i18n";

/**
 * Menu completo sul sito (trascritto dal PDF ufficiale), affiancato
 * al PDF scaricabile: categorie filtrabili a tab con transizione
 * animata, prezzi solo informativi — nessun ordine online.
 */
export default function MenuFallback({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [active, setActive] = useState<string>(menuCategories[0].id);

  const visible = menuCategories.filter((c) => c.id === active);

  return (
    <div className="mx-auto max-w-5xl px-5 py-20 md:px-8">
      {/* Bottone PDF sempre in evidenza */}
      <div className="mb-12 flex flex-col items-center gap-3 rounded-3xl bg-white p-8 text-center shadow-xl shadow-ink/5 ring-1 ring-ink/5">
        <a href={restaurantConfig.menuPdf} download className="btn-primary">
          📄 {dict.menuSection.download}
        </a>
        <p className="text-sm text-ink/50">{menuNotes.flour[locale]}</p>
      </div>

      {/* Tab categorie */}
      <div
        role="tablist"
        aria-label={dict.menuPage.title}
        className="mb-12 flex flex-wrap justify-center gap-2"
      >
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={active === cat.id}
            onClick={() => setActive(cat.id)}
            className={`relative rounded-full px-4 py-2.5 text-sm font-bold transition-colors ${
              active === cat.id ? "text-white" : "bg-linen text-ink hover:bg-stone"
            }`}
          >
            {active === cat.id && (
              <motion.span
                layoutId="menu-tab-bg"
                className="absolute inset-0 rounded-full bg-brass"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{cat.label[locale]}</span>
          </button>
        ))}
      </div>

      {/* Piatti della categoria attiva */}
      <AnimatePresence mode="wait">
        {visible.map((cat) => (
          <motion.section
            key={cat.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            aria-labelledby={`cat-${cat.id}`}
          >
            <div className="mb-6 flex items-baseline gap-4">
              <h2 id={`cat-${cat.id}`} className="heading-hero text-2xl md:text-3xl">
                {cat.label[locale]}
              </h2>
              <span className="h-px flex-1 bg-ink/10" aria-hidden="true" />
              <span className="text-sm font-semibold text-ink/40">
                {cat.items.length}
              </span>
            </div>

            <ul className="grid gap-4 md:grid-cols-2">
              {cat.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-3xl bg-white p-6 shadow-lg shadow-ink/5 ring-1 ring-ink/5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold leading-snug">
                      {item.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-linen px-3 py-1 text-sm font-bold tabular-nums text-smoke">
                      {item.price}
                    </span>
                  </div>
                  {item.desc && (
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {item.desc[locale]}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </AnimatePresence>

      {/* Note: coperto, surgelati, stagionalità + link allergeni */}
      <div className="mt-16 flex flex-col gap-2 rounded-3xl bg-linen p-6 text-center text-sm font-medium text-ink/75">
        <p className="text-base font-semibold text-ink">{menuNotes.cover[locale]}</p>
        <p>{menuNotes.frozen[locale]}</p>
        <p>{dict.menuPage.note}</p>
        <Link
          href={`/${locale}/allergeni`}
          className="group mx-auto mt-2 inline-flex items-center gap-2 text-base font-bold text-brass"
        >
          ⚠️ {dict.menuSection.allergensLink}
          <span
            className="transition-transform duration-300 group-hover:translate-x-1.5"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
