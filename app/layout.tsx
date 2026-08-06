import './globals.css'
import type { Metadata } from 'next'
import Layout from '../components/Layout'

export const metadata: Metadata = {
  metadataBase: new URL('https://pangat-main.vercel.app'),

  title: {
    default: 'Pangat POS | Restaurant POS Software',
    template: '%s | Pangat POS',
  },

  description:
    'Pangat POS is a cloud-based restaurant POS software with QR ordering, billing, inventory management, kitchen display and online ordering.',

  keywords: [
    'Restaurant POS',
    'Restaurant Billing Software',
    'Restaurant Management Software',
    'QR Ordering',
    'Cloud POS',
    'Restaurant Software India',
    'Pangat POS',
  ],

  authors: [{ name: 'Pangat POS' }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Pangat POS',
    description:
      'Restaurant POS Software with QR Ordering, Billing, Inventory and Kitchen Display.',
    url: 'https://pangat-main.vercel.app',
    siteName: 'Pangat POS',
    locale: 'en_IN',
    type: 'website',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pangat POS',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Pangat POS',
    description:
      'Restaurant POS Software for modern restaurants.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}