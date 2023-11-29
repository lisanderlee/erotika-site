'use client'
import { Suspense } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '../Button'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ArtistsItem } from '@/components/artist-item'
import Link from 'next/link'
import { motion } from 'framer-motion'


export default function Partners() {
  const supabase = createClientComponentClient()
  const [artists, setArtists] = useState(null)
  const [loading, setLoading] = useState(null)

  const getArtists = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error } = await supabase.from('artists_table').select(`
      *`)

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setArtists(data)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [supabase])

  useEffect(() => {
    getArtists()
  }, [getArtists])

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
        <section className="b-section rounded-2xl  overflow-y-hidden ">
          <div className="b-section-marquee-box   overflow-y-hidden rounded-2xl]">
            <h2 className=" overflow-y-hidden py-5 font-display text-4xl text-pink-300">
              Partners • Partners • Partners • Partners • Partners • Partners • Partners • Partners • Partners • Partners • Partners • Partners • Partners • Partners • Partners • 
            </h2>
          </div>
        </section>
        </motion.div>

        <ul
          role="list"
          className="mx-auto grid max-w-2xl  grid-cols-1 gap-x-8 gap-y-14  sm:grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-0 xl:grid-cols-3"
        >
          {artists &&
            artists
              .filter((artist) => artist.partner === true) // Filtering events where vip is true
              .slice(0, 6) // Taking only the first 3 events after filtering
              .map((artist, index) => (
              <Link key={artist.id} href={`/artists/${artist.id}`}>
                <motion.li
                  variants={sectionVariants}
                  initial="initial"
                  whileInView="animate"
                  key={artist.Id}
                  className="mx-auto max-w-xl"
                  custom={index}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <ArtistsItem
                    image={artist.profile[0]}
                    name={artist.name + ' ' + artist.last}
                    location={artist.location}
                    category={artist.category}
                  />
                </motion.li>
              </Link>
            ))}
        </ul>
        <div className="mt-20  flex w-full justify-center	">
   <Button color="violet" href="/partners">
    See all partners
   </Button>
      </div>
      </div>
   
    </>
  )
}
