'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { IconMenu2, IconX, IconArrowUpRight } from '@tabler/icons-react'

interface NavbarProps {
  transparent?: boolean
}

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Features', id: 'features' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar({
  transparent = false,
}: NavbarProps) {
  const pathname = usePathname()

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)

    onScroll()

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-orange-50/90 backdrop-blur-md shadow-sm border-b border-orange-200/70'
          : transparent
            ? 'bg-transparent border-b border-transparent'
            : 'bg-white border-b border-orange-100'
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-5 px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/favicon.svg"
            width={42}
            height={42}
            alt="Logo"
          />

          <h1 className="text-xl font-semibold tracking-tight text-orange-700">
            Pangat Pos
          </h1>
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 font-medium text-neutral-700">
          {NAV_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                href={
                  pathname === '/'
                    ? `#${item.id}`
                    : `/#${item.id}`
                }
                className="transition-colors hover:text-orange-700"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button
            onClick={() =>
              window.open(
                'https://pangat-saas.vercel.app/signup',
                '_blank'
              )
            }
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Demo
              <IconArrowUpRight size={16} />
            </span>

            <span className="absolute inset-0 -translate-x-[130%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[pg-shimmer_0.8s_ease]" />
          </button>
        </div>

        <button
          className="rounded-lg border border-orange-200 p-2 text-orange-700 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <IconX size={22} />
          ) : (
            <IconMenu2 size={22} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden bg-orange-50 transition-all duration-300 md:hidden ${menuOpen ? 'max-h-96' : 'max-h-0'
          }`}
      >
        <ul className="flex flex-col">
          {NAV_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                href={
                  pathname === '/'
                    ? `#${item.id}`
                    : `/#${item.id}`
                }
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 hover:bg-orange-100"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}