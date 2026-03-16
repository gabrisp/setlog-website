"use client";

import Link from "next/link";
import clsx from "clsx";
import type { Locale } from "@/lib/i18n";

/** App Store badge image path by locale (black and white). */
export function getAppStoreBadgeSrc(locale: Locale, inverted: boolean): string {
  const name = inverted ? `${locale}-white` : locale;
  return `/badges/app-store/${name}.svg`;
}

interface AppStoreButtonProps {
  href: string;
  className?: string;
  external?: boolean;
  /** Inverted (white badge) for dark backgrounds */
  inverted?: boolean;
  /** Locale for badge language (en, es, fr, de, pt). Defaults to "en". */
  locale?: Locale;
}

export function AppStoreButton({
  href,
  className = "",
  external = true,
  inverted = false,
  locale = "en",
}: AppStoreButtonProps) {
  const linkClass = clsx(
    "inline-block transition-opacity hover:opacity-90 active:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-apple-blue focus-visible:ring-offset-2 rounded",
    className
  );

  const src = getAppStoreBadgeSrc(locale, inverted);

  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Download on the App Store"
      width={180}
      height={60}
      className="h-12 w-auto sm:h-14 sm:w-auto"
    />
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label="Download on the App Store"
      >
        {img}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClass} aria-label="Download on the App Store">
      {img}
    </Link>
  );
}
