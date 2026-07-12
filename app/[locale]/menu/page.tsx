import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import MenuFallback from "@/sections/restaurant/MenuFallback";
import { siteImages } from "@/data/config";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const dict = getDictionary(params.locale);
  return { title: dict.menuPage.title, description: dict.menuPage.subtitle };
}

/** Pagina menu: PDF scaricabile + fallback testuale a categorie */
export default function MenuPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "it") as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        title={dict.menuPage.title}
        breadcrumb={dict.menuPage.breadcrumb}
        homeLabel={dict.nav.home}
        homeHref={`/${locale}`}
        subtitle={dict.menuPage.subtitle}
        image={siteImages.menuPage}
        imageAlt={dict.gallery.alts[6]}
      />
      <div className="bg-cream">
        <MenuFallback dict={dict} locale={locale} />
      </div>
    </>
  );
}
