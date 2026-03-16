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

function getLangFromUrl(): Locale | null {
  if (typeof window === "undefined") return null;
  const lan = new URLSearchParams(window.location.search).get("lan");
  return lan && isValidLocale(lan) ? (lan as Locale) : null;
}

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
    const fromUrl = getLangFromUrl();
    if (fromUrl) {
      localStorage.setItem(STORAGE_KEY, fromUrl);
      document.cookie = `${LOCALE_COOKIE}=${fromUrl}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
      setLocaleState(fromUrl);
      return;
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && isValidLocale(stored)) {
      setLocaleState(stored as Locale);
      return;
    }
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
