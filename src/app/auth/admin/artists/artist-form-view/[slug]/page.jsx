'use client'
import artists from '@/artists.json'
import Image from 'next/image'
import bodyImage from '@/images/body.svg'
import Carousel from 'nuka-carousel'
import {
  renderCenterRightControls,
  renderCenterLeftControls,
  pagingDotsClassName,
} from '@/components/Controls'
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { BsLink45Deg } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Page({ params }) {
  const supabase = createClientComponentClient()
  const [artist, setArtist] = useState(null)
  const [loading, setLoading] = useState(null)

  const getArtist = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error } = await supabase
        .from('artists_table')
        .select(`*, events_table (*, venues(*))  `)
        .eq('id', params.slug)
      console.log(data[0].link)
      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setArtist(data)
        console.log(data[0].name)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [supabase, params.slug])

  useEffect(() => {
    getArtist()
  }, [getArtist])

  return (
    <div className="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
         <h1 className="text-3xl mb-10 font-bold leading-6 text-pink-300">Event View</h1>
      <div className="z-50  mt-10 rounded-xl bg-[#5E18EA] drop-shadow-xl   ">
        <div className="inner">
          <Carousel
            renderCenterLeftControls={renderCenterLeftControls}
            renderCenterRightControls={renderCenterRightControls}
            autoplay
            className="drop-shadow-xl"
            wrapAround={true}
            autoplayInterval={3000}
          >
            {artist &&
              artist[0].images.map((image, index) => (
                <Image
                  key={index}
                  className="foto rounded-lg object-cover object-center  sm:rounded-lg"
                  src={image}
                  width={1000}
                  height={667}
                  alt="Picture of the author"
                  loading="lazy"
                />
              ))}
          </Carousel>
        </div>

        {/* Artist info */}
        <div>
          <div className="mt-5 px-5 lg:px-10">
            <h1 className="font-display text-5xl  tracking-tight text-pink-300 lg:text-7xl">
              {artist && artist[0].name + ' ' + artist[0].last}
            </h1>
            <div className="mt-3">
              <p className="text-xl font-semibold tracking-tight text-pink-100">
                {artist && artist[0].category}
              </p>
            </div>
            <div className="mt-6">
              <div
                className="space-y-6 text-xl text-pink-100"
                dangerouslySetInnerHTML={{
                  __html: artist && artist[0].description,
                }}
              />
            </div>
            <div className="mt-5 flex flex-row items-center">
              <div className="">
                <a
                  target="_blank"
                  className="  text-gray-400 hover:text-gray-600"
                  href={artist && artist[0].instagram}
                >
                  <BsInstagram size={24} />
                </a>
              </div>
              <div className="ml-5">
                <a
                  target="_blank"
                  className="text-gray-400  hover:text-gray-600"
                  href={artist && artist[0].link}
                >
                  <BsLink45Deg size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative mt-5">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-pink-300/20" />
            </div>
          </div>

          {/* More Info */}
          <div className="flex flex-col rounded-b-xl bg-[#4B21CE]/40 text-lg  lg:flex-col lg:justify-between">
            <div className="p-5 lg:px-10 lg:py-10">
              <div className="  text-left sm:flex-col lg:flex-col">
                <div className="flex flex-col items-center justify-between lg:flex-row">
                  <div className="flex w-full flex-col justify-between lg:flex-row">
                    <div className="flex flex-row">
                      <h4 className=" font-semibold  text-pink-300">
                        Event Name:
                      </h4>
                      <h4 className="ml-3 flex-none font-normal text-pink-100">
                        {artist && artist[0].events_table.name}
                      </h4>
                    </div>
                    <div className="flex  flex-row">
                      <h4 className="flex-none  font-semibold  text-pink-300">
                        Venue:
                      </h4>
                      <h4 className="ml-3 flex-none font-normal text-pink-100">
                        {artist && artist[0].events_table.venues.name}
                      </h4>
                    </div>
                    <div className="flex  flex-row">
                      <h4 className="flex-none  font-semibold  text-pink-300">
                        Start Date:
                      </h4>
                      <h4 className="ml-3 flex-none font-normal text-pink-100">
                        {artist && artist[0].events_table.start}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
