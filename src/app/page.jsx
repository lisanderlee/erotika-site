import { CallToAction } from '@/components/CallToAction'
import { Sponsors } from '@/components/Sponsors'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import Artists from '@/components/Artists'
import { About } from '@/components/About'

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
