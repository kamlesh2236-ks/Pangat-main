import Features from '@/components/Features'
import Hero from '../components/hero'
import Reveal from '../components/reveal'
import Pricing from '@/components/Pricing'
import AboutUs from '@/components/About'
import Contact from '@/components/ContactUs'
import DownloadApp from '@/components/DownloadApp'
import MoreFeatures from '@/components/Morefeatures'
import AiFeatures from '@/components/ai-features'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Restaurant POS Software in India',

  description:
    'Pangat POS helps restaurants manage billing, QR ordering, inventory, kitchen display, reports and online ordering.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AiFeatures />
      <MoreFeatures />
      <Pricing />
      <DownloadApp />
      <AboutUs />
      <Contact />
    </>
  )
}