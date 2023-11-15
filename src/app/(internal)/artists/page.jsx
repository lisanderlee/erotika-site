'use client'
import { ArtistsItem } from '@/components/artist-item'
import Link from 'next/link'
import artists from '@/artists.json'
import { motion } from 'framer-motion'
import { Suspense } from 'react'
import { GetTicketCta } from '@/components/get-ticket-cta'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const supabase = createClientComponentClient()
  const [artists, setArtists] = useState(null)
  const [loading, setLoading] = useState(null)

  const getArtists = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error } = await supabase.from('artists_table').select(`
      *, artist_category (category)`)

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

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  lg:mx-0">
          <h2 className="font-display text-pink-300 sm:text-4xl lg:text-7xl">
            Artists
          </h2>
        </div>
        <Suspense>
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3"
          >
            {artists &&
              artists.map((artist, index) => (
                <Link key={artist.id} href={`/artists/${artist.id}`}>
                  <motion.li
                    variants={sectionVariants}
                    initial="initial"
                    whileInView="animate"
                    key={artist.Id}
                    className="mx-auto max-w-xl px-5"
                    custom={index}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <ArtistsItem
                      image={artist.profile[0]}
                      name={artist.name + ' ' + artist.last}
                      location={artist.location}
                      category={artist.artist_category.category}
                    />
                  </motion.li>
                </Link>
              ))}
          </ul>
        </Suspense>
      </div>
      {/* <GetTicketCta /> */}
    </div>
  )
}
