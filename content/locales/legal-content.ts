import type { Locale } from "@/lib/i18n";
import { privacyEn } from "./legal-privacy-en";
import { privacyEs } from "./legal-privacy-es";
import { termsEn } from "./legal-terms-en";
import { termsEs } from "./legal-terms-es";

export type LegalPrivacy = typeof privacyEn;
export type LegalTerms = typeof termsEn;

const legalPrivacyByLocale: Record<Locale, LegalPrivacy> = {
  en: privacyEn,
  es: privacyEs,
};

const legalTermsByLocale: Record<Locale, LegalTerms> = {
  en: termsEn,
  es: termsEs,
};

export function getLegalPrivacy(locale: Locale): LegalPrivacy {
  return legalPrivacyByLocale[locale] ?? privacyEn;
}

export function getLegalTerms(locale: Locale): LegalTerms {
  return legalTermsByLocale[locale] ?? termsEn;
}
