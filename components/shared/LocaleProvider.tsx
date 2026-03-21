"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/i18n";

const STORAGE_KEY = "locale";
const LOCALE_COOKIE = "locale";

type LocaleContextValue = { locale: Locale; setLocale: (loc: Locale) => void };
const LocaleContext = createContext<LocaleContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
});


export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const setLocale = (loc: Locale) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, loc);
      document.cookie = `${LOCALE_COOKIE}=${loc}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
    }
    setLocaleState(loc);
  };

  useEffect(() => {
    // initialLocale already reflects the cookie set by middleware (including ?lan= redirects).
    // Always sync localStorage to match it so stale localStorage values don't override.
    localStorage.setItem(STORAGE_KEY, initialLocale);
    setLocaleState(initialLocale);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  return useContext(LocaleContext).locale;
}

export function useSetLocale(): (loc: Locale) => void {
  return useContext(LocaleContext).setLocale;
}
