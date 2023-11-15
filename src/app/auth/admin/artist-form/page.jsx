'use client'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState, useEffect, useCallback } from 'react'
import UploadFileWidget from '@/components/upload-file-widget'
import UploadProfileWidget from '@/components/upload-profile-widget'

export default function ArtistsForm() {
  const supabase = createClientComponentClient()
  const [name, setName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [phone, setPhone] = useState(false)
  const [location, setLocation] = useState(false)
  const [event, setEvent] = useState(null)
  const [description, setDescription] = useState(null)
  const [category, setCategory] = useState(null)
  const [images, setImages] = useState(null)
  const [portfolio, setPortfolio] = useState(null)
  const [instagram, setInstagram] = useState(null)
  const [email, setEmail] = useState(null)
  const [loading, setLoading] = useState(null)
  const [categoryList, setCategoryList] = useState(null)
  const [eventsList, setEventsList] = useState(null)
  const [imagesToUpload, setImagesToUpload] = useState(null)
  const [profileImagesToUpload, setProfileImagesToUpload] = useState(null)
  const getCategories = useCallback(async () => {
    try {
      const { data, error, status } = await supabase
        .from('artist_category')
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
    getCategories()
    getEvents()
  }, [getCategories, getEvents])

  async function insertArtist() {
    try {
      setLoading(true)
      const { data, error } = await supabase.from('artists_table').insert({
        name: name,
        last: lastName,
        phone: phone,
        category: category,
        event: event,
        description: description,
        instagram: instagram,
        link: portfolio,
        location: location,
        images: imagesToUpload,
        profile: profileImagesToUpload,
        email:email,
      
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
    insertArtist()
    setName(null)
    setLastName(null)
    setPhone(null)
    setLocation(null)
    setCategory(null)
    setEvent(null)
    setDescription(null)
    setImages(null)
    setPortfolio(null)
    setEmail(null)
    setInstagram(null)
    setProfileImagesToUpload(null)
    setImagesToUpload(null)
  }

  return (
    <form className="px-16">
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-white">
            Artists
          </h2>

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
                  value={name || ''}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
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
                  value={lastName || ''}
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
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
                  value={phone || ''}
                  onChange={(e) => setPhone(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
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
                  value={email || ''}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
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
                  value={location || ''}
                  onChange={(e) => setLocation(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
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
                  id="venue"
                  name="venue"
                  value={category || ''}
                  onChange={(e) => setCategory(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                >
                  <option></option>
                  {categoryList?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.category}
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
                Event
              </label>
              <div className="mt-2">
                <select
                  id="venue"
                  name="venue"
                  value={event || ''}
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
                  value={description || ''}
                  onChange={(e) => setDescription(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Write a few sentences about yourself.
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
                  value={portfolio || ''}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
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
                  value={instagram || ''}
                  onChange={(e) => setInstagram(e.target.value)}
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <UploadProfileWidget setProfileImagesToUpload={setProfileImagesToUpload} profileImagesToUpload={profileImagesToUpload}/>
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
  )
}
