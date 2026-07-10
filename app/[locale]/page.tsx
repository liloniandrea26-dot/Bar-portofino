import Hero from "@/sections/restaurant/Hero";
import About from "@/sections/restaurant/About";
import MenuCTA from "@/sections/restaurant/MenuCTA";
import GallerySection from "@/sections/restaurant/GallerySection";
import HoursSection from "@/sections/restaurant/HoursSection";
import LocationSection from "@/sections/restaurant/LocationSection";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = (isLocale(params.locale) ? params.locale : "it") as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <About dict={dict} />
      <MenuCTA dict={dict} locale={locale} />
      <GallerySection dict={dict} />
      <HoursSection dict={dict} />
      <LocationSection dict={dict} />
    </>
  );
}
