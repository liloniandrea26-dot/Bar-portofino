"use client";

import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import type { Dictionary } from "@/lib/i18n";

/**
 * Elenco dei 14 allergeni (Reg. UE 1169/2011, Allegato II)
 * con icone: testo normativo fisso, tradotto nelle tre lingue.
 */
export default function AllergenList({ dict }: { dict: Dictionary }) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <Reveal>
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-ink/80">
          {dict.allergensPage.intro}
        </p>
      </Reveal>

      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-label={dict.allergensPage.title}>
        {dict.allergensPage.items.map((item, i) => (
          <Reveal key={item.name} delay={(i % 3) * 0.08} className="h-full">
            <TiltCard className="h-full">
              <li className="flex h-full items-start gap-4 rounded-3xl bg-white p-6 shadow-lg shadow-ink/5 ring-1 ring-ink/5">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linen text-2xl"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold leading-snug">
                    <span className="mr-1.5 text-sm font-bold text-brass">{i + 1}.</span>
                    {item.name}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">{item.examples}</p>
                </div>
              </li>
            </TiltCard>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-14">
        <p className="rounded-3xl border-l-4 border-brass bg-linen p-6 text-sm leading-relaxed text-ink/80">
          ⚠️ {dict.allergensPage.disclaimer}
        </p>
      </Reveal>
    </div>
  );
}
