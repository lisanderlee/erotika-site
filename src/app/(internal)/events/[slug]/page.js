'use client'
import events from '@/events.json'
import { Tab } from '@headlessui/react'
import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function findById(arr, id) {
  return arr.find((item) => item.EventId === id)
}

export default function Page({ params }) {
  const event = findById(events, params.slug)
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <Tab.Group as="div" className="flex flex-col-reverse">
          {/* Image selector */}
          <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <Tab.List className="grid grid-cols-4 gap-6">
              {event.EventImages.map((image) => (
                <Tab
                  key={image.Id}
                  className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                >
                  {({ selected }) => (
                    <>
                      <span className="sr-only">{image.name}</span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <Image
                          className="h-full w-full object-cover object-center"
                          src={image.src}
                          width={500}
                          height={500}
                          alt="Picture of the author"
                          loading="lazy"
                        />
                      </span>
                      <span
                        className={classNames(
                          selected ? 'ring-indigo-500' : 'ring-transparent',
                          'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>

          <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
            {event.EventImages.map((image) => (
              <Tab.Panel key={image.id}>
                <Image
                  className="h-full w-full object-cover object-center sm:rounded-lg"
                  src={image.src}
                  width={500}
                  height={500}
                  alt="Picture of the author"
                  loading="lazy"
                />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        {/* Artist info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-pink-300">
            {event.EventName}
          </h1>
          <div className="mt-3">
            <p className="text-2xl tracking-tight text-pink-100">
              {event.EventCategory}
            </p>
          </div>
          <div className="mt-6">
            <div
              className="space-y-6 text-xl text-pink-100"
              dangerouslySetInnerHTML={{ __html: event.EventDescription }}
            />
          </div>

          <div className=" mt-16 flex flex-row">
            <div className=" text-left sm:flex-col lg:flex-col">
              <div className="flex flex-row">
                <h4 className="flex-none text-sm font-semibold  text-violet-600">
                  Start Date:
                </h4>
                <h4 className="flex-none text-sm font-normal text-gray-600">
                  {event.EventStartDate}
                </h4>
              </div>
              <div className="flex flex-row">
                <h4 className="flex-none text-sm font-semibold  text-violet-600">
                  End Date:
                </h4>
                <h4 className="flex-none text-sm font-normal text-gray-600">
                  {event.EventStartDate}
                </h4>
              </div>

              <div className="flex flex-row">
                <h4 className="flex-none text-sm font-semibold text-violet-600">
                  Tier:
                </h4>
                <h4 className="flex-none text-sm font-normal text-gray-600">
                  {event.EventTier}
                </h4>
              </div>

              <div className="flex flex-row">
                <h4 className="flex-none text-sm font-semibold leading-6 text-violet-600">
                  Payed:
                </h4>
                <h4 className="flex-none text-sm font-semibold leading-6  text-gray-600">
                  $$$
                </h4>
              </div>
            </div>

            <div className=" ml-16 text-left sm:flex-col lg:flex-col">
              <div className="flex flex-row">
                <h4 className="flex-none text-sm font-semibold text-violet-600">
                  Venue:
                </h4>
                <h4 className="flex-none text-sm font-normal text-gray-600">
                  {event.VenueName}
                </h4>
              </div>

              <div className="flex flex-row">
                <h4 className="flex-none text-sm font-semibold text-violet-600">
                  Location:
                </h4>
                <h4 className="flex-none text-sm font-normal text-gray-600">
                  {event.VenueLocation}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
