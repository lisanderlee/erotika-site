'use client'
import { EventItem } from '@/components/event-item'
import Link from 'next/link'
import events from '@/events.json'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function Home() {
  const supabase = createClientComponentClient()
  const [events, setEvents] = useState(null)
  const [loading, setLoading] = useState(null)

  const getEvents = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error } = await supabase.from('events_table').select(`
        *`)
      console.log(data)

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

  const sectionVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.4,
        damping: 10,
        delay: 0.05 * index,
      },
    }),
  }

  return (
    <div className="mb-20 px-5 pt-5 md:px-10 lg:px-14">
    
      <div className="mx-auto lg:mx-0">
        <h2 className="my-10 font-display text-5xl text-pink-300 lg:mb-0 lg:text-7xl ">
          Events
        </h2>
      </div>

      <ul
        role="list"
        className="mx-auto grid max-w-2xl  grid-cols-1 gap-x-8 gap-y-14  lg:gap-y-0 sm:grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3"
      >
        {events &&
          events.map((event, index) => (
            <Link key={event.EventId} href={`/events/${event.id}`}>
              <motion.li
                variants={sectionVariants}
                initial="initial"
                whileInView="animate"
                key={event.EventId}
                className="mx-auto max-w-xl"
                custom={index}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <EventItem
                  id={event.id}
                  title={event.name}
                  image={event.images[0]}
                  description={event.description}
                />
              </motion.li>
            </Link>
          ))}
      </ul>
    </div>
  )
}
