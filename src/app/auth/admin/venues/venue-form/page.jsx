'use client'
import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { ToastContainer, toast } from 'react-toastify'
import { useLoadScript } from '@react-google-maps/api'
import 'react-toastify/dist/ReactToastify.css'
import { redirect } from 'next/navigation'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox'


export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_API_KEY,
    libraries: ['places'],
  })

  if (!isLoaded) return <div>Loading...</div>
  return <VenueForm />
}

function VenueForm() {
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [geo, setGeo] = useState(null)
  const [number, setNumber] = useState('')
  const [selected, setSelected] = useState(null)
  const [errors, setErrors] = useState({})
  const notify = () => toast('Venue Added!')
  function validateForm() {
    let errors = {}
    if (!name.trim()) {
      errors.name = 'Name is required'
    }
    if (!selected) {
      errors.selected = 'Address is required'
    }
    if (!number.trim()) {
      errors.number = 'Phone number is required'
    } else if (!/^[0-9]{10,15}$/.test(number)) {
      errors.number = 'Invalid phone number, should be 10-15 digits'
    }
    return errors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    const formErrors = validateForm()
    if (Object.keys(formErrors).length === 0) {
      setLoading(true)
      try {
        const { error } = await supabase.from('venues').insert({
          name: name,
          number: number,
          address: selected[0].formatted_address,
          geo: geo,
        })
        if (error) throw error
      } catch (error) {
        alert('Error updating the data!')
      } finally {
        setName('')
        setNumber('')
        setSelected(null)
        setGeo(null)
        notify()
        setLoading(false)
      }
    } else {
      setErrors(formErrors)
    }
  }

  return (
    <>
      <form className="px-16" onSubmit={handleSubmit}>
        <div className=" space-y-12">
          <div className="border-b border-white/10 pb-12">
            <h1 className="text-3xl font-bold leading-6 text-pink-300">
              Add a venue
            </h1>
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
                  htmlFor="phone-number"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="phone-number"
                    id="phone-number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                  {errors.number && (
                    <p className="text-sm text-red-500">{errors.number}</p>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <PlacesAutocomplete
                    setSelected={setSelected}
                    setGeo={setGeo}
                  />
                </div>
                {errors.selected && (
                  <p className="text-sm text-red-500">{errors.selected}</p>
                )}
              </div>
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

const PlacesAutocomplete = ({ setSelected, setGeo }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete()

  const handleSelect = async (address) => {
    setValue(address, false)
    clearSuggestions()

    const results = await getGeocode({ address })
    setSelected(results)
    const { lat, lng } = await getLatLng(results[0])
    setGeo({ lat, lng })
  }

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === 'OK' &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  )
}
