"use client";

import { Container } from "@/components/shared/Container";
import { legal } from "@/content/legal";
import { getTranslations, getLegalTerms } from "@/content/locales";
import { useLocale } from "@/components/shared/LocaleProvider";

export default function TermsPage() {
  const locale = useLocale();
  const t = getTranslations(locale);
  const p = getLegalTerms(locale);
  const terms = legal.terms;

  const sub = (text: string) =>
    text
      .replace(/{appName}/g, terms.appName)
      .replace(/{platform}/g, terms.platform)
      .replace(/{trialDays}/g, String(terms.trialDays))
      .replace(/{governingLaw}/g, terms.governingLaw);

  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <Container className="py-16 sm:py-20 md:py-24 max-w-3xl">
        <header className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            {t.legal.termsTitle}
          </h1>
          <p className="mt-2 text-neutral-600">{p.subtitle}</p>
          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-neutral-500">
            <div>
              <dt className="sr-only">{p.version}</dt>
              <dd>{p.version} {terms.version}</dd>
            </div>
            <div>
              <dt className="sr-only">{p.lastUpdated}</dt>
              <dd>{p.lastUpdated}: {terms.lastUpdated}</dd>
            </div>
          </dl>
        </header>

        <div className="prose prose-neutral prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.s1Title}
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              {sub(p.s1Body)}{" "}
              <a
                href={terms.appleEula}
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-blue hover:underline"
              >
                {p.s1Eula}
              </a>{" "}{p.s1And}{" "}
              <a
                href={terms.appleAppStoreTerms}
                target="_blank"
                rel="noopener noreferrer"
                className="text-apple-blue hover:underline"
              >
                {p.s1AppStore}
              </a>
              {p.s1Suffix}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.s2Title}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{sub(p.s2Body)}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.s3Title}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{sub(p.s3Body)}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.s4Title}
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              {p.s4Intro}
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              <li><strong>{p.s4Trial}</strong> {sub(p.s4TrialBody)}</li>
              <li><strong>{p.s4Plans}</strong> {p.s4PlansBody}</li>
              <li>
                <strong>{p.s4Renewal}</strong> {p.s4RenewalBody}{" "}
                <a
                  href={terms.appleManageSubscriptions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-apple-blue hover:underline"
                >
                  {p.s4RenewalLink}
                </a>
                .
              </li>
              <li>
                <strong>{p.s4Refunds}</strong> {p.s4RefundsBody}{" "}
                <a
                  href={terms.appleRefunds}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-apple-blue hover:underline"
                >
                  reportaproblem.apple.com
                </a>
                .
              </li>
              <li><strong>{p.s4Restore}</strong> {p.s4RestoreBody}</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.s5Title}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{p.s5Body}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.s6Title}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{p.s6Body}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.s7Title}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{p.s7Body}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.s8Title}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{p.s8Body}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.s9Title}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{p.s9Body}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.s10Title}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{p.s10Body}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.s11Title}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{p.s11Body}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.s12Title}
            </h2>
            <p className="text-neutral-600 leading-relaxed">{sub(p.s12Body)}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              {p.s13Title}
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              {p.s13Body}{" "}
              <a
                href={`mailto:${terms.contactEmail}`}
                className="text-apple-blue hover:underline"
              >
                {terms.contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
