'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
    IconBuildingStore,
    IconMoonStars,
    IconPhoto,
    IconSearch,
    IconShieldLock,
    IconUserShield,
    IconSun,
    IconLock,
    IconCheck,
    IconChefHat,
    IconToolsKitchen2,
    IconUserCog,
} from '@tabler/icons-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/* ---------------------------------------------------------------- Visuals */

const TenantVisual = () => (
    <div className="flex w-full flex-col gap-2.5">
        {[
            { name: 'Spice Route', tables: '24 tables', tone: 'bg-orange-500' },
            { name: 'Olive & Vine', tables: '18 tables', tone: 'bg-emerald-500' },
            { name: 'Blue Tokyo', tables: '31 tables', tone: 'bg-sky-500' },
        ].map((t) => (
            <div
                key={t.name}
                className="mf-pop flex items-center gap-3 rounded-xl border border-orange-100 bg-white px-3.5 py-2.5 shadow-sm"
            >
                <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${t.tone} text-white`}>
                    <IconBuildingStore size={16} />
                </span>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-neutral-900">{t.name}</p>
                    <p className="text-xs text-neutral-500">{t.tables}</p>
                </div>
                <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-semibold text-orange-600">
                    isolated
                </span>
            </div>
        ))}
    </div>
)

const ThemeVisual = () => (
    <div className="flex w-full items-center justify-center gap-4">
        <div className="mf-pop w-28 rounded-xl border border-orange-100 bg-white p-3 shadow-sm">
            <div className="flex items-center justify-between">
                <IconSun size={14} className="text-orange-500" />
                <span className="h-2 w-2 rounded-full bg-orange-400" />
            </div>
            <div className="mt-3 space-y-1.5">
                <div className="h-2 w-full rounded bg-neutral-200" />
                <div className="h-2 w-3/4 rounded bg-neutral-100" />
                <div className="h-6 w-full rounded bg-orange-100" />
            </div>
        </div>
        <div className="mf-toggle flex h-7 w-12 items-center rounded-full bg-neutral-800 p-1">
            <span className="mf-knob h-5 w-5 rounded-full bg-white shadow" />
        </div>
        <div className="mf-pop w-28 rounded-xl border border-neutral-700 bg-neutral-900 p-3 shadow-sm">
            <div className="flex items-center justify-between">
                <IconMoonStars size={14} className="text-orange-300" />
                <span className="h-2 w-2 rounded-full bg-orange-400" />
            </div>
            <div className="mt-3 space-y-1.5">
                <div className="h-2 w-full rounded bg-neutral-700" />
                <div className="h-2 w-3/4 rounded bg-neutral-800" />
                <div className="h-6 w-full rounded bg-orange-500/30" />
            </div>
        </div>
    </div>
)

const BannerVisual = () => (
    <div className="w-full space-y-2.5">
        <div className="mf-pop relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-3.5 text-white shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Weekend Special</p>
            <p className="text-sm font-bold">Buy 1 Biryani, Get 1 Free</p>
            <IconPhoto className="absolute -right-2 -top-2 text-white/20" size={64} />
        </div>
        <div className="flex gap-2.5">
            <div className="mf-pop flex-1 rounded-lg border border-orange-100 bg-white px-3 py-2 shadow-sm">
                <p className="text-[10px] text-neutral-500">Live now</p>
                <p className="text-xs font-semibold text-emerald-600">Happy Hour</p>
            </div>
            <div className="mf-pop flex-1 rounded-lg border border-dashed border-orange-200 bg-orange-50/60 px-3 py-2">
                <p className="text-[10px] text-neutral-500">Scheduled</p>
                <p className="text-xs font-semibold text-neutral-700">Fri, 6 PM</p>
            </div>
        </div>
    </div>
)

const SearchVisual = () => (
    <div className="w-full space-y-2.5">
        <div className="mf-pop flex items-center gap-2 rounded-xl border border-orange-100 bg-white px-3.5 py-2.5 shadow-sm">
            <IconSearch size={16} className="text-orange-500" />
            <span className="text-sm text-neutral-800">
                paneer<span className="mf-caret ml-0.5 inline-block h-4 w-px bg-orange-500 align-middle" />
            </span>
        </div>
        {[
            { label: 'Paneer Tikka', tag: 'Menu item', tone: 'text-orange-600 bg-orange-50' },
            { label: 'Order #2481', tag: 'Order', tone: 'text-sky-600 bg-sky-50' },
            { label: 'Table 12', tag: 'Table', tone: 'text-emerald-600 bg-emerald-50' },
        ].map((r) => (
            <div
                key={r.label}
                className="mf-pop flex items-center justify-between rounded-lg border border-neutral-100 bg-white px-3.5 py-2 shadow-sm"
            >
                <span className="text-sm font-medium text-neutral-800">{r.label}</span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${r.tone}`}>{r.tag}</span>
            </div>
        ))}
    </div>
)

