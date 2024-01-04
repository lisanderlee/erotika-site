'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState, useEffect, useCallback } from 'react'
import ImageUploadComponent from '@/components/upload-file-widget'
import clsx from 'clsx'
import { Switch } from '@headlessui/react'

export default function Page() {
  const supabase = createClientComponentClient()

  const [partner, setPartner] = useState(false)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')
  const [event, setEvent] = useState('')
  const [description, setDescription] = useState('')
  const [portfolio, setPortfolio] = useState('')
  const [instagram, setInstagram] = useState('')

  const [eventsList, setEventsList] = useState(null)

  const [imagePathsUpload, setImagePathsUpload] = useState([])
  const [imageProfilePathsUpload, setImageProfilePathsUpload] = useState([])

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const getEvents = useCallback(async () => {
    try {
      const { data, error, status } = await supabase
        .from('events_table')
        .select()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setEventsList(data)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
    }
  }, [supabase])

  useEffect(() => {
    getEvents()
  }, [ getEvents])

  function validateForm() {
    let errors = {}

  //   if (!name.trim()) {
  //     errors.name = 'Name is required'
  //   }

  //   if (!lastName.trim()) {
  //     errors.lastName = 'Last name is required'
  //   }

  //   if (!phone.trim()) {
  //     errors.phone = 'Phone number is required'
  //   } else if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
  //     errors.phone = 'Invalid phone number, should be 10-15 digits'
  //   }

  //   if (!email) {
  //     errors.email = 'Email is required'
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     errors.email = 'Email address is invalid'
  //   }

  //   if (!location.trim()) {
  //     errors.location = 'Location is required'
  //   }

  //   if (!category) {
  //     errors.category = 'Category is required'
  //   }

  //   if (!event) {
  //     errors.event = 'Event is required'
  //   }

  //   if (!description.trim()) {
  //     errors.description = 'Description is required'
  //   }

  //   if (!portfolio.trim()) {
  //     errors.portfolio = 'Portfolio link is required'
  //   }

  //   if (!instagram.trim()) {
  //     errors.instagram = 'Instagram link is required'
  //   }

    // if (!imagesToUpload) {
    //   errors.imagesToUpload = 'Images are required'
    // }
    // if (!profileImagesToUpload) {
    //   errors.profileImagesToUpload = 'Image is required'
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
        const { data, error } = await supabase.from('artists_table').insert({
          partner: partner,
          name: name,
          last: lastName,
          phone: phone,
          email: email,
          location: location,
          category: category,
          event: event,
          description: description,
          instagram: instagram,
          link: portfolio,
          images: imagePathsUpload,
          profile: imageProfilePathsUpload,
        })
        if (error) throw error
      } catch (error) {
        alert('Error updating the data!')
      } finally {
        setPartner(false)
        setName('')
        setLastName('')
        setPhone('')
        setEmail('')
        setLocation('')
        setCategory('')
        setEvent('')
        setDescription('')
        setPortfolio('')
        setInstagram('')
        setImageProfilePathsUpload([])
        setImagePathsUpload([])
        setLoading(false)
        alert('Success')
      }
    } else {
      // Set errors state to display validation messages
      setErrors(formErrors)
    }
  }

  return (
    <form className="px-16" onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white">
            Artists
          </h2>

          <label
            htmlFor="about"
            className="mt-10 block text-sm  font-medium leading-6 text-white"
          >
            Partner
          </label>
          <Switch
            checked={partner}
            onChange={setPartner}
            className={clsx(
              partner ? 'bg-indigo-600' : 'bg-gray-200',
              'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',
            )}
          >
            <span className="sr-only">Partner</span>
            <span
              aria-hidden="true"
              className={clsx(
                partner ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
              )}
            />
          </Switch>
          {errors.partner && (
            <p className="text-sm text-red-500">{errors.partner}</p>
          )}
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="number"
                  id="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
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
                  name="location"
                  id="location"
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
                Location
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {errors.location && (
                  <p className="text-sm text-red-500">{errors.location}</p>
                )}
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
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-white"
              >
                Event
              </label>
              <div className="mt-2">
                <select
                  id="venue"
                  name="venue"
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                >
                  <option></option>
                  {eventsList?.map((event) => (
                    <option key={event.id} value={event.id}>
                      {event.name}
                    </option>
                  ))}
                </select>
              </div>
              {errors.event && (
                <p className="text-sm text-red-500">{errors.event}</p>
              )}
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
                  id="about"
                  name="about"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
                {errors.description && (
                  <p className="text-sm text-red-500">{errors.description}</p>
                )}
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Write a few sentences about the artist.
              </p>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Portfolio Link
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setPortfolio(e.target.value)}
                  type="text"
                  name="portfolio"
                  id="portfolio"
                  value={portfolio}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {errors.portfolio && (
                  <p className="text-sm text-red-500">{errors.portfolio}</p>
                )}
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-white"
              >
                Instagram Link
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="instagram"
                  id="instagram"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {errors.instagram && (
                  <p className="text-sm text-red-500">{errors.instagram}</p>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <label
              htmlFor="first-name"
              className="mb-4 block text-sm font-medium leading-6 text-white"
            >
              Profile Image
            </label>
            <ImageUploadComponent
              setImagePathsUpload={setImageProfilePathsUpload}
            />
          </div>
          <div className="mt-10">
            <label
              htmlFor="first-name"
              className="mb-4 block text-sm font-medium leading-6 text-white"
            >
              Artist Work Images
            </label>
            <ImageUploadComponent setImagePathsUpload={setImagePathsUpload} />

            {errors.imagesToUpload && (
              <p className="text-sm text-red-500">{errors.imagesToUpload}</p>
            )}
          </div>
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
  )
}
