'use client'
import { Suspense } from 'react'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../Button'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { PartnerItem } from '../partner-item'


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
            <h2 className=" overflow-y-hidden py-5 font-display text-8xl text-pink-300">
              Our Partners •  Our Partners •  Our Partners •  Our Partners •  Our Partners •  Our Partners •  Our Partners •  Our Partners •  Our Partners •  Our Partners •  Our Partners • 
            </h2>
          </div>
        </section>
        </motion.div>

        <ul
          role="list"
          className="mx-auto"
        >
          {artists &&
            artists
              .filter((artist) => artist.partner === true) // Filtering events where vip is true
              .slice(0, 6) // Taking only the first 3 events after filtering
              .map((artist, index) => (
   
                <motion.li
                  variants={sectionVariants}
                  initial="initial"
                  whileInView="animate"
                  key={artist.Id}
            
                  custom={index}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                >
                  <PartnerItem
                    image={artist.profile[0]}
                    name={artist.name }
                    location={artist.location}
                    category={artist.category}
                    link={artist.link}
                    instagram={artist.instagram}
                    description={artist.description}
                  />
                </motion.li>
      
            ))}
        </ul>
        {/* <div className="mt-20  flex w-full justify-center	">
   <Button color="violet" href="/partners">
    See all partners
   </Button>
      </div> */}
      </div>
   
    </>
  )
}
