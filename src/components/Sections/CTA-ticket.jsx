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
      <div className="mt-12 flex  w-screen flex-col gap-y-5 px-5 pt-5 md:px-10 lg:flex-row px-5 lg:gap-x-10 lg:px-14">
        <div className="border-border-[#5E18EA] flex  h-full basis-1/2 flex-col items-center justify-center gap-y-8   bg-gradient-to-b from-[#5E18EA] via-pink-500 to-[#5E18EA] p-12 ">
          <p className=" text-center font-display text-3xl tracking-tight	 text-white lg:text-4xl ">
            Get VIP Access Now!
          </p>
          <p className=" text-center font-display text-2xl tracking-tight lg:text-2xl ">
            Enjoy many of the Erotika Biennale Enjoy many of the Erotika
            Biennale
          </p>
          <Button color="pink">Get Tickets Now</Button>
        </div>

        <div className="border-border-[#5E18EA] flex  h-full basis-1/2 flex-col items-center justify-center gap-y-8   bg-gradient-to-b from-[#5E18EA] via-pink-500 to-[#5E18EA] p-12 ">
          <p className=" text-center font-display text-3xl tracking-tight	 text-white lg:text-4xl ">
            Get General Access Now!
          </p>
          <p className=" text-center font-display text-2xl tracking-tight lg:text-2xl ">
            Enjoy many of the Erotika Biennale Enjoy many of the Erotika
            Biennale
          </p>
          <Button color="pink">Get Tickets Now</Button>
        </div>
      </div>
    </motion.div>
  )
}
