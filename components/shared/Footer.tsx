"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { SITE_NAME, CONTACT_EMAIL } from "@/content/site";
import { AppIconWithFallback } from "./AppIconWithFallback";
import { getTranslations } from "@/content/locales";
import { LOCALES, LOCALE_NAMES } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { useSetLocale } from "./LocaleProvider";

export function Footer({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const setLocale = useSetLocale();

  const handleLanguageClick = (e: React.MouseEvent<HTMLAnchorElement>, loc: Locale) => {
    e.preventDefault();
    setLocale(loc);
    router.replace(`${pathname}?lan=${loc}`, { scroll: false });
  };

  const footerLinks = {
    legal: [
      { label: "Terms of Service", href: `/terms?lan=${locale}` },
      { label: "Privacy Policy", href: `/privacy?lan=${locale}` },
    ],
    support: [
      { label: t.footer.contact, href: `mailto:${CONTACT_EMAIL}` },
    ],
  };

  return (
    <footer className="border-t border-neutral-200 bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:gap-16 lg:gap-24">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <AppIconWithFallback size="sm" />
              <span className="text-lg font-semibold tracking-tight text-[#1d1d1f]">
                {SITE_NAME}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              {t.footer.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-12 sm:gap-16">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                {t.footer.legal}
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.legal.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-neutral-600 hover:text-[#1d1d1f] transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Support
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.support.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-neutral-600 hover:text-[#1d1d1f] transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Language
              </h3>
              <ul className="mt-4 space-y-2">
                {LOCALES.map((loc) => {
                  const locHref = `${pathname}?lan=${loc}`;
                  return (
                    <li key={loc}>
                      <a
                        href={locHref}
                        onClick={(e) => handleLanguageClick(e, loc)}
                        className={clsx(
                          "text-sm transition-colors cursor-pointer",
                          loc === locale
                            ? "font-medium text-[#1d1d1f]"
                            : "text-neutral-600 hover:text-[#1d1d1f]"
                        )}
                      >
                        {LOCALE_NAMES[loc]}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-200">
          <p className="text-center text-sm text-neutral-500 pb-20 sm:pb-24">
            © 2026 {SITE_NAME}. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
