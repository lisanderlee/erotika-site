import Image from 'next/image'

export function ArtistsItem({name, image, category, location }) {
  return (
    <>
      <div className="mx-auto flex flex-col  bg-[#5E18EA] hover:bg-[#5E18EA]/80  sm:mt-20">
        <Image
          className="aspect-[14/13] w-full shadow-xl  object-cover"
          src={image}
          width={1000}
          height={667}
          alt="Picture of the author"
          loading="lazy"
        />
        <div className="p-5">
          <h3 className=" font-display text-xl leading-7 tracking-tight text-pink-300">
            {name}
          </h3>
          <p className="text-base leading-7 text-pink-100">{category}</p>
          <p className="text-sm leading-6 text-pink-100">{location}</p>
        </div>
      </div>
    </>
  )
}
