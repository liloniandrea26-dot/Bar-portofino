import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

// ➜ [DA CONFERMARE] Sostituisci con il dominio reale
const BASE_URL = "https://www.ristorante-da-confermare.it";

const pages = ["", "/informazioni", "/menu", "/allergeni", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? ("weekly" as const) : ("monthly" as const),
      priority: page === "" ? 1 : 0.7,
    })),
  );
}
