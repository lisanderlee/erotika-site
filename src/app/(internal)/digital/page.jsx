'use client'
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
const events = [
  {
    id: '1',
    title: 'Event 1',
    description: 'Description for event 1.',
  },
  {
    id: '2',
    title: 'Event 2',
    description: 'Description for event 2.',
  },
  {
    id: '3',
    title: 'Event 3',
    description: 'Description for event 3.',
  },
]

export default function Panel() {
  const [openIndex, setOpenIndex] = useState("1")

  return (
    <div className="mx-auto w-full max-w-md p-4">
      {events.map((event) => (
        <Disclosure as="div" className="mt-2" key={event.id}  defaultOpen={event.id===openIndex}>
          {({ open }) => (
            <>
              <Disclosure.Button
           
                className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              >
                <span>{event.title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                {event.description}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
