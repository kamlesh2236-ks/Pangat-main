'use client'

import {
  IconQrcode,
  IconToolsKitchen2,
  IconUsersGroup,
  IconChartBar,
  IconCreditCard,
  IconActivity,
} from '@tabler/icons-react'

import Reveal from './reveal'

const FEATURES = [
  {
    icon: IconQrcode,
    title: 'QR Ordering & Menu',
    desc: 'Guests scan the table QR, browse the live menu and order — no app install, no waiting for a waiter.',
  },
  {
    icon: IconToolsKitchen2,
    title: 'Kitchen & Waiter Dashboards',
    desc: 'Kitchen sees new orders the second they land, waiters get notified the moment a plate is ready to serve.',
  },
  {
    icon: IconUsersGroup,
    title: 'Staff & Payroll',
    desc: 'Track attendance, manage shifts and run salary transactions for your whole team from one place.',
  },
  {
    icon: IconChartBar,
    title: 'Reports & Analytics',
    desc: 'Date-range sales reports, category-wise breakdowns and one-click CSV export whenever you need them.',
  },
  {
    icon: IconCreditCard,
    title: 'Subscriptions & Billing',
    desc: 'Simple trial-to-paid flow with integrated payments, so you never lose track of what you owe or own.',
  },
  {
    icon: IconActivity,
    title: 'Live Order Status',
    desc: "Guests track their order in real time, from placed to served — fewer 'where's my food' questions.",
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="relative bg-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal className="max-w-xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-orange-700 bg-orange-100 border border-orange-200 px-4 py-1.5 rounded-full">
            Features
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-neutral-900">
            Everything a dine-in restaurant actually needs
          </h2>

          <p className="mt-4 text-neutral-600 leading-relaxed">
            From the table QR to the kitchen ticket to the monthly report —
            one system, built around how a restaurant floor really moves.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc }, index) => (
            <Reveal
              key={title}
              delay={index * 80}
            >
              <div className="group h-full bg-white border border-orange-100 rounded-2xl shadow-sm p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-orange-200">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
                  <Icon size={20} />
                </span>

                <h3 className="mt-4 font-semibold text-neutral-900">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}