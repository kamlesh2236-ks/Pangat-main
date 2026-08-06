import Features from '@/components/Features'
import Hero from '../components/hero'
import Reveal from '../components/reveal'
import Pricing from '@/components/Pricing'
import AboutUs from '@/components/About'
import Contact from '@/components/ContactUs'
import DownloadApp from '@/components/DownloadApp'
import MoreFeatures from '@/components/Morefeatures'
import AiFeatures from '@/components/ai-features'

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