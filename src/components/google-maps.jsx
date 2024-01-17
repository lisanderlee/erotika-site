'use client'
import React from 'react'
import { Wrapper } from '@googlemaps/react-wrapper'
import Image from 'next/image'
import { useRef, useEffect, useState, useCallback } from 'react'
import { createRoot } from 'react-dom/client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { BsLink45Deg } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
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

      const { data, error } = await supabase.from('eventos').select(`
      *`)

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
  center: { lat: 25.788000, lng: -80.18021 },
  zoom: 14,
  disableDefaultUI: false,
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
          <Marker key={event.id} map={map} position={event.geo}>
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
              <ModalHeader className="flex flex-col gap-1 "></ModalHeader>
              <ModalBody>
                <div>
                  <div className="flex  flex-col lg:flex-row">
                    <div className="   ">
                      <Image
                        className=" object-cover object-center  "
                        src={selected && selected.images[0]}
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        loading="lazy"
                      />
                    </div>

                    <div>



                      <div className="mt-5 px-0 lg:px-5  ">

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
                <div className=" flex flex-row mt-3 items-center">
                  <div className="">
                    <a
                      target="_blank"
                      className="  hover:text-gray-600 text-gray-400"
                      href={selected && selected.instagram}
                    >
                      <BsInstagram size={24} />
                    </a>
                  </div>
                  <div className="ml-5">
                    <a
                      target="_blank"
                      className="text-gray-400  hover:text-gray-600"
                      href={selected && selected.link}
                    >
                      <BsLink45Deg size={24} />
                    </a>
                  </div>
                </div>
                <div className=" mt-5 flex flex-col  text-left lg:flex-row">
                  <div className="flex flex-col lg:flex-row">
                    <h4 className="flex-none  font-semibold  text-pink-300">
                      Date:
                    </h4>
                    <h4 className="lg:ml-3 flex-none font-normal text-pink-100">
                      {selected && selected.date}
                    </h4>
                  </div>
                  <div className="flex flex-col lg:ml-10 ml-0 lg:flex-row mt-3 lg:mt-0">
                    <h4 className="mt-1 flex-none font-semibold text-pink-300 lg:mt-0">
                      Location:
                    </h4>
                    <h4 className="lg:ml-3 mt-1 w-40  flex-none font-normal text-pink-100  lg:mt-0 lg:w-full">
                      {selected && selected.location}
                    </h4>
                  </div>



                </div>
              </ModalBody>
              <ModalFooter>

                <Button color="foreground" variant="light" onPress={onClose}>
                  Close
                </Button>
                <a href="/events">
                  <Button
                    className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                    onPress={onClose}

                  >

                    See All Event
                  </Button>
                </a>
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
