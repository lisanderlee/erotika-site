import Spline from '@splinetool/react-spline'
import { Logo } from '../Logo'
import { motion, useScroll, useSpring } from 'framer-motion'
export default function Hero() {
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
      <div className="flex flex-col-reverse lg:flex h-screen w-screen items-center justify-center gap-x-48 p-10 lg:mt-0 lg:px-14 ">
        <div className="flex h-full  flex-col lg:flex-row lg:gap-x-44 ">
          <div className="flex h-full    max-w-3xl flex-col justify-center  ">
            <h1 className="   w-full text-right font-display  text-8xl  leading-[6rem] tracking-tight text-pink-300	lg:text-[10rem] lg:leading-[8rem] ">
              <motion.div
                variants={sectionVariants}
                initial="offscreen"
                whileInView="onscreen"
              >
                The
                <br />
                Erotika
                <br />
                Biennale
              </motion.div>
            </h1>

            <h1 className="   w-full text-right font-display  text-5xl tracking-tight	text-[#5E18EA] lg:text-8xl">
              <motion.div
                variants={sectionVariants}
                initial="offscreen"
                whileInView="onscreen"
              >
                February 2024 <br />
                1st to 29th <br /> Miami, FL
              </motion.div>
            </h1>
          </div>

          <div className="flex h-full  max-w-2xl flex-col justify-center text-left  ">
            <motion.div
              variants={sectionVariants}
              initial="offscreen"
              whileInView="onscreen"
            >
              <p className="  font-display text-xl leading-7 text-white md:text-3xl lg:text-4xl lg:leading-10">
                Featuring diverse artists, performances, and workshops,
                fostering an immersive experience in Miami&apos;s erotic
                communities. It&apos;s a revolution in erotic art appreciation,
                uniting communities, artists, and audiences in a celebration of
                authenticity and empowerment. Don&apos;t miss this inclusive and
                unforgettable experience!
              </p>
            </motion.div>
          </div>
        </div>

        <div className="lg:ralative hidden  -z-10 lg:absolute lg:top-28 lg:z-50 lg:block h-10 ">
        <Spline scene="https://prod.spline.design/FZqU56yeDW-xZcNq/scene.splinecode" />
        </div>
      </div>
      {/* <div className="-mt-52 flex lg:hidden">
        <Spline scene="https://prod.spline.design/FZqU56yeDW-xZcNq/scene.splinecode" />
      </div> */}
      {/* <div className="absolute right-64 top-14">

        <motion.div
          variants={sectionVariants}
          initial="offscreen"
          whileInView="onscreen"
        >
            <Logo />
            </motion.div>
          </div> */}
    </>
  )
}
