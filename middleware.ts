import { NextResponse, type NextRequest } from "next/server";

const locales = ["it", "en", "de"] as const;
const defaultLocale = "it";

/**
 * Reindirizza le richieste senza prefisso lingua verso la lingua
 * preferita del browser (it/en/de), con fallback sull'italiano.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const accept = (request.headers.get("accept-language") ?? "").toLowerCase();
  const preferred =
    locales.find((locale) =>
      accept
        .split(",")
        .some((part) => part.trim().startsWith(locale)),
    ) ?? defaultLocale;

  return NextResponse.redirect(
    new URL(`/${preferred}${pathname === "/" ? "" : pathname}`, request.url),
  );
}

export const config = {
  // Esclude asset statici, API e file con estensione (immagini, pdf, video...)
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
