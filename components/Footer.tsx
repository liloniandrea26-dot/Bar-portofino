"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/Header";
import { restaurantConfig } from "@/data/config";
import { useOpenNow } from "@/lib/hooks";
import type { Dictionary, Locale } from "@/lib/i18n";

/**
 * Footer globale: logo+social, link rapidi, contatti con P.IVA,
 * orari sintetici con stato "Aperto/Chiuso" e link Privacy Policy.
 */
export default function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const isOpen = useOpenNow(restaurantConfig.weekHours);
  const base = `/${locale}`;

  const quickLinks = [
    { label: dict.nav.home, href: base },
    { label: dict.nav.info, href: `${base}/informazioni` },
    { label: dict.nav.menu, href: `${base}/menu` },
    { label: dict.nav.allergens, href: `${base}/allergeni` },
    { label: dict.nav.privacy, href: `${base}/privacy` },
  ];

  return (
    <footer className="grain-texture-dark relative text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-10 pt-20 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        {/* Colonna 1: logo + social */}
        <div className="flex flex-col gap-5">
          <Logo name={dict.brand.name} tagline={dict.brand.tagline} href={base} light />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">{dict.hero.subtitle}</p>
          <div className="flex gap-3">
            <a
              href={restaurantConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-brass"
            >
              <FacebookIcon />
            </a>
            <a
              href={restaurantConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-brass"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Colonna 2: link rapidi */}
        <nav aria-label={dict.footer.quickLinks} className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-semibold text-champagne">
            {dict.footer.quickLinks}
          </h3>
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="w-fit text-sm text-white/75 transition-colors hover:text-brass"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Colonna 3: contatti + P.IVA */}
        <div className="flex flex-col gap-3 text-sm">
          <h3 className="font-display text-lg font-semibold text-champagne">
            {dict.footer.contacts}
          </h3>
          <p className="text-white/75">{restaurantConfig.address}</p>
          <a
            href={restaurantConfig.phone.href}
            className="w-fit text-white/75 transition-colors hover:text-brass"
          >
            {restaurantConfig.phone.display}
          </a>
          <a
            href={restaurantConfig.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-white/75 transition-colors hover:text-brass"
          >
            💬 {restaurantConfig.whatsapp.display}
          </a>
          <a
            href={restaurantConfig.email.href}
            className="w-fit break-all text-white/75 transition-colors hover:text-brass"
          >
            {restaurantConfig.email.display}
          </a>
          <p className="text-white/60">{restaurantConfig.vat}</p>
        </div>

        {/* Colonna 4: orari sintetici + stato apertura */}
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-lg font-semibold text-champagne">
            {dict.footer.hoursTitle}
          </h3>
          {isOpen !== null && (
            <p
              className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${
                isOpen ? "bg-sage/20 text-sage" : "bg-brass/20 text-brass"
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${isOpen ? "animate-pulse-slow bg-sage" : "bg-brass"}`}
              />
              {isOpen ? dict.status.open : dict.status.closed}
            </p>
          )}
          <ul className="grid gap-1.5 text-sm text-white/70">
            {dict.hours.days.map((day, i) => {
              const slots = restaurantConfig.weekHours[i];
              return (
                <li key={day} className="flex justify-between gap-4">
                  <span>{day}</span>
                  <span className="text-right tabular-nums">
                    {slots.length === 0
                      ? dict.hours.closedLabel
                      : slots.map(([from, to]) => `${from}–${to}`).join(" · ")}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/50 md:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} {dict.brand.name} — {restaurantConfig.vat}
          </p>
          <div className="flex items-center gap-4">
            <Link href={`${base}/privacy`} className="transition-colors hover:text-brass">
              {dict.nav.privacy}
            </Link>
            <p>{dict.footer.credits}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
