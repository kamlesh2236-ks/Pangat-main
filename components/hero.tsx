'use client'

import {
    IconArrowUpRight,
    IconPlayerPlay,
    IconQrcode,
    IconToolsKitchen2,
    IconBellRinging,
    IconDeviceMobile,
} from '@tabler/icons-react'
import { QRCodeSVG } from 'qrcode.react'

const ROW_STAGES = ['Placed', 'Preparing', 'Ready', 'Served']

const FEATURES = [
    { icon: IconQrcode, label: 'Scan & order, no queue' },
    { icon: IconToolsKitchen2, label: 'Live kitchen sync' },
    { icon: IconBellRinging, label: 'One-tap call waiter' },
    { icon: IconDeviceMobile, label: 'No app download' },
]

const Hero = () => {
    return (
        <section id="home" className="relative">
            <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-14 items-center">
                {/* LEFT — copy */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <span className="opacity-0 animate-[pg-fade-up_0.7s_ease_forwards] inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-orange-700 bg-orange-100 border border-orange-200 px-4 py-1.5 rounded-full">
                        QR Ordering · Kitchen · Waiter, in sync
                    </span>

                    <h1
                        className="opacity-0 animate-[pg-fade-up_0.8s_ease_forwards] mt-6 text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.08] text-neutral-900"
                        style={{ animationDelay: '0.12s' }}
                    >
                        Seat the whole <span className="text-orange-600">pangat.</span>
                        <br />
                        Serve every plate on time.
                    </h1>

                    <p
                        className="opacity-0 animate-[pg-fade-up_0.8s_ease_forwards] mt-5 max-w-md text-neutral-600 text-base md:text-lg leading-relaxed"
                        style={{ animationDelay: '0.24s' }}
                    >
                        Guests scan, order and pay from the table. Kitchen sees it the moment it's placed,
                        waiters know the moment it's ready. One row, no one left waiting.
                    </p>

                    <div
                        className="opacity-0 animate-[pg-fade-up_0.8s_ease_forwards] mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
                        style={{ animationDelay: '0.36s' }}
                    >
                        <a
                            href="https://pangat-saas.vercel.app/signup"
                            target='_blank'
                            className="relative overflow-hidden flex items-center gap-1.5 bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md shadow-orange-200 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg group"
                        >
                            <span className="relative z-10 flex items-center gap-1.5">
                                Start free trial <IconArrowUpRight size={18} />
                            </span>
                            <span className="absolute inset-0 -translate-x-[130%] group-hover:animate-[pg-shimmer_0.8s_ease] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        </a>

                        <button className="flex items-center gap-2 font-semibold text-neutral-800 border border-orange-200 bg-white px-6 py-3 rounded-full transition-colors duration-300 hover:border-orange-400 hover:bg-orange-50">
                            <IconPlayerPlay size={16} /> See it on a table
                        </button>
                    </div>

                    {/* feature chips */}
                    <div
                        className="opacity-0 animate-[pg-fade-up_0.8s_ease_forwards] mt-10 grid grid-cols-2 gap-4 w-full max-w-md"
                        style={{ animationDelay: '0.48s' }}
                    >
                        {FEATURES.map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2.5 text-left">
                                <span className="shrink-0 h-9 w-9 rounded-full bg-white/80 border border-orange-100 flex items-center justify-center text-orange-600 shadow-sm">
                                    <Icon size={17} />
                                </span>
                                <span className="text-sm font-medium text-neutral-700">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT — QR scan card, connected to the live serving row */}
                <div
                    className="opacity-0 animate-[pg-fade-up_0.9s_ease_forwards] flex flex-col items-center"
                    style={{ animationDelay: '0.5s' }}
                >
                    {/* QR scan card */}
                    <div className="relative w-full max-w-xs bg-white/80 backdrop-blur-sm border border-orange-100 rounded-2xl shadow-sm p-6">
                        {/* viewfinder corners */}
                        <span className="absolute top-3 left-3 h-5 w-5 border-t-2 border-l-2 border-orange-400 rounded-tl-md" />
                        <span className="absolute top-3 right-3 h-5 w-5 border-t-2 border-r-2 border-orange-400 rounded-tr-md" />
                        <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-orange-400 rounded-bl-md" />
                        <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-orange-400 rounded-br-md" />

                        <div className="relative mx-auto h-40 w-40 bg-white rounded-xl border border-orange-100 shadow-inner p-3 overflow-hidden flex items-center justify-center">
                            <QRCodeSVG
                                value="https://pangat-saas.vercel.app/order/restaurant_9961bfd9/2"
                                size={136}
                                bgColor="transparent"
                                fgColor="#171717"
                                level="M"
                            />
                            {/* animated scan line */}
                            <span className="absolute left-2 right-2 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_8px_rgba(234,88,12,0.6)] animate-[pg-scan_3s_ease-in-out_infinite]" />
                        </div>

                        <p className="mt-4 text-center text-sm font-semibold text-neutral-800">
                            Table 12 <span className="text-neutral-400 font-normal">· Scan to order</span>
                        </p>
                    </div>

                    {/* connector */}
                    <div className="h-8 w-px border-l border-dashed border-orange-300" />

                    {/* live serving row card */}
                    <div className="w-full max-w-xs bg-white/70 backdrop-blur-sm border border-orange-100 rounded-2xl shadow-sm p-5">
                        <div className="flex justify-between px-1 text-[10px] font-semibold tracking-wide uppercase">
                            {ROW_STAGES.map((stage, i) => (
                                <span key={stage} className={i === 1 ? 'text-orange-600' : 'text-neutral-400'}>
                                    {stage}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-orange-100">
                            {Array.from({ length: 8 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="h-7 w-7 rounded-full border border-orange-200 flex items-center justify-center animate-[pg-serve_4.8s_ease-in-out_infinite]"
                                    style={{ animationDelay: `${i * 0.4}s` }}
                                >
                                    <span className="h-2 w-2 rounded-full bg-orange-400/70" />
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between mt-3 text-[10px] font-medium text-neutral-400">
                            <span>8 ORDERS LIVE</span>
                            <span>~14 MIN AVG</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero