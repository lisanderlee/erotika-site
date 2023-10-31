import { ArtistsItem } from '@/components/ArtistItem'
import Link from 'next/link'
import artists from '@/artists.json'

export default function Home() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  lg:mx-0">
          <h2 className="font-bold text-pink-300 sm:text-4xl lg:text-7xl">
            Artists
          </h2>
          <p className="mt-3 text-4xl  leading-tight text-pink-100">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {artists.map((artist) => (
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
      </div>
    </div>
  )
}
