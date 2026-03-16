import type { Locale } from "@/lib/i18n";
import type { Translations } from "./types";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { de } from "./de";
import { pt } from "./pt";

const translations: Record<Locale, Translations> = {
  en,
  es,
  fr,
  de,
  pt,
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? en;
}

export { getLegalPrivacy, getLegalTerms } from "./legal-content";
export type { LegalPrivacy, LegalTerms } from "./legal-content";

export { en, es, fr, de, pt };
