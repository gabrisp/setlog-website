"use client";

import { Container } from "@/components/shared/Container";
import { getTranslations } from "@/content/locales";
import { useLocale } from "@/components/shared/LocaleProvider";
import { CONTACT_EMAIL } from "@/content/site";

export default function SupportPage() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const s = t.support;

  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <Container className="py-16 sm:py-20 md:py-24 max-w-3xl">
        <header className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            {s.title}
          </h1>
          <p className="mt-3 text-lg text-neutral-600">{s.subtitle}</p>
        </header>

        <section className="mb-12 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">
            {s.emailLabel}
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-apple-blue hover:underline text-base font-medium"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-2 text-sm text-neutral-500">{s.responseTime}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1d1d1f] mb-6">
            {s.faqTitle}
          </h2>
          <div className="space-y-4">
            {s.faqItems.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
              >
                <h3 className="font-semibold text-[#1d1d1f] mb-2">{item.q}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
