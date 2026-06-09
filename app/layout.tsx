import type { Metadata } from "next";
import { cookies } from "next/headers";
import { SITE_NAME, SITE_DESCRIPTION, BASE_URL } from "@/content/site";
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { LocaleProvider } from "@/components/shared/LocaleProvider";
import { AppShell } from "@/components/shared/AppShell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} — Gym Tracker for iPhone`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("locale")?.value;
  const locale: Locale =
    localeCookie && isValidLocale(localeCookie)
      ? (localeCookie as Locale)
      : DEFAULT_LOCALE;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <LocaleProvider initialLocale={locale}>
          <AppShell>{children}</AppShell>
        </LocaleProvider>
      </body>
    </html>
  );
}
