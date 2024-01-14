'use client'
import { EventItem } from '@/components/event-item'
import Link from 'next/link'
import CTATicket from '@/components/Sections/CTA-ticket'
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

      const { data, error } = await supabase.from('eventos').select(`
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
    <div className="mb-20 px-5 pt-5 md:px-10 lg:mt-28 lg:px-14">
      <section class="b-section  mt-10 overflow-y-hidden ">
        <div class="b-section-marquee-box   overflow-y-hidden ">
          <h2 class=" overflow-y-hidden py-5 font-display text-8xl text-pink-300">
            Events •  Events •  Events •  Events •  Events •  Events •  Events •  Events •  Events •  Events •  Events •  Events •  Events •  Events •  Events •  Events •  Events •  Events •  Events •  Events •  Events •  Events •  Events • 
          </h2>
        </div>
      </section>

      <ul
        role="list"
        className="mx-auto grid max-w-2xl  grid-cols-1 gap-x-8 gap-y-14  sm:grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-0 xl:grid-cols-3"
      >
          {events &&
            [...events]  // Create a new array using the spread operator
            .sort((a, b) => a.order - b.order)  
              .map((event, index) => (
            <Link key={event.id} href={`/events/${event.id}`}>
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
                  category={event.category}
                  date={event.date}
                />
              </motion.li>
            </Link>
          ))}
      </ul>

   
   
    </div>
    <CTATicket />
    </>
  )
}
