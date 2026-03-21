import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isValidLocale } from "@/lib/i18n";

const LOCALE_COOKIE = "locale";

export function middleware(request: NextRequest) {
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

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/privacy", "/terms", "/support"],
};
