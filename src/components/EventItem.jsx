import { Button } from './Button'
import Link from 'next/link'
export function EventItem({
  key,
  id,
  title,
  location,
  tier,
  description,
  image,
  date,
  payed,
}) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <li key={key}>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-white ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-xs lg:flex-shrink-0">
              <img
                className="aspect-[3/3] w-full rounded-2xl object-cover"
                src={image}
                alt=""
              />
            </div>

            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                {title}
              </h3>
              <p className="text-base leading-7 text-gray-600">{description}</p>
              <div className="sm: mt-10 flex items-center gap-x-1 text-left sm:flex-col lg:flex-row">
                <h4 className="ml-3 flex-none text-sm font-semibold leading-6 text-indigo-600">
                  Location:
                </h4>
                <h4 className="flex-none text-sm font-semibold leading-6 text-gray-600">
                  {location}
                </h4>
                <h4 className="ml-3 flex-none text-sm font-semibold leading-6 text-indigo-600">
                  Date:
                </h4>
                <h4 className="flex-none text-sm font-semibold leading-6 text-gray-600">
                  {date}
                </h4>
                <h4 className="ml-3 flex-none text-sm font-semibold leading-6 text-indigo-600">
                  Tier:
                </h4>
                <h4 className="flex-none text-sm font-semibold leading-6  text-gray-600">
                  {tier}
                </h4>
                <h4 className="ml-3 flex-none text-sm font-semibold leading-6 text-indigo-600">
                  Payed:
                </h4>
                <h4 className="flex-none text-sm font-semibold leading-6  text-gray-600">
                  {payed}
                </h4>
              </div>
              <div className="mt-10 flex justify-end">
                <Link key={key} href={`/events/${id}`}>
                  <Button color="blue" className="mt-5">
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
