'use client'
import events from '@/events.json'
import Image from 'next/image'
import bodyImage from '@/images/body.svg'
import Carousel from 'nuka-carousel'
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import {
  renderCenterRightControls,
  renderCenterLeftControls,
  pagingDotsClassName,
} from '@/components/Controls'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Page({ params }) {
  const supabase = createClientComponentClient()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(null)

  const getEvents = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error } = await supabase
        .from('events_table')
        .select(`*, venues (*) , event_category(event_category)  `)
        .eq('id', params.slug)

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setEvent(data)
        console.log(data[0].name)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [supabase, params.slug])

  useEffect(() => {
    getEvents()
  }, [getEvents])

  return (
   
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="z-50  mt-10 rounded-xl bg-[#5E18EA]  drop-shadow-xl   ">
        <div className="inner">
          <Carousel
            renderCenterLeftControls={renderCenterLeftControls}
            renderCenterRightControls={renderCenterRightControls}
            autoplay
            className="drop-shadow-xl"
            wrapAround={true}
            autoplayInterval={2500}
          >
            {event &&
              event[0].images.map((image, index) => (
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
        <div className="">
          <div className="mt-5 px-5 lg:px-10 ">
            <h1 className="font-display text-5xl  tracking-tight text-pink-300 lg:text-7xl">
              {event && event[0].name}
            </h1>
            <div className="mt-3">
              <p className="text-xl font-semibold tracking-tight text-pink-100">
                {event && event[0].event_category.event_category}
              </p>
            </div>
            <div className="mt-6">
              <div
                className="space-y-6 text-xl text-pink-100"
                dangerouslySetInnerHTML={{ __html: event && event[0].description }}
              />
            </div>
          </div>

          {/* Divider */}
          <div className="relative mt-10">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-pink-300/20" />
            </div>
          </div>

          {/* More Details */}
          <div className="flex flex-col rounded-b-xl bg-[#4B21CE]/40  text-lg lg:flex-col">
            <div className="p-5 lg:px-10 lg:py-10">
              <div className="  flex flex-col justify-between text-left lg:flex-row">
                <div className="flex flex-row">
                  <h4 className="flex-none  font-semibold  text-pink-300">
                    Start Date:
                  </h4>
                  <h4 className="ml-3 flex-none font-normal text-pink-100">
                    {event && event[0].start}
                  </h4>
                </div>

                <div className="flex flex-row">
                  <h4 className="mt-1 flex-none   font-semibold text-pink-300 lg:ml-5  lg:mt-0">
                    End Date:
                  </h4>
                  <h4 className="ml-3 mt-1 flex-none  font-normal text-gray-100 lg:mt-0">
                    {event && event[0].end}
                  </h4>
                </div>

                <div className="flex flex-row">
                  <h4 className="mt-1 flex-none  font-semibold text-pink-300 lg:ml-5 lg:mt-0">
                    Tier:
                  </h4>
                  <h4 className="ml-3 mt-1  flex-none  font-normal text-pink-100 lg:mt-0">
                  {event && event[0].vip ? "VIP" : "Regular"}
                  </h4>
                </div>
                <div className="flex flex-row">
                  <h4 className="mt-1 flex-none  font-semibold text-pink-300 lg:ml-5 lg:mt-0">
                    RSVP:
                  </h4>
                  <h4 className="ml-3 mt-1  flex-none  font-normal text-pink-100 lg:mt-0">
                  {event && event[0].rsvp ? "Yes" : "No"}
                  </h4>
                </div>

                <div className="flex flex-row">
                  <h4 className="mt-1 flex-none   font-semibold leading-6 text-pink-300 lg:ml-5 lg:mt-0">
                    Payed:
                  </h4>
                  <h4 className="ml-3 mt-1 flex-none  font-normal leading-6 text-gray-100  lg:mt-0">
                    {event && event[0].payed ? "Yes" : "No"}
                  </h4>
                </div>
              </div>

              <div className=" ml-0 mt-1 flex flex-col justify-between  text-left lg:mt-5 lg:flex-row">
                <div className="flex flex-row">
                  <h4 className="flex-none  font-semibold text-pink-300">
                    Venue:
                  </h4>
                  <h4 className="ml-3 flex-none  font-normal text-pink-100">
                    { event && event[0].venues.name}
                  </h4>
                </div>

                <div className="flex flex-row">
                  <h4 className="mt-1 flex-none font-semibold text-pink-300 lg:mt-0">
                    Location:
                  </h4>
                  <h4 className="ml-3 mt-1 w-40  flex-none font-normal text-pink-100  lg:mt-0 lg:w-full">
                    {event && event[0].venues.address +
                      ' ' +
                      event[0].venues.city +
                      ' ' +
                      event[0].venues.state +
                      ' ' +
                      event[0].venues.zip}
                  </h4>
                </div>
                <div className="flex flex-row">
                  <h4 className="mt-1 flex-none font-semibold text-pink-300 lg:mt-0">
                    Artists:
                  </h4>
                  <h4 className="ml-3 mt-1 w-40  flex-none font-normal text-pink-100  lg:mt-0 lg:w-full">
                    Tam Gryn
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative -z-20 lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
        <Image
          src={bodyImage}
          alt="App screenshot"
          width={648}
          height={1117}
          className="lg:aspect-auto aspect-[3/3] w-full object-cover lg:absolute lg:inset-0 lg:h-full "
        />
      </div>
    </div>
  )
}
