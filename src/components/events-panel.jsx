'use client'
import useStore from './store'
import React, { useState, useCallback, useEffect } from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function EventsPanel() {
  const supabase = createClientComponentClient()
  const [events, setEvents] = useState(null)
  const [loading, setLoading] = useState(null)
  const selected = useStore((state) => state.selected)
  // const [selectedKeys, setSelectedKeys] = React.useState(new Set(selected))
console.log(typeof(selected))
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
      <div className=" m-5  w-96 rounded-xl bg-slate-900">
        <div className=" text-white">{console.log(typeof(selected))}</div>
        <Accordion selectedKeys={[{selected}]} className="w-96">
          {events &&
            events.map((event) => (
              <AccordionItem
                key={event.id}
                aria-label="Accordion 3"
                title={event.name}
                className="max-w-lg"
              >
                {event.description}
              </AccordionItem>
            ))}
        </Accordion>
      </div>
    </>
  )
}
