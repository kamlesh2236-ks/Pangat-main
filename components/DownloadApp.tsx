'use client'
import React, { useState } from 'react'
import {
    IconDeviceDesktop,
    IconDeviceMobile,
    IconDownload,
    IconDotsVertical,
    IconShare2,
    IconSquarePlus,
    IconToolsKitchen2,
    IconBellRinging,
} from '@tabler/icons-react'
import Reveal from './reveal'

const ANDROID_STEPS = [
    { icon: IconDotsVertical, text: 'Open Pangat in Chrome and tap the ⋮ menu, top right' },
    { icon: IconSquarePlus, text: 'Tap "Install app" (or "Add to Home screen")' },
    { icon: IconDownload, text: 'Tap "Install" — the Pangat icon now sits on your home screen' },
]

const IOS_STEPS = [
    { icon: IconShare2, text: 'Open Pangat in Safari and tap the Share icon' },
    { icon: IconSquarePlus, text: 'Scroll down and tap "Add to Home Screen"' },
    { icon: IconDownload, text: 'Tap "Add" — the Pangat icon now sits on your home screen' },
]

const DownloadApp = () => {
    const [platform, setPlatform] = useState('android')
    const steps = platform === 'android' ? ANDROID_STEPS : IOS_STEPS

    return (
        <section id="download" className="relative bg-orange-50/40 px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <Reveal className="max-w-xl mx-auto text-center">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-orange-700 bg-orange-100 border border-orange-200 px-4 py-1.5 rounded-full">
                        Use it everywhere
                    </span>
                    <h2 className="mt-5 text-3xl md:text-4xl font-bold text-neutral-900">
                        One dashboard on your desk, one app on every phone
                    </h2>
                    <p className="mt-4 text-neutral-600 leading-relaxed">
                        Run the full admin on Windows, and let kitchen and waiter staff install Pangat on
                        their own phone in seconds — no app store, no login screen every time.
                    </p>
                </Reveal>

                <div className="mt-14 grid lg:grid-cols-2 gap-6">
                    {/* Desktop download */}
                    <Reveal>
                        <div className="h-full bg-white border border-orange-100 rounded-2xl shadow-sm p-7 flex flex-col">
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                                <IconDeviceDesktop size={22} />
                            </span>
                            <h3 className="mt-4 text-lg font-semibold text-neutral-900">Pangat for Windows</h3>
                            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                                The full admin dashboard as a native app — reports, staff, billing and settings,
                                without keeping a browser tab open all day.
                            </p>

                            <div className="mt-auto pt-6">
                                <a
                                    href="https://github.com/kamlesh2236-ks/Pangat-software/releases/download/v1.0.0/Pangat.Setup.1.0.0.exe"
                                    download
                                    className="relative overflow-hidden w-full flex items-center justify-center gap-2 bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-sm shadow-orange-200 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg group"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <IconDownload size={18} /> Download for Windows
                                    </span>
                                    <span className="absolute inset-0 -translate-x-[130%] group-hover:animate-[pg-shimmer_0.8s_ease] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                                </a>
                                <p className="mt-2.5 text-center text-xs text-neutral-400">
                                    Windows 10+ · v1.0.0 · ~85 MB
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Mobile install */}
                    <Reveal delay={100}>
                        <div className="h-full bg-white border border-orange-100 rounded-2xl shadow-sm p-7">
                            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                                <IconDeviceMobile size={22} />
                            </span>
                            <h3 className="mt-4 text-lg font-semibold text-neutral-900">Install on your phone</h3>
                            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                                No app store needed — add Pangat to your home screen and it opens full-screen,
                                like a real app.
                            </p>

                            <div className="mt-3 flex items-center gap-2 text-xs font-medium text-orange-700 bg-orange-50 border border-orange-100 rounded-lg px-3 py-2">
                                <IconToolsKitchen2 size={15} />
                                <span>Recommended for kitchen &amp; waiter staff</span>
                                <IconBellRinging size={15} className="ml-auto" />
                            </div>

                            {/* platform toggle */}
                            <div className="mt-5 inline-flex rounded-full border border-orange-200 bg-orange-50 p-1 text-sm">
                                <button
                                    onClick={() => setPlatform('android')}
                                    className={`px-4 py-1.5 rounded-full font-medium transition-colors duration-200 ${platform === 'android' ? 'bg-white text-orange-700 shadow-sm' : 'text-neutral-500'
                                        }`}
                                >
                                    Android
                                </button>
                                <button
                                    onClick={() => setPlatform('ios')}
                                    className={`px-4 py-1.5 rounded-full font-medium transition-colors duration-200 ${platform === 'ios' ? 'bg-white text-orange-700 shadow-sm' : 'text-neutral-500'
                                        }`}
                                >
                                    iPhone
                                </button>
                            </div>

                            <ol className="mt-5 grid gap-3.5">
                                {steps.map(({ icon: Icon, text }, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="shrink-0 h-7 w-7 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs font-semibold">
                                            {i + 1}
                                        </span>
                                        <span className="flex items-center gap-2 text-sm text-neutral-700 pt-0.5">
                                            <Icon size={16} className="text-orange-400 shrink-0" />
                                            {text}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default DownloadApp