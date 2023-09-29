import { CallToAction } from '@/components/CallToActionSection'
import { Sponsors } from '@/components/SponsorsSection'
import { Footer } from '@/components/FooterSection'
import { Header } from '@/components/HeaderSection'
import { Hero } from '@/components/HeroSection'
import Artists from '@/components/ArtistsSection'
import { About } from '@/components/AboutSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sponsors />

        <About />
        <Artists />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
