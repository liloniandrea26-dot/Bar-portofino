"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { restaurantConfig } from "@/data/config";
import type { Dictionary, Locale } from "@/lib/i18n";

/**
 * Menu testuale di fallback (in attesa/affiancamento del PDF):
 * categorie filtrabili a tab con transizione animata, prezzi solo
 * informativi — nessun ordine online.
 */
export default function MenuFallback({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const categories = dict.menuPage.categories;
  const [active, setActive] = useState<string>("tutte");

  const visible =
    active === "tutte" ? categories : categories.filter((c) => c.id === active);

  return (
    <div className="mx-auto max-w-5xl px-5 py-20 md:px-8">
      {/* Bottone PDF sempre in evidenza sopra il fallback */}
      <div className="mb-12 flex flex-col items-center gap-3 rounded-3xl bg-white p-8 text-center shadow-xl shadow-ink/5 ring-1 ring-ink/5">
        <a href={restaurantConfig.menuPdf} download className="btn-primary">
          📄 {dict.menuSection.download}
        </a>
        <p className="text-sm text-ink/50">{dict.menuSection.downloadNote}</p>
      </div>

      {/* Tab categorie */}
      <div
        role="tablist"
        aria-label={dict.menuPage.title}
        className="mb-12 flex flex-wrap justify-center gap-2"
      >
        {[{ id: "tutte", label: "•••" }, ...categories].map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={active === cat.id}
            onClick={() => setActive(cat.id)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
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
            <span className="relative">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Categorie e piatti */}
      <motion.div layout className="flex flex-col gap-14">
        <AnimatePresence mode="popLayout">
          {visible.map((cat) => (
            <motion.section
              key={cat.id}
              layout
              id={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              aria-labelledby={`cat-${cat.id}`}
              className="scroll-mt-32"
            >
              <div className="mb-6 flex items-baseline gap-4">
                <h2 id={`cat-${cat.id}`} className="heading-hero text-2xl md:text-3xl">
                  {cat.label}
                </h2>
                <span className="h-px flex-1 bg-ink/10" aria-hidden="true" />
              </div>

              <ul className="grid gap-4 md:grid-cols-2">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="group rounded-3xl bg-white p-6 shadow-lg shadow-ink/5 ring-1 ring-ink/5 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold">{item.name}</h3>
                      <span className="shrink-0 rounded-full bg-linen px-3 py-1 text-sm font-bold tabular-nums text-smoke">
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Nota stagionalità + link allergeni */}
      <div className="mt-16 rounded-3xl bg-linen p-6 text-center font-medium text-ink/80">
        <p>{dict.menuPage.note}</p>
        <Link
          href={`/${locale}/allergeni`}
          className="group mt-3 inline-flex items-center gap-2 font-bold text-brass"
        >
          ⚠️ {dict.menuSection.allergensLink}
          <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
