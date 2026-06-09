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
  const dev = privacy.developer;

  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <Container className="py-16 sm:py-20 md:py-24 max-w-3xl">
        <header className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            {t.legal.privacyTitle}
          </h1>
          <dl className="mt-6 flex flex-col gap-y-1 text-sm text-neutral-500">
            <div className="flex gap-x-2">
              <dt className="font-medium text-neutral-700">{p.effectiveDateLabel}:</dt>
              <dd>{privacy.effectiveDate}</dd>
            </div>
            <div className="flex gap-x-2">
              <dt className="font-medium text-neutral-700">{p.developerLabel}:</dt>
              <dd>{dev.name}</dd>
            </div>
            <div className="flex gap-x-2">
              <dt className="font-medium text-neutral-700">{p.contactLabel}:</dt>
              <dd>
                <a href={`mailto:${dev.email}`} className="text-apple-blue hover:underline">
                  {dev.email}
                </a>
              </dd>
            </div>
          </dl>
        </header>

        <div className="space-y-10 text-neutral-600 leading-relaxed">

          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">{p.s1Title}</h2>
            <p className="mb-3">{p.s1Body1}</p>
            <p>{p.s1Body2}</p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">{p.s2Title}</h2>
            <h3 className="text-base font-semibold text-[#1d1d1f] mb-3">{p.s21Title}</h3>
            <div className="space-y-4 mb-6">
              {p.s21Items.map((item: { title: string; body: string }) => (
                <div key={item.title}>
                  <p className="font-semibold text-[#1d1d1f]">{item.title}</p>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
            <h3 className="text-base font-semibold text-[#1d1d1f] mb-3">{p.s22Title}</h3>
            <div className="space-y-4">
              {p.s22Items.map((item: { title: string; body: string }) => (
                <div key={item.title}>
                  <p className="font-semibold text-[#1d1d1f]">{item.title}</p>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. How We Use Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">{p.s3Title}</h2>
            <p className="mb-4">{p.s3Intro}</p>
            <div className="overflow-x-auto rounded-xl border border-neutral-200 mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-neutral-50 text-left">
                    <th className="px-4 py-3 font-semibold text-[#1d1d1f] border-b border-neutral-200">Purpose</th>
                    <th className="px-4 py-3 font-semibold text-[#1d1d1f] border-b border-neutral-200">Data Used</th>
                  </tr>
                </thead>
                <tbody>
                  {p.s3TableRows.map((row: { purpose: string; data: string }, i: number) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                      <td className="px-4 py-3 border-b border-neutral-100">{row.purpose}</td>
                      <td className="px-4 py-3 border-b border-neutral-100">{row.data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>{p.s3NoSell}</p>
          </section>

          {/* 4. Data Storage and Security */}
          <section>
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">{p.s4Title}</h2>
            <div className="space-y-3">
              {p.s4Items.map((item: { title: string; body: string }) => (
                <p key={item.title}>
                  <span className="font-semibold text-[#1d1d1f]">{item.title}: </span>
                  {item.body}
                </p>
              ))}
            </div>
          </section>

          {/* 5. Third-Party Services */}
          <section>
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">{p.s5Title}</h2>
            <p className="mb-4">{p.s5Intro}</p>
            <div className="space-y-6 mb-4">
              {p.s5Services.map((svc: { title: string; body: string; policyLabel: string; policyUrl: string; optOut?: string; optOutLabel?: string }) => (
                <div key={svc.title}>
                  <p className="font-semibold text-[#1d1d1f] mb-1">{svc.title}</p>
                  <p className="mb-1">{svc.body}</p>
                  <p className="text-sm">
                    <span className="font-medium">{svc.policyLabel}: </span>
                    <a href={svc.policyUrl} target="_blank" rel="noopener noreferrer" className="text-apple-blue hover:underline">
                      {svc.policyUrl}
                    </a>
                  </p>
                  {svc.optOut && (
                    <p className="text-sm mt-1">
                      <span className="font-medium">{svc.optOutLabel}: </span>
                      {svc.optOut}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p>{p.s5Disclaimer}</p>
          </section>

          {/* 6. AI Features */}
          <section>
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">{p.s6Title}</h2>
            <p className="mb-3">{p.s6Intro}</p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              {p.s6Items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
            <p>{p.s6Consent}</p>
          </section>

          {/* 7. Data Retention */}
          <section>
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">{p.s7Title}</h2>
            <div className="space-y-3">
              {p.s7Items.map((item: { title: string; body: string }) => (
                <p key={item.title}>
                  <span className="font-semibold text-[#1d1d1f]">{item.title}: </span>
                  {item.body}
                </p>
              ))}
            </div>
          </section>

          {/* 8. Children's Privacy */}
          <section>
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">{p.s8Title}</h2>
            <p className="mb-3">{p.s8Body1}</p>
            <p>
              {p.s8Body2}{" "}
              <a href={`mailto:${dev.email}`} className="text-apple-blue hover:underline">
                {dev.email}
              </a>
              .
            </p>
          </section>

          {/* 9. Your Rights */}
          <section>
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">{p.s9Title}</h2>
            <p className="mb-4">{p.s9Intro}</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              {p.s9Items.map((item: { title: string; body: string }) => (
                <li key={item.title}>
                  <span className="font-semibold text-[#1d1d1f]">{item.title}: </span>
                  {item.body}
                </li>
              ))}
            </ul>
            <p className="mb-2">
              {p.s9Contact}{" "}
              <a href={`mailto:${dev.email}`} className="text-apple-blue hover:underline">
                {dev.email}
              </a>
              . {p.s9Response}
            </p>
            <p className="text-sm text-neutral-500">
              <span className="font-medium">{p.s9NoteLabel}: </span>
              {p.s9Note}
            </p>
          </section>

          {/* 10. Changes */}
          <section>
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">{p.s10Title}</h2>
            <p className="mb-3">{p.s10Body1}</p>
            <p>{p.s10Body2}</p>
          </section>

          {/* 11. Contact */}
          <section>
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">{p.s11Title}</h2>
            <p className="mb-3">{p.s11Intro}</p>
            <p className="font-semibold text-[#1d1d1f]">{dev.name}</p>
            <p>
              <span className="font-medium">{p.s11EmailLabel}: </span>
              <a href={`mailto:${dev.email}`} className="text-apple-blue hover:underline">
                {dev.email}
              </a>
            </p>
            <p className="mt-3">{p.s11Response}</p>
          </section>

          <p className="text-sm text-neutral-400 border-t border-neutral-200 pt-6">
            {p.lastUpdatedLabel}: {privacy.lastUpdated}
          </p>
        </div>
      </Container>
    </div>
  );
}
