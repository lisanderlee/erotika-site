'use client'
import useStore from './store'
import React from 'react'
import EventsList from './EventsList'

export default function EventsPanel() {
  const selected = useStore((state) => state.selected)
  return (
    <div className="h-[42rem] max-w-lg overflow-y-auto bg-white	 shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-xl font-semibold leading-6 text-gray-900">
          The Erotika Binnale Events
        </h2>
        <div className=" mt-2 max-w-lg text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            voluptatibus corrupti atque repudiandae nam.
          </p>
          <p>
            {selected}
          </p>
        </div>
        <div className="mt-5">
          <EventsList selected={selected} />
        </div>
      </div>
    </div>
  )
}
