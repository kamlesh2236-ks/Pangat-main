import { ReactNode } from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the Privacy Policy of Pangat POS.",
};
interface SectionProps {
  title: string
  children: ReactNode
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-neutral-900">
        {title}
      </h2>

      <div className="mt-2 space-y-2 text-sm leading-relaxed text-neutral-600">
        {children}
      </div>
    </div>
  )
}

export default function PrivacyPolicy() {
  return (
    <main className="bg-white px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-700">
          Legal
        </span>

        <h1 className="mt-5 text-3xl font-bold text-neutral-900 md:text-4xl">
          Privacy Policy
        </h1>

        <p className="mt-2 text-sm text-neutral-400">
          Last updated: 24 July 2026
        </p>

        <Section title="1. Introduction">
          <p>
            This Privacy Policy explains how Pangat collects, uses and
            protects information when you use our QR ordering platform,
            admin dashboard, or website.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We may collect the following types of information:</p>

          <ul className="list-disc space-y-1 pl-5">
            <li>
              Account information (name, email, phone number) for
              restaurant admins and staff.
            </li>

            <li>
              Order information (items ordered, table number, order
              status) for guests.
            </li>

            <li>
              Payment information processed via our payment partner.
              We do not store your card details.
            </li>

            <li>
              Usage data such as pages visited and actions taken within
              the dashboard.
            </li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="list-disc space-y-1 pl-5">
            <li>
              To operate and improve the QR ordering, kitchen and
              reporting features.
            </li>

            <li>To process subscriptions and payments.</li>

            <li>
              To send order updates and important account
              notifications.
            </li>

            <li>To provide customer support.</li>
          </ul>
        </Section>

        <Section title="4. Cookies">
          <p>
            We use cookies and similar technologies to keep you signed
            in, remember your preferences (such as theme), and
            understand how the platform is used.
          </p>
        </Section>

        <Section title="5. Data Security">
          <p>
            We take reasonable technical and organisational measures to
            protect your information. However, no method of
            transmission over the Internet or electronic storage is
            completely secure.
          </p>
        </Section>

        <Section title="6. Third-Party Services">
          <p>
            We work with trusted third-party providers for payments,
            hosting and analytics. These providers only receive the
            information necessary to perform their services.
          </p>
        </Section>

        <Section title="7. Your Rights">
          <p>
            You may request access to, correction of, or deletion of
            your personal information by contacting us, subject to
            applicable law.
          </p>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time.
            Changes will be posted on this page along with the updated
            revision date.
          </p>
        </Section>

        <Section title="9. Contact Us">
          <p>
            If you have any questions about this Privacy Policy,
            contact us at{' '}
            <a
              href="mailto:pangat.teams@gmail.com"
              className="font-medium text-orange-600 hover:underline"
            >
              pangat.teams@gmail.com
            </a>
          </p>
        </Section>

        <p className="mt-10 border-t border-orange-100 pt-5 text-xs text-neutral-400">
          This page is provided as a general template and does not
          constitute legal advice. Please consult a qualified legal
          professional before publishing your policy.
        </p>
      </div>
    </main>
  )
}