'use client'
import Image from 'next/image'
import museum from '@/images/museum.png'
import world from '@/images/world.png'
import eleven from '@/images/eleven.png'
import Carousel from 'nuka-carousel'

import {
  renderCenterRightControls,
  renderCenterLeftControls,
  pagingDotsClassName,
} from '../Controls'
export default function Featured() {
  // 2. Defining Variants

  return (
    <div className='w-full px-5 md:px-10 lg:px-14'> 
    <div className="  overflow-hidden  rounded-2xl   bg-[#5E18EA]  ">

      <Carousel
        renderCenterLeftControls={renderCenterLeftControls}
        renderCenterRightControls={renderCenterRightControls}
        autoplay
      >

        <Eleven />
  
      </Carousel>
    </div>
    </div>
  )
}


function Eleven() {
  return (
    <div className="mx-auto flex-col  lg:flex-row px-5 pb-10 pt-5 flex max-w-2xl gap-x-14 p-0 lg:mx-0 lg:max-w-none lg:items-center lg:p-16">
      <Image
        className="rounded-2xl object-cover object-center "
        src={eleven}
        width={500}
        height={500}
        alt="Picture of the author"
        loading="lazy"
      />
      <div className="mt-12  w-full md:max-w-xl lg:mt-0 lg:max-w-4xl ">
      <h1 className="font-display text-xl tracking-tight text-pink-300 sm:text-2xl">
          Features Event
        </h1>
        <h1 className="font-display text-4xl tracking-tight text-pink-300 sm:text-6xl">
          E11EVEN Club
        </h1>
        <p className=" flex mt-6 text-lg leading-8 text-pink-100 ">
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

