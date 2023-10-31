'use client'
import events from '@/events.json'
import Image from 'next/image'
import { Button } from '../Button'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function findById(arr, id) {
  return arr.find((item) => item.EventId === id)
}

export default function FeaturedEventSection() {
  const event = findById(events, 'EVT12346')
  return (

    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:mt-24">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <Image
          className="h-full w-full object-cover object-center sm:rounded-lg"
          src={event.EventImages[0].src}
          width={500}
          height={500}
          alt="Picture of the author"
          loading="lazy"
        />
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-pink-300">
            {event.EventName}
          </h1>
          <div className="mt-3">
            <h2 className="sr-only">Artist information</h2>
            <p className="text-2xl tracking-tight text-pink-300">
              {event.EventCategory}
            </p>
          </div>
          <div className="mt-6">
            <div
              className="space-y-6 text-base text-pink-100"
              dangerouslySetInnerHTML={{ __html: event.EventDescription }}
            />
          </div>
          
        </div>
        
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:mt-24">
    
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 lg:ml-20">
          <h1 className="text-3xl font-bold tracking-tight text-pink-300">
            {event.EventName}
          </h1>
          <div className="mt-3">
            <h2 className="sr-only">Artist information</h2>
            <p className="text-2xl tracking-tight text-pink-300">
              {event.EventCategory}
            </p>
          </div>
          <div className="mt-6">
            <div
              className="space-y-6 text-base text-pink-100"
              dangerouslySetInnerHTML={{ __html: event.EventDescription }}
            />
          </div>
          <Button href="/artists" color="violet" className="mt-5">
            <span>See all</span>
          </Button>
        </div>
        <Image
          className="h-full w-full object-cover object-center sm:rounded-lg"
          src={event.EventImages[0].src}
          width={500}
          height={500}
          alt="Picture of the author"
          loading="lazy"
        />
      </div>
    </div>
  
  )
}
