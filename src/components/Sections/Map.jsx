import bodyImage from '@/images/body.svg'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { EventItem } from '@/components/event-item'
import GoogleMaps from '../google-maps'
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function Map() {
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
    <>
      <div className="mt-20 flex h-screen w-screen flex-col gap-y-5 px-5 pb-20 pt-10 md:px-10 lg:mt-40   lg:flex-row  lg:gap-x-10 lg:px-14">
        <div className="h-96 flex-1 basis-2/3 overflow-hidden  lg:h-full">
          <div className="flex w-full  justify-end">
            <p className=" mb-2 text-xs ">
              *select an event to see more information
            </p>
          </div>
          <GoogleMaps />
        </div>

        {/* <div className="hidden h-full basis-1/3 flex-col  gap-y-10 lg:flex  lg:flex-1 ">
          <p className=" font-display tracking-tight text-pink-300	 sm:text-xl lg:text-2xl ">
            VIP Featured Events
          </p>

          <ul role="list" className="flex h-full flex-col gap-y-5">
            {events &&
              events.slice(0, 3).map((event, index) => (
                <Link key={event.EventId} href={`/events/${event.id}`}>
                  <motion.li
                    variants={sectionVariants}
                    initial="initial"
                    whileInView="animate"
                    key={event.EventId}
                    className="flex flex-col"
                    custom={index}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <div className="  leading-5 font-display text-pink-300 text-xl  justify-center items-center flex  bg-[#5E18EA] p-8 lg:p-5 ">
                      {event.name}
                    </div>
                  </motion.li>
                </Link>
              ))}
          </ul>
        </div> */}
      </div>
    </>
  )
}
