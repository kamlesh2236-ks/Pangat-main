'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import Navbar from './navbar'
import Footer from './footer'

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
    const pathname = usePathname()

    const isHome = pathname === '/'

    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.replace('#', '')
            const el = document.getElementById(id)

            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({
                        behavior: 'smooth',
                    })
                }, 80)
            }
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
    }, [pathname])

    return (
        <div
            className={`relative ${isHome
                    ? 'overflow-hidden bg-gradient-to-b from-orange-50 via-orange-50/60 to-white'
                    : 'bg-white'
                }`}
        >
            {/* Background Glow */}

            {isHome && (
                <>
                    <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl animate-[pg-blob_9s_ease-in-out_infinite]" />

                    <div className="pointer-events-none absolute -top-10 right-0 h-64 w-64 rounded-full bg-orange-300/40 blur-3xl animate-[pg-blob_11s_ease-in-out_infinite]" />
                </>
            )}

            <Navbar transparent={isHome} />

            <main>{children}</main>

            <Footer />
        </div>
    )
}