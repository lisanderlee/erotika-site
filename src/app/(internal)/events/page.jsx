import { EventItem } from '@/components/EventItem'
import Link from 'next/link'
import events from "@/events.json"


export default function Home() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="lg:text-7xl font-bold text-pink-300 sm:text-4xl">
            Events
          </h2>
          <p className="mt-3 text-4xl  leading-tight text-pink-100">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
      </div>

      <ul role="list">
        {events.map((event) => (
          <EventItem
            key={event.EventId}
            id={event.EventId}
            title={event.EventName}
            image={event.EventImages[0].src}
            description={event.EventDescription}
            venueName = {event.VenueName}
            location={event.VenueLocation}
            StartDate={event.EventStartDate}
            EndDate={event.EventEndDate}
            tier={event.EventTier}
            payed={event.EventPayed}
          />
        
        ))}
      </ul>
    </div>
  )
}
