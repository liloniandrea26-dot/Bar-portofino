"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/Header";
import { navLinks, siteConfig } from "@/data/content";
import { useOpenStatus } from "@/lib/hooks";

/** Footer globale: logo+social, link rapidi, contatti, mini-mappa + stato apertura */
export default function Footer() {
  const isOpen = useOpenStatus(siteConfig.hours.open, siteConfig.hours.close);

  return (
    <footer className="sand-texture-dark relative text-white">
      {/* Onda di raccordo con la sezione precedente */}
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute -top-px left-0 h-10 w-full rotate-180 text-cream"
      >
        <path
          d="M0,32 C240,64 480,0 720,24 C960,48 1200,16 1440,40 L1440,60 L0,60 Z"
          fill="currentColor"
        />
      </svg>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-10 pt-24 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        {/* Colonna 1: logo + payoff + social */}
        <div className="flex flex-col gap-5">
          <Logo light />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            {siteConfig.payoff}
          </p>
          <div className="flex gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-coral"
            >
              <FacebookIcon />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-coral"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        {/* Colonna 2: link rapidi */}
        <nav aria-label="Link rapidi" className="flex flex-col gap-3">
          <h3 className="font-display text-lg font-semibold text-sunset">Esplora</h3>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="w-fit text-sm text-white/75 transition-colors hover:text-coral"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Colonna 3: contatti */}
        <div className="flex flex-col gap-3 text-sm">
          <h3 className="font-display text-lg font-semibold text-sunset">Contatti</h3>
          <p className="text-white/75">{siteConfig.address.full}</p>
          <a href={siteConfig.phone.href} className="w-fit text-white/75 transition-colors hover:text-coral">
            {siteConfig.phone.display}
          </a>
          <a href={siteConfig.email.href} className="w-fit break-all text-white/75 transition-colors hover:text-coral">
            {siteConfig.email.display}
          </a>
          <p className="text-white/75">{siteConfig.hours.display}</p>
        </div>

        {/* Colonna 4: stato apertura + mini-mappa */}
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-lg font-semibold text-sunset">Adesso</h3>
          {isOpen !== null && (
            <p
              className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-bold ${
                isOpen ? "bg-aqua/20 text-aqua" : "bg-coral/20 text-coral"
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${isOpen ? "animate-pulse-slow bg-aqua" : "bg-coral"}`}
              />
              {isOpen ? "Aperto ora" : "Chiuso — riapriamo alle 7:30"}
            </p>
          )}
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src={siteConfig.maps.embedUrl}
              title="Mini-mappa: dove si trova Portofino Beach Bar"
              className="h-36 w-full grayscale-[40%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-white/50 md:flex-row md:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.address.city} ({siteConfig.address.province})
          </p>
          <p>{siteConfig.credits}</p>
        </div>
      </div>
    </footer>
  );
}
