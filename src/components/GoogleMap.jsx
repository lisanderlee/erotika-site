'use client'
import { Wrapper } from '@googlemaps/react-wrapper'
import { useRef, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import events from '@/events.json'

export default function App() {
  return (
    <Wrapper
      apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY}
      version="beta"
      libraries={['marker']}
    >
      <MyMap />
    </Wrapper>
  )
}

const mapOptions = {
  mapId: process.env.NEXT_PUBLIC_MAP_ID,
  center: { lat: 25.792903, lng: -80.20021 },
  zoom: 12,
  disableDefaultUI: true,
}

function MyMap() {
  const [map, setMap] = useState()
  const ref = useRef()

  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions))
  }, [])

  return (
    <>
      <div ref={ref} id="map" />
      {map && <Locations map={map} />}
    </>
  )
}

function Locations({ map }) {
  const [highlight, setHighlight] = useState()

  return (
    <>
      {events.map((event) => (
        <Marker
          key={event.EventId}
          map={map}
          position={event.EventPosition}
          onClick={() => setHighlight(event.EventId)}
        >
          <div
            className={`marker  ${
              highlight === event.EventId ? 'highlight' : ''
            }`}
            onMouseEnter={() => setHighlight(event.EventId)}
            onMouseLeave={() => setHighlight(null)}
          >
            <h2>{event.EventName}</h2>
            <div>{event.VenueName}c</div>
            {highlight === event.EventID ? (
              <div className="five-day">
                <p>{event.EventStartDate}</p>
              </div>
            ) : null}
          </div>
        </Marker>
      ))}
    </>
  )
}

function Marker({ map, position, children, onClick }) {
  const rootRef = useRef()
  const markerRef = useRef()

  useEffect(() => {
    if (!rootRef.current) {
      const container = document.createElement('div')
      rootRef.current = createRoot(container)

      markerRef.current = new google.maps.marker.AdvancedMarkerView({
        position,
        content: container,
      })
    }

    return () => (markerRef.current.map = null)
  }, [])

  useEffect(() => {
    rootRef.current.render(children)
    markerRef.current.position = position
    markerRef.current.map = map
    const listener = markerRef.current.addListener('click', onClick)
    return () => listener.remove()
  }, [map, position, children, onClick])
}
