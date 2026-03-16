import type { Locale } from "@/lib/i18n";
import { privacyEn } from "./legal-privacy-en";
import { privacyEs } from "./legal-privacy-es";
import { privacyFr } from "./legal-privacy-fr";
import { privacyDe } from "./legal-privacy-de";
import { privacyPt } from "./legal-privacy-pt";
import { termsEn } from "./legal-terms-en";
import { termsEs } from "./legal-terms-es";
import { termsFr } from "./legal-terms-fr";
import { termsDe } from "./legal-terms-de";
import { termsPt } from "./legal-terms-pt";

export type LegalPrivacy = typeof privacyEn;
export type LegalTerms = typeof termsEn;

const legalPrivacyByLocale: Record<Locale, LegalPrivacy> = {
  en: privacyEn,
  es: privacyEs,
  fr: privacyFr,
  de: privacyDe,
  pt: privacyPt,
};

const legalTermsByLocale: Record<Locale, LegalTerms> = {
  en: termsEn,
  es: termsEs,
  fr: termsFr,
  de: termsDe,
  pt: termsPt,
};

export function getLegalPrivacy(locale: Locale): LegalPrivacy {
  return legalPrivacyByLocale[locale] ?? privacyEn;
}

export function getLegalTerms(locale: Locale): LegalTerms {
  return legalTermsByLocale[locale] ?? termsEn;
}
