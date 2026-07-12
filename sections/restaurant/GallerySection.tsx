"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";
import { galleryPhotos, type GalleryImage } from "@/data/config";
import type { Dictionary, Locale } from "@/lib/i18n";

// Altezze diverse per l'effetto mosaico
const heights = ["h-72", "h-56", "h-64", "h-72", "h-56", "h-64"];

/** Galleria a mosaico con lightbox: foto reali del ristorante */
export default function GallerySection({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images: GalleryImage[] = useMemo(
    () => galleryPhotos.map((photo) => ({ src: photo.src, alt: photo.alt[locale] })),
    [locale],
  );

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-brass">
            {dict.gallery.eyebrow}
          </p>
          <h2 className="heading-hero text-3xl md:text-5xl">{dict.gallery.title}</h2>
        </Reveal>

        <div className="mt-14 columns-2 gap-4 md:columns-3">
          {images.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.06}>
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className={`group relative mb-4 block w-full overflow-hidden rounded-2xl ${heights[i % heights.length]}`}
                aria-label={img.alt}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span
                  className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/25"
                  aria-hidden="true"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
