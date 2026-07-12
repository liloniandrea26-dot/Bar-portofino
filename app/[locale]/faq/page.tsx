import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/sections/restaurant/FaqAccordion";
import { siteImages } from "@/data/config";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const dict = getDictionary(params.locale);
  return { title: dict.faqPage.title, description: dict.faqPage.subtitle };
}

/** Pagina FAQ con accordion e dati strutturati Schema.org FAQPage */
export default function FaqPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "it") as Locale;
  const dict = getDictionary(locale);

  // Dati strutturati: le FAQ possono comparire direttamente su Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faqPage.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        title={dict.faqPage.title}
        breadcrumb={dict.faqPage.breadcrumb}
        homeLabel={dict.nav.home}
        homeHref={`/${locale}`}
        subtitle={dict.faqPage.subtitle}
        image={siteImages.about}
        imageAlt={dict.gallery.alts[5]}
      />
      <div className="bg-cream">
        <FaqAccordion dict={dict} locale={locale} />
      </div>
    </>
  );
}
