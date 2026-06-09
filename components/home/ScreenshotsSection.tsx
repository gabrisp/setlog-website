"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { screenshots } from "@/content/screenshots";
import { getTranslations } from "@/content/locales";
import type { Locale } from "@/lib/i18n";

function ScreenshotPlaceholder({ alt }: { alt: string }) {
  return (
    <div
      className="relative aspect-[9/19] w-[220px] shrink-0 rounded-[2.5rem] overflow-hidden bg-neutral-100 border border-neutral-200/80 shadow-soft-lg flex items-center justify-center"
      role="img"
      aria-label={alt}
    >
      <span className="text-sm text-neutral-400 font-medium">Screenshot</span>
    </div>
  );
}

function ScreenshotImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);
  if (error) return <ScreenshotPlaceholder alt={alt} />;
  return (
    <div className="relative aspect-[9/19] w-[220px] shrink-0 rounded-[2.5rem] overflow-hidden shadow-soft-lg border border-neutral-200/80 bg-neutral-100">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="220px"
        className="object-cover object-top"
        onError={() => setError(true)}
      />
    </div>
  );
}

export function ScreenshotsSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <section className="py-16 sm:py-20 md:py-24 overflow-hidden">
      <Container>
        <SectionHeading
          title={t.screenshots.title}
          subtitle={t.screenshots.subtitle}
          className="mb-12 sm:mb-16"
        />
      </Container>

      <div
        className="flex gap-5 overflow-x-auto px-6 sm:px-12 pb-6"
        style={{ scrollbarWidth: "none" }}
      >
        {screenshots.map((shot) => (
          <div key={shot.id} className="shrink-0">
            <ScreenshotImage src={shot.src} alt={shot.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
