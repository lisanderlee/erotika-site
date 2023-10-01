import { Button } from './Button'
import { ArtistsItem } from '@/components/ArtistItem'
import Link from 'next/link'
import artists from '@/artists.json'
import { Suspense } from 'react'
export default function Artists() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Artists
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {artists.slice(0, 8).map((artist) => (
            <Link key={artist.Id} href={`/artists/${artist.Id}`}>
              <ArtistsItem
                key={artist.Id}
                image={artist.Images[0].url}
                name={artist.Name + ' ' + artist.LastName}
                location={artist.Nationality}
                role={artist.Category}
              />
            </Link>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <Button href="/artists" color="blue" className="mt-5">
            <span>See all</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
