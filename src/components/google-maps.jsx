'use client'
import { Wrapper } from '@googlemaps/react-wrapper'
import { useRef, useEffect, useState, useCallback } from 'react'
import { createRoot } from 'react-dom/client'
import useStore from './store'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function GoogleMaps() {
  const supabase = createClientComponentClient()
  const [events, setEvents] = useState(null)
  const [loading, setLoading] = useState(null)
  const [selected, setSelected] = useState(null)

  const getEvents = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error } = await supabase.from('events_table').select(`
      *,
      venues (
       *
      ),
      event_category(
        event_category
      )
    `)

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setEvents(data)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [supabase])

  useEffect(() => {
    getEvents()
  }, [getEvents])

  return (
    <>
      <Wrapper
        apiKey={'AIzaSyDEQKofubScbt-9dVPCKlRwAHw5WKFV7-w'}
        version="beta"
        libraries={['marker']}
      >
        <MyMap events={events} />
      </Wrapper>
    </>
  )
}

const mapOptions = {
  mapId: '6bd0060de5b1673a',
  center: { lat: 25.792903, lng: -80.20021 },
  zoom: 12,
  disableDefaultUI: true,
}

function MyMap({ events }) {
  const [map, setMap] = useState()
  const ref = useRef()

  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions))
  }, [])

  return (
    <>
      <div ref={ref} id="map" />
      {events && map && <Locations map={map} events={events} />}
    </>
  )
}

function Locations({ map, events }) {
  const [highlight, setHighlight] = useState()
  const { setSelected } = useStore()
  function createArrayFromNumber(num) {
    let array = []
    array.push(num)
    return array
  }
  return (
    <>
      {events &&
        events.map((event) => (
          <Marker
            key={event.id}
            map={map}
            position={event.venues.geo}
            onClick={() => setSelected(createArrayFromNumber(event.id))}
          >
            <div
              className={`marker  ${
                highlight === event.EventId ? 'highlight' : ''
              }`}
              onMouseEnter={() => setHighlight(event.id)}
              onMouseLeave={() => setHighlight(null)}
            >
              <h2 className=" line-clamp-1 text-sm font-semibold text-pink-300">
                {event.name}
              </h2>
              {/* 
            {highlight === event.EventID ? (
              <div className="expanded-marker">
                <h4>{event.VenueName}</h4>
                <p>{event.EventStartDate}</p>
              </div>
            ) : null} */}
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
