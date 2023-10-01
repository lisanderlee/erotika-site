import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { Button } from './Button'
import events from '@/events.json'
import Link from 'next/link'

export default function EventsFloat() {
  return (
    <dl className="mt-10 space-y-6 divide-y divide-white/10">
      {events.map((event) => (
        <Disclosure as="div" key={event.EventId} className="pt-6">
          {({ open }) => (
            <>
              <dt>
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-black">
                  <span className="text-base font-semibold leading-7">
                    {event.EventName}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? (
                      <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base leading-7 text-gray-600">
                  {event.EventDescription}
                </p>
                <h4 className="flex-none text-sm font-semibold leading-6 text-gray-600">
                  {event.VenueLocation}
                </h4>{' '}
                <h4 className="flex-none text-sm font-semibold leading-6 text-gray-600">
                  {event.EventStartData}
                </h4>
                <Link key={event.EventId} href={`/events/${event.EventId}`}>
                  <Button color="blue" className="mt-5">
                    <span>Learn More</span>
                  </Button>
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  )
}
