"use client";

import { useLocale } from "./LocaleProvider";
import { Footer } from "./Footer";
import { FloatingNav } from "./FloatingNav";

export function AppShell({ children }: { children: React.ReactNode }) {
  const locale = useLocale();

  return (
    <>
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
      <FloatingNav locale={locale} />
    </>
  );
}
