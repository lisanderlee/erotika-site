'use client'
import Image from 'next/image'
import museum from '@/images/museum.png'
import world from '@/images/world.png'
import eleven from '@/images/eleven.png'
import Carousel from 'nuka-carousel'
import { renderCenterRightControls, renderCenterLeftControls, pagingDotsClassName } from '../Controls'
export default function Featured() {
  return (
    <div className="relative overflow-hidden lg:mt-24">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-32 sm:pt-96 lg:px-8 lg:pt-32">
        {/* <h2 className="font-display  w-100 text-center mb-16 text-6xl tracking-tight text-pink-300 sm:text-4xl">
            Proudly partnering with
          </h2> */}
        <Carousel
          renderCenterLeftControls={renderCenterLeftControls}
          renderCenterRightControls={renderCenterRightControls}
        
          autoplay
         
       
        >
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
    <div className="mx-auto max-w-2xl p-0 lg:p-16 gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
      <Image
        className=" rounded-2xl object-cover object-center "
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
    <div className="mx-auto max-w-2xl p-0 lg:p-16 gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
      <Image
        className="rounded-2xl object-cover object-center "
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
    <div className="mx-auto max-w-2xl  p-0 lg:p-16 gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
      <Image
        className="rounded-2xl object-cover object-center "
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
          The Erotika Biennale at the Wilzig hosts over 4,000 artifacts across
          centuries and cultures, offering a deep exploration of the history of
          sexuality, gender, and emotions. This extensive collection presents a
          unique view of cultural expressions of sexuality. The event includes
          an educational program, contextualizing these items as historical
          evidence of evolving sexual norms from antiquity to modern times.
        </p>
      </div>
    </div>
  )
}
