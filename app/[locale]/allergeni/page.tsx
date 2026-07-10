import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AllergenList from "@/sections/restaurant/AllergenList";
import { siteImages } from "@/data/config";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const dict = getDictionary(params.locale);
  return { title: dict.allergensPage.title, description: dict.allergensPage.subtitle };
}

/** Pagina allergeni: 14 sostanze del Reg. UE 1169/2011 con icone */
export default function AllergeniPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "it") as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        title={dict.allergensPage.title}
        breadcrumb={dict.allergensPage.breadcrumb}
        homeLabel={dict.nav.home}
        homeHref={`/${locale}`}
        subtitle={dict.allergensPage.subtitle}
        image={siteImages.about}
        imageAlt={dict.gallery.alts[5]}
      />
      <div className="bg-cream">
        <AllergenList dict={dict} />
      </div>
    </>
  );
}
