import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fraunces, Manrope } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import CookieBanner from "@/components/CookieBanner";
import { restaurantConfig } from "@/data/config";
import { getDictionary, isLocale, locales } from "@/lib/i18n";

// Font (provvisori — la scelta definitiva avviene in Fase 3)
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    // ➜ [DA CONFERMARE] Sostituisci con il dominio reale quando il sito va online
    metadataBase: new URL("https://www.ristorante-da-confermare.it"),
    title: {
      default: dict.meta.title,
      template: `%s | ${dict.brand.name}`,
    },
    description: dict.meta.description,
    openGraph: {
      type: "website",
      locale: params.locale === "it" ? "it_IT" : params.locale === "de" ? "de_DE" : "en_US",
      siteName: dict.brand.name,
      title: dict.meta.title,
      description: dict.meta.description,
    },
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  if (!isLocale(params.locale)) notFound();
  const dict = getDictionary(params.locale);

  // Dati strutturati Schema.org: aiutano Google a mostrare orari e contatti
  // [DA CONFERMARE] aggiorna indirizzo/telefono quando arrivano i dati reali
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: dict.brand.name,
    description: dict.meta.description,
    servesCuisine: ["Italian", "Pizza"],
    telephone: restaurantConfig.phone.display,
    email: restaurantConfig.email.display,
    address: restaurantConfig.address,
    vatID: restaurantConfig.vat,
  };

  return (
    <html lang={params.locale} className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Header dict={dict} locale={params.locale} />
          <main>{children}</main>
          <Footer dict={dict} locale={params.locale} />
        </SmoothScroll>
        <CustomCursor />
        <CookieBanner dict={dict} locale={params.locale} />
      </body>
    </html>
  );
}
