import GoogleMaps from '../GoogleMaps'
import EventsPanel from '../EventsPanel'

export default function Hero() {
  return (
    <>
    <div className='w-scree h-screen'>
      <div className="absolute right-10 top-32 z-10">
        <EventsPanel />
      </div>
      <GoogleMaps />
      </div>
    </>
  )
}
