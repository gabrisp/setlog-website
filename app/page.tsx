"use client";

import { Hero } from "@/components/home/Hero";
import { ScreenshotsSection } from "@/components/home/ScreenshotsSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { useLocale } from "@/components/shared/LocaleProvider";

export default function HomePage() {
  const locale = useLocale();

  return (
    <>
      <Hero locale={locale} />
      <ScreenshotsSection locale={locale} />
      <FeaturesSection locale={locale} />
      <CtaBanner locale={locale} />
    </>
  );
}
