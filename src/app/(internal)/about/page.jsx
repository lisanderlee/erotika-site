"use client"
import { Carousel } from "flowbite-react"
import Team from "@/components/Sections/Team"
import { About } from "@/components/Sections/About"
import CTATicket from "@/components/Sections/CTA-ticket"
import { CallToAction } from "@/components/Sections/CTA"
export default function Home() {
  return (
    <main className="isolate">
    <About />
 <Team />
  <CTATicket />
  <CallToAction />
  
    </main>
  )
}
