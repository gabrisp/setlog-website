import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { features } from "@/content/features";
import { getTranslations } from "@/content/locales";
import type { Locale } from "@/lib/i18n";

export function FeaturesSection({ locale }: { locale: Locale }) {
  const t = getTranslations(locale);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#fafafa]">
      <Container>
        <SectionHeading
          title={t.features.heading}
          className="mb-12 sm:mb-16"
        />

        <ul className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const item = t.features.items[index];
            if (!item) return null;
            return (
              <li key={feature.id}>
                <article className="group h-full rounded-3xl border border-neutral-200/80 bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-soft">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-600">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-[#1d1d1f]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
