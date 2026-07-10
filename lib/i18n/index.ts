import { it } from "./it";
import { en } from "./en";
import { de } from "./de";

export const locales = ["it", "en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "it";

/** La struttura dei testi è definita dal dizionario italiano */
export type Dictionary = typeof it;

const dictionaries: Record<Locale, Dictionary> = { it, en, de };

export function getDictionary(locale: string): Dictionary {
  return dictionaries[(locales as readonly string[]).includes(locale) ? (locale as Locale) : "it"];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
