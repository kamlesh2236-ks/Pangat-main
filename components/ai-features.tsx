'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    IconSparkles,
    IconWand,
    IconToolsKitchen2,
    IconChartBar,
    IconMessageChatbot,
    IconArrowUpRight,
} from '@tabler/icons-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const COMBO_ITEMS = [
    { name: 'Butter Chicken', tag: 'Bestseller' },
    { name: 'Garlic Naan ×2', tag: 'Pairs 92%' },
    { name: 'Masala Chaas', tag: 'Cools the heat' },
]

const SMALL = [
    {
        icon: IconChartBar,
        title: 'AI demand forecasting',
        desc: 'Predicts tonight’s rush by day, weather and past footfall so the kitchen preps the right quantities.',
    },
    {
        icon: IconMessageChatbot,
        title: 'AI review replies',
        desc: 'Drafts warm, on-brand responses to every guest review in seconds — you just approve and send.',
    },
]

const AiFeatures = () => {
    const root = useRef<HTMLElement>(null)

    useGSAP(
        () => {
            const q = gsap.utils.selector(root)
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

            if (reduce) {
                gsap.set(q('[data-ai]'), { opacity: 1, y: 0, scale: 1 })
                return
            }

            gsap.from(q('[data-ai="head"]'), {
                y: 26,
                opacity: 0,
                duration: 0.7,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: { trigger: root.current, start: 'top 78%' },
            })

            gsap.from(q('[data-ai="card"]'), {
                y: 48,
                opacity: 0,
                scale: 0.96,
                duration: 0.8,
                stagger: 0.14,
                ease: 'power4.out',
                scrollTrigger: { trigger: q('[data-ai="grid"]')[0], start: 'top 82%' },
            })

            // typing lines reveal inside the menu-creation card
            gsap.from(q('[data-ai="line"]'), {
                width: 0,
                opacity: 0,
                duration: 0.6,
                stagger: 0.18,
                ease: 'power2.out',
                scrollTrigger: { trigger: q('[data-ai="grid"]')[0], start: 'top 70%' },
            })

            // combo chips pop in
            gsap.from(q('[data-ai="combo"]'), {
                y: 14,
                opacity: 0,
                scale: 0.9,
                duration: 0.5,
                stagger: 0.12,
                ease: 'back.out(1.7)',
                scrollTrigger: { trigger: q('[data-ai="grid"]')[0], start: 'top 68%' },
            })

            // floating sparkle glow loop
            gsap.to(q('[data-ai="glow"]'), {
                scale: 1.15,
                opacity: 0.8,
                duration: 3,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
            })
        },
        { scope: root },
    )

    return (
        <section
            id="ai"
            ref={root}
            className="relative overflow-hidden bg-neutral-950 px-6 py-28 text-white"
        >
            {/* ambient AI glows */}
            <div
                data-ai="glow"
                aria-hidden
                className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl"
            />
            <div
                data-ai="glow"
                aria-hidden
                className="pointer-events-none absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-6xl">
                {/* heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <span
                        data-ai="head"
                        className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-300"
                    >
                        <IconSparkles size={14} /> Powered by AI
                    </span>
                    <h2
                        data-ai="head"
                        className="mt-5 text-3xl font-bold leading-tight text-balance md:text-5xl"
                    >
                        Let AI run the menu, so you can run the floor
                    </h2>
                    <p
                        data-ai="head"
                        className="mt-4 text-pretty text-base leading-relaxed text-neutral-400 md:text-lg"
                    >
                        From writing the menu to suggesting the perfect combo at checkout, Pangat’s AI
                        works every shift beside your team — quietly lifting every ticket.
                    </p>
                </div>

                {/* bento grid */}
                <div data-ai="grid" className="mt-16 grid gap-6 lg:grid-cols-5">
                    {/* AI Menu Creation — large */}
                    <div
                        data-ai="card"
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-900/40 p-8 lg:col-span-3"
                    >
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
                                <IconWand size={22} />
                            </span>
                            <h3 className="text-xl font-semibold md:text-2xl">AI Menu Creation</h3>
                        </div>
                        <p className="mt-3 max-w-md leading-relaxed text-neutral-400">
                            Describe a dish in a line — AI writes the name, a mouth-watering
                            description, tags, allergens and a fair price in seconds.
                        </p>

                        {/* mock generation panel */}
                        <div className="mt-7 rounded-2xl border border-white/10 bg-neutral-950/60 p-5">
                            <div className="flex items-center gap-2 text-xs text-neutral-500">
                                <IconSparkles size={13} className="text-orange-400" />
                                Prompt: “spicy paneer starter, tandoor”
                            </div>
                            <div className="mt-4 space-y-3">
                                <div
                                    data-ai="line"
                                    className="h-3 w-4/5 overflow-hidden rounded-full bg-gradient-to-r from-orange-500/70 to-orange-500/10"
                                />
                                <div
                                    data-ai="line"
                                    className="h-3 w-full overflow-hidden rounded-full bg-white/10"
                                />
                                <div
                                    data-ai="line"
                                    className="h-3 w-3/5 overflow-hidden rounded-full bg-white/10"
                                />
                            </div>
                            <div className="mt-5 flex items-center justify-between rounded-xl border border-orange-400/20 bg-orange-500/5 px-4 py-3">
                                <div>
                                    <p className="text-sm font-semibold text-white">Tandoori Paneer Tikka</p>
                                    <p className="text-xs text-neutral-500">Starter · Spicy · Veg</p>
                                </div>
                                <span className="text-sm font-bold text-orange-400">₹320</span>
                            </div>
                        </div>
                    </div>

                    {/* AI Combo Suggestion — medium */}
                    <div
                        data-ai="card"
                        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-900/40 p-8 lg:col-span-2"
                    >
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
                                <IconToolsKitchen2 size={22} />
                            </span>
                            <h3 className="text-xl font-semibold md:text-2xl">AI Combo Suggestions</h3>
                        </div>
                        <p className="mt-3 leading-relaxed text-neutral-400">
                            At checkout, AI recommends the combo guests love most — lifting the
                            average bill without a single upsell script.
                        </p>

                        <div className="mt-7 space-y-3">
                            {COMBO_ITEMS.map(({ name, tag }) => (
                                <div
                                    key={name}
                                    data-ai="combo"
                                    className="flex items-center justify-between rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3"
                                >
                                    <span className="text-sm font-medium text-white">{name}</span>
                                    <span className="rounded-full bg-orange-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-orange-300">
                                        {tag}
                                    </span>
                                </div>
                            ))}
                            <div className="flex items-center justify-between px-1 pt-1 text-sm">
                                <span className="text-neutral-500">Suggested combo</span>
                                <span className="font-bold text-orange-400">+₹210 / table</span>
                            </div>
                        </div>
                    </div>

                    {/* two supporting AI cards */}
                    {SMALL.map(({ icon: Icon, title, desc }) => (
                        <div
                            key={title}
                            data-ai="card"
                            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-900/40 p-8 lg:col-span-2 last:lg:col-span-3"
                        >
                            <div className="flex items-center gap-3">
                                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
                                    <Icon size={22} />
                                </span>
                                <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
                            </div>
                            <p className="mt-3 leading-relaxed text-neutral-400">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div data-ai="head" className="mt-14 flex justify-center">
                    <a
                        href="https://pangat-saas.vercel.app/signup"
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-1.5 rounded-full bg-orange-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-900/40 transition-transform duration-300 hover:-translate-y-0.5"
                    >
                        Try the AI menu builder
                        <IconArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AiFeatures
