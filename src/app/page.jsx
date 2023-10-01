import { CallToAction } from '@/components/CallToActionSection'
import { Sponsors } from '@/components/SponsorsSection'
import Hero from '@/components/HeroSection'
import Artists from '@/components/ArtistsSection'
import { About } from '@/components/AboutSection'
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Sponsors />
        <About />
        <Artists />
        <CallToAction />
      </main>
    </>
  )
}
