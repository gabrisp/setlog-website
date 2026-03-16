import { Container } from "@/components/shared/Container";
import { AppIconWithFallback } from "@/components/shared/AppIconWithFallback";
import { AppStoreButton } from "@/components/shared/AppStoreButton";
import { APP_STORE_URL } from "@/content/site";
import { getTranslations } from "@/content/locales";
import type { Locale } from "@/lib/i18n";

export function Hero({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <section className="relative overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24 md:pt-32 md:pb-28">
      <Container as="section" className="flex flex-col items-center text-center">
        <AppIconWithFallback size="lg" className="mb-6" />

        <span className="mb-4 inline-block rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium text-neutral-600">
          {t.hero.label}
        </span>

        <h1 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl md:text-6xl">
          {t.hero.title}
        </h1>

        <p className="mt-4 max-w-xl text-xl text-neutral-600 sm:text-2xl">
          {t.hero.subtitle}
        </p>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-500 sm:text-lg">
          {t.hero.support}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <AppStoreButton href={APP_STORE_URL} external locale={locale} />
        </div>
      </Container>
    </section>
  );
}
