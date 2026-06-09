import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALE_COOKIE = "locale";

function isValidLocale(locale: string): boolean {
  return locale === "en" || locale === "es";
}

export function middleware(request: NextRequest) {
  try {
    const lang = request.nextUrl.searchParams.get("lan");

    if (lang && isValidLocale(lang)) {
      const url = request.nextUrl.clone();
      url.searchParams.delete("lan");
      const res = NextResponse.redirect(url);
      res.cookies.set(LOCALE_COOKIE, lang, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
      return res;
    }
  } catch {
    // fall through
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/privacy", "/terms", "/support"],
};
