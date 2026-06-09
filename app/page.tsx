"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { CtaBanner } from "@/components/home/CtaBanner";
import { useLocale } from "@/components/shared/LocaleProvider";

const ScreenshotsSection = dynamic(
  () =>
    import("@/components/home/ScreenshotsSection").then(
      (m) => ({ default: m.ScreenshotsSection })
    ),
  { ssr: false }
);

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
