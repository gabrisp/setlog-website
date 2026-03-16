import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { legal } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for CreatineLy iOS app.",
};

export default function PrivacyPage() {
  const { privacy } = legal;
  const c = privacy.controller;

  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <Container className="py-16 sm:py-20 md:py-24 max-w-3xl">
        <header className="mb-12">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-neutral-600">
            How CreatineLy collects, uses, and protects your information.
          </p>
          <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-neutral-500">
            <div>
              <dt className="sr-only">Version</dt>
              <dd>Version {privacy.version}</dd>
            </div>
            <div>
              <dt className="sr-only">Last updated</dt>
              <dd>Last updated: {privacy.lastUpdated}</dd>
            </div>
          </dl>
        </header>

        <div className="prose prose-neutral prose-lg max-w-none">
          <section className="mb-10 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">
              Summary in plain language
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              CreatineLy does not require an account. We do not ask for your name.
              We do not use advertising identifiers (IDFA) or sell your data.
              We use industry-standard services (Firebase, RevenueCat) for analytics,
              crash reporting, and subscription management. Notifications are local
              only. This app does not replace medical advice.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              Data controller
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-2">
              The data controller responsible for your personal data is:
            </p>
            <ul className="list-none text-neutral-600 space-y-1">
              <li>{c.name}</li>
              <li>NIF: {c.nif}</li>
              <li>Address: {c.address}</li>
              <li>Email: <a href={`mailto:${c.email}`} className="text-apple-blue hover:underline">{c.email}</a></li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              What data we collect
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We collect only what is necessary to operate the app and improve its quality:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              <li>Device and usage data (e.g. app opens, feature usage) via Firebase Analytics</li>
              <li>Crash and performance data via Firebase Crashlytics</li>
              <li>Subscription and purchase status via RevenueCat (linked to your Apple ID by Apple, not by us)</li>
              <li>Configuration data via Firebase Remote Config (e.g. feature flags)</li>
            </ul>
            <p className="text-neutral-600 leading-relaxed mt-4">
              We do not collect your name, email, or any account data within the app itself.
              We do not use IDFA or any advertising-based tracking.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              Purposes and legal bases
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We process data for:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              <li><strong>Providing the service:</strong> reminders, widgets, and subscription features (performance of contract).</li>
              <li><strong>Analytics and stability:</strong> understanding how the app is used and fixing crashes (legitimate interest).</li>
              <li><strong>Subscription management:</strong> enabling trials and paid access via Apple and RevenueCat (performance of contract).</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              Service providers and processors
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We use the following processors:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              <li><strong>Firebase (Google):</strong> Analytics, Crashlytics, Remote Config. See Google&apos;s privacy policy.</li>
              <li><strong>RevenueCat:</strong> Subscription orchestration (trial and purchase status). See RevenueCat&apos;s privacy policy.</li>
              <li><strong>Apple:</strong> App distribution and in-app purchases. Apple processes payment and subscription data according to its own policies.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              International transfers
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              Data may be processed in the United States and other countries where our providers operate.
              We rely on appropriate safeguards (e.g. standard contractual clauses) where required by law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              Retention
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              We retain data only as long as necessary for the purposes above or as required by law.
              Analytics and crash data are typically retained according to our providers&apos; policies (e.g. 14 months for Firebase Analytics).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              Your rights (GDPR)
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              If you are in the European Economic Area, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              <li>Access and receive a copy of your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request erasure</li>
              <li>Restrict or object to processing</li>
              <li>Data portability where applicable</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="text-neutral-600 leading-relaxed mt-4">
              To exercise these rights, contact us at{" "}
              <a href={`mailto:${c.email}`} className="text-apple-blue hover:underline">{c.email}</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              Security
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              We use industry-standard measures and trusted providers to protect your data.
              No method of transmission or storage is 100% secure; we strive to minimise risk.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              Minors
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              The app is not directed at children. We do not knowingly collect data from minors.
              If you believe we have collected data from a minor, please contact us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              Changes to this policy
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              We may update this policy from time to time. We will post the updated version in the app or on our website
              and indicate the effective date. Continued use of the app after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#1d1d1f] mb-4">
              Contact
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              For privacy-related questions or requests, contact the data controller at{" "}
              <a href={`mailto:${c.email}`} className="text-apple-blue hover:underline">{c.email}</a>.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
