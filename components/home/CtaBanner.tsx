import { Container } from "@/components/shared/Container";
import { AppStoreButton } from "@/components/shared/AppStoreButton";
import { APP_STORE_URL } from "@/content/site";
import { getTranslations } from "@/content/locales";
import type { Locale } from "@/lib/i18n";

export function CtaBanner({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <section className="py-16 sm:py-20 md:py-24">
      <Container>
        <div className="rounded-[2rem] bg-[#1d1d1f] px-6 py-14 text-center sm:px-10 sm:py-16 md:px-16 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-neutral-300 sm:text-lg">
            {t.cta.text}
          </p>
          <div className="mt-8">
            <AppStoreButton href={APP_STORE_URL} external inverted locale={locale} />
          </div>
        </div>
      </Container>
    </section>
  );
}
