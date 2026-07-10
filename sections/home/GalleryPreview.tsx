"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Lightbox from "@/components/Lightbox";
import { galleryImages } from "@/data/content";

const previewImages = galleryImages.slice(0, 8);

// Altezze diverse per l'effetto mosaico/masonry
const heights = ["h-64", "h-44", "h-52", "h-64", "h-44", "h-60", "h-52", "h-44"];

/** Anteprima galleria: mosaico di 8 foto con lightbox */
export default function GalleryPreview() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="sand-texture py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-coral">La Galleria</p>
          <h2 className="heading-hero text-3xl md:text-5xl">Momenti dal Portofino</h2>
        </Reveal>

        <div className="mt-14 columns-2 gap-4 md:columns-4 [&>button]:mb-4">
          {previewImages.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.06}>
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className={`group relative block w-full overflow-hidden rounded-2xl ${heights[i]} mb-4`}
                aria-label={`Apri la foto: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-deep/0 transition-colors duration-300 group-hover:bg-deep/25" aria-hidden="true" />
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link href="/galleria" className="group inline-flex items-center gap-2 text-lg font-bold text-coral">
            Guarda tutte le foto
            <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>

      <Lightbox
        images={previewImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
