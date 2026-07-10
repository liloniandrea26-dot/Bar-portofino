import type { MetadataRoute } from "next";

// ➜ [DA CONFERMARE] Sostituisci con il dominio reale
const BASE_URL = "https://www.ristorante-da-confermare.it";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
