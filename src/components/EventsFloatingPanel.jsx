"use client"
import EventsFloat from "./EventsAccordeon"


export default function EventFloatingPanel() {
    return (
      <div className="bg-white overflow-y-auto h-[42rem] max-w-lg	 shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-xl font-semibold leading-6 text-gray-900">The Erotika Binnale Events</h2>
          <div className=" mt-2 max-w-lg text-sm text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae
              nam.
            </p>
          </div>
          <div className="mt-5">
         <EventsFloat />
          </div>
        </div>
      </div>
    )
  }
  