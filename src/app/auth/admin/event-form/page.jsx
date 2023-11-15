'use client'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Datepicker } from 'flowbite-react'
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ToastContainer, toast } from 'react-toastify'
import UploadFileWidget from '@/components/upload-file-widget'
import { Switch } from '@headlessui/react'
import { Loading } from '@/components/Loading'
import clsx from 'clsx'
export default function EventForm() {
  const supabase = createClientComponentClient()
  const [contactName, setContactName] = useState(null)
  const [contactNumber, setContactNumber] = useState(null)
  const [eventName, setEventName] = useState(null)
  const [timeStart, setTimeStart] = useState(null)
  const [description, setDescription] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [category, setCategory] = useState(null)
  const [venue, setVenue] = useState(null)
  const [vip, setVip] = useState(false)
  const [payed, setPayed] = useState(false)
  const [rsvp, setRsvp] = useState(false)
  const [categoryList, setCategoryList] = useState(null)
  const [venuesList, setVenuesList] = useState(null)
  const [loading, setLoading] = useState(null)
  const [imagesToUpload, setImagesToUpload] = useState(null)

  const getCategories = useCallback(async () => {
    try {
      const { data, error, status } = await supabase
        .from('event_category')
        .select()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setCategoryList(data)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
    }
  }, [supabase])

  const getVenues = useCallback(async () => {
    try {
      const { data, error, status } = await supabase.from('venues').select()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setVenuesList(data)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
    }
  }, [supabase])

  useEffect(() => {
    getVenues()
    getCategories()
  }, [getCategories, getVenues])

  async function insertEvent() {
    try {
      setLoading(true)
      const { data, error } = await supabase.from('events_table').insert({
        contact: contactName,
        phone: contactNumber,
        name: eventName,
        time: timeStart,
        category: category,
        venue: venue,
        start: startDate,
        end: endDate,
        description: description,
        vip: vip,
        rsvp: rsvp,
        payed: payed,
        images: imagesToUpload,
      })

      if (error) throw error
      toast.success('🦄 Event Added!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    insertEvent()
    setContactName(null)
    setContactNumber(null)
    setEventName(null)
    setTimeStart(null)
    setDescription(null)
    setStartDate(null)
    setEndDate(null)
    setCategory(null)
    setVenue(null)
    setVip(false)
    setPayed(false)
    setRsvp(false)
    setImagesToUpload(null)
  }

  return (
    <>
    <form className="px-16">
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white">
            Event Information
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Event Contact Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="event-contact"
                  id="event-contact"
                  value={contactName || ''}
                  onChange={(e) => setContactName(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Event Contact Phone
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="event-number"
                  id="event-number"
                  value={contactNumber || ''}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Event name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="event-name"
                  id="event-name"
                  value={eventName || ''}
                  onChange={(e) => setEventName(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-white"
              >
                Venue
              </label>
              <div className="mt-2">
                <select
                  id="venue"
                  name="venue"
                  onChange={(e) => setVenue(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                >
                  {venuesList?.map((venue) => (
                    <option key={venue.id} value={venue.id}>
                      {venue.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-white"
              >
                Category
              </label>
              <div className="mt-2">
                <select
                  id="category"
                  name="category"
                  onChange={(e) => setCategory(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                >
                  {categoryList?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.event_category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Time
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  onChange={(e) => setTimeStart(e.target.value)}
                  type="time"
                  id="appt"
                  name="appt"
                  min="09:00"
                  max="18:00"
                  required
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Start Date
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  onChange={(e) => setStartDate(e.target.value)}
                  type="date"
                  id="start"
                  name="event-start"
                  min="2024-01-01"
                  max="2024-05-31"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                End Date
              </label>
              <div className="mt-2">
                <input
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  onChange={(e) => setEndDate(e.target.value)}
                  type="date"
                  id="end"
                  name="event-end"
                  min="2024-01-01"
                  max="2024-05-31"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-white"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  value={description || ''}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Write a few sentences about yourself.
              </p>
            </div>

            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-white"
            >
              VIP
            </label>
            <Switch
              checked={vip}
              onChange={setVip}
              className={clsx(
                vip ? 'bg-indigo-600' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',
              )}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={clsx(
                  vip ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                )}
              />
            </Switch>
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-white"
            >
              Payed
            </label>
            <Switch
              checked={payed}
              onChange={setPayed}
              className={clsx(
                payed ? 'bg-indigo-600' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',
              )}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={clsx(
                  payed ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                )}
              />
            </Switch>
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-white"
            >
              Rsvp
            </label>
            <Switch
              checked={rsvp}
              onChange={setRsvp}
              className={clsx(
                rsvp ? 'bg-indigo-600' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',
              )}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={clsx(
                  rsvp ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                )}
              />
            </Switch>
          </div>
          <div className="mt-10">
            <UploadFileWidget setImagesToUpload={setImagesToUpload} imagesToUpload={imagesToUpload}/>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Save'}
        </button>
      </div>
    </form>

 
      </>
  )
}
