import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { siteConfig } from "@/data/content";

// Font display estivo/elegante per i titoli
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

// Font sans pulito per i testi
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  // ➜ Sostituisci con il dominio reale quando il sito va online
  metadataBase: new URL("https://www.portofinobeachbar.it"),
  title: {
    default: `${siteConfig.name} — Lignano Sabbiadoro`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.descriptionEvocativa,
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Lignano Sabbiadoro`,
    description: siteConfig.descriptionEvocativa,
  },
};

// Dati strutturati Schema.org: aiutano Google a mostrare orari, telefono e indirizzo
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: siteConfig.name,
  description: siteConfig.description,
  telephone: "+39043171834",
  email: siteConfig.email.display,
  servesCuisine: ["Panini", "Insalate", "Aperitivi"],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    postalCode: siteConfig.address.zip,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.province,
    addressCountry: "IT",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "07:30",
    closes: "20:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <CustomCursor />
      </body>
    </html>
  );
}
