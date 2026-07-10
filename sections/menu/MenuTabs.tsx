"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import TiltCard from "@/components/TiltCard";
import { menuCategories, menuItems, type MenuCategory } from "@/data/content";

type Filter = MenuCategory | "tutti";

const filters: { id: Filter; label: string }[] = [
  { id: "tutti", label: "Tutti" },
  { id: "panini", label: "Panini" },
  { id: "insalatone", label: "Insalatone" },
  { id: "aperitivo", label: "Aperitivo" },
];

/**
 * Filtro a tab con transizione animata tra i piatti (AnimatePresence)
 * + sezioni ancorate per categoria con navigazione sticky su desktop.
 */
export default function MenuTabs() {
  const [filter, setFilter] = useState<Filter>("tutti");

  const visible = filter === "tutti" ? menuItems : menuItems.filter((i) => i.category === filter);

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-12">
        {/* Anchor navigation sticky laterale (desktop) */}
        <nav
          aria-label="Sezioni del menu"
          className="mb-10 hidden lg:sticky lg:top-32 lg:mb-0 lg:block lg:h-fit"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-deep/50">Vai a</p>
          <ul className="flex flex-col gap-2 border-l-2 border-sand pl-4">
            {menuCategories.map((cat) => (
              <li key={cat.id}>
                <a
                  href={`#${cat.anchor}`}
                  onClick={() => setFilter(cat.id)}
                  className="text-sm font-semibold text-deep/70 transition-colors hover:text-coral"
                >
                  {cat.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          {/* Filtro a tab */}
          <div
            role="tablist"
            aria-label="Filtra il menu per categoria"
            className="mb-12 flex flex-wrap gap-2"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                  filter === f.id ? "text-white" : "bg-sand-light text-deep hover:bg-sand"
                }`}
              >
                {filter === f.id && (
                  <motion.span
                    layoutId="menu-tab-bg"
                    className="absolute inset-0 rounded-full bg-coral"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{f.label}</span>
              </button>
            ))}
          </div>

          {/* Ancore per categoria (visibili quando il filtro è "tutti") */}
          {filter === "tutti" ? (
            <div className="flex flex-col gap-16">
              {menuCategories.map((cat) => (
                <section key={cat.id} id={cat.anchor} aria-labelledby={`titolo-${cat.anchor}`} className="scroll-mt-32">
                  <h2 id={`titolo-${cat.anchor}`} className="heading-hero mb-8 text-2xl md:text-3xl">
                    {cat.label}
                  </h2>
                  <ItemsGrid items={menuItems.filter((i) => i.category === cat.id)} />
                </section>
              ))}
            </div>
          ) : (
            <ItemsGrid items={visible} />
          )}

          {/* Nota di chiusura: vetrina, non e-commerce */}
          <p className="mt-16 rounded-3xl bg-sand-light p-6 text-center font-medium text-deep/80">
            🌊 Menu soggetto a variazioni stagionali — vieni a scoprirlo direttamente al chiosco.
          </p>
        </div>
      </div>
    </div>
  );
}

function ItemsGrid({ items }: { items: typeof menuItems }) {
  return (
    <motion.div layout className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.div
            key={item.name}
            layout
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <TiltCard className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-lg shadow-deep/5 ring-1 ring-deep/5">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold">{item.name}</h3>
                    {/* Prezzo opzionale, solo informativo — nessun ordine online */}
                    {item.price && (
                      <span className="shrink-0 rounded-full bg-sand-light px-3 py-1 text-sm font-bold text-sea">
                        {item.price}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-deep/70">{item.description}</p>
                </div>
              </article>
            </TiltCard>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
