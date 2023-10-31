'use client'
import { CallToAction } from '@/components/Sections/CTA'
import { Sponsors } from '@/components/Sections/Sponsors'
import Hero from '@/components/Sections/Hero'
import Artists from '@/components/Sections/Artists'
import { About } from '@/components/Sections/About'
import { Header } from '@/components/Sections/Header'
import { Footer } from '@/components/Sections/Footer'
import Featured from '@/components/Sections/Featured'
import { motion, useScroll, useSpring, stagger } from 'framer-motion'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const sectionVariants = {
    offscreen: {
      y: 50,
    },
    onscreen: {
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.4,
        damping: 10,
      },
    },
  }

  return (
    <>
      <header>
        <motion.div
          className="h-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, delay: stagger(2) }}
        >
          <Header />
        </motion.div>
      </header>
      <main>
        <motion.div
          variants={sectionVariants}
          initial="offscreen"
          whileInView="onscreen"
        >
          <Hero />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="offscreen"
          whileInView="onscreen"
        >
          <Sponsors />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="offscreen"
          whileInView="onscreen"
        >
          <Featured />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="offscreen"
          whileInView="onscreen"
        >
          <CallToAction />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="offscreen"
          whileInView="onscreen"
        >
          <About />
        </motion.div>
      </main>
      <footer>
         <motion.div
          variants={sectionVariants}
          initial="offscreen"
          whileInView="onscreen"
        >
          <Footer />
        </motion.div>
      </footer>
    </>
  )
}
