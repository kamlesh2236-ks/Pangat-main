'use client'
import { IconToolsKitchen2, IconDevices, IconUsersGroup } from '@tabler/icons-react'
import Reveal from './reveal'

const POINTS = [
    {
        icon: IconToolsKitchen2,
        title: 'Built on a real restaurant floor',
        desc: 'Every workflow — kitchen tickets, waiter calls, table status — is modelled on how dine-in service actually happens, not a generic checkout flow.',
    },
    {
        icon: IconDevices,
        title: 'One system, every screen',
        desc: 'Admin dashboard, kitchen display, waiter view and the guest\'s phone all stay in sync, so nobody is working off old information.',
    },
    {
        icon: IconUsersGroup,
        title: 'For the whole team',
        desc: 'From the owner checking reports to the waiter clearing a table, Pangat is built for every role in the restaurant, not just the front desk.',
    },
]

const AboutUs = () => {
    return (
        <section id="about" className="relative bg-orange-50/40 px-6 py-24">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <Reveal>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-orange-700 bg-orange-100 border border-orange-200 px-4 py-1.5 rounded-full">
                        About Us
                    </span>
                    <h2 className="mt-5 text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
                        We built Pangat because dine-in service deserved better software
                    </h2>
                    <p className="mt-5 text-neutral-600 leading-relaxed">
                        Pangat started as a simple question: why does the kitchen, the waiter and the guest all
                        find out about an order at different times? We rebuilt the flow from the table up — a
                        scan starts the order, and every role sees it the moment it matters to them.
                    </p>
                    <p className="mt-4 text-neutral-600 leading-relaxed">
                        Today Pangat runs QR ordering, kitchen and waiter dashboards, staff management and
                        reporting for restaurants that want one system instead of five disconnected tools.
                    </p>
                </Reveal>

                <div className="grid gap-5">
                    {POINTS.map(({ icon: Icon, title, desc }, i) => (
                        <Reveal key={title} delay={i * 100}>
                            <div className="flex gap-4 bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl shadow-sm p-5">
                                <span className="shrink-0 h-11 w-11 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                                    <Icon size={20} />
                                </span>
                                <div>
                                    <h3 className="font-semibold text-neutral-900">{title}</h3>
                                    <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutUs