import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GallerySection from "@/sections/restaurant/GallerySection";
import { siteImages } from "@/data/config";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const dict = getDictionary(params.locale);
  return { title: dict.nav.gallery, description: dict.gallery.subtitle };
}

/** Pagina galleria dedicata (mosaico + lightbox) */
export default function GalleriaPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "it") as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        title={dict.gallery.title}
        breadcrumb={dict.nav.gallery}
        homeLabel={dict.nav.home}
        homeHref={`/${locale}`}
        subtitle={dict.gallery.subtitle}
        image={siteImages.interno}
        imageAlt={dict.gallery.alts[3]}
      />
      <GallerySection dict={dict} locale={locale} />
    </>
  );
}
