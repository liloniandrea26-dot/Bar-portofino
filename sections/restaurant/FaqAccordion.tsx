"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { restaurantConfig } from "@/data/config";
import type { Dictionary, Locale } from "@/lib/i18n";

/**
 * FAQ ad accordion: una domanda aperta alla volta, animazioni fluide,
 * markup accessibile (button + aria-expanded + region).
 */
export default function FaqAccordion({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl px-5 py-20 md:px-8">
      <ul className="flex flex-col gap-4">
        {dict.faqPage.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={Math.min(i * 0.05, 0.4)}>
              <li className="overflow-hidden rounded-3xl bg-white shadow-lg shadow-ink/5 ring-1 ring-ink/5">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold leading-snug">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    aria-hidden="true"
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl font-medium transition-colors ${
                      isOpen ? "bg-brass text-white" : "bg-linen text-ink"
                    }`}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      <p className="px-6 pb-6 leading-relaxed text-ink/75">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </Reveal>
          );
        })}
      </ul>

      {/* CTA finale: se la risposta non c'è, contattaci */}
      <Reveal className="mt-12">
        <div className="flex flex-col items-center gap-4 rounded-3xl bg-linen p-8 text-center">
          <p className="font-display text-xl font-semibold">{dict.nav.call}?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={restaurantConfig.phone.href} className="btn-primary px-6 py-2.5 text-sm">
              📞 {restaurantConfig.phone.display}
            </a>
            <a
              href={restaurantConfig.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-6 py-2.5 text-sm text-ink"
            >
              💬 WhatsApp
            </a>
            <Link href={`/${locale}/informazioni`} className="btn-secondary px-6 py-2.5 text-sm text-ink">
              {dict.nav.info}
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
