import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { siteImages } from "@/data/config";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const dict = getDictionary(params.locale);
  return { title: dict.privacyPage.title, description: dict.privacyPage.subtitle };
}

/** Privacy Policy con struttura GDPR e testi [DA CONFERMARE] */
export default function PrivacyPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "it") as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero
        title={dict.privacyPage.title}
        breadcrumb={dict.privacyPage.breadcrumb}
        homeLabel={dict.nav.home}
        homeHref={`/${locale}`}
        subtitle={dict.privacyPage.subtitle}
        image={siteImages.interno}
        imageAlt={dict.gallery.alts[3]}
      />
      <div className="bg-cream py-20">
        <div className="mx-auto flex max-w-3xl flex-col gap-8 px-5 md:px-8">
          <Reveal>
            <p className="text-sm font-semibold text-deep/50">{dict.privacyPage.updated}</p>
          </Reveal>
          {dict.privacyPage.sections.map((section, i) => (
            <Reveal key={section.h} delay={i * 0.08}>
              <section className="rounded-3xl bg-white p-7 shadow-lg shadow-deep/5 ring-1 ring-deep/5">
                <h2 className="font-display text-xl font-semibold">{section.h}</h2>
                <p className="mt-3 leading-relaxed text-deep/75">{section.p}</p>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
