import { EventItem } from '@/components/EventItem'
export default function Home() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Events
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
    
      </div>
      <EventItem />
      <EventItem />
    </div>
  )
}
