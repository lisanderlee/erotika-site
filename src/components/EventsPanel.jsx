'use client'
import useStore from './store'
import React from 'react'
import EventsList from './EventsList'

export default function EventsPanel() {
  const selected = useStore((state) => state.selected)
  return (
    <div className="h-[42rem] w-97 overflow-y-auto bg-slate-950	 shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-3xl font-bold leading-9 text-pink-300">
        The Erotika <br></br> Binnale Events <br></br> 2024
        </h2>
        <div className="mt-5">
          <EventsList selected={selected} />
        </div>
      </div>
    </div>
  )
}