const SessionVisual = () => (
    <div className="mf-pop flex w-full max-w-[15rem] flex-col items-center rounded-2xl border border-orange-100 bg-white px-6 py-7 text-center shadow-sm">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <IconLock size={26} />
        </span>
        <p className="mt-4 text-sm font-semibold text-neutral-900">Counter locked</p>
        <p className="mt-1 text-xs text-neutral-500">Inactive for 5 min</p>
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-orange-100">
            <span className="mf-lockbar block h-full w-full rounded-full bg-orange-500" />
        </div>
        <p className="mt-3 text-[11px] font-medium text-orange-600">Tap to resume shift</p>
    </div>
)

const RoleVisual = () => (
    <div className="grid w-full grid-cols-3 gap-2.5">
        {[
            { icon: IconChefHat, role: 'Kitchen', screen: 'Order queue', tone: 'bg-orange-500' },
            { icon: IconToolsKitchen2, role: 'Waiter', screen: 'Table map', tone: 'bg-emerald-500' },
            { icon: IconUserCog, role: 'Admin', screen: 'Full control', tone: 'bg-neutral-800' },
        ].map((r) => (
            <div
                key={r.role}
                className="mf-pop flex flex-col items-center rounded-xl border border-orange-100 bg-white px-2 py-4 text-center shadow-sm"
            >
                <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${r.tone} text-white`}>
                    <r.icon size={18} />
                </span>
                <p className="mt-2.5 text-xs font-semibold text-neutral-900">{r.role}</p>
                <p className="mt-0.5 text-[10px] leading-tight text-neutral-500">{r.screen}</p>
                <IconCheck size={13} className="mt-2 text-emerald-500" />
            </div>
        ))}
    </div>
)

/* ----------------------------------------------------------------- Config */

const MORE_FEATURES = [
    {
        icon: IconBuildingStore,
        number: '01',
        title: 'Multi-tenant Architecture',
        desc: "Every restaurant's menu, orders and staff live in their own isolated space — one platform, zero data crossover.",
        Visual: TenantVisual,
    },
    {
        icon: IconMoonStars,
        number: '02',
        title: 'Dark & Light Theme',
        desc: 'Staff switch themes based on the shift and the light in the kitchen — easy on the eyes, day or night.',
        Visual: ThemeVisual,
    },
    {
        icon: IconPhoto,
        number: '03',
        title: 'Media & Banners',
        desc: "Schedule promotional banners and seasonal offers that show up right on the guest's menu, no redeploy needed.",
        Visual: BannerVisual,
    },
    {
        icon: IconSearch,
        number: '04',
        title: 'Smart Search',
        desc: 'Find any order, item, table or staff member in a click — a single debounced search across everything.',
        Visual: SearchVisual,
    },
    {
        icon: IconShieldLock,
        number: '05',
        title: 'Session Security',
        desc: 'Shared devices auto-lock after inactivity, so a busy counter never stays logged in by accident.',
        Visual: SessionVisual,
    },
    {
        icon: IconUserShield,
        number: '06',
        title: 'Role-based Access',
        desc: 'Kitchen, waiter and admin each land on exactly the screen built for their job — nothing extra, nothing missing.',
        Visual: RoleVisual,
    },
]

const MoreFeatures = () => {
    const root = useRef<HTMLElement>(null)

    useGSAP(
        () => {
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
            if (reduce) {
                gsap.set('.mf-eyebrow, .mf-heading, .mf-number, .mf-anim, .mf-visual, .mf-pop', {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                })
                return
            }

            gsap.fromTo(
                '.mf-eyebrow, .mf-heading, .mf-sub',
                { opacity: 0, y: 24 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.12,
                    ease: 'power3.out',
                    scrollTrigger: { trigger: root.current, start: 'top 75%' },
                },
            )

            gsap.utils.toArray<HTMLElement>('.mf-row').forEach((row) => {
                const tl = gsap.timeline({
                    scrollTrigger: { trigger: row, start: 'top 78%' },
                })

                tl.fromTo(
                    row.querySelector('.mf-number'),
                    { opacity: 0, scale: 0.8, y: 10 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power2.out' },
                )
                    .fromTo(
                        row.querySelectorAll('.mf-anim'),
                        { opacity: 0, y: 24 },
                        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' },
                        '-=0.35',
                    )
                    .fromTo(
                        row.querySelector('.mf-visual'),
                        { opacity: 0, y: 30, scale: 0.96 },
                        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'power3.out' },
                        '-=0.5',
                    )
                    .fromTo(
                        row.querySelectorAll('.mf-pop'),
                        { opacity: 0, y: 14, scale: 0.9 },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.45,
                            stagger: 0.08,
                            ease: 'back.out(1.7)',
                        },
                        '-=0.45',
                    )
            })

            // ambient loops
            gsap.to('.mf-caret', { opacity: 0, duration: 0.55, repeat: -1, yoyo: true, ease: 'steps(1)' })
            gsap.to('.mf-knob', {
                x: 20,
                duration: 1.4,
                repeat: -1,
                yoyo: true,
                repeatDelay: 1,
                ease: 'power2.inOut',
            })
            gsap.fromTo(
                '.mf-lockbar',
                { scaleX: 1, transformOrigin: 'left center' },
                { scaleX: 0, duration: 4, repeat: -1, repeatDelay: 0.6, ease: 'none' },
            )
        },
        { scope: root },
    )

    return (
        <section ref={root} className="relative overflow-hidden bg-[#fdf8f3] px-6 py-28">
            {/* soft ambient glow */}
            <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-200/30 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="mf-eyebrow inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-700 opacity-0">
                        And there&apos;s more
                    </span>
                    <h2 className="mf-heading mt-5 text-3xl font-bold tracking-tight text-neutral-900 opacity-0 md:text-[2.75rem] md:leading-[1.1] text-balance">
                        Details that make the whole floor run smoother
                    </h2>
                    <p className="mf-sub mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-neutral-600 opacity-0">
                        Not just ordering — a full operating system for the restaurant, thought through down to the
                        last shift.
                    </p>
                </div>

                <div className="mt-24 grid gap-24 md:gap-32">
                    {MORE_FEATURES.map(({ icon: Icon, number, title, desc, Visual }, index) => {
                        const flip = index % 2 === 1
                        return (
                            <div key={title} className="mf-row grid items-center gap-10 md:grid-cols-2 md:gap-16">
                                {/* text */}
                                <div className={`relative ${flip ? 'md:order-2' : ''}`}>
                                    <span className="mf-number absolute -left-1 -top-12 select-none text-8xl font-bold leading-none text-orange-500/10 opacity-0">
                                        {number}
                                    </span>
                                    <div className="relative">
                                        <span className="mf-anim inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white opacity-0 shadow-lg shadow-orange-500/25">
                                            <Icon size={22} />
                                        </span>
                                        <h3 className="mf-anim mt-5 text-2xl font-bold tracking-tight text-neutral-900 opacity-0">
                                            {title}
                                        </h3>
                                        <p className="mf-anim mt-3 max-w-md leading-relaxed text-neutral-600 opacity-0">
                                            {desc}
                                        </p>
                                    </div>
                                </div>

                                {/* visual */}
                                <div className={`mf-visual opacity-0 ${flip ? 'md:order-1' : ''}`}>
                                    <div className="relative flex min-h-[13rem] items-center justify-center overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-white to-orange-50/40 p-6 shadow-xl shadow-orange-900/5">
                                        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-200/30 blur-2xl" />
                                        <Visual />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default MoreFeatures
