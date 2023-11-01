import Image from 'next/image'
import museum from '@/images/museum.jpg'
import { Carousel } from 'flowbite-react'
import world from "@/images/world.jpg"
import eleven from "@/images/eleven.jpg"

export default function Featured() {
  return (
    <div className="relative overflow-hidden lg:mt-24">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
      <h2 className="font-display  w-100 text-center mb-16 text-6xl tracking-tight text-pink-300 sm:text-4xl">
            Proudly partnering with
          </h2>
          <Carousel>
          
          <Museum />
          <Eleven />
          <Wilzig />
          </Carousel>
      
      </div>
    </div>
  )
}

function Museum() {
  return (
    <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
      <Image
        className="h-96  rounded-2xl object-cover object-center "
        src={museum}
        width={500}
        height={500}
        alt="Picture of the author"
        loading="lazy"
      />
      <div className="mt-12  w-full max-w-xl lg:mt-0 lg:shrink-0 xl:max-w-2xl">
        <h1 className="font-display text-4xl tracking-tight text-pink-300 sm:text-6xl">
          Museum Of Sex Miami
        </h1>
        <p className="relative mt-6 text-lg leading-8 text-pink-100 sm:max-w-md lg:max-w-none">
          The Museum of Sex making their Miami debut is an iconic institution
          that explores and celebrates the evolution of human sexuality. The
          museum&apos;s event space will be used as the hub of experiences and
          will be activated throughout the month of February.
        </p>
      </div>
    </div>
  )
}

function Eleven() {
  return (
    <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
      <Image
        className="h-96 rounded-2xl object-cover object-center "
        src={eleven}
        width={500}
        height={500}
        alt="Picture of the author"
        loading="lazy"
      />
      <div className="mt-12  w-full max-w-xl lg:mt-0 lg:shrink-0 xl:max-w-2xl">
        <h1 className="font-display text-4xl tracking-tight text-pink-300 sm:text-6xl">
          E11EVEN Club
        </h1>
        <p className="relative mt-6 text-lg leading-8 text-pink-100 sm:max-w-md lg:max-w-none">
          E11EVEN Club is an embodiment of Miami&apos;s vibrant nightlife, where
          artistry and sensuality come alive. Our partnership with this renowned
          venue adds a lively and energetic dimension to the Erotika Biennale.
          Through live performances, dynamic installations, and a pulsating
          atmosphere, E11EVEN Club will be the heart of the night where art and
          passion merge.
        </p>
      </div>
    </div>
  )
}

function Wilzig() {
  return (
    <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
      <Image
        className="  h-96 rounded-2xl object-cover object-center "
        src={world}
        width={500}
        height={500}
        alt="Picture of the author"
        loading="lazy"
      />
      <div className="mt-12  w-full max-w-xl lg:mt-0 lg:shrink-0 xl:max-w-2xl">
        <h1 className="font-display text-4xl tracking-tight text-pink-300 sm:text-6xl">
          The Wilzig Collection
        </h1>
        <p className="relative mt-6 text-lg leading-8 text-pink-100 sm:max-w-md lg:max-w-none">
          Home to a rich collection of over 4,000 objects spanning centuries,
          continents, and cultures. This exceptional collection serves as a
          valuable resource for exploring the cultural history of sexuality,
          gender, love, emotions, and desires, providing unique insights into
          culturally specific manifestations of sexuality. The Erotika Biennale
          will host an educational program at the Wilzig, aimin to present this
          collection in a fresh context, viewing these objects as evidence of a
          cultural history of sexuality from antiquity to the present day.
        </p>
      </div>
    </div>
  )
}
