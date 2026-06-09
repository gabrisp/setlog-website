export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  es: "Español",
};

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

/** Path prefix for locale: empty for English (no prefix), /es for Spanish */
export function basePathForLocale(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}
