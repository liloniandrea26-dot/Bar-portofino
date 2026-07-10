"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const moments = [
  {
    time: "7:30 — Mattina",
    title: "Colazione fronte mare",
    description:
      "Caffè, brioche e la spiaggia che si sveglia piano. Il momento migliore per prendersi il lettino preferito.",
    icon: (
      // Sole che sorge
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-10 w-10">
        <circle cx="24" cy="30" r="10" fill="#F5A25D" />
        <path d="M24 8v6M10 14l4 4M38 14l-4 4M6 30h4M38 30h4" stroke="#FF7A59" strokeWidth="3" strokeLinecap="round" />
        <path d="M4 42c4-3 8-3 12 0s8 3 12 0 8-3 12 0" stroke="#4EC5C1" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    time: "12:30 — Pranzo",
    title: "Panini e insalatone sulla sabbia",
    description:
      "Gustosi panini e sfiziose insalatone, preparati al momento. Si mangia con i piedi nella sabbia, senza fretta.",
    icon: (
      // Panino
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-10 w-10">
        <path d="M8 20c0-7 7-12 16-12s16 5 16 12H8z" fill="#F5A25D" />
        <rect x="8" y="22" width="32" height="5" rx="2.5" fill="#4EC5C1" />
        <rect x="6" y="29" width="36" height="4" rx="2" fill="#FF7A59" />
        <path d="M8 35h32c0 4-4 6-16 6S8 39 8 35z" fill="#EAD9BE" />
      </svg>
    ),
  },
  {
    time: "18:30 — Sera",
    title: "Aperitivo al tramonto",
    description:
      "Il clou della giornata: spritz, hugo e stuzzichini mentre il sole si tuffa nell'Adriatico. Applausi facoltativi.",
    icon: (
      // Calice al tramonto
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="h-10 w-10">
        <path d="M14 6h20l-8 14v14h-4V20L14 6z" fill="#BEE7EC" />
        <path d="M17 9h14l-5 9h-4l-5-9z" fill="#FF7A59" />
        <rect x="18" y="38" width="12" height="3" rx="1.5" fill="#BEE7EC" />
        <circle cx="38" cy="12" r="5" fill="#F5A25D" />
      </svg>
    ),
  },
];

/** Timeline "La Giornata al Portofino": colazione → pranzo → aperitivo */
export default function DayTimeline() {
  return (
    <section className="sand-texture py-24" aria-labelledby="giornata-titolo">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-coral">Dall&apos;alba al tramonto</p>
          <h2 id="giornata-titolo" className="heading-hero text-3xl md:text-5xl">
            La giornata al Portofino
          </h2>
        </Reveal>

        <div className="relative mt-16 grid gap-10 md:grid-cols-3">
          {/* Linea di collegamento (desktop) */}
          <div aria-hidden="true" className="absolute left-0 right-0 top-10 hidden h-0.5 bg-gradient-to-r from-aqua via-sunset to-coral md:block" />

          {moments.map((moment, i) => (
            <Reveal key={moment.title} delay={i * 0.15} className="relative">
              <div className="flex h-full flex-col items-center rounded-3xl bg-white p-8 text-center shadow-xl shadow-deep/5 ring-1 ring-deep/5">
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-sand-light"
                >
                  {moment.icon}
                </motion.div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-coral">{moment.time}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">{moment.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-deep/70">{moment.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
