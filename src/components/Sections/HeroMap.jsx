import GoogleMaps from '../google-maps'
import EventsPanel from '../events-panel'

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
