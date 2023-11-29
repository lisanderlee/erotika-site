'use client'
import { EventItem } from '@/components/event-item'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button } from '../Button'

export default function Events() {
  const supabase = createClientComponentClient()
  const [events, setEvents] = useState(null)
  const [loading, setLoading] = useState(null)

  const getEvents = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error } = await supabase.from('events_table').select(`
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
  const sectionVariant2 = {
    offscreen: {
      y: 50,
    },
    onscreen: {
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.4,
        damping: 10,
      },
    },
  }
  return (
    <>
      <div className="my-36 px-5 pt-5 md:px-10 lg:px-14">
        <motion.div
          variants={sectionVariant2}
          initial="offscreen"
          whileInView="onscreen"
        >
          <section class="b-section shadow-3xl overflow-y-hidden rounded-2xl ">
            <div class="b-section-marquee-box   overflow-y-hidden rounded-2xl   ">
              <h2 class=" overflow-y-hidden py-5 font-display text-4xl text-pink-300">
                Events included with your VIP ticket • Events included with your
                VIP ticket • Events included with your VIP ticket • Events
                included with your VIP ticket • Events included with your VIP
                ticket • Events included with your VIP ticket •
              </h2>
            </div>
          </section>
        </motion.div>

        <ul
          role="list"
          className="mx-auto grid max-w-2xl  grid-cols-1 gap-x-8 gap-y-14  sm:grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-0 xl:grid-cols-3"
        >
          {events &&
            events
              .filter((event) => event.vip === true) // Filtering events where vip is true
              .slice(0, 3) // Taking only the first 3 events after filtering
              .map((event, index) => (
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
        <div className=" mt-20 flex w-full justify-center	">
          <Button color="violet" href="/events">
            See all events
          </Button>
        </div>
      </div>
    </>
  )
}
