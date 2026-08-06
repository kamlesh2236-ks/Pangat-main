import Link from 'next/link'
import { ReactNode } from 'react'

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

export default function TermsConditions() {
    return (
        <main className="bg-white px-6 py-20">
            <div className="mx-auto max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-700">
                    Legal
                </span>

                <h1 className="mt-5 text-3xl font-bold text-neutral-900 md:text-4xl">
                    Terms &amp; Conditions
                </h1>

                <p className="mt-2 text-sm text-neutral-400">
                    Last updated: 24 July 2026
                </p>

                <Section title="1. Acceptance of Terms">
                    <p>
                        By creating an account or using Pangat ("we", "us",
                        "the platform"), you agree to be bound by these Terms &
                        Conditions. If you do not agree, please do not use the
                        platform.
                    </p>
                </Section>

                <Section title="2. Who Can Use Pangat">
                    <p>
                        Pangat is intended for restaurant owners, managers and
                        their staff. You must be at least 18 years old and legally
                        able to enter a binding agreement to create an account.
                    </p>
                </Section>

                <Section title="3. Account Responsibilities">
                    <ul className="list-disc space-y-1 pl-5">
                        <li>
                            You are responsible for maintaining the confidentiality
                            of your login credentials.
                        </li>

                        <li>
                            You are responsible for all activity that happens under
                            your restaurant account.
                        </li>

                        <li>
                            You must notify us immediately of any unauthorized use
                            of your account.
                        </li>
                    </ul>
                </Section>

                <Section title="4. Subscriptions, Trials & Billing">
                    <p>
                        New accounts receive a free trial period as described on
                        our pricing page. After the trial ends, continued use
                        requires an active paid subscription billed on the cycle
                        selected during checkout. Prices may change with
                        reasonable notice.
                    </p>
                </Section>

                <Section title="5. Acceptable Use">
                    <ul className="list-disc space-y-1 pl-5">
                        <li>
                            Do not use Pangat for unlawful activities or fraudulent
                            orders.
                        </li>

                        <li>
                            Do not attempt to reverse engineer or gain unauthorized
                            access to the platform.
                        </li>

                        <li>
                            Do not upload content that infringes another party's
                            intellectual property rights.
                        </li>
                    </ul>
                </Section>

                <Section title="6. Your Content">
                    <p>
                        You retain ownership of the menus, images and other
                        content you upload. By uploading content you grant Pangat
                        permission to store and display it as required to operate
                        the service.
                    </p>
                </Section>

                <Section title="7. Payments & Third-Party Processors">
                    <p>
                        Payments are securely processed by third-party payment
                        providers. Pangat does not store your complete card
                        details.

                        {' '}

                        Please read our{' '}
                        <Link
                            href="/refund-return"
                            className="font-medium text-orange-600 hover:underline"
                        >
                            Refund &amp; Return Policy
                        </Link>
                        .
                    </p>
                </Section>

                <Section title="8. Termination">
                    <p>
                        We may suspend or terminate accounts that violate these
                        Terms. You may cancel your subscription at any time from
                        your dashboard.
                    </p>
                </Section>

                <Section title="9. Limitation of Liability">
                    <p>
                        Pangat is provided "as is". To the maximum extent
                        permitted by law, we are not liable for indirect,
                        incidental or consequential damages arising from use of
                        the platform.
                    </p>
                </Section>

                <Section title="10. Changes to These Terms">
                    <p>
                        These Terms may be updated from time to time. Continued
                        use of Pangat after updates means you accept the revised
                        Terms.
                    </p>
                </Section>

                <Section title="11. Contact Us">
                    <p>
                        For questions regarding these Terms please contact us at{' '}

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
                    professional before publishing.
                </p>
            </div>
        </main>
    )
}