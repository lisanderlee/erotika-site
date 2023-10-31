import { Button } from './Button'
import Link from 'next/link'
import Image from 'next/image'
export function EventItem({
  key,
  id,
  title,
  image,
  description,
  venueName,
  location,
  StartDate,
  EndDate,
  tier,
  payed,
}) {
  return (
    <>
      <div className="mx-auto  max-w-7xl px-6 lg:px-8">
        <li key={key}>
          <div className="mx-auto   max-w-2xl  rounded-3xl  bg-violet-200 ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            
            
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-xs lg:flex-shrink-0">
              <Image
                className="aspect-[3/3] w-full rounded-2xl object-cover"
                src={image}
                width={300}
                height={300}
                alt="Picture of the author"
                loading="lazy"
              />
            </div>

            <div className="place-content-between flex p-8  sm:p-10 sm:flex-col lg:flex-auto lg:flex-col">
              <div>
                <h3 className="text-3xl font-extrabold tracking-tight text-violet-900">
                  {title}
                </h3>
              </div>

              <div className="flex">
                <p className="text-base leading-7 text-gray-600">
                  {description}
                </p>
              </div>

              <div className=" mt-5 flex  flex-row">
                <div className=" text-left sm:flex-col lg:flex-col">
                  <div className="flex flex-row">
                    <h4 className="flex-none text-sm font-semibold  text-violet-600">
                      Start Date: <span></span>
                    </h4>
                    <h4 className="flex-none text-sm ml-2 font-normal text-gray-600">
                      {StartDate}
                    </h4>
                  </div>
                  <div className="flex flex-row">
                    <h4 className="flex-none text-sm font-semibold  text-violet-600">
                      End Date:
                    </h4>
                    <h4 className="flex-none ml-2 text-sm font-normal text-gray-600">
                      {EndDate}
                    </h4>
                  </div>

                  <div className="flex flex-row">
                    <h4 className="flex-none text-sm  font-semibold text-violet-600">
                      Tier:
                    </h4>
                    <h4 className="flex-none ml-2  text-sm font-normal text-gray-600">
                      {tier}
                    </h4>
                  </div>

                  <div className="flex flex-row">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-violet-600">
                      Payed:
                    </h4>
                    <h4 className="flex-none text-sm font-semibold leading-6  text-gray-600">
                      $$$
                    </h4>
                  </div>
                </div>

                <div className=" ml-16 text-left sm:flex-col lg:flex-col">
                  <div className="flex flex-row">
                    <h4 className="flex-none text-sm font-semibold text-violet-600">
                      Venue:
                    </h4>
                    <h4 className="flex-none text-sm font-normal text-gray-600">
                      {venueName}
                    </h4>
                  </div>
                  <div className="flex flex-row">
                    <h4 className="flex-none text-sm font-semibold text-violet-600">
                      Location:
                    </h4>
                    <h4 className="flex-none text-sm font-normal text-gray-600">
                      {location}
                    </h4>
                  </div>
                </div>


              </div>

              <div className=" flex justify-end">
                <Link key={key} href={`/events/${id}`}>
                  <Button color="violet" >
                    <span>Learn More</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </li>
      </div>
    </>
  )
}
