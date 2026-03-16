export const LOCALES = ["en", "es", "fr", "de", "pt"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
};

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

/** Path prefix for locale: empty for English (no prefix), /es, /fr, etc. for others */
export function basePathForLocale(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}
