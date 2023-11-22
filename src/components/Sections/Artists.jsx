'use client'
import { Suspense } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '../Button'
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

export default function Artists() {
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
      <div className="mx-auto flex w-full mt-20  flex-col items-center px-5 md:px-10 lg:px-14">
        <div className="mx-auto">
          <ul
            role="list"
            className="mx-auto grid  grid-cols-1 gap-x-14  gap-y-10 lg:gap-y-0 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3"
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
        <div className=" flex w-full mt-10 justify-center	">
        <a
            target="_blank"
            href="https://docs.google.com/forms/d/17U4nQC4NmQDeHGe1eUN-5DqL2fSSxeINtgz1pQ5_oLk/viewform?edit_requested=true"
            className="' group  mr-5 mt-10 inline-flex items-center justify-center rounded-full bg-violet-600 px-8 py-4 text-sm font-semibold text-white hover:bg-violet-400 hover:text-slate-100 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-violet-800 active:text-violet-100 lg:text-lg"
          >
            See all artists
          </a>
        </div>
      </div>
    </>
  )
}
