'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
    IconBrandInstagram,
    IconBrandX,
    IconBrandLinkedin,
    IconMail,
    IconArrowUpRight,
    IconArrowUp,
} from '@tabler/icons-react'

const QUICK_LINKS = [
    { label: 'Home', hash: '#home' },
    { label: 'Features', hash: '#features' },
    { label: 'About Us', hash: '#about' },
    { label: 'Contact Us', hash: '#contact' },
]

const LEGAL_LINKS = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Refund & Return', href: '/refund-return' },
    { label: 'Terms & Conditions', href: '/terms-conditions' },
]

const SOCIALS = [
    {
        icon: IconBrandInstagram,
        href: 'https://instagram.com',
    },
    {
        icon: IconBrandX,
        href: 'https://x.com',
    },
    {
        icon: IconBrandLinkedin,
        href: 'https://linkedin.com',
    },
]

export default function Footer() {
    const pathname = usePathname()

    const getHashLink = (hash: string) =>
        pathname === '/' ? hash : `/${hash}`

    return (
        <footer className="relative overflow-hidden bg-neutral-950 text-neutral-300">
            <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[720px] -translate-x-1/2 rounded-full bg-orange-600/20 blur-[100px]" />

            <div className="relative mx-auto max-w-6xl px-6 pt-16">
                {/* CTA */}

                <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl bg-gradient-to-br from-orange-600 to-orange-500 px-8 py-10 shadow-lg shadow-orange-950/30 md:flex-row md:px-12 md:py-12">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white md:text-3xl">
                            Ready to seat your first pangat?
                        </h3>

                        <p className="mt-2 text-sm text-orange-50/90 md:text-base">
                            Start your free trial — no card required, live in an
                            afternoon.
                        </p>
                    </div>

                    <a
                        href="https://pangat-saas.vercel.app/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex shrink-0 items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 font-semibold text-orange-700 transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Start free trial
                            <IconArrowUpRight size={17} />
                        </span>

                        <span className="absolute inset-0 -translate-x-[130%] bg-gradient-to-r from-transparent via-orange-100/60 to-transparent group-hover:animate-[pg-shimmer_0.8s_ease]" />
                    </a>
                </div>

                {/* Columns */}

                <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
                    {/* Logo */}

                    <div>
                        <div className="flex items-center gap-3">
                            <Image
                                src="/favicon.svg"
                                width={34}
                                height={34}
                                alt="Pangat"
                            />

                            <h2 className="text-lg font-semibold tracking-tight text-white">
                                Pangat
                            </h2>
                        </div>

                        <p className="mt-3 max-w-xs text-sm leading-relaxed text-neutral-400">
                            QR ordering, kitchen and waiter dashboards, staff and
                            reports — one system for the whole restaurant floor.
                        </p>

                        <div className="mt-5 flex gap-3">
                            {SOCIALS.map(({ icon: Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 transition hover:-translate-y-0.5 hover:border-orange-500/60 hover:text-orange-500"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h3>

                        <ul className="mt-4 space-y-2">
                            {QUICK_LINKS.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={getHashLink(item.hash)}
                                        className="inline-flex items-center gap-1 text-sm text-neutral-400 transition hover:text-orange-400"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                            Legal
                        </h3>

                        <ul className="mt-4 space-y-2">
                            {LEGAL_LINKS.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-neutral-400 transition hover:text-orange-400"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                            Get in touch
                        </h3>

                        <a
                            href="mailto:pangat.teams@gmail.com"
                            className="mt-4 inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-orange-400"
                        >
                            <IconMail size={16} />
                            pangat.teams@gmail.com
                        </a>

                        <p className="mt-3 text-sm text-neutral-500">
                            Bihar, India
                        </p>
                    </div>
                </div>

                {/* Bottom */}

                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-800/80 pb-8 pt-6 sm:flex-row">
                    <p className="text-xs text-neutral-500">
                        © {new Date().getFullYear()} Pangat. All rights reserved.
                    </p>

                    <Link
                        href={getHashLink('#home')}
                        className="flex items-center gap-1.5 rounded-full border border-neutral-800 px-3.5 py-1.5 text-xs text-neutral-500 transition hover:border-orange-500/50 hover:text-orange-400"
                    >
                        Back to top
                        <IconArrowUp size={13} />
                    </Link>
                </div>
            </div>
        </footer>
    )
}