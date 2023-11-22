'use client'
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/20/solid'
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import { Suspense } from 'react'
import Loading from '@/app/(internal)/loading'
export default function EventsTable() {
  const supabase = createClientComponentClient()
  const [events, setEvents] = useState(null)
  const [loading, setLoading] = useState(null)

  const getEvents = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error } = await supabase.from('events_table').select(`
      *,
      venues (
        name
      ),
      event_category(
        event_category
      )
    `)

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setEvents(data)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [supabase])

  useEffect(() => {
    getEvents()
  }, [getEvents])

  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-3xl font-bold leading-6 text-pink-300">
                  Events
                </h1>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <a
                  href="/auth/admin/events/event-form"
                  type="button"
                  className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Add event
                </a>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Venue
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Date Start
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Date End
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {events &&
                        events.map((event) => (
                          <tr key={event.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                              {event.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {event.event_category.event_category}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {event.venues.name}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {event.start}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                              {event.end}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                              <span className="isolate inline-flex rounded-md shadow-sm">
                                <Link
                                  href={`/auth/admin/events/event-form-view/${event.id}`}
                                  className="relative inline-flex items-center rounded-l-md bg-slate-950  px-3 py-2 text-sm font-semibold text-gray-300  hover:bg-slate-700 focus:z-10"
                                >
                                  <EyeIcon
                                    className="-ml-0.5 mr-1.5 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </Link>
                                <Link
                                  className="relative -ml-px inline-flex items-center bg-slate-950 px-3 py-2 text-sm font-semibold text-gray-300  hover:bg-slate-700 focus:z-10"
                                  href={`/auth/admin/events/event-form-edit/${event.id}`}
                                >
                                  <PencilIcon
                                    className="-ml-0.5 mr-1.5 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </Link>
                                <Link
                                  href={`/auth/admin/events/artist-form-edit/${event.id}`}
                                  className="relative -ml-px inline-flex items-center rounded-r-md  bg-slate-950 px-3 py-2 text-sm font-semibold text-gray-300  hover:bg-slate-700 focus:z-10"
                                >
                                  <TrashIcon
                                    className="-ml-0.5 mr-1.5 h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
