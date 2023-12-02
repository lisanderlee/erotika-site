import Image from 'next/image'

export function PartnerItem({
  name,
  image,
  category,
  location,
  description,
  link,
  instagram,
}) {
  return (
    <>
      <div className="mx-auto flex w-full mt-10 flex-col lg:flex-row bg-[#5E18EA] hover:bg-[#5E18EA]/80 ">
        <div className=" ">
          <Image
            className="aspect-square h-full object-cover shadow-xl"
            src={image}
            width={600}
            height={333}
            alt="Picture of the author"
            loading="lazy"
          />
        </div>
        <div className="flex basis-2/4 justify-end flex-col px-5 py-8 lg:p-14">
          <h3 className=" font-display text-6xl  tracking-tight text-pink-300">
            {name}
          </h3>
          <p className="mt-5 text-lg font-bold leading-7 text-pink-100">
            {category + ' - ' + location}
          </p>
          <p className="mt-5 text-lg leading-6 text-pink-100">{description}</p>
          <div className="mt-5 flex flex-row">
            <a
            target='_blank'
              href={link}
              className="group inline-flex flex-none items-center justify-center rounded-full bg-pink-300 px-8 py-2 text-base font-semibold text-[#5E18EA] hover:bg-pink-200 hover:text-[#5E18EA] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-pink-400 active:text-violet-100"
            >
              Website
            </a>
            <a
            target='_blank'
              href={instagram}
              className="group ml-5 inline-flex flex-none items-center justify-center rounded-full bg-pink-300 px-8 py-2 text-base font-semibold text-[#5E18EA] hover:bg-pink-200 hover:text-[#5E18EA] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-pink-400 active:text-violet-100"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
