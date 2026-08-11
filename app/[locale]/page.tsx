import Hero from "@/sections/restaurant/Hero";
import Essentials from "@/sections/restaurant/Essentials";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

/**
 * Home essenziale: hero d'impatto con frase accattivante + card con
 * le sole informazioni fondamentali. Menu, galleria, allergeni, FAQ
 * e informazioni complete vivono nelle rispettive pagine.
 */
export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "it") as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <Essentials dict={dict} locale={locale} />
    </>
  );
}
