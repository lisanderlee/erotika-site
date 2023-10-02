import Image from 'next/image'
export function ArtistsItem({ key, name, image, role, location }) {
  return (
    <>
      <li key={key}>
        <Image
          className="aspect-[14/13] w-full rounded-2xl object-cover"
          src={image}
          width={500}
          height={500}
          alt="Picture of the author"
          loading = 'lazy'
        />
        <h3 className="mt-6 text-xl leading-7 font-semibold tracking-tight text-pink-300">
          {name}
        </h3>
        <p className="text-base leading-7 text-pink-100">{role}</p>
        <p className="text-sm leading-6 text-pink-100">{location}</p>
      </li>
    </>
  )
}
