"use client";

import Reveal from "@/components/Reveal";
import { restaurantConfig } from "@/data/config";
import { useOpenNow, useTodayIndex } from "@/lib/hooks";
import type { Dictionary } from "@/lib/i18n";

/** Tabella orari di apertura per ogni giorno della settimana */
export default function HoursSection({ dict }: { dict: Dictionary }) {
  const isOpen = useOpenNow(restaurantConfig.weekHours);
  const today = useTodayIndex();

  return (
    <section className="grain-texture py-24 md:py-32" aria-labelledby="orari-titolo">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-brass">
            {dict.hours.eyebrow}
          </p>
          <h2 id="orari-titolo" className="heading-hero text-3xl md:text-5xl">
            {dict.hours.title}
          </h2>
          {isOpen !== null && (
            <p
              className={`mx-auto mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold ${
                isOpen ? "bg-sage/15 text-smoke" : "bg-brass/15 text-brass"
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${isOpen ? "animate-pulse-slow bg-sage" : "bg-brass"}`}
              />
              {isOpen ? dict.status.open : dict.status.closed}
            </p>
          )}
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-3xl bg-white shadow-xl shadow-ink/5 ring-1 ring-ink/5">
            <table className="w-full text-left">
              <caption className="sr-only">{dict.hours.title}</caption>
              <tbody>
                {dict.hours.days.map((day, i) => {
                  const slots = restaurantConfig.weekHours[i];
                  const isToday = today === i;
                  return (
                    <tr
                      key={day}
                      className={`border-b border-ink/5 last:border-0 ${
                        isToday ? "bg-champagne/10" : ""
                      }`}
                    >
                      <th scope="row" className="px-6 py-4 font-semibold">
                        {day}
                        {isToday && (
                          <span className="ml-2 rounded-full bg-brass px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
                            {dict.hours.todayLabel}
                          </span>
                        )}
                      </th>
                      <td className="px-6 py-4 text-right tabular-nums text-ink/80">
                        {slots.length === 0 ? (
                          <span className="font-semibold text-brass">{dict.hours.closedLabel}</span>
                        ) : (
                          slots.map(([from, to]) => `${from} – ${to}`).join("  ·  ")
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-sm text-ink/50">{dict.hours.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
