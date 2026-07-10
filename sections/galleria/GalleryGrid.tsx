"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Lightbox from "@/components/Lightbox";
import { galleryCategories, galleryImages, type GalleryCategory } from "@/data/content";

type Filter = GalleryCategory | "tutti";
type View = "griglia" | "carosello";

/** Galleria completa: filtri per categoria, vista griglia/carosello, lightbox */
export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("tutti");
  const [view, setView] = useState<View>("griglia");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible =
    filter === "tutti" ? galleryImages : galleryImages.filter((i) => i.category === filter);

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      {/* Barra filtri + selettore vista */}
      <div className="mb-12 flex flex-wrap items-center justify-between gap-5">
        <div role="tablist" aria-label="Filtra le foto per categoria" className="flex flex-wrap gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={filter === cat.id}
              onClick={() => {
                setFilter(cat.id as Filter);
                setLightboxIndex(null);
              }}
              className={`relative rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                filter === cat.id ? "text-white" : "bg-sand-light text-deep hover:bg-sand"
              }`}
            >
              {filter === cat.id && (
                <motion.span
                  layoutId="gallery-tab-bg"
                  className="absolute inset-0 rounded-full bg-sea"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="flex gap-1 rounded-full bg-sand-light p-1" role="group" aria-label="Cambia vista">
          {(["griglia", "carosello"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              aria-pressed={view === v}
              className={`rounded-full px-4 py-2 text-sm font-bold capitalize transition-colors ${
                view === v ? "bg-deep text-white" : "text-deep/70 hover:text-deep"
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {view === "griglia" ? (
        /* Vista masonry a colonne */
        <motion.div layout className="columns-2 gap-4 md:columns-3 lg:columns-4">
          <AnimatePresence mode="popLayout">
            {visible.map((img, i) => (
              <motion.button
                key={img.src}
                layout
                type="button"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightboxIndex(i)}
                className="group relative mb-4 block w-full overflow-hidden rounded-2xl"
                aria-label={`Apri la foto: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={i % 3 === 0 ? 800 : i % 3 === 1 ? 500 : 650}
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-deep/80 to-transparent p-4 text-left text-xs font-semibold text-white transition-transform duration-300 group-hover:translate-y-0">
                  {img.alt}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Vista carosello orizzontale trascinabile */
        <div className="overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ left: -(visible.length - 1) * 340, right: 0 }}
            className="flex cursor-grab gap-6 active:cursor-grabbing"
          >
            {visible.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="relative h-[420px] w-80 shrink-0 overflow-hidden rounded-3xl shadow-xl shadow-deep/10"
                aria-label={`Apri la foto: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="320px"
                  className="pointer-events-none object-cover"
                />
              </button>
            ))}
          </motion.div>
          <p className="mt-5 text-center text-sm text-deep/50" aria-hidden="true">
            ← trascina per sfogliare →
          </p>
        </div>
      )}

      <Lightbox
        images={visible}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
