'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ToastContainer, toast } from 'react-toastify'
import { Switch } from '@headlessui/react'
import ImageUploadComponent from '@/components/upload-file-widget'
import clsx from 'clsx'

export default function EventForm() {
  const supabase = createClientComponentClient()

  const [contactName, setContactName] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [eventName, setEventName] = useState('')
  const [timeStart, setTimeStart] = useState('')
  const [description, setDescription] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [category, setCategory] = useState('')
  const [venue, setVenue] = useState('')
  const [email, setEmail] = useState('')
  const [vip, setVip] = useState(false)
  const [payed, setPayed] = useState(false)
  const [rsvp, setRsvp] = useState(false)

  const [imagePathsUpload, setImagePathsUpload] = useState([])

  const [venuesList, setVenuesList] = useState(null)

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(null)

  const notify = () => toast('Event Added!')

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
  }, [getVenues])

  function validateForm() {
    let errors = {}

    if (!contactName.trim()) {
      errors.contactName = 'Contact name is required'
    }

    if (!contactNumber.trim()) {
      errors.contactNumber = 'Phone number is required'
    } else if (!/^\d{3}-\d{3}-\d{4}$/.test(contactNumber)) {
      errors.contactNumber = 'Format ***-***-****'
    }

    if (!email) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid'
    }

    if (!eventName.trim()) {
      errors.eventName = 'Event name is required'
    }

    if (!venue) {
      errors.venue = 'Venue is required'
    }

    if (!category.trim()) {
      errors.category = 'Category is required'
    }

    if (!venue.trim()) {
      errors.venue = 'Portfolio link is required'
    }

    if (!timeStart.trim()) {
      errors.timeStart = 'Time start is required'
    }

    if (!startDate.trim()) {
      errors.startDate = 'Start date is required'
    }
    if (!endDate.trim()) {
      errors.endDate = 'End date is required'
    }

    if (!description.trim()) {
      errors.description = 'Description is required'
    }

    // if (!imagePathsUpload) {
    //   errors.imagePathsUpload = 'Images are required'
    // }

    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Start by clearing any existing errors
    setErrors({})

    // Validate the form
    const formErrors = validateForm()

    if (Object.keys(formErrors).length === 0) {
      // No validation errors, proceed with submitting the form
      setLoading(true)

      try {
        const { data, error } = await supabase.from('events_table').insert({
          contact: contactName,
          phone: contactNumber,
          email: email,
          name: eventName,
          venue: venue,
          category: category,
          time: timeStart,
          start: startDate,
          end: endDate,
          description: description,
          vip: vip,
          payed: payed,
          rsvp: rsvp,
          images: imagePathsUpload,
        })
        if (error) throw error
      } catch (error) {
        alert('Error adding the event!')
      } finally {
        setContactName('')
        setContactNumber('')
        setEmail('')
        setEventName('')
        setVenue('')
        setCategory('')
        setTimeStart('')
        setStartDate('')
        setEndDate('')
        setDescription('')
        setVip(false)
        setPayed(false)
        setRsvp(false)
        setImagePathsUpload([])
        alert('Event Added')
        setLoading(false)
        // alert('Success')
      }
    } else {
      // Set errors state to display validation messages
      setErrors(formErrors)
    }
  }

  return (
    <>
      <form className="px-16" onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-white/10 pb-12">
            <h1 className="text-3xl font-bold leading-6 text-pink-300">
              Add Event
            </h1>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Contact Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="event-contact"
                    id="event-contact"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                  {errors.contactName && (
                    <p className="text-sm text-red-500">{errors.contactName}</p>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Contact Phone
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="event-number"
                    id="event-number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                  {errors.contactNumber && (
                    <p className="text-sm text-red-500">
                      {errors.contactNumber}
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  E-mail
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
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
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                  {errors.eventName && (
                    <p className="text-sm text-red-500">{errors.eventName}</p>
                  )}
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
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                  >
                    <option></option>
                    {venuesList?.map((venue) => (
                      <option key={venue.id} value={venue.id}>
                        {venue.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.venue && (
                  <p className="text-sm text-red-500">{errors.venue}</p>
                )}
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Category
                </label>
                <div className="mt-2">
                  <input
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                  />
                </div>
                {errors.category && (
                  <p className="text-sm text-red-500">{errors.category}</p>
                )}
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
                    value={timeStart}
                  />
                  {errors.timeStart && (
                    <p className="text-sm text-red-500">{errors.timeStart}</p>
                  )}
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
                    value={startDate}
                  />
                  {errors.startDate && (
                    <p className="text-sm text-red-500">{errors.startDate}</p>
                  )}
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
                    value={endDate}
                  />
                  {errors.endDate && (
                    <p className="text-sm text-red-500">{errors.endDate}</p>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  {errors.description && (
                    <p className="text-sm text-red-500">{errors.description}</p>
                  )}
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Write a few sentences about the event.
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
              {errors.vip && (
                <p className="text-sm text-red-500">{errors.vip}</p>
              )}

              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-white"
              >
                Paid
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
              {errors.payed && <p className="text-red-500">{errors.payed}</p>}

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
              <ImageUploadComponent setImagePathsUpload={setImagePathsUpload} />
            </div>
            {/* {errors.imagePathsUpload && (
              <p className="text-sm text-red-500">{errors.imagePathsUpload}</p>
            )} */}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-white"
            // Optional: Add onClick handler to clear the form or navigate
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            disabled={loading}
          >
            {loading ? 'Saving ...' : 'Save'}
          </button>
        </div>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}
