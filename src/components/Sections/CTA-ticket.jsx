'use client'
import { Button } from '../Button'
import { motion } from 'framer-motion'

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.4,
      damping: 10,
      delay: 0.05 * index,
    },
  }),
}
export default function CTATicket() {
  return (
    <motion.div
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}

    >
      <div className="mt-12   w-screen px-5 pt-5 md:px-10 lg:flex-row px-5 lg:gap-x-10 lg:px-14">
        <div className="border-border-[#5E18EA] flex flex-col  h-full items-center justify-center gap-y-8   bg-gradient-to-b from-[#5E18EA] via-[#5E18EA] to-pink-300   rounded-2xl p-12 ">
          <p className=" text-center font-display text-3xl tracking-tight	 text-white lg:text-4xl ">
            Get Early Bird Tickets Now!
          </p>
          <p className=" text-center font-display text-2xl tracking-tight lg:text-3xl ">
            Main Venue: The Wilzig Collection
         
          </p>

          <p className=" text-center font-display text-2xl tracking-tight lg:text-2xl ">
            Collateral exhibitions/ partners  •
            Artist Open Studios  •
            Gallery Openings  •
            Sex shops Discounts and Activations  •
            Afrodisiac Chef Meals  •
            Sex Therapist Talks  •
            BDSM Practitioner Open Studios  •
            Tantric Coaches Open Studios  •
            Art and Dance Performances  •
            Sex-positive parties  •
            Sexy Music Concerts  •
            and more
          </p>
          <a
            target="_blank"
            href="https://shotgun.live/festivals/the-erotika-biennale"
          >
            <Button color="violet">Get Tickets Now</Button>
          </a>
        </div>

      </div>
    </motion.div>
  )
}
