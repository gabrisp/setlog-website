import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { legal } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for CreatineLy iOS app.",
};

export default function TermsPage() {
  const t = legal.terms;

  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <Container className="py-16 sm:py-20 md:py-24 max-w-3xl">
        <header className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-neutral-600">
            Terms of use for the CreatineLy app and subscription service.
          </p>
          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-neutral-500">
            <div>
              <dt className="sr-only">Version</dt>
              <dd>Version {t.version}</dd>
            </div>
            <div>
              <dt className="sr-only">Last updated</dt>
              <dd>Last updated: {t.lastUpdated}</dd>
            </div>
          </dl>
        </header>

        <div className="prose prose-neutral prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              1. Acceptance
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              By downloading, installing, or using {t.appName} (&quot;the App&quot;) on your {t.platform} device,
              you agree to these Terms &amp; Conditions. If you do not agree, do not use the App.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              2. Description of the service
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              {t.appName} is a {t.platform} application that helps you maintain a consistent creatine routine
              through reminders, home screen widgets, and progress tracking. Certain features are available
              through a paid subscription managed by Apple and orchestrated technically by RevenueCat.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              3. Eligibility and requirements
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              You must be at least 13 years of age (or the age of consent in your jurisdiction) to use the App.
              You must have a compatible {t.platform} device and an Apple ID to access in-app purchases and subscriptions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              4. Subscriptions and payments
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Premium features are offered via Apple-managed subscriptions. We use RevenueCat as a technical
              orchestrator to manage subscription state (e.g. trial and active status). Payment is processed
              entirely by Apple.
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              <li>A {t.trialDays}-day free trial may be offered before payment is required.</li>
              <li>Monthly and yearly subscription options are available; pricing is shown in the App and in the App Store.</li>
              <li>Refunds are handled by Apple according to Apple&apos;s refund policy. We do not process refunds directly.</li>
              <li>You may restore purchases at any time through the App to regain access on a new or reinstalled device.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              5. Allowed use
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              You may use the App for personal, non-commercial purposes in accordance with these Terms and
              Apple&apos;s App Store Terms of Service. You may not reverse-engineer, decompile, or attempt to
              extract source code from the App, or use it in any way that could harm the service or other users.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              6. Prohibited use
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              You may not use the App for any illegal purpose, to distribute malware, to abuse or overload our
              or our providers&apos; systems, or to circumvent any access controls or subscription mechanisms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              7. Intellectual property
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              All rights in the App, including design, text, graphics, and code, are owned by us or our licensors.
              You receive only a limited, non-exclusive licence to use the App as provided through the App Store.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              8. Medical disclaimer
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              The App is for general wellness and routine tracking only. It does not provide medical, nutritional,
              or health advice. Always consult a qualified healthcare provider before starting or changing any
              supplement regimen. Use of the App does not replace professional medical advice.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              9. Limitation of liability
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              To the maximum extent permitted by law, we and our providers shall not be liable for any indirect,
              incidental, special, or consequential damages arising from your use of the App. Our total liability
              shall not exceed the amount you paid for the App (including subscriptions) in the twelve months
              preceding the claim.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              10. Termination
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              You may stop using the App at any time. We may suspend or terminate access if you breach these Terms.
              Upon termination, your right to use the App ceases; subscription refunds are subject to Apple&apos;s policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              11. Changes
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              We may update these Terms from time to time. We will notify you of material changes via the App or
              our website. Continued use after the effective date constitutes acceptance. If you do not agree,
              you must stop using the App.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              12. Governing law and jurisdiction
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              These Terms are governed by the laws of {t.governingLaw}, without regard to conflict-of-law principles.
              Any disputes shall be subject to the exclusive jurisdiction of the courts of {t.governingLaw}.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              13. Contact
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              For questions about these Terms, contact us at{" "}
              <a href={`mailto:${t.contactEmail}`} className="text-apple-blue hover:underline">{t.contactEmail}</a>.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
