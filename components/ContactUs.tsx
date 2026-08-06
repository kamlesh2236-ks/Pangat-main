'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconSend,
  IconCheck,
  IconAlertCircle,
} from '@tabler/icons-react'

import Reveal from './reveal'

const CONTACT_INFO = [
  {
    icon: IconMail,
    label: 'Email',
    value: 'pangat.teams@gmail.com',
  },
  {
    icon: IconPhone,
    label: 'Phone',
    value: '+91 8084124525 / +91 6201802142',
  },
  {
    icon: IconMapPin,
    label: 'Location',
    value: 'Bihar, India',
  },
]

interface ContactForm {
  name: string
  email: string
  message: string
}

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setStatus('sending')

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      )

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message')
      }

      setStatus('success')

      setForm({
        name: '',
        email: '',
        message: '',
      })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-white px-6 py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-700">
            Contact Us
          </span>

          <h2 className="mt-5 text-3xl font-bold text-neutral-900 md:text-4xl">
            Let's get your restaurant on Pangat
          </h2>

          <p className="mt-4 max-w-md leading-relaxed text-neutral-600">
            Questions about pricing, onboarding, or setting up your first
            table QR? Reach out — we usually reply within a day.
          </p>

          <div className="mt-8 grid gap-4">
            {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Icon size={19} />
                </span>

                <div>
                  <p className="text-xs font-medium text-neutral-400">
                    {label}
                  </p>

                  <p className="text-sm font-semibold text-neutral-800">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 rounded-2xl border border-orange-100 bg-orange-50/50 p-6 shadow-sm md:p-8"
          >
            <div>
              <label className="text-sm font-medium text-neutral-700">
                Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-1.5 w-full rounded-xl border border-orange-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-neutral-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-xl border border-orange-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-neutral-700">
                Message
              </label>

              <textarea
                rows={5}
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your restaurant..."
                className="mt-1.5 w-full resize-none rounded-xl border border-orange-200 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="group relative mt-2 flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <span className="relative z-10 flex items-center gap-2">
                {status === 'sending'
                  ? 'Sending...'
                  : 'Send Message'}

                <IconSend size={16} />
              </span>

              <span className="absolute inset-0 -translate-x-[130%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[pg-shimmer_0.8s_ease]" />
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm font-medium text-green-700">
                <IconCheck size={16} />
                Message sent successfully.
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
                <IconAlertCircle size={16} />
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}