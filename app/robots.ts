import type { MetadataRoute } from "next";

// ➜ [DA COMPILARE] Sostituisci con il dominio reale del cliente
const BASE_URL = "https://www.nomepizzeria.it";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
