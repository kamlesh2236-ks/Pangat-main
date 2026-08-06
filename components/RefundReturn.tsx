import { ReactNode } from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund & Return Policy",
    description: "Read the Refund & Return Policy of Pangat POS.",
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

export default function RefundReturn() {
    return (
        <main className="bg-white px-6 py-20">
            <div className="mx-auto max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-700">
                    Legal
                </span>

                <h1 className="mt-5 text-3xl font-bold text-neutral-900 md:text-4xl">
                    Refund &amp; Return Policy
                </h1>

                <p className="mt-2 text-sm text-neutral-400">
                    Last updated: 27 July 2026
                </p>

                <Section title="1. Overview">
                    <p>
                        Pangat is a software subscription service. There is no
                        physical product to return. This policy explains how
                        subscription cancellations and refunds are handled.
                    </p>
                </Section>

                <Section title="2. Free Trial">
                    <p>
                        New accounts receive a 5-day free trial. During the trial
                        period you will not be charged. You may cancel your account
                        at any time before the trial ends without any billing.
                    </p>
                </Section>

                <Section title="3. Cancellations">
                    <p>
                        You may cancel your subscription at any time from your
                        account dashboard. Cancellation prevents future billing but
                        does not automatically refund the current billing cycle.
                    </p>
                </Section>

                <Section title="4. Refund Eligibility">
                    <ul className="list-disc space-y-1 pl-5">
                        <li>
                            Refund requests made within 7 days of payment, where the
                            service has not been used, may be considered.
                        </li>

                        <li>
                            Duplicate or accidental charges are eligible for a full
                            refund.
                        </li>

                        <li>
                            All refund requests are reviewed individually before
                            approval.
                        </li>
                    </ul>
                </Section>

                <Section title="5. Non-Refundable Cases">
                    <ul className="list-disc space-y-1 pl-5">
                        <li>
                            Partial subscription usage after cancellation.
                        </li>

                        <li>
                            Accounts suspended or terminated due to violation of our
                            Terms & Conditions.
                        </li>

                        <li>
                            Payments older than 30 days from the refund request date.
                        </li>
                    </ul>
                </Section>

                <Section title="6. How to Request a Refund">
                    <p>
                        To request a refund, email us at{' '}
                        <a
                            href="mailto:pangat.teams@gmail.com"
                            className="font-medium text-orange-600 hover:underline"
                        >
                            pangat.teams@gmail.com
                        </a>{' '}
                        with your account email, payment details, and the reason for
                        your request. We aim to respond within 2–3 business days.
                    </p>
                </Section>

                <Section title="7. Processing Time">
                    <p>
                        Once approved, refunds are issued to the original payment
                        method. Depending on your bank or payment provider, it may
                        take 5–10 business days for the amount to appear in your
                        account.
                    </p>
                </Section>

                <Section title="8. Contact Us">
                    <p>
                        For billing questions or refund requests, please contact us
                        at{' '}
                        <a
                            href="mailto:pangat.teams@gmail.com"
                            className="font-medium text-orange-600 hover:underline"
                        >
                            pangat.teams@gmail.com
                        </a>
                        .
                    </p>
                </Section>

                <p className="mt-10 border-t border-orange-100 pt-5 text-xs text-neutral-400">
                    This page is provided as a general template and does not
                    constitute legal advice. Please review your refund policy with
                    a qualified legal professional before publishing.
                </p>
            </div>
        </main>
    )
}