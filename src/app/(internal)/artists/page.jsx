'use client'
import { Suspense } from 'react'
import { useCallback, useEffect, useState } from 'react'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ArtistsItem } from '@/components/artist-item'
import Link from 'next/link'
import { motion } from 'framer-motion'

// async function getArtists() {
//   const supabase = createClientComponentClient()
//   const res = await supabase
//     .from('artists_table')
//     .select(`*, artist_category (category)`)
//     console.log(res)

//   return res.data
// }

export default function ArtistsInternal() {
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
    <>
      <div className="mb-20 px-5 pt-5 md:px-10 lg:mt-28 lg:px-14">
        <section className="b-section  mt-10 overflow-y-hidden ">
          <div className="b-section-marquee-box   overflow-y-hidden ">
            <h2 className=" overflow-y-hidden py-5 font-display text-4xl text-pink-300">
              Guest Artists • Guest Artists • Guest Artists • Guest Artists •
              Guest Artists • Guest Artists • Guest Artists • Guest Artists •
              Guest Artists • Guest Artists • Guest Artists • Guest Artists •
              Guest Artists • Guest Artists • Guest Artists • Guest Artists •
              Guest Artists • Guest Artists • Guest Artists • Guest Artists •
              Guest Artists • Guest Artists • Guest Artists • Guest Artists •
            </h2>
          </div>
        </section>

        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14  sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-y-0 xl:grid-cols-3"
        >
          {artists &&
            artists.map((artist, index) => (
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
                    category={artist.artist_category.category}
                  />
                </motion.li>
              </Link>
            ))}
        </ul>
      </div>
      {/* <GetTicketCta /> */}
    </>
  )
}
