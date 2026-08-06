'use client'
import { IconCheck, IconArrowUpRight } from '@tabler/icons-react'
import Reveal from './reveal'

const FEATURES = [
    'QR ordering & live menu',
    'Kitchen & waiter dashboards',
    'Unlimited tables',
    'Order status page for guests',
    'Staff, attendance & payroll',
    'Reports & CSV export',
]

const BILLING_OPTIONS = [
    { key: 'weekly', label: 'Weekly', price: 399, per: 'week' },
    { key: 'monthly', label: 'Monthly', price: 1099, per: 'month', highlight: true },
    { key: 'yearly', label: 'Yearly', price: 9999, per: 'year', badge: 'Best Value' },
]

const Pricing = () => {
    return (
        <section id="pricing" className="relative bg-white px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <Reveal className="max-w-xl mx-auto text-center">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-orange-700 bg-orange-100 border border-orange-200 px-4 py-1.5 rounded-full">
                        Pricing
                    </span>
                    <h2 className="mt-5 text-3xl md:text-4xl font-bold text-neutral-900">
                        One plan, pick your billing cycle
                    </h2>
                    <p className="mt-4 text-neutral-600 leading-relaxed">
                        Every plan includes the full Pangat platform, starting with a 5-day free trial — no
                        card required.
                    </p>
                </Reveal>

                <div className="mt-14 grid md:grid-cols-3 gap-6 items-start">
                    {BILLING_OPTIONS.map((option, i) => (
                        <Reveal key={option.key} delay={i * 100}>
                            <div
                                className={`relative h-full rounded-2xl p-7 border transition-all duration-300 ${option.highlight
                                        ? 'bg-neutral-950 border-neutral-900 shadow-xl shadow-orange-950/10 md:-translate-y-3'
                                        : 'bg-white border-orange-100 shadow-sm hover:-translate-y-1 hover:shadow-md'
                                    }`}
                            >
                                {(option.highlight || option.badge) && (
                                    <span
                                        className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${option.highlight ? 'bg-orange-600 text-white' : 'bg-orange-100 text-orange-700 border border-orange-200'
                                            }`}
                                    >
                                        {option.highlight ? 'Most Popular' : option.badge}
                                    </span>
                                )}

                                <h3 className={`text-lg font-semibold ${option.highlight ? 'text-white' : 'text-neutral-900'}`}>
                                    {option.label}
                                </h3>
                                <p className={`mt-1 text-sm ${option.highlight ? 'text-neutral-400' : 'text-neutral-500'}`}>
                                    Billed every {option.per}
                                </p>

                                <div className="mt-6 flex items-end gap-1">
                                    <span className={`text-3xl font-bold ${option.highlight ? 'text-white' : 'text-neutral-900'}`}>
                                        ₹{option.price.toLocaleString('en-IN')}
                                    </span>
                                    <span className={`text-sm mb-1 ${option.highlight ? 'text-neutral-400' : 'text-neutral-500'}`}>
                                        /{option.per}
                                    </span>
                                </div>

                                {option.key === 'yearly' && (
                                    <p className="mt-1.5 text-xs font-medium text-orange-600">Save over 24% vs. monthly</p>
                                )}

                                <ul className="mt-6 grid gap-2.5">
                                    {FEATURES.map((f) => (
                                        <li key={f} className="flex items-start gap-2 text-sm">
                                            <IconCheck
                                                size={16}
                                                className={`mt-0.5 shrink-0 ${option.highlight ? 'text-orange-500' : 'text-orange-600'}`}
                                            />
                                            <span className={option.highlight ? 'text-neutral-300' : 'text-neutral-600'}>{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="https://pangat-saas.vercel.app/signup"
                                    className={`mt-8 w-full flex items-center justify-center gap-1.5 font-semibold px-5 py-3 rounded-full transition-transform duration-300 hover:-translate-y-0.5 ${option.highlight
                                            ? 'bg-orange-600 text-white shadow-md shadow-orange-950/30 hover:shadow-lg'
                                            : 'bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100'
                                        }`}
                                >
                                    Start free trial <IconArrowUpRight size={16} />
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing