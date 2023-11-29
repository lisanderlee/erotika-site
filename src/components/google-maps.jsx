'use client'
import React from 'react'
import { Wrapper } from '@googlemaps/react-wrapper'
import Image from 'next/image'
import { useRef, useEffect, useState, useCallback } from 'react'
import { createRoot } from 'react-dom/client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react'

export default function GoogleMaps() {
  const supabase = createClientComponentClient()
  const [events, setEvents] = useState(null)
  const [loading, setLoading] = useState(null)

  const getEvents = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error } = await supabase.from('events_table').select(`
      *,
      venues (
       *
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

  const [selected, setSelected] = useState()

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  function createArrayFromNumber(num) {
    let array = []
    array.push(num)
    return array
  }
  return (
    <>
      {events &&
        events.map((event) => (
          <Marker key={event.id} map={map} position={event.venues.geo}>
            <Button
              onPress={onOpen}
              color="secondary"
              onClick={(e) => setSelected(event)}
            >
              {event.name}
            </Button>
          </Marker>
        ))}
      <Modal
        size="5xl"
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="2xl"
        classNames={{
          body: 'py-6',
          backdrop: 'bg-[#292f46]/50 backdrop-opacity-40',
          base: 'border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]',
          header: 'border-b-[1px] border-[#292f46]',
          footer: 'border-t-[1px] border-[#292f46]',
          closeButton: 'hover:bg-white/5 active:bg-white/10',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <div>
                  <div className="flex flex-row">
                    <div className=" h-1/2 w-1/2 ">
                      <Image
                        className="foto2 object-cover object-center  sm:rounded-lg"
                        src={selected && selected.images[0]}
                        width={1000}
                        height={667}
                        alt="Picture of the author"
                        loading="lazy"
                      />
                    </div>

                    <div>
            
                   
                     
                      <div className="mt-5 px-5 lg:px-10 ">
                      <p className="text-xl font-semibold tracking-tight text-pink-100">
                          {selected && selected.vip === true
                            ? 'VIP Access Event '
                            : 'Regular Access Event'}
                        </p>
                        <h1 className="font-display text-5xl  tracking-tight text-pink-300 lg:text-7xl">
                          {selected && selected.name}
                        </h1>
                        <div className="mt-3">
                          <p className="text-xl font-semibold tracking-tight text-pink-100">
                            {selected && selected.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="space-y-6 text-xl text-pink-100" />
                    {selected && selected.description}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                  onPress={onClose}
                >
                  See Event
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
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
  }, [position])

  useEffect(() => {
    rootRef.current.render(children)
    markerRef.current.position = position
    markerRef.current.map = map
    const listener = markerRef.current.addListener('click', onClick)
    return () => listener.remove()
  }, [map, position, children, onClick])
}
