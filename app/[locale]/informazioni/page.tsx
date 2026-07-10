import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/sections/restaurant/About";
import HoursSection from "@/sections/restaurant/HoursSection";
import LocationSection from "@/sections/restaurant/LocationSection";
import { siteImages } from "@/data/config";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const dict = getDictionary(params.locale);
  return { title: dict.infoPage.title, description: dict.infoPage.subtitle };
}

/** Pagina "Informazioni": chi siamo + orari + dove ci troviamo/contatti */
export default function InfoPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "it") as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        title={dict.infoPage.title}
        breadcrumb={dict.infoPage.breadcrumb}
        homeLabel={dict.nav.home}
        homeHref={`/${locale}`}
        subtitle={dict.infoPage.subtitle}
        image={siteImages.interno}
        imageAlt={dict.gallery.alts[3]}
      />
      <About dict={dict} />
      <HoursSection dict={dict} />
      <LocationSection dict={dict} />
    </>
  );
}
