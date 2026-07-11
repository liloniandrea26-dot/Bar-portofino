import type { Metadata } from "next";
import Link from "next/link";
import AllergenList from "@/sections/restaurant/AllergenList";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const dict = getDictionary(params.locale);
  return { title: dict.allergensPage.title, description: dict.allergensPage.subtitle };
}

/**
 * Pagina allergeni con intestazione dedicata e riconoscibile:
 * niente foto di piatti — un header sobrio a tema "informazione
 * alimentare" con il riferimento normativo ben visibile.
 */
export default function AllergeniPage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "it") as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      {/* Header dedicato, senza immagini di cibo */}
      <section className="grain-texture-dark relative overflow-hidden pb-16 pt-36 text-white">
        {/* Grande "14" in filigrana: le 14 sostanze della normativa */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[16rem] font-bold leading-none text-white/5 md:text-[22rem]"
        >
          14
        </span>

        <div className="relative mx-auto w-full max-w-7xl px-5 md:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-sm font-medium text-white/60">
            <Link href={`/${locale}`} className="transition-colors hover:text-champagne">
              {dict.nav.home}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-champagne">{dict.allergensPage.breadcrumb}</span>
          </nav>

          <div className="flex items-start gap-5">
            <span
              aria-hidden="true"
              className="mt-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-champagne/15 text-4xl ring-1 ring-champagne/30"
            >
              ⚠️
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-champagne">
                Reg. UE 1169/2011 · Allegato II
              </p>
              <h1 className="heading-hero mt-2 text-4xl md:text-6xl">
                {dict.allergensPage.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/80">
                {dict.allergensPage.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-cream">
        <AllergenList dict={dict} />
      </div>
    </>
  );
}
