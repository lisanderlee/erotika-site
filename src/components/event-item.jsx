import Image from 'next/image'

export function EventItem({ id, title, image, description, StartDate, date, category }) {
  return (
    <>
      <div className="mx-auto flex h-5/6  flex-col   bg-[#5E18EA] hover:bg-[#5E18EA]/80 sm:mt-20">
        <Image
          className=" aspect-[14/13] w-full  object-cover shadow-xl"
          src={image}
          width={1000}
          height={667}
          alt="Picture of the author"
          loading="lazy"
        />

        <div className="flex flex-col p-5 sm:flex-col  lg:flex-col  lg:p-7">
         
          <div>
            <h3 className="line-clamp-1  font-display text-3xl tracking-tight text-pink-300">
              {title}
            </h3>
          </div>
          <div>
            <h3 className="line-clamp-1  font-display text-lg tracking-tight text-white">
              {category}
            </h3>
          </div>
          <div>
            <p className="line-clamp-1   font-medium text-lg tracking-tight text-white">
              {date}
            </p>
          </div>
          <div className="mt-2 flex">
            <p className="line-clamp-3  text-base leading-7 text-pink-100">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
