"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Scale } from "lucide-react";
import clsx from "clsx";
import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/content/locales";

export function FloatingNav({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const t = getTranslations(locale);

  const navItems = [
    { path: "/", href: `/`, label: t.nav.home, icon: Home },
    { path: "/privacy", href: `/privacy?lan=${locale}`, label: t.nav.privacy, icon: FileText },
    { path: "/terms", href: `/terms?lan=${locale}`, label: t.nav.terms, icon: Scale },
  ] as const;

  return (
    <nav
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-0.5 rounded-full border border-neutral-200/80 bg-white/80 px-2 py-1.5 shadow-soft backdrop-blur-xl">
        {navItems.map(({ path, href, label, icon: Icon }) => {
          const isActive =
            path === "/"
              ? pathname === "/"
              : pathname === path || pathname.startsWith(path + "/");
          return (
            <Link
              key={path}
              href={href}
              className={clsx(
                "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
                isActive
                  ? "bg-neutral-100 text-[#1d1d1f]"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-[#1d1d1f]"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-4 w-4" aria-hidden />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
