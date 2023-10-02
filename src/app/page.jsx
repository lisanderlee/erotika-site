import { CallToAction } from '@/components/Sections/CTA'
import { Sponsors } from '@/components/Sections/Sponsors'
import Hero from '@/components/Sections/Hero'
import Artists from '@/components/Sections/Artists'
import { About } from '@/components/Sections/About'
import { Header } from '@/components/Sections/Header'
import { Footer } from '@/components/Sections/Footer'
export default function Home() {
  return (
    <>
    <header>
      <Header />
      </header>
      <main>
        <Hero />
        <Sponsors />
        <About />
        <Artists />
        <CallToAction />
      </main>
      <footer>
      <Footer />
      </footer>
    </>
  )
}
