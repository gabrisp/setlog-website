"use client";

import { Container } from "@/components/shared/Container";
import { legal } from "@/content/legal";
import { getTranslations, getLegalPrivacy } from "@/content/locales";
import { useLocale } from "@/components/shared/LocaleProvider";

export default function PrivacyPage() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const p = getLegalPrivacy(locale);
  const { privacy } = legal;
  const c = privacy.controller;

  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <Container className="py-16 sm:py-20 md:py-24 max-w-3xl">
        <header className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            {t.legal.privacyTitle}
          </h1>
          <p className="mt-2 text-neutral-600">{p.subtitle}</p>
          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-neutral-500">
            <div>
              <dt className="sr-only">{p.version}</dt>
              <dd>{p.version} {privacy.version}</dd>
            </div>
            <div>
              <dt className="sr-only">{p.lastUpdated}</dt>
              <dd>{p.lastUpdated}: {privacy.lastUpdated}</dd>
            </div>
          </dl>
        </header>

        <div className="prose prose-neutral prose-lg max-w-none">
          <section className="mb-10 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">
              {p.summaryTitle}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{p.summaryBody}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.scopeTitle}
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              {p.scopeBody}{" "}
              <a
                href={privacy.applePrivacyPolicy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-blue hover:underline"
              >
                {p.scopeLink}
              </a>
              {p.scopeSuffix}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.controllerTitle}
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-2">
              {p.controllerIntro}
            </p>
            <ul className="list-none text-neutral-600 space-y-1">
              <li>{c.name}</li>
              <li>NIF: {c.nif}</li>
              <li>{p.controllerAddressLabel}: {c.address}</li>
              <li>
                {p.controllerEmailLabel}:{" "}
                <a
                  href={`mailto:${c.email}`}
                  className="text-apple-blue hover:underline"
                >
                  {c.email}
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.dataTitle}
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              {p.dataIntro}
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              {p.dataList.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-neutral-600 leading-relaxed mt-4">
              {p.dataNoCollect}
            </p>
            <p className="text-neutral-600 leading-relaxed mt-2 text-sm">
              {p.dataLabels}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.purposesTitle}
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              {p.purposesIntro}
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              {p.purposesList.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.processorsTitle}
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              {p.processorsIntro}
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              {p.processorsList.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.transfersTitle}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{p.transfersBody}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.retentionTitle}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{p.retentionBody}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.rightsTitle}
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              {p.rightsIntro}
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              {p.rightsList.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="text-neutral-600 leading-relaxed mt-4">
              {p.rightsContact}{" "}
              <a
                href={`mailto:${c.email}`}
                className="text-apple-blue hover:underline"
              >
                {c.email}
              </a>
              .
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.securityTitle}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{p.securityBody}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.minorsTitle}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{p.minorsBody}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.changesTitle}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{p.changesBody}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.contactTitle}
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              {p.contactBody}{" "}
              <a
                href={`mailto:${c.email}`}
                className="text-apple-blue hover:underline"
              >
                {c.email}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
