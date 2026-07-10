"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/Logo";
import { navLinks, siteConfig } from "@/data/content";

/**
 * Header sticky: trasparente sopra l'hero, diventa chiaro con blur allo scroll.
 * Su mobile apre un overlay full-screen animato.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Chiude il menu mobile a ogni cambio pagina
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Blocca lo scroll del body quando il menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-cream/85 shadow-lg shadow-deep/5 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo light={!solid} />

        {/* Navigazione desktop */}
        <nav aria-label="Navigazione principale" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  solid
                    ? active
                      ? "text-coral"
                      : "text-deep hover:text-coral"
                    : active
                      ? "text-sunset"
                      : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-coral"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* CTA: nessuna prenotazione online, solo invito a venire */}
          <a
            href={siteConfig.maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-liquid hidden text-sm md:inline-flex ${
              solid
                ? "bg-deep text-white hover:bg-sea"
                : "bg-white/15 text-white ring-1 ring-white/40 backdrop-blur-sm hover:bg-white/25"
            }`}
          >
            Vieni a trovarci
          </a>

          {/* Hamburger mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Chiudi il menu" : "Apri il menu"}
            className={`flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden ${
              solid ? "text-deep" : "text-white"
            }`}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-6 rounded-full bg-current"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-0.5 w-6 rounded-full bg-current"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-6 rounded-full bg-current"
            />
          </button>
        </div>
      </div>

      {/* Overlay mobile full-screen */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 92% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 92% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 92% 5%)" }}
            transition={{ duration: 0.55, ease: [0.83, 0, 0.17, 1] }}
            className="sand-texture-dark fixed inset-0 top-0 z-[-1] flex h-screen flex-col justify-between pb-10 pt-28 lg:hidden"
          >
            <nav aria-label="Navigazione mobile" className="flex flex-col gap-1 px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 font-display text-3xl font-semibold ${
                      pathname === link.href ? "text-coral" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-4 px-8"
            >
              <p className="text-sm text-white/70">{siteConfig.hours.display}</p>
              <div className="flex gap-4">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-coral"
                >
                  <FacebookIcon />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-coral"
                >
                  <InstagramIcon />
                </a>
                <a
                  href={siteConfig.phone.href}
                  aria-label={`Chiama ${siteConfig.phone.display}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-coral"
                >
                  <PhoneIcon />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.7-1.6h1.5V3.2c-.3 0-1.2-.2-2.3-.2-2.4 0-4 1.4-4 4.2v2.6H7.7V13h2.7v8h3.1z" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
